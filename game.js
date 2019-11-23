class Upgrade {
	constructor(name, index, price, description) {
		this.name = name;
		this.index = index;
		this.price = price;
		this.description = description || '';
	}
	
	buy() {
		if (!game.state.upgrades[this.index] && game.state.flower >= this.price) {
			game.state.upgrades[this.index] = true;
			game.state.flower -= this.price;
		}
	}
	
	createButton() {
		let d = document.createElement('div');
		d.id = 'upg' + this.index + 'd';
		let b = document.createElement('button');
		b.id = 'upg' + this.index + 'b';
		b.className = 'red';
		b.innerHTML = this.name;
		b.setAttribute('onclick', 'upgList[' + this.index + '].buy()');
		let p = document.createElement('p');
		p.id = 'upg' + this.index + 'p';
		p.innerHTML = this.description + '&nbsp;Cost: ' + this.price;;
		d.appendChild(b);
		d.appendChild(p);
		document.getElementById('upgradesDiv').appendChild(d);
	}
	
	updateButton() {
		let str = '';
		if (game.state.upgrades[this.index]) {
			str = 'blue';
		} else {
			if (game.state.flower >= this.price) {
				str = 'green';
			} else {
				str = 'red';
			}
		}
		document.getElementById('upg' + this.index + 'b').className = document.getElementById('upg' + this.index + 'b').className.replace(/(green|red|blue)/, str);
	}
}

let upgList = [
	new Upgrade('Bigger Leaves 1', 0, 500, 'Double the flower production of 1-leaf clovers'),
	new Upgrade('Bigger Leaves 2', 1, 5e5, 'Double the flower production of 1-leaf clovers'),
	new Upgrade('Bigger Leaves 3', 2, 5e6, 'Double the flower production of 1-leaf clovers'),
	new Upgrade('Bigger Leaves 4', 3, 2.5e7, 'Double the flower production of 1-leaf clovers'),
	new Upgrade('Triplet Leaves', 4, 3e6, 'Triple the flower production of 3-leaf clovers')
]

var game = {
	state: {
		flower: 0,
		Clover1: 0,
		Clover1Cost: 40,
		Clover1Mult: 1,
		Clover3: 0,
		Clover3Cost: 2000,
		Clover3Mult: 1,
		Clover4: 0,
		Clover4Cost: 2e7,
		Clover4Mult: 1,
		tap: 1
	}
};

var AverageFlowerPerSecond;

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
	MakeFlowersOutOfThinAir(game.state.Clover1 * game.state.Clover1Mult);}, 1000);

function buyC3(){
    var C3C = Math.floor(game.state.Clover3Cost * Math.pow(1.05,game.state.Clover3));
    if(game.state.flower >= C3C){
        game.state.Clover3 = game.state.Clover3 + 1;
    	game.state.flower = game.state.flower - C3C;
        document.getElementById('Clover3').innerHTML = game.state.Clover3;
        document.getElementById('flower').innerHTML = game.state.flower;
    };
    var nextC3C = Math.floor(game.state.Clover3Cost * Math.pow(1.05,game.state.Clover3));
    document.getElementById('Clover3Cost').innerHTML = nextC3C;
};

setInterval(function(){
	MakeFlowersOutOfThinAir(game.state.Clover3 * game.state.Clover3Mult * 50)
}, 3000);
	
function buyC4(){
    var C4C = Math.floor(game.state.Clover4Cost * Math.pow(1.20,game.state.Clover4));
    if(game.state.flower >= C4C){
        game.state.Clover4 = game.state.Clover4 + 1;
    	game.state.flower = game.state.flower - C4C;
        document.getElementById('Clover4').innerHTML = game.state.Clover4;
        document.getElementById('flower').innerHTML = game.state.flower;
    };
    var nextC4C = Math.floor(game.state.Clover4Cost * Math.pow(1.20,game.state.Clover4));
    document.getElementById('Clover4Cost').innerHTML = nextC4C;
};
	
setInterval(function(){
	MakeFlowersOutOfThinAir(game.state.Clover4 * game.state.Clover4Mult * 6000)
}, 4000);


function UpdateAverageFlowerPerSecond(){
	document.getElementById('AverageFlowerPerSecond').innerHTML = AverageFlowerPerSecond;
};

setInterval(function() {
    AverageFlowerPerSecond = Math.round(game.state.Clover1 * game.state.Clover1Mult + (16.6666667 * game.state.Clover3 * game.state.Clover3Mult) + 1500 * game.state.Clover4 * game.state.Clover4Mult)
    UpdateAverageFlowerPerSecond()
    for (let i of upgList) i.updateButton();
    game.state.Clover1Mult = 1;
    game.state.Clover3Mult = 1;
    game.state.Clover4Mult = 1;
    game.state.ClickMult = 1;
    
    for( k = 0; k < 4; k++) {
		if (game.state.upgrades[k]) game.state.Clover1Mult *= 2;
    }
	if (game.state.upgrades[4]) game.state.Clover3Mult *= 2;
}, 33);
	
function tab(tab) {
	// hide all your tabs, then show the one the user selected.
	document.getElementById("cloverTab").style.display = "none"
	document.getElementById("upgradeTab1").style.display = "none"
	document.getElementById("optionsTab").style.display = "none"
	document.getElementById(tab).style.display = "inline-block"
}
// go to a tab for the first time, so not all show
tab("cloverTab")

function save() {
    localStorage.cc = btoa(JSON.stringify(game));
}

function load() {
    if(!localStorage.cc) return;
    game = JSON.parse(atob(localStorage.cc));

    transformToDecimal(game)
}

function transformToDecimal(object) { 
    for(i in object) {
        if(typeof(object[i]) == "string" && !isNaN(new Decimal(object[i]).mag)) object[i] = new Decimal(object[i]); 
        if(typeof(object[i]) == "object") transformToDecimal(object[i]) 
    }
}

load();
for (let i of upgList) i.createButton();

setInterval(function(){
	save();
}, 15000);

function hardReset() {
	game.state.flower = 0;
	game.state.Clover1 = 0;
	game.state.Clover1Cost = 40;
	game.state.Clover1Mult = 1;
	game.state.Clover3 = 0;
	game.state.Clover3Cost = 2000;
	game.state.Clover3Mult = 1;
	game.state.Clover4 = 0;
	game.state.Clover4Cost = 2e7;
	game.state.Clover4Mult = 1;
	game.state.tap = 1;
	game.state.upgrades = new Array(upgList.length);
	game.state.upgrades.fill(false);
}
