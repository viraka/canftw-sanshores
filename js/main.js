import '../css/style.css'


//quiz constants

//use backend for questions
const questions = [
    {
        question: "What does 'IPR' stand for?",
        options: ["Intellectual Property Rights", "Internet Protocol Routing", "Indian Patent Registry", "Innovative Product Registration"],
        answer: 0
    },
    {
        question: "Which type of intellectual property protects inventions?",
        options: ["Trademark", "Copyright", "Design Patent", "Patent"],
        answer: 3
    },
    {
        question: "What is a trademark used to protect?",
        options: ["Inventions", "Brands and Logos", "Literary Works", "Artistic Creations"],
        answer: 1
    },
    {
        question: "Which international organization is responsible for administering patents and trademarks worldwide?",
        options: ["United Nations (UN)", "World Trade Organization (WTO)", "World Intellectual Property Organization (WIPO)", "International Patent Bureau (IPB)"],
        answer: 2
    },
    {
        question: "What is the term for the unauthorized use or imitation of the trademark or brand name of another to deceive the public, especially when done to sell goods or services?",
        options: ["Counterfeiting", "Plagiarism", "Reverse engineering", "Fair use"],
        answer: 0
    },
    {
        question: "In the context of patents, what does the term 'prior art' refer to?",
        options: ["Art created before the 20th century", "Art that is not protected by copyright", "Existing knowledge and technology that is publicly available", "A form of art protected by design patents"],
        answer: 2
    },
    {
        question: "What is the main purpose of a copyright?",
        options: ["To protect inventions", "To protect brand names", "To protect literary and artistic works", "To protect trade secrets"],
        answer: 2
    },
    {
        question: "What is the term for the exclusive legal rights granted to the creator of an original work, such as a book, song, or software?",
        options: ["Trademark", "Patent", "Copyright", "Trade Secret"],
        answer: 2
    },
    {
        question: "What type of intellectual property protection is granted automatically when a work is created and fixed in a tangible medium that is perceptible either directly or with the aid of a machine or device?",
        options: ["Trademark", "Copyright", "Patent", "Trade Secret"],
        answer: 1
    },
    {
        question: "What does 'DMCA' stand for?",
        options: ["Digital Media Copyright Act", "Digital Millennium Copyright Act", "Domain Name Control Authority", "Data Management and Content Analysis"],
        answer: 1
    }
];

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const radioInputs = document.querySelectorAll('input[type="radio"]');
const x = document.getElementById("sresult");
let currentQuestion = 0;


//use backend
const iprFacts = {
    all: [
        "The first U.S. patent was issued in 1790 to Samuel Hopkins for a method of producing potash.",
        "A patent gives the inventor the exclusive right to make, use, and sell their invention for a limited period.",
        "The longest-running patent in history is for a hair growth product and was granted in 1980.",
        "The first registered trademark was Bass Brewery's red triangle in 1876.",
        "Trademarks can include sounds, smells, and even colors, not just logos or names.",
        "The Coca-Cola logo is one of the most recognized trademarks globally.",
        "The copyright symbol (©) wasn't used in the United States until 1909.",
        "Copyright protection typically lasts for the creator's lifetime plus 70 years.",
        "Fair use allows limited use of copyrighted material without permission for purposes like education and commentary.",
        "A design patent protects the unique, ornamental design of a functional item.",
        "Design patents are typically easier and faster to obtain compared to utility patents.",
        "Famous examples of design patents include the iconic shape of the Coca-Cola bottle and the Apple iPhone's design.",
        "Trademark infringement can occur if a similar trademark causes confusion among consumers.",
        "Trade secret protection does not require registration but relies on keeping information confidential.",
        "The Berne Convention is an international agreement that standardizes copyright protection among member countries.",
        "In the U.S., works created by the federal government are not eligible for copyright protection.",
        "The concept of 'public domain' refers to creative works that are not protected by copyright and can be freely used by the public.",
        "The process of trademark registration involves searching existing trademarks to ensure uniqueness.",
        "Copyright holders have the exclusive right to reproduce, distribute, and adapt their creative works.",
        "The famous phrase 'Just Do It' is a registered trademark of Nike."
    ]
};
//constants for quiz


// To generate a random fact:
function getRandomFact() {
    const allFacts = iprFacts.all;
    const randomIndex = Math.floor(Math.random() * allFacts.length);
    return allFacts[randomIndex];
}

// Example usage:
const randomIPRFact = getRandomFact();
console.log(randomIPRFact);

function loadQuestion() {
    const currentQ = questions[currentQuestion];
    questionContainer.textContent = currentQ.question;

    for (let i = 0; i < radioInputs.length; i++) {
        radioInputs[i].value = i;
        radioInputs[i].checked = false;
        radioInputs[i].nextElementSibling.textContent = currentQ.options[i];
    }
}

function checkAnswer() {
    const qs = document.querySelector('input[name="answer"]:checked');
    if (!qs) {
        alert("Please select an answer.");
        return;
    }
    const selectedAnswer = parseInt(qs.value);
    const currentQ = questions[currentQuestion];

    if (selectedAnswer === currentQ.answer) {
        alert("Correct!");
        x.textContent = parseInt(x.textContent) + 1;

    } else {
        alert("Incorrect. The correct answer is: " + currentQ.options[currentQ.answer]);
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert("Quiz completed!");
        // You can add code to handle quiz completion, such as showing a score.
    }
}

nextButton.addEventListener("click", () => {
    checkAnswer();
});

loadQuestion();