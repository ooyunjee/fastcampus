true
    ? console.log('true')
    : console.log('false');

var condition = 'D';

condition === 'B'
    ? console.log('Condition is B')
    : condition === 'C'
        ? console.log('Condition is C')
        : condition === 'A'
            ? console.log('Condition is A')
            : console.error('Condition is D');

function getSomeMoney(money) {
    // money = money !== undefined ? money : 100;
    // money = money
    //     ? money
    //     : money === 0
    //         ? money = 0
    //         : 100;

    if (money != 0) {
        money = money || 100;
    }

    return money;
}

var result_message = getSomeMoney(0);
console.log('result_message: ', result_message);

var condition = true;
var excuteFn = function(condition) {
  console.log(condition);
}

if(condition) { excuteFn(condition); }
condition && excuteFn(condition);

if(!condition) { excuteFn(condition); }
condition || excuteFn(condition);

var vw = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
console.log(vw);


var avengers = ['hulk', 'iron man', 'captain', 'thor'];

switch(avengers[2]) {
  case 'hulk'   :
    console.log('hulk');
    break;
  case 'iron man'   :
    console.log('iron man');
    break;
  case 'captain'   :
    console.log('captain');
    break;
  case 'thor'   :
    console.log('thor');
    break;
}
