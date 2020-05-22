///**local storage and session storage */
/**access is the same the difference is that
 * session storage deletes as soon as you refresh
 * or close the page
 */

const storeButton = document.getElementById("store-btn");
const retrieveButton = document.getElementById("retrieve-btn");

const uid = "12345";

const user = {
  id: uuid,
  name: "Omar",
  lastName: "Vega",
  email: "omarvega@hotmail.com",
};
// console.log(JSON.stringify(user));
storeLocalStorageButton = () => {
  // const userInfo = {
  //   id: JSON.stringify(user.id),
  //   name: JSON.stringify(user.name),
  //   lastName: JSON.stringify(user.lastName),
  //   email: JSON.stringify(user.email),
  // };
  console.log(userInfo.id);
  localStorage.setItem("id", userInfo.id);
  localStorage.setItem("id", user.id);
};

retrieveStorageButton = () => {
  const extractedId = localStorage.getItem("id");

  // if (extractedId) {
  //   console.log(`I got this id ${extractedId}`);
  // } else {
  //   console.log("you ain't got shit fool");
  // }
  extractedId
    ? console.log(`I got this id ${extractedId}`)
    : console.log("you ain't got shit fool");
};

storeButton.addEventListener("click", storeLocalStorageButton);
retrieveButton.addEventListener("click", retrieveStorageButton);
