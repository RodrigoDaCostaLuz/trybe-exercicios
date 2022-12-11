// requisito 1
const changeText = () => {
  let paragraph = document.getElementsByTagName("p")[1];
  paragraph.innerHTML = "escrever frase aqui";
};
changeText();
// requisito 2
const changeColorSquareYellow = () => {
  let suqareYellow = document.getElementsByClassName("main-content ")[0];
  suqareYellow.style.backgroundColor = "rgb(76,164,109)";
};
changeColorSquareYellow();
// requisito 3
const changeColorSquareRed = () => {
  let suqareYellow = document.getElementsByClassName("center-content")[0];
  suqareYellow.style.backgroundColor = "white";
};
changeColorSquareRed();
// requisito 4
const correctTextH1 = () => {
  let textH1 = document.getElementsByTagName("h1")[0];
  textH1.innerHTML = "Desafio - Javascript";
};
correctTextH1();
