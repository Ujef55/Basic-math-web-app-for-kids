const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
let answer = 0;

const generateEquation = () => {

        // random numbers
        let num1 = Math.floor((Math.random() * 20));
        let num2 = Math.floor((Math.random() * 20));

        // dummy answers 
        const dummyAnswer1 = Math.floor(Math.random() * 40);
        const dummyAnswer2 = Math.floor(Math.random() * 40);

        // correct answer
        answer = num1 + num2;


        // changing inner html for num1 and num2
        document.querySelector('#num1').innerHTML = num1;
        document.querySelector('#num2').innerHTML = num2;

        

        // changing inner html for answers
        option1.innerHTML = answer;
        option2.innerHTML = dummyAnswer1;
        option3.innerHTML = dummyAnswer2;
    }



option1.addEventListener('click', () => {
        if (option1.innerHTML == answer) {
            generateEquation();
        } else {
            alert('You selected wrong answer');
        }
})


option2.addEventListener('click', () => {
    if (option2.innerHTML == answer) {
        generateEquation();
    } else {
        alert('You selected wrong answer');
    }
})


option3.addEventListener('click', () => {
    if (option3.innerHTML == answer) {
        generateEquation();
    } else {
        alert('You selected wrong answer');
    }
})


generateEquation();

