var dice = {
  sides: 6,
  roll: function() {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}


//Prints dice roll to the page

function printNumber(number) {
  var placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = number;
}

var button = document.getElementById('button');

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
};


function printNumber1(number) {
  var placeholder1 = document.getElementById('placeholder1');
  placeholder1.innerHTML = number;
}

var button = document.getElementById('button1');

button1.onclick = function() {
  var result = dice.roll();
  printNumber1(result);
};
