var display = document.getElementById("display");  
var data = [
  { 
    descr: "Generate a New Character Backstory", 
    list: ['Personality Traits My timidity often causes Bonds Im happy', 'Personality Traits hehe Bonds Hoho],
    altlist: ['Akta', 'Anakis', 'Bryseis', 'Criella', 'Damaia', 'Ea', 'Kallista', 'Lerissa', 'Makaria', 'Nemeia', 'Orianna', 'Phelaia', 'Rieta'] 
  }
];

function randFrom(array){
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

function renderButton(parent, descr, list){
  let button = document.createElement('button');
  button.className = 'btns';
  button.innerHTML = descr;
  button.addEventListener("click", function(){
    display.innerHTML = randFrom(list);
  });
  parent.appendChild(button);
}

function render(){
  var btnList = document.getElementById("btnList");
  for(let i = 0, l = data.length; i < l; i++){
    let item = data[i];
    // add div
    let div = document.createElement('div');
    btnList.appendChild(div);
    // add buttons
    renderButton(div, item.descr, item.list);
    if (item.altlist) renderButton(div, "fe" + item.descr, item.altlist);    
  }  
}
render();
