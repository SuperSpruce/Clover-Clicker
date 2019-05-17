var game = {
  state: {
  flower: 0,
  Clover1: 0,
  Clover1Cost: 50,
  Clover1Power: 0,
  Clover3: 0,
  Clover3Cost: 2000,
  Clover3Power: 0,
  tap: 1,
	  Up1A: false
}
};
var AverageFlowerPerSecond;
setInterval(function() {
AverageFlowerPerSecond = Math.round(game.state.Clover1 + (16.6666667 * game.state.Clover3))
}, 20
	      );
function UpdateAverageFlowerPerSecond(){
	document.getElementById('AverageFlowerPerSecond').innerHTML = AverageFlowerPerSecond
};

function MakeFlowersOutOfThinAir(C0){
    game.state.flower += C0;
    document.getElementById("flower").innerHTML = game.state.flower;
};

function buyC1(){
    var C1C = Math.floor(game.state.Clover1Cost * Math.pow(1.03,game.state.Clover1));     //works out the cost of this One Leaf Clover
    if(game.state.flower >= C1C){                                   //checks that the player can afford the One Leaf Clover
        game.state.Clover1 = game.state.Clover1 + 1;                                   //increases number of One Leaf Clovers
    	game.state.flower = game.state.flower - C1C;                          //removes the flowers spent
        document.getElementById('Clover1').innerHTML = game.state.Clover1;  //updates the number of One Leaf Clovers for the user
        document.getElementById('flower').innerHTML = game.state.flower;  //updates the number of flowers for the user
    };
    var nextC1C = Math.floor(game.state.Clover1Cost * Math.pow(1.03,game.state.Clover1));       //works out the cost of the next One Leaf Clover
    document.getElementById('Clover1Cost').innerHTML = nextC1C;  //updates the One Leaf Clover cost for the user
};

setInterval(function() {
	MakeFlowersOutOfThinAir(game.state.Clover1Power);}, 1000);

function buyC3(){
    var C3C = Math.floor(game.state.Clover3Cost * Math.pow(1.05,game.state.Clover3));     //works out the cost of this Three Leaf Clover
    if(game.state.flower >= C3C){                                   //checks that the player can afford the Three Leaf Clover
        game.state.Clover3 = game.state.Clover3 + 1;                                   //increases number of Three Leaf Clovers
    	game.state.flower = game.state.flower - C3C;                          //removes the flowers spent
        document.getElementById('Clover3').innerHTML = game.state.Clover3;  //updates the number of Three Leaf Clovers for the user
        document.getElementById('flower').innerHTML = game.state.flower;  //updates the number of flowers for the user
    };
    var nextC3C = Math.floor(game.state.Clover3Cost * Math.pow(1.05,game.state.Clover3));       //works out the cost of the next Three Leaf Clover
    document.getElementById('Clover3Cost').innerHTML = nextC3C;  //updates the Three Leaf Clover cost for the user
};

setInterval(function(){
MakeFlowersOutOfThinAir(game.state.Clover3Power)
}, 3000);

setInterval(function(){
	UpdateAverageFlowerPerSecond()
}, 40);

function Up1A() {
	if (game.state.flower >= 500) {
		game.state.flower = game.state.flower - 500;
		game.state.Up1A = true 
	};

if (game.state.Up1A = true) {
	game.state.Clover1Power = game.state.Clover1Power * 2
};



	
function save() {
    localStorage.cc = btoa(JSON.stringify(game));
};
function load() {
    if(!localStorage.cc) return;
    game = JSON.parse(atob(localStorage.cc));

    transformToDecimal(game)
};
function transformToDecimal(object) { 
    for(i in object) {
        if(typeof(object[i]) == "string" && !isNaN(new Decimal(object[i]).mag)) object[i] = new Decimal(object[i]); 
        if(typeof(object[i]) == "object") transformToDecimal(object[i]) 
    }
}
load();

setInterval(function(){
	save();
}, 15000);
    
