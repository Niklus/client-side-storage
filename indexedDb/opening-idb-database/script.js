window.onload = function () {
  // indexedDB.open(dbName, dbVersion)

  var dbName = "testdb";
  var dbVersion = 3;

  var dbRequest = indexedDB.open(dbName, dbVersion);

  dbRequest.onupgradeneeded = function (event) {
    console.log("Upgrade needed");
  };

  dbRequest.onerror = function (event) {
    console.log("Error!");
    console.log(event.target.errorCode);
  };

  dbRequest.onsuccess = function (event) {
    console.log("Success");
    console.log(event.target.result);
  };

  dbRequest.onblocked = function (event) {
    console.log("Blocked");
  };
};
