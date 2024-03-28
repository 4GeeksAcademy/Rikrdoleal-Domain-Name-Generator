/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here

  let pronoun = ["the", "my", "your"];
  let adjective = ["awesome", "big", "secret", "smart"];
  let noun = ["page", "space", "blog", "post"];
  let extension = [".net", ".com", ".es", ".ve"];
  let result;
  let randomDomain = [];

  function getRandomName() {
    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adjective.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          for (let l = 0; l < extension.length; l++) {
            result = `${pronoun[i]}${adjective[j]}${noun[k]}${extension[l]}`;
            randomDomain.push(result);
            console.log("www." + result);
            // document.getElementById("domain").innerHTML = "www." + result;
          }
        }
      }
    }
  }
  getRandomName();

  let printRandomDomain = () => {
    let randomNumber = Math.floor(Math.random() * result.length * 10);
    return randomDomain[randomNumber];
  };
  //La finalidad de este boton es mostrar en pantalla de forma aleatoria una de las posibles combinaciones de dominio
  //que se han impreso en la consola
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#domain").innerHTML = "www." + printRandomDomain();
  });
  document.getElementById("domain").innerHTML = "www." + printRandomDomain();
};
