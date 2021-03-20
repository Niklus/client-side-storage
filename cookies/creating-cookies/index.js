window.addEventListener("load", () => {
  // Key Value
  const keyValue = "login=we838hdw7";

  //Expiration
  const now = new Date();
  now.setTime(now.getTime() + 24 * 60 * 60 * 1000);

  const expires = `expires=${now.toUTCString()}`;

  //Cookie String
  const cookie = keyValue + ";" + expires;

  // Create cookie
  document.cookie = cookie;
});
