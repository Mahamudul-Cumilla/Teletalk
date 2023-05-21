var day = 'hhhjhhu';

switch(day) {
    case 'Saturday':
       console.log('this is saturday');
       break;
    
    case 'Sunday':
        console.log('this is holiday');
        break;
    default:
        console.log("This is my default day");
}

for(var i=0; i < 10; i++){
    console.log(i + ' My another text' + day);
}

var number = 1;

do {
    console.log(number);
    number++;
} while(number > 10);

while(number < 10) {
    console.log(number)
    number++
}