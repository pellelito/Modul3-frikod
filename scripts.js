/* * 
Author: Pelle Löfstrand
Assingtment in Javaclass sept 2020
*/

(function () {
  //Writes appname
  document
    .querySelector("#app")
    .addEventListener(
      "click",
      () => (document.querySelector(".output").innerHTML = navigator.appName)
    );

  //writes geolocation
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

  //writes what's in clipboard
  document.querySelector("#clip").addEventListener("click", () => {
    navigator.clipboard
      .readText()
      .then(
        (clipText) => (document.querySelector(".output").innerHTML = clipText)
      );
  });

  /* Skapa en funktion som returnerar ett Promise som både resolvar och rejectar.
 - Kör din Promise-funktion med async/await och skriv ut vad den resolvar. 
 - Kör din Promise-funktion när den resolvar och skriv ut på sajten mha .then()
 - Kör din Promise-funktion när den rejectar och skriv ut på sajten mha .catch()
 */
})();
