const questions = [
    {
        questions: "Which of the following is not a valid storage class in C?",
        answers: [
            { text: "auto", correct: false },
            { text: "Register", correct: false },
            { text: "Global", correct: false },
            { text: "dynamic", correct: true },

        ]
    },
    {
        questions: "Which of the following is a relational database management system (RDBMS)?",
        answers: [
            { text: "MongoDB", correct: false },
            { text: "Oracle", correct: true },
            { text: "Redis", correct: false },
            { text: "Cassendra", correct: false },

        ]
    },
    {
        questions: "What does the acronym SQL stand for?",
        answers: [
            { text: "Simple Query Language", correct: false },
            { text: "Structured Query Language", correct: true },
            { text: "Sequential Query Language", correct: false },
            { text: "Server Query Language", correct: false },

        ]
    },
    {
        questions: "In a binary tree, what is the maximum number of nodes at the 3rd level?",
        answers: [
            { text: "8", correct: true },
            { text: "4", correct: false },
            { text: "16", correct: false },
            { text: "32", correct: false },

        ]
    },
    {
        questions: "Which programming language is used for developing Android applications?",
        answers: [
            { text: "C++", correct: false },
            { text: "java", correct: true },
            { text: "Python", correct: false },
            { text: "SWIFT", correct: false },

        ]
    },
    {
        questions: "Which data structure is used to implement recursion?",
        answers: [
            { text: "Stack", correct: true },
            { text: "Queue", correct: false },
            { text: "Array", correct: false },
            { text: "Linked List", correct: false },

        ]
    },
    {
        questions: "Which of the following is an example of a non-volatile memory?",
        answers: [
            { text: "RAM", correct: false },
            { text: "Cache Memory", correct: false },
            { text: "ROM", correct: true },
            { text: "Virtual Memory", correct: false },

        ]
    },
    {
        questions: "Which of the following is not a valid HTTP status code?",
        answers: [
            { text: "200 OK", correct: false },
            { text: "404 Not Found", correct: false },
            { text: "500 Internal Server Error", correct: false },
            { text: "303 Redirection", correct: true },

        ]
    },
    {
        questions: "Which sorting algorithm has the best average-case time complexity?",
        answers: [
            { text: "Bubble Sort", correct: false },
            { text: "Insertion Sort", correct: false },
            { text: "Merge Sort", correct: true },
            { text: "Selection Sort", correct: false },

        ]
    },
    {
        questions: "Which of the following is not a valid HTML tag?",
        answers: [
            { text: "div", correct: false },
            { text: "span", correct: false },
            { text: "paragraph", correct: true },
            { text: "header", correct: false },

        ]
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("nextbutton");

let currentQuestionIndex = 0;
let score = 0;



function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {

    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.questions;

    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answers.correct) {
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e) {
    const SelectedBtn = e.target;
    const isCorrect = SelectedBtn.dataset.correct === "true";
    if (isCorrect) {
        SelectedBtn.classList.add("correct");
        score++;
    }
    else {
        SelectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");

        }
        button.disabled = "true";
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You have Scored ${score} out of ${questions.length}!!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextbutton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();

    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextbutton();
    }
    else{
        startQuiz();
    }
})

startQuiz();   