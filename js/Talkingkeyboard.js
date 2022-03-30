const englishAudiosURL = {
  A: "../audios/english/a.mp3",
  B: "../audios/english/b.mp3",
  C: "../audios/english/c.mp3",
  D: "../audios/english/d.mp3",
  E: "../audios/english/e.mp3",
  F: "../audios/english/f.mp3",
  G: "../audios/english/g.mp3",
  H: "../audios/english/h.mp3",
  I: "../audios/english/i.mp3",
  J: "../audios/english/j.mp3",
  K: "../audios/english/k.mp3",
  L: "../audios/english/l.mp3",
  M: "../audios/english/m.mp3",
  N: "../audios/english/n.mp3",
  O: "../audios/english/o.mp3",
  P: "../audios/english/p.mp3",
  Q: "../audios/english/q.mp3",
  R: "../audios/english/r.mp3",
  S: "../audios/english/s.mp3",
  T: "../audios/english/t.mp3",
  U: "../audios/english/u.mp3",
  V: "../audios/english/v.mp3",
  W: "../audios/english/w.mp3",
  X: "../audios/english/x.mp3",
  Y: "../audios/english/y.mp3",
  Z: "../audios/english/z.mp3",
};
const arabicAudiosURL = {
  alif: "../audios/arabic/alif.mp3",
  ba: "../audios/arabic/ba.mp3",
  ta: "../audios/arabic/ta.mp3",
  tha: "../audios/arabic/tha.mp3",
  jiim: "../audios/arabic/jiim.mp3",
  hha: "../audios/arabic/hha.mp3",
  kha: "../audios/arabic/kha.mp3",
  daal: "../audios/arabic/daal.mp3",
  thaal: "../audios/arabic/thaal.mp3",
  ra: "../audios/arabic/ra.mp3",
  zay: "../audios/arabic/zay.mp3",
  siin: "../audios/arabic/siin.mp3",
  shiin: "../audios/arabic/shiin.mp3",
  saad: "../audios/arabic/saad.mp3",
  daad: "../audios/arabic/daad.mp3",
  taa: "../audios/arabic/taa.mp3",
  thaa: "../audios/arabic/thaa.mp3",
  ayn: "../audios/arabic/ayn.mp3",
  ghayn: "../audios/arabic/ghayn.mp3",
  fa: "../audios/arabic/fa.mp3",
  qaf: "../audios/arabic/qaf.mp3",
  kaf: "../audios/arabic/kaf.mp3",
  lam: "../audios/arabic/lam.mp3",
  miim: "../audios/arabic/miim.mp3",
  nuun: "../audios/arabic/nuun.mp3",
  waw: "../audios/arabic/waw.mp3",
  ha: "../audios/arabic/ha.mp3",
  ya: "../audios/arabic/ya.mp3",
};
let row_7;
let ha;
let hamza;
let dynamic = document.getElementById("close_arabic");
let divRowSeven = document.querySelectorAll("div.seven");
let divRows = document.querySelectorAll("div.row");
let colorPickerDefulatColor = document.querySelector('input[type="color"]').value = '#000080';
let colorPicker = document.getElementById("colorPicker");
let sidenave = document.getElementById("mySidenav");
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
  sidenave.classList.remove("sidenave-close");
  sidenave.classList.add("sidenave-open");
  /*sidenave.style.borderColor = JSON.parse(localStorage.getItem("color"));*/
}
sidebar.addEventListener('click',openNav);
function closeNav() {
  sidenave.classList.remove("sidenave-open");
  sidenave.classList.add("sidenave-close");
}
dynamic.addEventListener("click", closeNav);
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
  document.body.style = "direction:rtl;";
  document.getElementById("mySidenav").style.cssText = "direction:ltr";
  document.getElementById("open").style.cssText =
    "align-self: flex-end;font-size:30px;cursor:pointer; color:#000000;";
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
  ha_circle.id = arabicID[6][1];
  let labelinsideCircleHaa = document.createElement("label");
  labelinsideCircleHaa.append("ه");
  ha_circle.append(labelinsideCircleHaa);
  ha.append(ha_circle);
  ha_circle.style.background = JSON.parse(localStorage.getItem("color"));
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
  hamza_circle.id = arabicID[6][0];
  hamza_circle.style.background = JSON.parse(localStorage.getItem("color"));
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
  
document.body.style = "direction:ltr;";
document.getElementById("open").style.cssText =
"align-self: flex-start;font-size:30px;cursor:pointer; color:#000000;";
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
function setColorForEnglishCircle() {
  for (let x = 0; x < divRows.length; x++) {
    for (let i = 0; i < divRows[x].children.length; i++) {
      divRows[x].children[i].firstElementChild.classList.add("circle-color");
    }
  }
}
setColorForEnglishCircle();
let colorChoosed;
let option2 = document.getElementById("englishBack");
option2.addEventListener("click", backToEnglish);
option2.addEventListener("click", closeNav);
let Btn = document.getElementById("button");
let btnChangeColor = document.getElementById("button");
//localStorage.setItem('color',JSON.stringify('#000080'));
function applaySelectedColor() {
  for (let x = 0; x < divRows.length; x++) {
    for (let i = 0; i < divRows[x].children.length; i++) {
      divRows[x].children[i].firstElementChild.style["background-color"] =JSON.parse(localStorage.getItem("color"));
        
    }
  }
  let hr_line2 = document.getElementsByClassName("line");
  for (let hr_item of hr_line2) {
    hr_item.style.color = JSON.parse(localStorage.getItem("color"));
  }
  let hr_line1 = document.querySelector("[class='line']");
  hr_line1.style.color = JSON.parse(localStorage.getItem("color"));
  btnChangeColor.style.backgroundColor = JSON.parse(
   localStorage.getItem("color")
  );
  sidenave.style.borderColor = JSON.parse(localStorage.getItem("color"));
  colorPicker.value =JSON.parse(localStorage.getItem('color'));
}
function selectColor() {
  localStorage.setItem("color", JSON.stringify(colorPicker.value));
  applaySelectedColor();
}
Btn.addEventListener("click", selectColor);
applaySelectedColor();
