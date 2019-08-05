const questions = [
    {
        question: "How many lessons are there in JS & JQuery book?",
        options: ["12", "13", "14"],
        answer: "13"
    },
    {
        question: "What is the ASCII code of 'a'?",
        options: ["00110001", "01000001", "01100001", "01100010"],
        answer: "01100001"
    },
    {
        question: "What is the Keycode of Enter key?",
        options: ["12", "13", "14", "15"],
        answer: "13"
    },
    {
        question: "What the number of events in FORM EVENTS?",
        options: ["6", "7", "8", "9"],
        answer: "8"
    },
    {
        question: "What type of loop will always execute at least once?",
        options: ["for", "while", "do while"],
        answer: "do while"
    },
    {
        question: "Which of the following HTTP status codes means 'Not Found'?",
        options: ["200", "403", "404", "500"],
        answer: "404"
    },
       
    {   question: "What the number of Event Type?",
        options: ["4","5","6"],
        answer: "6"
    },
];


function load_question() {
    if (question_number >= questions.length) {
        frequency--;
        prompt_restart();
       
        return;
    }

    document.querySelector("#question").innerHTML = questions[question_number].question;
    const options = document.querySelector("#options");
    options.innerHTML = "";
    for (const option of questions[question_number].options) {
        options.innerHTML += `<button class="option">${option}</button>`;
    }

    document.querySelectorAll(".option").forEach(option => {
        option.onclick = () => {
            if (option.innerHTML === questions[question_number].answer) {
                correct++;
                
            }
            question_number++;

            document.querySelector("#correct").innerHTML = `${correct} of ${question_number}`;

            load_question();
           
        }
    });
}

function prompt_restart() {
  
    document.querySelector("#question").innerHTML = "Quiz done!";
    const options = document.querySelector("#options");
    
    if(frequency) {
        options.innerHTML = `<button onclick="restart()">Restart</button><br/>Quiz done!<br/><img src=go.jpg />"<br/><br/> `;
    } else {
        document.querySelectorAll("div")[1].innerHTML = `<h2>Thank you. </h2>`;
        options.innerHTML = `<h1>Congratulation!</h1>`;
        document.querySelector("#question").innerHTML = "<br/>Quiz done!<br/><img src=cat.png />";
      
    }
   
  }


function restart() {
    question_number = 0;
    correct = 0;
   
    shuffleArray(questions);
    questions.forEach( question => {
        shuffleArray(question.options);
    });
    load_question();
    
}

// shuffle questions and options each question
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
 // initialize variables
 let question_number = 0;
 let correct = 0;
 let frequency = 3;
 
 document.addEventListener("DOMContentLoaded", () => {

     restart();
  
 });
 