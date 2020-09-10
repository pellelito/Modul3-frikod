/* * 
Author: Pelle Löfstrand
Assingtment in Javaclass sept 2020
*/

(function () {
  // writes appname
  document
    .querySelector("#app")
    .addEventListener(
      "click",
      () => (document.querySelector(".output").innerHTML = navigator.appName)
    );

  // writes geolocation
  function geoPos(position) {
    document.querySelector(".output").innerHTML =
      "Latitude: " +
      position.coords.latitude +
      "<br>Longitude: " +
      position.coords.longitude;
  }

  document.querySelector("#geo").addEventListener("click", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(geoPos);
    } else {
      document.querySelector(".output").innerHTML.innerHTML =
        "Get an updated browser that supports this shit!.";
    }
  });

  // writes what's in clipboard
  document.querySelector("#clip").addEventListener("click", () => {
    navigator.clipboard
      .readText()
      .then(
        (clipText) => (document.querySelector(".output").innerHTML = clipText)
      );
  });

  // promise
  let promise = null;
  let isDanielHappy = null;

  function willShowPromise() {
    return new Promise((resolve, reject) => {
      if (isDanielHappy) {
        let answer = "Your function was fulfilled.";
        resolve(answer); //fulfilled
      } else {
        let reason = new Error("Your function was rejected.");
        reject(reason); // reject
      }
    });
  }

  // async function
  async function asyncFunction() {
    isDanielHappy = confirm("Should function work?");
    try {
      promise = await willShowPromise();
      document.querySelector(".output").innerHTML = promise;
    } catch (err) {
      document.querySelector(".output").innerHTML = err.message;
    }
  }

  // uses then & catch error
  let getPromise = function () {
    promise
      .then(function (fulfilled) {
        document.querySelector(".output").innerHTML = fulfilled;
      })
      .catch(function (error) {
        document.querySelector(".output").innerHTML = error.message;
      });
  };

  // let user choose if work or not
  // async/await
  document.querySelector("#function").addEventListener("click", () => {
    asyncFunction();
  });

  // will show resolved answer
  document.querySelector("#then").addEventListener("click", () => {
    isDanielHappy = true;
    promise = willShowPromise();
    getPromise();
  });

  // wills show rejected answer
  document.querySelector("#catch").addEventListener("click", () => {
    isDanielHappy = false;
    promise = willShowPromise();
    getPromise();
  });
})();
