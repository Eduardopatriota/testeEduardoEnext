//const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';

const select = document.querySelector('.lista-racas');

fetch('https://dog.ceo/api/breeds/list/all')
  .then(res => {
    return res.json();
  })
  .then(data => {
    const breedsObject = data.message;
    const breedsArray = Object.keys(breedsObject);
    for (let i = 0; i < breedsArray.length; i++) {
      const option = document.createElement('option');
      option.value = breedsArray[i];
      option.innerText = breedsArray[i];
      select.appendChild(option);
    }
    //console.log(breedsArray);
  });

select.addEventListener('change', event => {
  let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;
  getDoggo(url);
  console.log(event.target.value)
  document.getElementById("dog-name").innerHTML = (event.target.value);
});

const img = document.querySelector('.dog-img');

const getDoggo = url => {
  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      img.src = data.message;
    });
};


//localstorage COR
document.getElementById('cores-fonte').value = localStorage.corStore;
window.onload = updateCor;

//troca da cor da fonte
function updateCor() {
  var selectCor = document.getElementById('cores-fonte');
  var valorCor = selectCor.options[selectCor.selectedIndex].value;
  
  
  if (valorCor === "1") {
    document.getElementById("dog-name").style.color = "black";
  }
  else if (valorCor === "2") {
    document.getElementById("dog-name").style.color = "#00bdab";
  }
  else if (valorCor === "3") {
    document.getElementById("dog-name").style.color = "#f3f021";
  }
  else if (valorCor === "4") {
    document.getElementById("dog-name").style.color = "blue";
  }
  else {
    document.getElementById("dog-name").style.color = "red";
  }
  
  let button = document.querySelector('button');
  button.onclick = function () {
    localStorage.setItem('corStore', valorCor);
    alert("dados salvos da cor")
  }
}

//localstorage FONTE
document.getElementById("tipo-fonte").value = localStorage.fonteStore;
//window.onload = updateFonte;

//troca do tipo de fonte
function updateFonte() {
  var selectFonte = document.getElementById('tipo-fonte');
  var valorFonte = selectFonte.options[selectFonte.selectedIndex].value;

  if (valorFonte === "6") {
    document.getElementById("dog-name").style.fontFamily = 'Dancing Script';
  }
  else if (valorFonte === "7") {
    document.getElementById("dog-name").style.fontFamily = 'Modak';
  }
  else if (valorFonte === "8") {
    document.getElementById("dog-name").style.fontFamily = 'Oswald';
  }
  else if (valorFonte === "9") {
    document.getElementById("dog-name").style.fontFamily = 'Ranchers';
  }
  else {
    document.getElementById("dog-name").style.fontFamily = 'Rowdies';
  }
  //salvar dado pelo botão
  let button2 = document.querySelector('.button2');
  button2.onclick = function () {
    localStorage.setItem('fonteStore', valorFonte);
    alert("dados salvos da fonte")

  }
}


updateFonte ()





