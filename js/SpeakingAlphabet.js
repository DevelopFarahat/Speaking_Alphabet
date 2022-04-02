const englishAudiosURL = {
  A: "audios/english/a.mp3",
  B: "audios/english/b.mp3",
  C: "audios/english/c.mp3",
  D: "audios/english/d.mp3",
  E: "audios/english/e.mp3",
  F: "audios/english/f.mp3",
  G: "audios/english/g.mp3",
  H: "audios/english/h.mp3",
  I: "audios/english/i.mp3",
  J: "audios/english/j.mp3",
  K: "audios/english/k.mp3",
  L: "audios/english/l.mp3",
  M: "audios/english/m.mp3",
  N: "audios/english/n.mp3",
  O: "audios/english/o.mp3",
  P: "audios/english/p.mp3",
  Q: "audios/english/q.mp3",
  R: "audios/english/r.mp3",
  S: "audios/english/s.mp3",
  T: "audios/english/t.mp3",
  U: "audios/english/u.mp3",
  V: "audios/english/v.mp3",
  W: "audios/english/w.mp3",
  X: "audios/english/x.mp3",
  Y: "audios/english/y.mp3",
  Z: "audios/english/z.mp3",
};
const arabicAudiosURL = {
  alif: "audios/arabic/alif.mp3",
  ba: "audios/arabic/ba.mp3",
  ta: "audios/arabic/ta.mp3",
  tha: "audios/arabic/tha.mp3",
  jiim: "audios/arabic/jiim.mp3",
  hha: "audios/arabic/hha.mp3",
  kha: "audios/arabic/kha.mp3",
  daal: "audios/arabic/daal.mp3",
  thaal: "audios/arabic/thaal.mp3",
  ra: "audios/arabic/ra.mp3",
  zay: "audios/arabic/zay.mp3",
  siin: "audios/arabic/siin.mp3",
  shiin: "audios/arabic/shiin.mp3",
  saad: "audios/arabic/saad.mp3",
  daad: "audios/arabic/daad.mp3",
  taa: "audios/arabic/taa.mp3",
  thaa: "audios/arabic/thaa.mp3",
  ayn: "audios/arabic/ayn.mp3",
  ghayn: "audios/arabic/ghayn.mp3",
  fa: "audios/arabic/fa.mp3",
  qaf: "audios/arabic/qaf.mp3",
  kaf: "audios/arabic/kaf.mp3",
  lam: "audios/arabic/lam.mp3",
  miim: "audios/arabic/miim.mp3",
  nuun: "audios/arabic/nuun.mp3",
  waw: "audios/arabic/waw.mp3",
  ha: "audios/arabic/ha.mp3",
  ya: "audios/arabic/ya.mp3",
};
let autoSpeakingMoode = false;
let row_7;
let ha;
let hamza;
let dynamic = document.getElementById("close_arabic");
let divRowSeven = document.querySelectorAll("div.seven");
let divRows = document.querySelectorAll("div.row");
let colorPickerDefulatColor = document.querySelector('input[type="color"]').value = '#000080';
let colorPicker = document.getElementById("colorPicker");
let sidenave = document.getElementById("mySidenav");
let app_body = document.querySelector('body');

function setAppBackground() {
  if (localStorage.getItem('app_background') == null) {
    app_body.classList.add('application-background');
  } else {
    app_body.style.cssText = `background-image:url(${JSON.parse(localStorage.getItem('app_background'))});background-position:center center;
    background-repeat:no-repeat;background-size:cover;`;
  }

}
setAppBackground();

function playAudios(selectorID) {
  for (key in englishAudiosURL) {
    if (selectorID.id == key) {
      audio = new Audio(englishAudiosURL[key]);
      audio.play();
    }
  }
  for (key in arabicAudiosURL) {
    if (selectorID.id == key) {
      audio = new Audio(arabicAudiosURL[key]);
      audio.play();
    }
  }
}
/* sidenave*/
let sidebar = document.getElementById("open");

function openNav() {
  if(autoSpeakingMoode == false){
  sidenave.classList.remove("sidenave-close");
  sidenave.classList.add("sidenave-open");
  }
}

sidebar.addEventListener('click', openNav);
function closeNav() {
  sidenave.classList.remove("sidenave-open");
  sidenave.classList.add("sidenave-close");
}
//dynamic.addEventListener("click", closeNav);
/* arabic letters */
let arabicLetters = [
  ["أ", "ب", "ت", "ث"],
  ["ج", "ح", "خ", "د"],
  ["ذ", "ر", "ز", "س"],
  ["ش", "ص", "ض", "ط"],
  ["ظ", "ع", "غ", "ف"],
  ["ق", "ك", "ل", "م"],
  ["ن", "و", "ه", "ى"],
];
let englishLetters = [
  ["A", "B", "C", "D"],
  ["E", "F", "G", "H"],
  ["I", "J", "K", "L"],
  ["M", "N", "O", "P"],
  ["Q", "R", "S", "T"],
  ["U", "V", "W", "X"],
  ["Y", "Z"],
];
let arabicID = [
  ["alif", "ba", "ta", "tha"],
  ["jiim", "hha", "kha", "daal"],
  ["thaal", "ra", "zay", "siin"],
  ["shiin", "saad", "daad", "taa"],
  ["thaa", "ayn", "ghayn", "fa"],
  ["qaf", "kaf", "lam", "miim"],
  ["nuun", "waw", "ha", "ya"],
];

function changeHTMLContents() {
  let element = document.querySelectorAll("div");
  let selector;
  for (let i = 0; i < element.length; i++) {
    if (element[i].className == "row") {
      for (let x = 0; x < element[i].children.length; x++) {
        for (let y = 0; y < englishLetters.length; y++) {
          if (
            element[i].children[x].firstElementChild.id == englishLetters[y][x]
          ) {
            selector = document.getElementById(
              element[i].children[x].firstElementChild.id
            );
            selector.removeAttribute("id");
            selector.firstElementChild.innerHTML = arabicLetters[y][x];
          }
        }
      }
    }
  }
  if (localStorage.getItem('app_background') == null) {
    document.body.style.cssText = `direction:rtl;`;
  } else {
    document.body.style.cssText = `direction:rtl;background-image:url(${JSON.parse(localStorage.getItem('app_background'))});background-position:center center;
    background-repeat:no-repeat;background-size:cover;`;
  }
  document.getElementById("mySidenav").style.cssText = `direction:ltr;`;
  document.getElementById("open").style.cssText =
    "align-self: flex-end;font-size:30px;cursor:pointer; padding-left:.5%; color:#000000;";
  document.getElementById("row_1").style.cssText = "clear:both";
  addHTMLClasses();
  addArabicAttribute();
  if (dynamic.id == "close_arabic") {
    createHTMLElement();
  }
  dynamic.id = "noBack";
}
dynamic.addEventListener("click", changeHTMLContents);

function addHTMLClasses() {
  for (let x = 0; x < divRows.length; x++) {
    for (let i = 0; i < divRows[x].children.length; i++) {
      divRows[x].children[i].firstElementChild.classList.add("circle-arabic");
    }
  }
}

function createHTMLElement() {
  row_7 = document.getElementById("row_7");
  /* first  added*/
  ha = document.createElement("div");
  ha.className = "col";
  let ha_circle = document.createElement("div");
  ha_circle.className += "circle circle-arabic";
  ha_circle.id = arabicID[6][2];
  let labelinsideCircleHaa = document.createElement("label");
  labelinsideCircleHaa.append("ه");
  ha_circle.append(labelinsideCircleHaa);
  ha.append(ha_circle);
  ha_circle.style.background = localStorage.getItem("color");
  ha_circle.addEventListener("click", function () {
    audio = new Audio(arabicAudiosURL["ha"]);
    audio.play();
  });
  row_7.append(ha);
  /* seconde  added*/
  hamza = document.createElement("div");
  hamza.className = "col seven";
  let hamza_circle = document.createElement("div");
  hamza_circle.className += " circle circle-arabic padd";
  hamza_circle.id = arabicID[6][3];
  hamza_circle.style.background = localStorage.getItem("color");
  hamza_circle.addEventListener("click", function () {
    audio = new Audio(arabicAudiosURL["ya"]);
    audio.play();
  });
  let labelinsideCircleYaa = document.createElement("label");
  labelinsideCircleYaa.append("ى");
  hamza_circle.append(labelinsideCircleYaa);
  hamza.append(hamza_circle);
  row_7.append(hamza);
}

function addArabicAttribute() {
  for (let x = 0; x < divRows.length; x++) {
    for (let i = 0; i < divRows[x].children.length; i++) {
      divRows[x].children[i].firstElementChild.setAttribute(
        "id",
        arabicID[x][i]
      );
    }
  }
}

function backToEnglish() {
  if (localStorage.getItem('app_background') !== null) {
    app_body.style.cssText = `background-image:url(${JSON.parse(localStorage.getItem('app_background'))});background-position:center center;
  background-repeat:no-repeat;background-size:cover;`;
  } else {
    app_body.style.cssText = `direction:ltr;`;
  }
  document.getElementById("open").style.cssText =
    "align-self: flex-start;font-size:30px;cursor:pointer; padding-left:.5%; color:#000000;";
  row_7.removeChild(ha);
  row_7.removeChild(hamza);
  for (let x = 0; x < divRows.length; x++) {
    for (let i = 0; i < divRows[x].children.length; i++) {
      divRows[x].children[i].firstElementChild.setAttribute(
        "id",
        englishLetters[x][i]
      );
      divRows[x].children[i].firstElementChild.firstElementChild.innerHTML =
        englishLetters[x][i];
      divRows[x].children[i].firstElementChild.classList.remove(
        "circle-arabic"
      );
    }
  }
  dynamic.id = "close_arabic";
}
let rondomHoverArr = ['#FF0000','#000099','#FFCC00'];
function setColorForEnglishCircle() {
  let rondomHoverableColor = rondomHoverArr[Math.floor(Math.random() * rondomHoverArr.length)];
    for (let x = 0; x < divRows.length; x++) {
      for (let i = 0; i < divRows[x].children.length; i++) {
        divRows[x].children[i].firstElementChild.classList.add("circle-color");
        divRows[x].children[i].firstElementChild.addEventListener('mouseenter',function(){
          if(localStorage.getItem('color') == '#FF0000' || localStorage.getItem('color') == '#000099' || localStorage.getItem('color') == '#FFCC00'){
            divRows[x].children[i].firstElementChild.style.color = rondomHoverableColor;
          }else{
            divRows[x].children[i].firstElementChild.style.color = rondomHoverableColor;
          }
        });
        divRows[x].children[i].firstElementChild.addEventListener('mouseout',function(){
          divRows[x].children[i].firstElementChild.style.color = '#FFFFFF';
        });
      }
    }
}
setColorForEnglishCircle();
let colorChoosed;
let option2 = document.getElementById("englishBack");
option2.addEventListener("click", backToEnglish);
let btnChangeColor = document.getElementById("button");

function applaySelectedColor() {

  for (let x = 0; x < divRows.length; x++) {
    for (let i = 0; i < divRows[x].children.length; i++) {
      divRows[x].children[i].firstElementChild.style["background-color"] = localStorage.getItem("color");
    }
  }
  colorPicker.value = localStorage.getItem('color');
}
applaySelectedColor();

function selectColor() {
  localStorage.setItem("color", colorPicker.value);
  applaySelectedColor();
}
colorPicker.addEventListener("input", selectColor);


let openFile = function (file) {
  let input = file.target;
  let reader = new FileReader();
  reader.onload = function () {
    let dataURL = reader.result;
    localStorage.setItem('app_background', JSON.stringify(dataURL));
    app_body.style.cssText = `background-image:url(${JSON.parse(localStorage.getItem('app_background'))})`;
  };
  reader.readAsDataURL(input.files[0]);
  app_body.classList.remove('app_background');
};
let shuffleIcon = document.querySelector('.shuffle-color-img-icon');
shuffleIcon.addEventListener('click', function () {
  shuffleIcon.classList.add('rotate-shuffle-icon');
  let rondomColorArr = ['#FFC56C', '#ffb6b9', '#000099', '#17223b', '#f6003c', '#ffb549', '#08ffc8', '#200A3E', '#E8222D',
    '#121b74', '#08182b', '#ffb6b9', '#443266', '#FA0026', '#38925E', '#34314c', '#003a44', '#e6542b', '#0C182D', '#0080ff'
  ];
  let rondomColor = rondomColorArr[Math.floor(Math.random() * rondomColorArr.length)];
  if (localStorage.getItem('color') !== null) {
    localStorage.setItem('color', rondomColor);
  }
  setTimeout(function () {
    shuffleIcon.classList.remove('rotate-shuffle-icon');
    if (shuffleIcon.classList.contains('rotate-shuffle-icon') == false) {
      applaySelectedColor();
    }
  }, 1000);
  
});
let switch_button = document.querySelector('.switch');
let auto_speak_switch_road = document.querySelector('.switch-road');
let auto_speak_switch_container = document.querySelector('.auto-speak-switch-container');
let moodeStatus = document.getElementById('moode-status');
let audiosUrl_en_Array_model = Object.values(englishAudiosURL);
let audiosUrl_ar_array_model = Object.values(arabicAudiosURL);
switch_button.addEventListener('click', function () {
  autoSpeakingMoode = true;
  if (auto_speak_switch_road.getAttribute('auto-mood') == 'off') {
    auto_speak_switch_road.style.cssText = `justify-content:flex-end; transition:all 1s ease-in-out;`;
    auto_speak_switch_road.setAttribute('auto-mood', 'on');
    moodeStatus.innerHTML = 'ON';
    moodeStatus.style.cssText = `margin-left: 8%;`;
    auto_speak_switch_container.style.cssText = `background-color: #009A31; transition:all 1s ease-in-out;`;
    playAutoMood();
    setTimeout(()=>{
      closeNav();
    },100);
    sidebar.style.cssText = `font-size:30px;color:#000000; align-self: flex-start; padding-left: .5%;cursor:not-allowed;`;
  } else {
    autoSpeakingMoode = false;
    auto_speak_switch_road.style.cssText = `justify-content:flex-start; transition:all 1s ease-in-out;`;
    auto_speak_switch_road.setAttribute('auto-mood', 'off');
    moodeStatus.innerHTML = 'OFF';
    moodeStatus.style.cssText = `margin-left: 65%;`
    auto_speak_switch_container.style.cssText = `background-color:#000000; transition:all 1s ease-in-out;`;
    clearInterval(audiosAutoSpeaking);
    sidebar.style.cssText = `font-size:30px;color:#000000; align-self: flex-start; padding-left: .5%;cursor:pointer;`;
  }

});

function playAutoMood(arrayModel, objectModel) {
  if (dynamic.id === "close_arabic") {
    arrayModel = audiosUrl_en_Array_model;
    objectModel = englishAudiosURL;
  } else {
    console.log('arabic');
    arrayModel = audiosUrl_ar_array_model;
    objectModel = arabicAudiosURL;
  }
  let elementNumber = 0;
  audiosAutoSpeaking = setInterval(() => {
    for (var index = elementNumber; index <= elementNumber; index++) {
      for (key in objectModel) {
        if (objectModel[key] == arrayModel[index]) {
          document.getElementById(key).style['background-color'] = 'rgba(247,33,0,1)';
        }
      }
      audio = new Audio(arrayModel[index]);
      audio.play();
      setTimeout(() => {
        applaySelectedColor();
      }, 100);

    }
    elementNumber++;
    if (elementNumber == arrayModel.length) {
      auto_speak_switch_road.style.cssText = `justify-content:flex-start; transition:all 1s ease-in-out;`;
      auto_speak_switch_road.setAttribute('auto-mood', 'off');
      moodeStatus.innerHTML = 'OFF';
      moodeStatus.style.cssText = `margin-left: 65%;`
      auto_speak_switch_container.style.cssText = `background-color:#000000; transition:all 1s ease-in-out;`;
      autoSpeakingMoode = false;
      clearInterval(audiosAutoSpeaking);
    }
  }, 1000);
}