///**cookies */
const storeButton = document.getElementById("store-btn");
const retrieveButton = document.getElementById("retrieve-btn");

storeLocalStorageButton = () => {
  const userId = "123456";
  const user = {
    name: "Omar",
    lastName: "Vega",
  };
  document.cookie = `id=${userId}; max-age=2`; // to set age on cookie is in seconds
  document.cookie = `user=${JSON.stringify(user)}`;
};

retrieveStorageButton = () => {
  const cookies = document.cookie.split(";");
  // console.log(cookie);
  const data = cookies.map((cookie) => {
    return cookie.trim();
  });
  console.log(data);
  // data.split("=");
  // console.log(data[1].split("=")[1]);
};

storeButton.addEventListener("click", storeLocalStorageButton);
retrieveButton.addEventListener("click", retrieveStorageButton);
