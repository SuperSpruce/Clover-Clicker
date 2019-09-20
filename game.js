var game = {
  state: {
  flower: 0,
  Clover1: 0,
  Clover1Cost: 50,
  Clover3: 0,
  Clover3Cost: 2000,
  Clover4: 0,
  Clover4Cost: 20000000,
  UpgradesBought: [0,0,0,0,0],
  tap: 1
}
};
var AverageFlowerPerSecond;
setInterval(function() {
AverageFlowerPerSecond = Math.round(game.state.Clover1 + (16.6666667 * game.state.Clover3) + (1500 * game.state.Clover4))
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
	MakeFlowersOutOfThinAir(game.state.Clover1);}, 1000);

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
function buyC4(){
    var C4C = Math.floor(game.state.Clover4Cost * Math.pow(1.05,game.state.Clover4));     //works out the cost of this Four Leaf Clover
    if(game.state.flower >= C4C){                                   //checks that the player can afford the Four Leaf Clover
        game.state.Clover4 = game.state.Clover4 + 1;                                   //increases number of Four Leaf Clovers
    	game.state.flower = game.state.flower - C4C;                          //removes the flowers spent
        document.getElementById('Clover4').innerHTML = game.state.Clover4;  //updates the number of Four Leaf Clovers for the user
        document.getElementById('flower').innerHTML = game.state.flower;  //updates the number of flowers for the user
    };
    var nextC4C = Math.floor(game.state.Clover4Cost * Math.pow(1.05,game.state.Clover4));       //works out the cost of the next Four Leaf Clover
    document.getElementById('Clover4Cost').innerHTML = nextC4C;  //updates the Four Leaf Clover cost for the user
};
setInterval(function(){
MakeFlowersOutOfThinAir(50 * game.state.Clover3)

}, 3000);
setInterval(function(){
MakeFlowersOutOfThinAir(6000 * game.state.Clover4)

}, 4000);

setInterval(function(){
	UpdateAverageFlowerPerSecond()
}, 40);

function buyU1(){
  if (game.state.flower >= 1000){
    game.state.flower -= 1000
    game.state.tap = 10
    document.getElementById('tap').innerHTML = game.state.tap;
  }
}

setInterval(function(){
	if (UpgradesBought[0] == 1){
  U1.style.display = 'none'
  }
}, 40);

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
