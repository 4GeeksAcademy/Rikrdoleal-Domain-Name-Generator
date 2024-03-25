/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here

  let pronoun = ["the", "my"];
  let adjective = ["awesome", "big", "secret", "smart"];
  let noun = ["page", "space", "blog", "post"];
  let extension = [".net", ".com", ".es", ".ve"];
  let domainName = [];
  let ramdonDomain;

  function getRandomName(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function generateDomainName() {
    let arrays = [pronoun, adjective, noun, extension];
    for (let i = 0; i < arrays.length; i++) {
      domainName.push(getRandomName(arrays[i]));
    }
    ramdonDomain = domainName.join("");
    return ramdonDomain;
  }
  console.log(generateDomainName());
  document.getElementById("domain").innerHTML = ramdonDomain;
};
