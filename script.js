window.promises = [];
// Array of promises with random times between 1 and 5 seconds
var promises = Array.from({ length: 5 }, () => {
  var randomTime = Math.floor(Math.random() * 5) + 1;
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(randomTime);
    }, randomTime * 1000);
  });
});

// Using Promise.any() to wait for the first promise to resolve
Promise.any(promises)
  .then(result => {
    var outputDiv = document.getElementById("output");
    outputDiv.innerText = result;
  })
  .catch(error => {
    console.log(error);
  });

