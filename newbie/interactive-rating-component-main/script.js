const $section = document.querySelector('section');
const $article = document.querySelector('article'); 

const labelScales1 = document.querySelector("#labelScales1");
var checkbox = document.querySelector("input[name=scales1]");

const labelScales2 = document.querySelector("#labelScales2");
var checkbox2 = document.querySelector("input[name=scales2]");

const labelScales3 = document.querySelector("#labelScales3");
var checkbox3 = document.querySelector("input[name=scales3]");

const labelScales4 = document.querySelector("#labelScales4");
var checkbox4 = document.querySelector("input[name=scales4]");

const labelScales5 = document.querySelector("#labelScales5");
var checkbox5 = document.querySelector("input[name=scales5]");


function evento() {
  if (this.checked) {
    console.log("Checkbox is checked..");
    labelScales1.classList.add('white-select')
  } else {
    console.log("Checkbox is not checked..");
    labelScales1.classList.remove('white-select')
  }
}

function evento2(){
  if (this.checked) {
    console.log("Checkbox is checked..");
    labelScales2.classList.add('white-select')
  } else {
    console.log("Checkbox is not checked..");
    labelScales2.classList.remove('white-select')
  }
}


function evento3(){
  if (this.checked) {
    console.log("Checkbox is checked..");
    labelScales3.classList.add('white-select')
  } else {
    console.log("Checkbox is not checked..");
    labelScales3.classList.remove('white-select')
  }
}

function evento4(){
  if (this.checked) {
    console.log("Checkbox is checked..");
    labelScales4.classList.add('white-select')
  } else {
    console.log("Checkbox is not checked..");
    labelScales4.classList.remove('white-select')
  }
}

function evento5(){
  if (this.checked) {
    console.log("Checkbox is checked..");
    labelScales5.classList.add('white-select')
  } else {
    console.log("Checkbox is not checked..");
    labelScales5.classList.remove('white-select')
  }
}

checkbox.addEventListener('change', evento);
checkbox2.addEventListener('change', evento2);
checkbox3.addEventListener('change', evento3);
checkbox4.addEventListener('change', evento4);
checkbox5.addEventListener('change', evento5);

document.getElementById('btn').onclick = function(e) {
  e.preventDefault();
  var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
 
  $section.classList.toggle('hide')
  $article.classList.toggle('hide')

  const secondItem = $section.querySelector("section span");
  secondItem.textContent = `You selected out ${checkboxes.length} of 5`;

}