window.onload = function () {
  var person = {
    name: "Nicholas",
    lastname: "Otieno",
    country: "KE",
  };

  // JSON.stringify() -> serialize the object into string

  localStorage.setItem("alperen", JSON.stringify(person));

  var persons = [person, person, person, person, person];

  localStorage.setItem("persons", JSON.stringify(persons));

  var alperenStr = localStorage.getItem("alperen");

  console.log(JSON.parse(alperenStr));

  var personsStr = localStorage.getItem("persons");

  console.log(JSON.parse(personsStr));
};
