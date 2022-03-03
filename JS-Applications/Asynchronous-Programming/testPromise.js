let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("Positive !");
    } else {
      reject("Negative !");
    }
  }, 2000);
});
console.log(promise);
promise.then((result) => {
  console.log(result);
});
promise.catch((result) => {
  console.log(result);
});
