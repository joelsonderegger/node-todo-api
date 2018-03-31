let myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve("Successssss!");
    }, 1000);
});

myFirstPromise.then((successMessage) => {
    console.log("Yay! " + successMessage);
});