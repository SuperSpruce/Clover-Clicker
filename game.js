var game = {
  state: {
  flower: 0,
  Clover1: 0,
  Clover1Cost: 40,
  Clover3: 0,
  Clover3Cost: 2000,
  Clover4: 0,
  Clover4Cost: 20000000,
  UpgradesBought: [0,0,0,0,1,1,1,1,1,1,1,1,1],
  tap: 1
}
};
var AverageFlowerPerSecond;
setInterval(function() {
AverageFlowerPerSecond = Math.round((game.state.Clover1 * game.state.UpgradesBought[4] * game.state.UpgradesBought[5] * game.state.UpgradesBought[6] * game.state.UpgradesBought[7] * game.state.UpgradesBought[8] * game.state.UpgradesBought[9] * game.state.UpgradesBought[10] * game.state.UpgradesBought[11] * game.state.UpgradesBought[12]) + (16.6666667 * (game.state.Clover3 * game.state.UpgradesBought[9] * game.state.UpgradesBought[10] * game.state.UpgradesBought[11] * game.state.UpgradesBought[12])) + (1500 * (game.state.Clover4 * game.state.UpgradesBought[9] * game.state.UpgradesBought[10] * game.state.UpgradesBought[11] * game.state.UpgradesBought[12])))
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
        game.state.Clover1 = game.state.Clover1 + 1;  //increases number of One Leaf Clovers, along with upgrades.
    	game.state.flower = game.state.flower - C1C;                          //removes the flowers spent
        document.getElementById('Clover1').innerHTML = game.state.Clover1;  //updates the number of One Leaf Clovers for the user
        document.getElementById('flower').innerHTML = game.state.flower;  //updates the number of flowers for the user
    };
    var nextC1C = Math.floor(game.state.Clover1Cost * Math.pow(1.03,game.state.Clover1));       //works out the cost of the next One Leaf Clover
    document.getElementById('Clover1Cost').innerHTML = nextC1C;  //updates the One Leaf Clover cost for the user
};

setInterval(function() {
	MakeFlowersOutOfThinAir(game.state.Clover1 * game.state.UpgradesBought[4] * game.state.UpgradesBought[5] * game.state.UpgradesBought[6] * game.state.UpgradesBought[7] * game.state.UpgradesBought[8] * game.state.UpgradesBought[9] * game.state.UpgradesBought[10] * game.state.UpgradesBought[11] * game.state.UpgradesBought[12]);}, 1000);

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
MakeFlowersOutOfThinAir(50 * game.state.Clover3 * game.state.UpgradesBought[9] * game.state.UpgradesBought[10] * game.state.UpgradesBought[11] * game.state.UpgradesBought[12])

}, 3000);
setInterval(function(){
MakeFlowersOutOfThinAir(6000 * game.state.Clover4 * game.state.UpgradesBought[9] * game.state.UpgradesBought[10] * game.state.UpgradesBought[11] * game.state.UpgradesBought[12])

}, 4000);

setInterval(function(){
	UpdateAverageFlowerPerSecond()
}, 40);

function buyU1(){
  if (game.state.flower >= 1000) {
    game.state.flower -= 1000
    game.state.tap += 9
    document.getElementById('tap').innerHTML = game.state.tap;
    game.state.UpgradesBought[0] = 1
  }
}

setInterval(function(){
	if (game.state.UpgradesBought[0] == 1) {
  document.getElementById('U1').style.display='none'
  document.getElementById('displayU1').style.display='none'
  }
}, 40);

function buyU2(){
  if (game.state.flower >= 10000) {
    game.state.flower -= 10000
    game.state.tap = game.state.tap *= 4
    document.getElementById('tap').innerHTML = game.state.tap;
    game.state.UpgradesBought[1] = 1
  }
}

setInterval(function(){
	if (game.state.UpgradesBought[1] == 1) {
  document.getElementById('U2').style.display='none'
  document.getElementById('displayU2').style.display='none'
  }
}, 40);

function buyU3(){
  if (game.state.flower >= 200000) {
    game.state.flower -= 200000
    game.state.tap = game.state.tap *= 5
    document.getElementById('tap').innerHTML = game.state.tap;
    game.state.UpgradesBought[2] = 1
  }
}

setInterval(function(){
	if (game.state.UpgradesBought[2] == 1) {
  document.getElementById('U3').style.display='none'
  document.getElementById('displayU3').style.display='none'
  }
}, 40);

function buyU4(){
  if (game.state.flower >= 8000000) {
    game.state.flower -= 8000000
    game.state.tap = game.state.tap *= 10
    document.getElementById('tap').innerHTML = game.state.tap;
    game.state.UpgradesBought[3] = 1
  }
}

setInterval(function(){
	if (game.state.UpgradesBought[3] == 1) {
  document.getElementById('U4').style.display='none'
  document.getElementById('displayU4').style.display='none'
  }
}, 40);

function buyU5(){
  if (game.state.flower >= 500) {
    game.state.flower -= 500
    game.state.UpgradesBought[4] = 2
  }
}

setInterval(function(){
	if (game.state.UpgradesBought[4] == 2) {
  document.getElementById('U5').style.display='none'
  document.getElementById('displayU5').style.display='none'
  }
}, 40);

function buyU6(){
  if (game.state.flower >= 500000) {
    game.state.flower -= 500000
    game.state.UpgradesBought[5] = 2
  }
}

setInterval(function(){
	if (game.state.UpgradesBought[5] == 2) {
  document.getElementById('U6').style.display='none'
  document.getElementById('displayU6').style.display='none'
  }
}, 40);

function buyU7(){
  if (game.state.flower >= 5000000) {
    game.state.flower -= 5000000
    game.state.UpgradesBought[6] = 2
  }
}

setInterval(function(){
	if (game.state.UpgradesBought[6] == 2) {
  document.getElementById('U7').style.display='none'
  document.getElementById('displayU7').style.display='none'
  }
}, 40);

function buyU8(){
  if (game.state.flower >= 25000000) {
    game.state.flower -= 25000000
    game.state.UpgradesBought[7] = 2
  }
}

setInterval(function(){
	if (game.state.UpgradesBought[7] == 2) {
  document.getElementById('U8').style.display='none'
  document.getElementById('displayU8').style.display='none'
  }
}, 40);

function buyU9(){
  if (game.state.flower >= 3000000) {
    game.state.flower -= 3000000
    game.state.UpgradesBought[8] = 3
  }
}

setInterval(function(){
	if (game.state.UpgradesBought[8] == 3) {
  document.getElementById('U9').style.display='none'
  document.getElementById('displayU9').style.display='none'
  }
}, 40);

function buyU10(){
  if (game.state.flower >= 1000000) {
    game.state.flower -= 1000000
    game.state.UpgradesBought[9] = 2.5
  }
}

setInterval(function(){
	if (game.state.UpgradesBought[9] == 2.5) {
  document.getElementById('U10').style.display='none'
  document.getElementById('displayU10').style.display='none'
  }
}, 40);

function buyU11(){
  if (game.state.flower >= 10000000) {
    game.state.flower -= 10000000
    game.state.UpgradesBought[10] = 2
  }
}

setInterval(function(){
	if (game.state.UpgradesBought[10] == 2) {
  document.getElementById('U11').style.display='none'
  document.getElementById('displayU11').style.display='none'
  }
}, 40);

function buyU12(){
  if (game.state.flower >= 100000000) {
    game.state.flower -= 100000000
    game.state.UpgradesBought[11] = 2
  }
}

setInterval(function(){
	if (game.state.UpgradesBought[11] == 2) {
  document.getElementById('U12').style.display='none'
  document.getElementById('displayU12').style.display='none'
  }
}, 40);

function buyU13(){
  if (game.state.flower >= 1000000000) {
    game.state.flower -= 1000000000
    game.state.UpgradesBought[12] = 3
  }
}

setInterval(function(){
	if (game.state.UpgradesBought[12] == 3) {
  document.getElementById('U13').style.display='none'
  document.getElementById('displayU13').style.display='none'
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
