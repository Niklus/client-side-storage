/**
 * Session storage has the same API
 * to local storage only that it
 * doesn't persist when you close the tab
 */

window.addEventListener("load", () => {
  // ---Storing Data---

  // sessionStorage.setItem(key, value);
  sessionStorage.setItem("myKey1", "myValue1");

  // sessionStorage.key = vlaue;
  sessionStorage.myKey2 = "myValue2";

  // sessionStorage[key] = value;
  sessionStorage["myKey3"] = "myValue3";

  // ---Retrieving Data---

  // sessionStorage.getItem(key);
  console.log(sessionStorage.getItem("myKey3"));

  // sessionStorage.key
  console.log(sessionStorage.myKey2);

  // sessionStorage[key]
  console.log(sessionStorage["myKey1"]);

  // ---Removing Data---

  // sessionStorage.removeItem(key);
  sessionStorage.removeItem("myKey3");

  // clear all data sessionStorage.clear();
  // sessionStorage.clear();

  // ---More---
  // sessionStorage.length
  console.log(sessionStorage.length);

  // key at a specified index
  console.log(sessionStorage.key(0));
});
