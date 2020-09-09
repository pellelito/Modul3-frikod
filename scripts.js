/* * 
Author: Pelle Löfstrand
Assingtment in Javaclass sept 2020

navigator objektet. 
   - Skapa 3 knappar som gör vardera:
      - Skriver ut appName
      - Skriver ut geolocation (longitude och latitude)
      - Skriver ut texten som finns i clipboard (alltså det som finns där i när du gjort Ctrl-c / Command-c)
      
* Skapa en funktion som returnerar ett Promise som både resolvar och rejectar.
 - Kör din Promise-funktion med async/await och skriv ut vad den resolvar. 
 - Kör din Promise-funktion när den resolvar och skriv ut på sajten mha .then()
 - Kör din Promise-funktion när den rejectar och skriv ut på sajten mha .catch()

* Prettier för att autoformattera koden.
* Ingenting får skrivas ut i konsolen!
* Använd beskrivande variabel- och funktionsnamn. */

//Writes appname
document
  .querySelector(".app")
  .addEventListener(
    "click",
    () => (document.querySelector(".output").innerHTML = navigator.appName)
  );

//writes geolocation
function showPosition(position) {
  document.querySelector(".output").innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}

document.querySelector(".geo").addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.querySelector(".output").innerHTML.innerHTML =
      "Geolocation is not supported by this browser.";
  }
});

//writes what's in clipboard
document.querySelector(".clip").addEventListener("click", () => {
  navigator.clipboard
    .readText()
    .then(
      (clipText) => (document.querySelector(".output").innerHTML = clipText)
    );
});
