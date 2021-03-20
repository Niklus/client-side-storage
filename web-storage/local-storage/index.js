window.addEventListener("load", () => {
  // ---Storing Data---

  // localStorage.setItem(key, value);
  localStorage.setItem("myKey1", "myValue1");

  // localStorage.key = vlaue;
  localStorage.myKey2 = "myValue2";

  // localStorage[key] = value;
  localStorage["myKey3"] = "myValue3";

  // ---Retrieving Data---

  // localStorage.getItem(key);
  console.log(localStorage.getItem("myKey3"));

  // localStorage.key
  console.log(localStorage.myKey2);

  // localStorage[key]
  console.log(localStorage["myKey1"]);

  // ---Removing Data---

  // localStorage.removeItem(key);
  localStorage.removeItem("myKey3");

  // clear all data localStorage.clear();
  // localStorage.clear();

  // ---More---
  // localStorage.length
  console.log(localStorage.length);

  // key at a specified index
  console.log(localStorage.key(0));
});
