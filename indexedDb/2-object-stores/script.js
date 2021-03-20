window.onload = function () {
  var dbName = "testdb";
  var dbVersion = 5;

  var dbRequest = indexedDB.open(dbName, dbVersion);

  dbRequest.onupgradeneeded = function (event) {
    console.log("Upgrade Needed");
    var db = event.target.result;

    // db.createObjectStore(storeName, options);
    // Primary Key

    db.createObjectStore("books", { keyPath: "id", autoIncrement: true });
  };
};
