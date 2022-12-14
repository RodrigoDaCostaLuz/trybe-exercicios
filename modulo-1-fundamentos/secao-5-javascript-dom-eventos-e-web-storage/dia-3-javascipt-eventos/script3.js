const createDaysOfTheWeek = () => {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
let listaDiasDezembro = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const geraDiasDoMes = () => {
  const listaDias = document.getElementById("days");

  for (let index = 0; index < listaDiasDezembro.length; index += 1) {
    let day = listaDiasDezembro[index];
    let geraDaysLi = document.createElement("li");
    geraDaysLi.innerHTML = day;

    if (day === 24 || day === 31) {
      geraDaysLi.className = "day holiday";
      listaDias.appendChild(geraDaysLi)
    } else if (day === 4 || day === 11 || day === 18) {
      geraDaysLi.className = 'day friday'; 
      listaDias.appendChild(geraDaysLi);
    } else if (day === 25) {
      geraDaysLi.className = 'day holiday friday'; 
      listaDias.appendChild(geraDaysLi);
    } else {
      geraDaysLi.className = 'day'; 
      listaDias.appendChild(geraDaysLi);
    }
  }
};

geraDiasDoMes();
