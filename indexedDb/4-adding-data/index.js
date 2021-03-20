window.addEventListener("load", () => {
  const dbName = "library";
  const dbVersion = 1;
  let dbIsOpen = false;

  const dbRequest = indexedDB.open(dbName, dbVersion);

  dbRequest.onupgradeneeded = (event) => {
    const db = event.target.result;
    db.createObjectStore("books", { keyPath: "isbn" }); //isbn -> primary key
  };

  dbRequest.onsuccess = (event) => {
    console.log("db succesfuly opened");
    dbIsOpen = true;
  };

  dbRequest.onerror = (event) => {
    console.log("error");
    dbIsOpen = false;
  };

  const form = document.querySelector("form");
  const isbn = document.getElementById("isbn");
  const name = document.getElementById("name");
  const year = document.getElementById("year");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (dbIsOpen) {
      if (isbn.value && name.value && year.value) {
        const book = {
          isbn: isbn.value,
          name: name.value,
          year: year.value,
          createdAt: new Date().getTime(),
        };

        //Handling Database
        const db = dbRequest.result;

        //Create transaction
        const trxn = db.transaction("books", "readwrite");

        //Handling object store
        const store = trxn.objectStore("books");

        //Add object to Object Store
        const request = store.add(book);

        //Book is added
        request.onsuccess = () => {
          alert("Book is added");
        };

        //Book not added
        request.onerror = () => {
          alert("Book not added");
        };
      }
    } else {
      alert("There is a db problem");
    }
  });
});
