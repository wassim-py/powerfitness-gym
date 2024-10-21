// Store the decision tree as an object
const quizData = {
    start: {
        question: "Es-tu un Homme ou une Femme ?",
        options: {
            homme: 'homme',
            femme: 'femme'
        }
    },
    homme: {
        question: "Vous Favoriser gym ou fitness?",
        options: {
            gym: 'homme_gym',
            fitness: 'homme_fitness'
        }
    },
    femme: {
        question: "Vous Favoriser gym ou aerobic?",
        options: {
            gym: 'femme_gym',
            aerobic: 'femme_aerobic'
        }
    },
    homme_gym: {
        question: "Es-tu un étudiant ?",
        options: {
            oui: 'homme_gym_student',
            non: 'homme_gym_non'
        }
    },
    homme_fitness: {
        question: "Combien de fois par semaine peux-tu t'entraîner ?",
        options: {
            '1 fois par semain': '1800DA/month',
            '2 fois par semain': '2600DA/month',
            '3 fois par semain': '3200DA/month'
        }
    },
    homme_gym_student: {
        question: "Combien de fois par semaine peux-tu t'entraîner ?",
        options: {
            '4 times a week': '2000DA/month',
            '3 times a week': '1500DA/month'
        }
    },
    homme_gym_non: {
        question: "Vous Favoriser BASIC ou VIP/POWER+ subscription?",
        options: {
            BASIC: 'homme_gym_basic',
            'VIP/POWER+': 'homme_gym_vip'
        }
    },
    homme_gym_basic: {
        question: "Combien de fois par semaine peux-tu t'entraîner ?",
        options: {
            '3 fois par semain': '2000DA/month',
            '4 fois par semain': '2500DA/month',
            '5 fois par semain': '3000DA/month',
            '6 fois par semain': '3500DA/month'
        }
    },
    homme_gym_vip: {
        question: "Selectionne votre VIP/POWER+ plan:",
        options: {
            '20 times per month': '5800DA/month',
            '60 times per 3 months': '15,600DA/3 months',
            '120 times per 6 months': '27,000DA/6 months',
            '360 times per year': '46,800DA/year'
        }
    },
    homme_fitness_1_week: {
        question: "Selectionne votre plan:",
        options: {
            '1800DA/month': '1800DA/month',
        }
    },
    homme_fitness_2_week: {
        question: "Selectionne votre plan:",
        options: {
            '2600DA/month': '2600DA/month',
        }
    },
    homme_fitness_3_week: {
        question: "Selectionne votre plan:",
        options: {
            '3200DA/month': '3200DA/month',
        }
    },
    femme_gym: {
        question: "Es-tu un étudiante ?",
        options: {
            oui: 'femme_gym_student',
            non: 'femme_gym_non'
        }
    },
    femme_aerobic: {
        question: "Combien de fois par semaine peux-tu t'entraîner ?",
        options: {
            '1 fois par semain': 'femme_aerobic_1_week',
            '2 fois par semain': 'femme_aerobic_2_week',
            '3 fois par semain': '3200DA/month'
        }
    },
    femme_gym_student: {
        question: "Combien de fois par semaine peux-tu t'entraîner ?",
        options: {
            '1 fois par semain': '1500DA/month',
            '2 fois par semain': '2500DA/month'
        }
    },
    femme_gym_non: {
        question: "Vous Favoriser BASIC or VIP/POWER+ subscription?",
        options: {
            BASIC: 'femme_gym_basic',
            'VIP/POWER+': 'femme_gym_vip'
        }
    },
    femme_gym_basic: {
        question: "Combien de fois par semaine peux-tu t'entraîner ?",
        options: {
            '1 fois par semain': '2000DA/month',
            '2 fois par semain': '3000DA/month',
            '3 fois par semain': '3800DA/month',
            '4 fois par semain': '4500DA/month'
        }
    },
    femme_gym_vip: {
        question: "Selectione votre VIP/POWER+ plan:",
        options: {
            '8 gym sessions + 4 aerobics': '3800DA/month',
            '8 gym sessions + 8 aerobics': '4500DA/month'
        }
    },
    femme_aerobic_1_week: {
        question: "Selectionne votre plan:",
        options: {
            '1800DA/month': '1800DA/month',
            'VIP/POWER+': '3800DA/month + 8 sessions GYM'
        }
    },
    femme_aerobic_2_week: {
        question: "Selectionne votre plan:",
        options: {
            '2600DA/month': '2600DA/month',
            'VIP/POWER+': '3800DA/month + 8 sessions GYM'
        }
    },
    femme_aerobic_3_week: {
        question: "Selectionne votre plan:",
        options: {
            '3200DA/month': '3200DA/month',
        }
    }
};

// Initialize quiz state
let currentStep = 'start';

// Function to display the question and options
function displayQuestion(step) {
    const questionData = quizData[step];
    const questionText = document.getElementById("question-text");
    const optionsArea = document.getElementById("options");
    
    // Update the question text
    questionText.textContent = questionData.question;
    
    // Clear any existing options
    optionsArea.innerHTML = '';
    
    // Add options as buttons
    for (let option in questionData.options) {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = function() { nextStep(questionData.options[option]); };
        optionsArea.appendChild(button);
    }
}

// Move to the next step or display the result
function nextStep(next) {
    if (quizData[next]) {
        currentStep = next;
        displayQuestion(next);
    } else {
        displayResult(next); // Final plan reached
    }
}

// Display the result
function displayResult(plan) {
    document.getElementById("question-area").classList.add('hidden');
    document.getElementById("result").classList.remove('hidden');
    document.getElementById("plan-result").textContent = plan;
}

// Start the quiz
displayQuestion(currentStep);
