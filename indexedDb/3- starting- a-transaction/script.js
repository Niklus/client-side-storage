window.onload = function () {
  var dbName = "testdb";
  var dbVersion = 5;

  var dbRequest = indexedDB.open(dbName, dbVersion);

  dbRequest.onsuccess = function (event) {
    console.log("Success");

    // Handling Database
    var db = event.target.result;

    // Creating Transaction
    // db.transaction(storeName(s), mode)
    // storeNames -> "storeName" or ["storeName1", "storeName2"]
    // mode -> "readonly" or "readwrite" or "versionchange"

    var trans = db.transaction("books", "readwrite");

    // Handling Object Store
    var store = trans.objectStore("books");

    store.add({ id: 5, name: "test" });

    console.log(store);
  };
};
