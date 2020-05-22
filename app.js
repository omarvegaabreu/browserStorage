//indexDB
///**cookies */
const storeButton = document.getElementById("store-btn");

const retrieveButton = document.getElementById("retrieve-btn");

const dbRequest = indexedDB.open("StorageDummy", 1);

dbRequest.upgradeneeded = (event) => {
  const db = event.target.result;

  const objectStore = db.createObjectStore("products", { keyPath: "id" });

  const productStore = db
    .transaction("products", "readwrite")
    .objectStore("products");

  objectStore.transaction.oncomplete = (event) => {
    productStore.add({
      id: "p1",
      name: "my product",
      price: 12.99,
    });
  };
};

dbRequest.onerror = (error) => {
  console.log("this is an error" + error);
};

storeLocalStorageButton = () => {};

retrieveStorageButton = () => {};

storeButton.addEventListener("click", storeLocalStorageButton);
retrieveButton.addEventListener("click", retrieveStorageButton);
