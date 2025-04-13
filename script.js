let output = document.querySelector("#output");

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([1, 2, 3, 4]);
  }, 3000);
});

promise
  .then(arr => {
    let evenNum = arr.filter(num => num % 2 === 0);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(evenNum);
      }, 1000);
    });
  })
  .then(filteredArr => {
    output.textContent = filteredArr.join(",");
    let doubled = filteredArr.map(num => num * 2);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(doubled);
      }, 2000);
    });
  })
  .then(finalArr => {
    output.textContent = finalArr.join(",");
  })
  .catch(err => {
    console.log(err);
    output.textContent = "Error: " + err;
  });
