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
		d.className = 'upgDiv';
		let b = document.createElement('button');
		b.id = 'upg' + this.index + 'b';
		b.className = 'red';
		b.innerHTML = this.name;
		b.setAttribute('onclick', 'upgList[' + this.index + '].buy()');
		let p = document.createElement('p');
		p.id = 'upg' + this.index + 'p';
		p.innerHTML = this.description + '&nbsp;Cost: ' + format(this.price);
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
	new Upgrade('Triplet Leaves', 4, 3e6, 'Triple the flower production of 3-leaf clovers'),
	new Upgrade('Make more flowers out of thin air', 5, 1000, 'Adds 9 to flowers per click'),
	new Upgrade('Make even more flowers out of thin air', 6, 10000, 'Flowers per click is multiplied by 4'),
	new Upgrade('Make yet more flowers out of thin air', 7, 2e5, 'Flowers per click is multiplied by 5'),
	new Upgrade('Make flowers out of trash', 8, 8e6, 'Flowers per click is multiplied by 10'),
	new Upgrade('The Millionaire Upgrade', 9, 1e6, 'You get 2.5x as many flowers from all sources'),
	new Upgrade('Multimillionaire Upgrade', 10, 1e7, 'You get 2x as many flowers from all sources'),
	new Upgrade('Polymillionaire Upgrade', 11, 1e8, 'You get 2x as many flowers from all sources'),
	new Upgrade('Billionaire Upgrade', 12, 1e9, 'You get 3x as many flowers from all sources'),
]



// ========================================================================================



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




function format(amount) {
  let power = Math.floor(Math.log10(amount))
  let mantissa = amount / Math.pow(10, power)
  if (power < 6) return amount;
	else {
  return mantissa.toFixed(3) + "e" + power; }
}


var AverageFlowerPerSecond;
var FlowerPerClick;

function MakeFlowersOutOfThinAir(C0){
    game.state.flower = Math.round(game.state.flower + C0);
    document.getElementById("flower").innerHTML = format(game.state.flower);
};

function buyC1(){
    //var C1C = Math.floor(game.state.Clover1Cost * Math.pow(1.03,game.state.Clover1));     //works out the cost of this One Leaf Clover
    if(game.state.flower >= Math.round(game.state.Clover1Cost)){                                   //checks that the player can afford the One Leaf Clover
        game.state.Clover1 = game.state.Clover1 + 1;                                   //increases number of One Leaf Clovers
    	game.state.flower = game.state.flower - Math.round(game.state.Clover1Cost);                          //removes the flowers spent
        document.getElementById('Clover1').innerHTML = format(game.state.Clover1);  //updates the number of One Leaf Clovers for the user
        document.getElementById('flower').innerHTML = format(game.state.flower);  //updates the number of flowers for the user
    game.state.Clover1Cost = game.state.Clover1Cost * 1.03;       //works out the cost of the next One Leaf Clover
    document.getElementById('Clover1Cost').innerHTML = format(Math.round(game.state.Clover1Cost));  //updates the One Leaf Clover cost for the user
    }
};

setInterval(function() {
	MakeFlowersOutOfThinAir(game.state.Clover1 * game.state.Clover1Mult);}, 1000);

function buyC3(){
    if(game.state.flower >= Math.round(game.state.Clover3Cost)){
        game.state.Clover3 = game.state.Clover3 + 1;
    	game.state.flower = game.state.flower - Math.round(game.state.Clover3Cost);
        document.getElementById('Clover3').innerHTML = format(game.state.Clover3);
        document.getElementById('flower').innerHTML = format(game.state.flower);
    game.state.Clover3Cost = game.state.Clover3Cost * 1.05;
    document.getElementById('Clover3Cost').innerHTML = format(Math.round(game.state.Clover3Cost));
    }
};

setInterval(function(){
	MakeFlowersOutOfThinAir(game.state.Clover3 * game.state.Clover3Mult * 50)
}, 3000);
	
function buyC4(){
    if(game.state.flower >= Math.round(game.state.Clover4Cost)){
        game.state.Clover4 = game.state.Clover4 + 1;
    	game.state.flower = game.state.flower - Math.round(game.state.Clover4Cost);
        document.getElementById('Clover4').innerHTML = format(game.state.Clover4);
        document.getElementById('flower').innerHTML = format(game.state.flower);
    game.state.Clover4Cost = game.state.Clover4Cost * 1.2;
    document.getElementById('Clover4Cost').innerHTML = format(Math.round(game.state.Clover4Cost));
    }
};
	
setInterval(function(){
	MakeFlowersOutOfThinAir(game.state.Clover4 * game.state.Clover4Mult * 6000)
}, 4000);


function UpdateAverageFlowerPerSecond(){
	document.getElementById('AverageFlowerPerSecond').innerHTML = format(AverageFlowerPerSecond);
};

function UpdateFlowerPerClick(){
	document.getElementById('FlowerPerClick').innerHTML = format(FlowerPerClick);
};

function UpdateClover1Mult(){
	document.getElementById('Clover1Mult').innerHTML = format(game.state.Clover1Mult);
};
function UpdateClover3Mult(){
	document.getElementById('Clover3Mult').innerHTML = format(50 * game.state.Clover3Mult);
};
function UpdateClover4Mult(){
	document.getElementById('Clover4Mult').innerHTML = format(6000 * game.state.Clover4Mult);
};



function logBase(base, input) {
	return Math.log(input) / Math.log(base);
}

function logCloverBuy(cloverType, initalCost, costMult) {
	var quo = game.state.flower / initalCost;
	var geoConst = 1 - (1 / costMult);
	quo = Math.floor(logBase(costMult, quo * geoConst));
	
	if(quo > 0) {
	    var newCost = initalCost * Math.pow(costMult, quo);
	    switch(cloverType) {
		    case 1: 
			    game.state.Clover1 += quo;
			    game.state.Clover1Cost = newCost;
			    document.getElementById('Clover1').innerHTML = format(game.state.Clover1);
			    document.getElementById('Clover1Cost').innerHTML = format(Math.round(newCost));
			    break;
		    case 3:
			    game.state.Clover3 += quo;
			    game.state.Clover3Cost = newCost;
			    document.getElementById('Clover3').innerHTML = format(game.state.Clover3);
			    document.getElementById('Clover3Cost').innerHTML = format(Math.round(newCost));
			    break;
		    case 4:
			    game.state.Clover4 += quo;
			    game.state.Clover4Cost = newCost;
			    document.getElementById('Clover4').innerHTML = format(game.state.Clover4);
			    document.getElementById('Clover4Cost').innerHTML = format(Math.round(newCost));
			    break;
	    }
	    game.state.flower -= newCost / (geoConst);
	    document.getElementById('flower').innerHTML = format(game.state.flower);
	}
}


function maxC1() {
	if(game.state.flower > game.state.Clover1Cost * 1e10) {
		logCloverBuy(1, game.state.Clover1Cost, 1.03);
	}
	else {
		while(game.state.flower >= game.state.Clover1Cost) {
			buyC1();
		}
	}
}
function maxC3() {
	if(game.state.flower > game.state.Clover3Cost * 1e10) {
		logCloverBuy(3, game.state.Clover3Cost, 1.05);
	}
	else {
		while(game.state.flower >= game.state.Clover3Cost) {
			buyC3();
		}
	}
}
function maxC4() {
	if(game.state.flower > game.state.Clover4Cost * 1e10) {
		logCloverBuy(4, game.state.Clover4Cost, 1.2);
	}
	else {
		while(game.state.flower >= game.state.Clover4Cost) {
			buyC4();
		}
	}
}

function maxAllClovers() {
	maxC4();
	maxC3();
	maxC1();
}




setInterval(function() {
    AverageFlowerPerSecond = Math.round(game.state.Clover1 * game.state.Clover1Mult + (16.6666667 * game.state.Clover3 * game.state.Clover3Mult) + 1500 * game.state.Clover4 * game.state.Clover4Mult);
    FlowerPerClick = game.state.tap;
    UpdateAverageFlowerPerSecond();
    UpdateFlowerPerClick();

	if (Math.floor(game.state.Clover1Cost) <= game.state.flower) {
		document.getElementById("C1B").className = "green";
		document.getElementById("M1").className = "green";
	} else {
		document.getElementById("C1B").className = "red";
		document.getElementById("M1").className = "red";
	}
	if (Math.floor(game.state.Clover3Cost <= game.state.flower) {
		document.getElementById("C3B").className = "green";
	} else {
	        document.getElementById("C3B").className = "red";
        }
	if (Math.floor(game.state.Clover4Cost <= game.state.flower) {
		document.getElementById("C4B").className = "green";
	} else {
		document.getElementById("C4B").className = "red";
	}
    for (let i of upgList) i.updateButton();

    game.state.Clover1Mult = 1;
    game.state.Clover3Mult = 1;
    game.state.Clover4Mult = 1;
    game.state.tap = 1;
    
    for( k = 0; k < 4; k++) {
		if (game.state.upgrades[k]) game.state.Clover1Mult *= 2;
    }
	if (game.state.upgrades[4]) game.state.Clover3Mult *= 3;
	if (game.state.upgrades[5]) game.state.tap += 9;
	if (game.state.upgrades[6]) game.state.tap *= 4;
	if (game.state.upgrades[7]) game.state.tap *= 5;
	if (game.state.upgrades[8]) game.state.tap *= 10;
	if (game.state.upgrades[9]) multiplyEverything(2.5);
	if (game.state.upgrades[10]) multiplyEverything(2);
	if (game.state.upgrades[11]) multiplyEverything(2);
	if (game.state.upgrades[12]) multiplyEverything(3);
	
	UpdateClover1Mult();
	UpdateClover3Mult();
	UpdateClover4Mult();
	document.getElementById('Clover1P').innerHTML = format(game.state.Clover1Mult * game.state.Clover1);
	document.getElementById('Clover3P').innerHTML = format(Math.round(game.state.Clover3Mult * game.state.Clover3 * 16.6666666666667));
	document.getElementById('Clover4P').innerHTML = format(game.state.Clover4Mult * game.state.Clover4 * 1500);
}, 33);



function multiplyEverything(a) {
	game.state.tap *= a;
	game.state.Clover1Mult *= a;
	game.state.Clover3Mult *= a;
	game.state.Clover4Mult *= a;
}
	
function tab(tab) {
	// hide all your tabs, then show the one the user selected.
	document.getElementById("cloverTab").style.display = "none"
	document.getElementById("upgradeTab1").style.display = "none"
	document.getElementById("optionsTab").style.display = "none"
	document.getElementById("changelogTab").style.display = "none"
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

    transformToDecimal(game);
    document.getElementById('flower').innerHTML = format(game.state.flower);
    document.getElementById('Clover1').innerHTML = format(game.state.Clover1);
    document.getElementById('Clover1Cost').innerHTML = format(Math.floor(game.state.Clover1Cost));
    document.getElementById('Clover3').innerHTML = format(game.state.Clover3);
    document.getElementById('Clover3Cost').innerHTML = format(Math.floor(game.state.Clover3Cost));
    document.getElementById('Clover4').innerHTML = format(game.state.Clover4);
    document.getElementById('Clover4Cost').innerHTML = format(Math.floor(game.state.Clover4Cost));
	
	if(game.state.flower == 0 && game.state.Clover1 == 0 && game.state.Clover3 == 0 && game.state.Clover4 == 0)
	{
		hardReset();
	}
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
	
	document.getElementById('flower').innerHTML = game.state.flower;
        document.getElementById('Clover1').innerHTML = game.state.Clover1;
        document.getElementById('Clover1Cost').innerHTML = Math.floor(game.state.Clover1Cost * Math.pow(1.03,game.state.Clover1));
        document.getElementById('Clover3').innerHTML = game.state.Clover3;
        document.getElementById('Clover3Cost').innerHTML = Math.floor(game.state.Clover3Cost * Math.pow(1.05,game.state.Clover3));
        document.getElementById('Clover4').innerHTML = game.state.Clover4;
        document.getElementById('Clover4Cost').innerHTML = format(Math.floor(game.state.Clover4Cost * Math.pow(1.20,game.state.Clover4)));
}
