// Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;
const elementoH1 = document.createElement("h1");
elementoH1.innerHTML = "Trybe - Agência de Viagens";
document.body.appendChild(elementoH1);
// Adicione a tag main com a classe main-content como filho da tag body;
const elementoMain = document.createElement("main");
elementoMain.className = "main-content";
document.body.appendChild(elementoMain);
// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const elementoSectioncenterCont = document.createElement("section");
elementoSectioncenterCont.className = "center-content";
elementoMain.appendChild(elementoSectioncenterCont);
// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const elementoP = document.createElement("p");
elementoSectioncenterCont.appendChild(elementoP);
elementoP.innerText = "xablaus!";
// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const elementoSectionLeftCont = document.createElement("section");
elementoSectionLeftCont.className = "left-content";
elementoMain.appendChild(elementoSectionLeftCont);
// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const elementoSectionRightCont = document.createElement("section");
elementoSectionRightCont.className = "right-content";
elementoMain.appendChild(elementoSectionRightCont);
// Adicione uma imagem com src configurado para o valor https://picsum.photos/200
// e classe small-image.
// Esse elemento deve ser filho do section criado no passo 5;
const elementoimg = document.createElement("img");
elementoimg.className = "smal-image";
elementoimg.src = "https://picsum.photos/200";
elementoSectionLeftCont.appendChild(elementoimg);
// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, 
// … como valores da lista. 
// Essa lista deve ser filha do section criado no passo 6;
const elementUl = document.createElement('ul');
elementoSectionRightCont.appendChild(elementUl);
const arrayNumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
  'Sete', 'Oito', 'Nove', 'Dez']
for (let num in arrayNumbers) {
  const elementLi = document.createElement('li');
  elementLi.innerHTML = arrayNumbers[num];
  elementUl.appendChild(elementLi);
};
for (let index = 1; index <= 3; index += 1) {
    const elementH3 = document.createElement('h3');
    elementH3.innerHTML = 'Show ' + index;
    elementoMain.appendChild(elementH3);
  };

