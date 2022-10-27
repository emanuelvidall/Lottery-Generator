
const fillSquarespy = async () => {
    const response = await axios.get(
      "https://www.random.org/integers/?num=6&min=1&max=60&col=1&base=10&format=plain&rnd=new&unique=on"
    );
    const rndorg = response.data.split("\n");
    rndorg.pop();
    console.log(rndorg);
    document.getElementById("first__numberpy").innerHTML = rndorg[0];
    document.getElementById("second__numberpy").innerHTML = rndorg[1];
    document.getElementById("third__numberpy").innerHTML = rndorg[2];
    document.getElementById("fourth__numberpy").innerHTML = rndorg[3];
    document.getElementById("fifth__numberpy").innerHTML = rndorg[4];
    document.getElementById("sixth__numberpy").innerHTML = rndorg[5];
    }

let lotter = [];
//solução mais elegante
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
    // Maximo exclusivo e minimo incluso;
}
//fill array and Dom Squares (6 numbers)
function fillSquares(){
    lotter = [];
    for (let i = 0; i < 6; i++){
        lotter.push(getRandomInt(1, 61));
    }
    document.getElementById("first__number").innerHTML = lotter[0];
    document.getElementById("second__number").innerHTML = lotter[1];
    document.getElementById("third__number").innerHTML = lotter[2];
    document.getElementById("fourth__number").innerHTML = lotter[3];
    document.getElementById("fifth__number").innerHTML = lotter[4];
    document.getElementById("sixth__number").innerHTML = lotter[5];
    console.log("base lotter array")
    console.log(lotter);
}

function drawChart(){
    var arraySixty = [];
    let matchCharacter = document.getElementById("characterField").value;
    for (let j = 0; j < 60; j++){
        arraySixty.push(j+1);
    }
    console.log("arraySixty");
    console.log(arraySixty);
    var arrayTest = [];
    for (let i = 0; i < matchCharacter; i++){
        arrayTest.push(getRandomInt(1, 61));
    }
    console.log("arrayTest")
    console.log(arrayTest)

    const counts = {};

    for (const num of arrayTest) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    console.log("counts");
    console.log(counts);

    console.log(Object.keys(counts));
    console.log(Object.values(counts));
    // const arrOfStr = ['1', '2', '3'];

    // const arrOfNum = arrOfStr.map(str => {
    //   return Number(str);
    // });

    // // 👇️ [1, 2, 3]
    // console.log(arrOfNum);

      Highcharts.chart('chartArea', {
  chart: {
    type: 'column'
  },
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: Object.entries(counts),
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: ''
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:15px">Número: {point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0"> Quantidade: </td>' +
      '<td style="padding:0"><b>{point.y}</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0,
      borderWidth: 0,
      groupPadding: 0,
      shadow: false
    }
  },
  series: [{
    name: 'Data',
    data: Object.entries(counts)

  }]
  });
}

// function alterar(){
//   let matchCharacter = document.getElementById("characterField").value;
//   console.log(matchCharacter);
// }

document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });
});
