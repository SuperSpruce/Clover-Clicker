var game = {
  state: {
  flower: flower,
  Clover1: Clover1,
  Clover1Cost: Clover1Cost,
  Clover3: Clover3,
  Clover3Cost: Clover3Cost,
  tap: tap
};
}
function MakeFlowersOutOfThinAir(C0){
    game.state.flower += C0;
    document.getElementById("flower").innerHTML = game.state.flower;
};

function buyC1(){
    var C1C = Math.floor(Clover1Cost * Math.pow(1.03,game.state.Clover1));     //works out the cost of this One Leaf Clover
    if(flower >= C1C){                                   //checks that the player can afford the One Leaf Clover
        game.state.Clover1 = game.state.Clover1 + 1;                                   //increases number of One Leaf Clovers
    	game.state.flower = game.state.flower - C1C;                          //removes the flowers spent
        document.getElementById('Clover1').innerHTML = game.state.Clover1;  //updates the number of One Leaf Clovers for the user
        document.getElementById('flower').innerHTML = game.state.flower;  //updates the number of flowers for the user
    };
    var nextC1C = Math.floor(game.state.Clover1Cost * Math.pow(1.03,game.state.Clover1));       //works out the cost of the next One Leaf Clover
    document.getElementById('Clover1Cost').innerHTML = nextC1C;  //updates the One Leaf Clover cost for the user
};

window.setInterval(function(){
	
	MakeFlowersOutOfThinAir(game.state.Clover1);
	
}, 1000);

function buyC3(){
    var C3C = Math.floor(game.state.Clover3Cost * Math.pow(1.05,game.state.Clover3));     //works out the cost of this Three Leaf Clover
    if(flower >= C3C){                                   //checks that the player can afford the Three Leaf Clover
        game.state.Clover3 = game.state.Clover3 + 1;                                   //increases number of Three Leaf Clovers
    	game.state.flower = game.state.flower - C3C;                          //removes the flowers spent
        document.getElementById('Clover3').innerHTML = game.state.Clover3;  //updates the number of Three Leaf Clovers for the user
        document.getElementById('flower').innerHTML = game.state.flower;  //updates the number of flowers for the user
    };
    var nextC3C = Math.floor(game.state.Clover3Cost * Math.pow(1.05,game.state.Clover3));       //works out the cost of the next Three Leaf Clover
    document.getElementById('Clover3Cost').innerHTML = nextC3C;  //updates the Three Leaf Clover cost for the user
};

window.setInterval(function(){
	
	MakeFlowersOutOfThinAir(50 * game.state.Clover3);
	
}, 3000);



game = {
  state: {
  flower: flower,
  Clover1: Clover1,
  Clover1Cost: Clover1Cost,
  Clover3: Clover3,
  Clover3Cost: Clover3Cost,
  tap: tap
},
  
updateDisplay: function() {
        document.getElementById('flower').value = game.state.flower;
        document.getElementById('Clover1').value = game.state.Clover1;
        document.getElementById('Clover1Cost').value = game.state.Clover1Cost;
	document.getElementById('Clover3').value = game.state.Clover3;
        document.getElementById('Clover3Cost').value = game.state.Clover3Cost;
        document.getElementById('tap').value = game.state.tap;
    },
}
	
function save() {
    localStorage.cc = btoa(JSON.stringify(game.state));
};
function load() {
    if(!localStorage.cc) return;
    game = JSON.parse(atob(localStorage.cc));

    transformToDecimal(game.state)
};
function transformToDecimal(object) { 
    for(i in object) {
        if(typeof(object[i]) == "string" && !isNaN(new Decimal(object[i]).mag)) object[i] = new Decimal(object[i]); 
        if(typeof(object[i]) == "object") transformToDecimal(object[i]) 
    }
}
load();
      
