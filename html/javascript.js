
const questions = [
    {
        question: "What are some of the effects of Racism?",
        options: ["Depression", 
	"PTSD", 
	"Anxiety", 
	"All of the above"],
        correctAnswer: 3
    },
    {
        question: "All of these shows how stereotyping cause Racism EXCEPT one.",
        options: [
	"Simplifies and Generalizes a group of people",
	"Promotes equality", 
	"Leads to biases", 
	"Disables Individuality and power"],
        correctAnswer: 1
    },
    {
        question: "How does Racism affect people financially?",
        options: [
	"Gives job opportunities", 
	"Medical Costs of mental health issues", 
	"It does not affect people financially", 
	"Can improve financial opportunities"],
        correctAnswer: 1
    },
    {
        question: "What are some ways that you can avoid as a student to avoid Racism to happen among your peers?",
        options: [
	"Spread Awareness", 
	"Talk to my peers when they are crossing a boundary", 
	"Make generalizations about a group of people in my school about their nationality", 
	"Cooperate during seminars"],
        correctAnswer: 2
    }
];

function startQuiz() {
    // Hide the start button and show the quiz container
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    loadQuiz();
}

function loadQuiz() {
    const quizContainer = document.getElementById("quiz");
    let quizContent = "";

    questions.forEach((question, index) => {
        quizContent += `
            <div class="question">
                ${index + 1}. ${question.question}
            </div>
            <div class="options">
                ${question.options.map((option, i) => `
                    <label>
                        <input type="radio" name="question${index}" value="${i}">
                        ${option}
                    </label>
                `).join("")}
            </div>
        `;
    });

    quizContainer.innerHTML = quizContent;
}

function submitQuiz() {
    let score = 0;

    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        const options = document.querySelectorAll(`input[name="question${index}"]`);
        
        if (selectedOption) {
            const selectedValue = parseInt(selectedOption.value);

            // Mark the correct answer in green
            options.forEach((option, i) => {
                if (i === question.correctAnswer) {
                    option.parentElement.classList.add("correct");
                }
            });

            // Mark the wrong answer in red
            if (selectedValue !== question.correctAnswer) {
                options.forEach((option, i) => {
                    if (i === selectedValue) {
                        option.parentElement.classList.add("incorrect");
                    }
                });
            } else {
                score++;
            }
        }
    });

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `You scored ${score} out of ${questions.length}`;
}
