function bigText (){
  document.getElementById('demo').style.fontSize='35px';
}

function smallText (){
  document.getElementById('demo').style.fontSize='15px';
}

function hideDemo (){
  document.getElementById('demo').style.display='none';
}

function showDemo (){
  document.getElementById('demo').style.display='block';
}

function changeHtml (){
  document.getElementById("demo").innerHTML = "Hello JavaScript!";
}

function backToText(){
  document.getElementById("demo").innerHTML = "JavaScript can change the style of an HTML element.";
}

function date (){
  document.getElementById('demo2').innerHTML = Date();
}