window.addEventListener("load", () => {
  for (let i = 1; i <= 5; i++) {
    // Key Value
    const keyValue = "cookie_name" + i + "=cookie value";

    //Expiration
    const now = new Date();
    now.setTime(now.getTime() + 24 * 60 * 60 * 1000);

    const expires = `expires=${now.toUTCString()}`;

    //Cookie String
    const cookieStr = keyValue + ";" + expires;

    // Create cookie
    document.cookie = cookieStr;
  }
});

const cookieList = document.cookie.split(";").map((cookie) => cookie.trim());

console.log(cookieList);

const obj = {};

for (let i = 0; i < cookieList.length; i++) {
  let cookie = cookieList[i].split("=");
  const key = cookie[0];
  const value = cookie[1];
  obj[key] = value;
}

console.log(obj);
