var display = document.getElementById("display");  
var data = [
  { 
    descr: "male dwarf", 
    list: ['Personality Traits: My timidity often causes others to think I’m dimwitted, but I just like to think slowly. I’m also a bit of a know-it-all once I get talking. Ideals: Balance. I don’t like taking too strong a stance on any issue. All intelligent creatures should find a way to coexist without childish bickering. Bonds: As a child, I always spent time fishing on a local stream. Something foul corrupted the land before I departed, and I’d love to see my old spot restored. Flaws: I can be awfully judgmental, and it’s hard for me to break a first impression. Background: You grew up with too many siblings to count and were free to make your own decisions from a young age. You often kept to yourself and made friends with hermits and other outsiders. Drawn to magic and adventure from an early age, you’ve gone out into the world in search of a more fulfilling life.', 'Personality Traits: I’m a straight shooter, and I sometimes say the wrong thing at the wrong time, making enemies where I have no intention. I’m much happier outside of civilization. Ideals: Wanderlust. Remaining in one place long is a good way to piss away your existence. Bonds: I found an ancient metal coin that has no tie to any kingdom I know -- I treasure it as a symbol of an unknown past. Flaws: I sabotage relationships before anyone gets too close. Background: Your whole life you’ve been chased. You never knew your parents and those who looked after you didn’t for long. Always marked by destiny, that’s what those who met you have muttered. The law, the Fey -- you’re never able to settle anywhere long without being bothered. You’ve decided to embrace your fate and strike out in search of a grand discovery, perhaps even the origin of your fate-marked existence.']
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
