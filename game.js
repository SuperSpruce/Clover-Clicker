var flower = 0;

var tap = 1;

var Clover1Cost = 50;

function MakeFlowersOutOfThinAir(C0){
    flower += C0;
    document.getElementById("flower").innerHTML = flower;
};

var Clover1 = 0;

function buyC1(){
    var C1C = Math.floor(Clover1Cost * Math.pow(1.03,Clover1));     //works out the cost of this One Leaf Clover
    if(flower >= C1C){                                   //checks that the player can afford the One Leaf Clover
        Clover1 = Clover1 + 1;                                   //increases number of One Leaf Clovers
    	flower = flower - C1C;                          //removes the flowers spent
        document.getElementById('Clover1').innerHTML = Clover1;  //updates the number of One Leaf Clovers for the user
        document.getElementById('flower').innerHTML = flower;  //updates the number of flowers for the user
    };
    var nextC1C = Math.floor(Clover1Cost * Math.pow(1.03,Clover1));       //works out the cost of the next One Leaf Clover
    document.getElementById('C1C').innerHTML = nextC1C;  //updates the One Leaf Clover cost for the user
};

window.setInterval(function(){
	
	MakeFlowersOutOfThinAir(Clover1);
	
}, 1000);



var game = {
  state: {
  flower: flower,
  Clover1: Clover1,
  Clover1Cost: Clover1Cost,
  tap: tap
},
  
  save: function(){
localStorage.setItem("state",JSON.stringify(game.state));
  },

load: function(){
   game.state = JSON.parse(localStorage.getItem('state'));
  game.updateDisplay()
},
  
updateDisplay: function() {
        document.getElementById('flower').value = game.flower;
        document.getElementById('Clover1').value = game.Clover1;
        document.getElementById('Clover1Cost').value = game.Clover1Cost;
        document.getElementById('tap').value = game.tap;
    },
      
autosave: function(){
  var savePeriod = 15000; //15 seconds
        window.setInterval(game.save, savePeriod);
}
}
