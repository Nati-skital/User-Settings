/* UI Selectors */  
const bgInput = document.querySelector('.bgElement'),
      textImi= document.querySelector('.textImi'),
      immediatelyEl = document.querySelector('.immediately'),
      textFont = document.getElementById('font-size'),
      textColor = document.getElementById('color'),
      circle = document.querySelector('.circle'), 
      refreshBtn = document.querySelector('.refresh'),
      resultDiv = document.querySelector('#result'),
      container = document.querySelector('.main-container'); 
/*---------background color input-------------------*/
bgInput.addEventListener('blur', changeBg); 
function changeBg(e){
 if(bgInput.value != ''){
   let naemOfColor = document.querySelector('.bg'); 
   naemOfColor.innerHTML = bgInput.value;
   resultDiv.style.backgroundColor = bgInput.value; 
  }
 }
/*-------------font size-------------------*/
textFont.addEventListener('change', function(e){
  resultDiv.style.fontSize = textFont.value;
}); 
/*-------------text color-------------------*/
textColor.addEventListener('change', function(e){
  resultDiv.style.color = textColor.value;
});
/*-------------paragraph disapear-------------------*/
const hidePragraph = document.getElementById('hidePragraph').addEventListener('click', hideText); 

function hideText(e){
  document.body.querySelector('.me').style.display = 'none';
} 
/*---------------paragraph disapear-------------------*/
const showPragraph = document.getElementById('showPragraph').addEventListener('click', showText); 

function showText(e){
  document.body.querySelector('.me').style.display = 'block';
} 
/*---------circle---------------------------------*/
circle.addEventListener('mousemove', changeColor);

function changeColor(e){
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  container.style.backgroundColor = getRandomColor(); 
}
/*-----------------page refresh-----------------------*/ 
refreshBtn.addEventListener('click', pageRefresh);
function pageRefresh(e){
  location.reload(); 
} 
/*-------------------------------------------*/
textImi.addEventListener('keyup', () =>{
  let newText = textImi.value;
  immediatelyEl.innerHTML = newText;
});
/*-------------------------------------------*/
const keyDownInput = document.querySelector('.keyDownInput');
keyDownInput.addEventListener('keydown', () =>{
  let newText = keyDownInput.value; 
  const keyDownElement = document.querySelector('.keyDownElement');
  keyDownElement.innerHTML = newText; 
});