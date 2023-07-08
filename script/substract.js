const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
let answer = 0;

const generateEquation = () => {

        // random numbers
        let num1 = Math.floor((Math.random() * 15));
        let num2 = Math.floor((Math.random() * 15));

        // dummy answers 
        const dummyAnswer1 = Math.floor(Math.random() * 30);
        const dummyAnswer2 = Math.floor(Math.random() * 30);
        let newAnswer = [];

        // correct answer
        answer = num1 - num2;


        // changing inner html for num1 and num2
        document.querySelector('#num1').innerHTML = num1;
        document.querySelector('#num2').innerHTML = num2;

        // array of all the answers
        const allAnswers = [answer, dummyAnswer1, dummyAnswer2];


        
        // suffle allanswer array
        for (i = allAnswers.length; i--;) {
            newAnswer.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
        }


        // changing inner html for answers
        option1.innerHTML = newAnswer[0];
        option2.innerHTML = newAnswer[1];
        option3.innerHTML = newAnswer[2];
    }



option1.addEventListener('click', () => {
        if (option1.innerHTML == answer) {
            generateEquation();
        } else {
            alert('selected answer is wrong');
        }
})


option2.addEventListener('click', () => {
    if (option2.innerHTML == answer) {
        generateEquation();
    } else {
        alert('selected answer is wrong');
    }
})


option3.addEventListener('click', () => {
    if (option3.innerHTML == answer) {
        generateEquation();
    } else {
        alert('selected answer is wrong');
    }
})


generateEquation();

