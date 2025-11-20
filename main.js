// Variables globales
let currentQuestionIndex = 0;
let userAnswers = {};
let quizStarted = false;
let vantaEffect;

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    initVantaBackground();
    initializeQuiz();
});

// Inicializar fondo animado
function initVantaBackground() {
    vantaEffect = VANTA.CLOUDS({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        skyColor: 0x1a202c,
        cloudColor: 0x2d3748,
        cloudShadowColor: 0x0f1419,
        sunColor: 0x38a169,
        sunGlareColor: 0x48bb78,
        sunlightColor: 0x38a169,
        speed: 0.8
    });
}

// Inicializar el cuestionario
function initializeQuiz() {
    // Mostrar pantalla de bienvenida
    showScreen('welcome-screen');
    
    // Inicializar estadísticas
    updateProgress();
    updateScore();
}

// Mostrar pantalla específica
function showScreen(screenId) {
    const screens = ['welcome-screen', 'quiz-screen', 'results-screen'];
    screens.forEach(screen => {
        const element = document.getElementById(screen);
        if (screen === screenId) {
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
        }
    });
}

// Comenzar el cuestionario
function startQuiz() {
    quizStarted = true;
    currentQuestionIndex = 0;
    userAnswers = {};
    
    showScreen('quiz-screen');
    loadQuestion();
    
    // Animación de transición
    anime({
        targets: '#quiz-screen',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 600,
        easing: 'easeOutQuart'
    });
}

// Cargar pregunta actual
function loadQuestion() {
    const question = quizData.questions[currentQuestionIndex];
    const container = document.getElementById('question-container');
    
    container.innerHTML = `
        <div class="question-card glass-card p-6 mb-6">
            <div class="flex items-center justify-between mb-4">
                <span class="domain-badge domain-${question.domain}">
                    ${question.domainName}
                </span>
                <div class="text-sm text-gray-400">
                    ${question.correctAnswers.length > 1 ? 'Múltiples respuestas' : 'Una respuesta'}
                </div>
            </div>
            
            <h3 class="text-xl font-semibold mb-6 text-white">
                ${question.id}. ${question.question}
            </h3>
            
            <div class="space-y-3 mb-6" id="options-container">
                ${question.options.map(option => `
                    <button 
                        class="option-button w-full text-left p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all duration-200"
                        onclick="selectAnswer('${option.letter}')"
                        data-option="${option.letter}"
                    >
                        <div class="flex items-center">
                            <div class="w-6 h-6 rounded-full border-2 border-gray-500 mr-3 flex items-center justify-center">
                                <div class="w-3 h-3 rounded-full bg-green-400 hidden option-indicator"></div>
                            </div>
                            <span class="font-mono font-semibold mr-3">${option.letter}.</span>
                            <span>${option.text}</span>
                        </div>
                    </button>
                `).join('')}
            </div>
            
            <div class="explanation-card" id="explanation-${question.id}">
                <div class="flex items-start">
                    <i class="fas fa-lightbulb text-yellow-400 mr-3 mt-1"></i>
                    <div>
                        <h4 class="font-semibold mb-2">Explicación:</h4>
                        <p class="text-gray-300">${question.explanation}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Restaurar respuestas previas
    if (userAnswers[question.id]) {
        userAnswers[question.id].forEach(answer => {
            const button = container.querySelector(`[data-option="${answer}"]`);
            if (button) {
                selectAnswerElement(button);
            }
        });
    }
    
    updateNavigationButtons();
    updateProgress();
    
    // Animación de entrada
    anime({
        targets: '.question-card',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 500,
        easing: 'easeOutQuart'
    });
}

// Seleccionar respuesta
function selectAnswer(optionLetter) {
    const question = quizData.questions[currentQuestionIndex];
    const button = document.querySelector(`[data-option="${optionLetter}"]`);
    
    if (question.correctAnswers.length === 1) {
        // Respuesta única - deseleccionar otras
        document.querySelectorAll('.option-button').forEach(btn => {
            deselectAnswerElement(btn);
        });
        selectAnswerElement(button);
        userAnswers[question.id] = [optionLetter];
    } else {
        // Múltiples respuestas
        if (userAnswers[question.id] && userAnswers[question.id].includes(optionLetter)) {
            // Deseleccionar
            deselectAnswerElement(button);
            userAnswers[question.id] = userAnswers[question.id].filter(a => a !== optionLetter);
            if (userAnswers[question.id].length === 0) {
                delete userAnswers[question.id];
            }
        } else {
            // Seleccionar
            selectAnswerElement(button);
            if (!userAnswers[question.id]) {
                userAnswers[question.id] = [];
            }
            userAnswers[question.id].push(optionLetter);
        }
    }
    
    updateNavigationButtons();
}

// Seleccionar elemento visualmente
function selectAnswerElement(button) {
    button.classList.add('selected');
    const indicator = button.querySelector('.option-indicator');
    if (indicator) {
        indicator.classList.remove('hidden');
    }
}

// Deseleccionar elemento visualmente
function deselectAnswerElement(button) {
    button.classList.remove('selected');
    const indicator = button.querySelector('.option-indicator');
    if (indicator) {
        indicator.classList.add('hidden');
    }
}

// Mostrar pista
function showHint() {
    const question = quizData.questions[currentQuestionIndex];
    
    // Crear notificación con pista
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 glass-card p-4 max-w-sm z-50';
    notification.innerHTML = `
        <div class="flex items-start">
            <i class="fas fa-lightbulb text-yellow-400 mr-3 mt-1"></i>
            <div>
                <h4 class="font-semibold mb-2">Pista:</h4>
                <p class="text-gray-300 text-sm">${question.hint}</p>
            </div>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-gray-400 hover:text-white">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animación de entrada
    anime({
        targets: notification,
        opacity: [0, 1],
        translateX: [100, 0],
        duration: 300,
        easing: 'easeOutQuart'
    });
    
    // Auto-remover después de 5 segundos
    setTimeout(() => {
        if (notification.parentElement) {
            anime({
                targets: notification,
                opacity: [1, 0],
                translateX: [0, 100],
                duration: 300,
                easing: 'easeInQuart',
                complete: () => notification.remove()
            });
        }
    }, 5000);
}

// Pregunta anterior
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
        
        // Animación de transición
        anime({
            targets: '.question-card',
            opacity: [0, 1],
            translateX: [-30, 0],
            duration: 400,
            easing: 'easeOutQuart'
        });
    }
}

// Siguiente pregunta
function nextQuestion() {
    if (currentQuestionIndex < quizData.questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
        
        // Animación de transición
        anime({
            targets: '.question-card',
            opacity: [0, 1],
            translateX: [30, 0],
            duration: 400,
            easing: 'easeOutQuart'
        });
    } else {
        finishQuiz();
    }
}

// Actualizar botones de navegación
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === quizData.questions.length - 1) {
        nextBtn.innerHTML = 'Finalizar <i class="fas fa-check ml-2"></i>';
    } else {
        nextBtn.innerHTML = 'Siguiente <i class="fas fa-arrow-right ml-2"></i>';
    }
}

// Actualizar progreso
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / quizData.questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
}

// Actualizar puntuación
function updateScore() {
    const answered = Object.keys(userAnswers).length;
    document.getElementById('score-display').textContent = `${answered}/${quizData.questions.length}`;
}

// Finalizar cuestionario
function finishQuiz() {
    calculateResults();
    showResults();
}

// Calcular resultados
function calculateResults() {
    const results = {
        correct: 0,
        incorrect: 0,
        domainResults: {},
        failedQuestions: []
    };
    
    // Inicializar resultados por dominio
    Object.keys(quizData.domains).forEach(domainId => {
        results.domainResults[domainId] = {
            name: quizData.domains[domainId].name,
            correct: 0,
            total: 0,
            percentage: 0
        };
    });
    
    // Evaluar cada pregunta
    quizData.questions.forEach(question => {
        const domainId = question.domain;
        results.domainResults[domainId].total++;
        
        const userAnswer = userAnswers[question.id] || [];
        const isCorrect = arraysEqual(userAnswer.sort(), question.correctAnswers.sort());
        
        if (isCorrect) {
            results.correct++;
            results.domainResults[domainId].correct++;
        } else {
            results.incorrect++;
            results.failedQuestions.push({
                id: question.id,
                question: question.question,
                domain: question.domainName,
                userAnswer: userAnswer,
                correctAnswer: question.correctAnswers,
                explanation: question.explanation
            });
        }
    });
    
    // Calcular porcentajes por dominio
    Object.keys(results.domainResults).forEach(domainId => {
        const domain = results.domainResults[domainId];
        if (domain.total > 0) {
            domain.percentage = Math.round((domain.correct / domain.total) * 100);
        }
    });
    
    results.percentage = Math.round((results.correct / quizData.questions.length) * 100);
    
    window.quizResults = results;
}

// Verificar igualdad de arrays
function arraysEqual(a, b) {
    return a.length === b.length && a.every((val, i) => val === b[i]);
}

// Mostrar resultados
function showResults() {
    showScreen('results-screen');
    
    const results = window.quizResults;
    
    // Actualizar estadísticas principales
    document.getElementById('correct-count').textContent = results.correct;
    document.getElementById('incorrect-count').textContent = results.incorrect;
    document.getElementById('percentage-score').textContent = `${results.percentage}%`;
    
    // Mostrar resultados por dominio
    const domainContainer = document.getElementById('domain-results');
    domainContainer.innerHTML = `
        <h3 class="text-xl font-semibold mb-4">Desglose por Dominios</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${Object.values(results.domainResults).map(domain => `
                <div class="glass-card p-4">
                    <div class="flex items-center justify-between mb-2">
                        <h4 class="font-semibold text-sm">${domain.name}</h4>
                        <span class="text-xs text-gray-400">${domain.correct}/${domain.total}</span>
                    </div>
                    <div class="bg-gray-700 rounded-full h-2 mb-2">
                        <div class="bg-green-400 h-2 rounded-full transition-all duration-500" 
                             style="width: ${domain.percentage}%"></div>
                    </div>
                    <div class="text-right text-sm font-semibold">${domain.percentage}%</div>
                </div>
            `).join('')}
        </div>
    `;
    
    // Animación de entrada
    anime({
        targets: '#results-screen .glass-card',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 600,
        delay: anime.stagger(200),
        easing: 'easeOutQuart'
    });
}

// Obtener recomendaciones de la API
async function getRecommendations() {
    const container = document.getElementById('api-response-container');
    const content = document.getElementById('api-response-content');
    
    container.classList.remove('hidden');
    container.scrollIntoView({ behavior: 'smooth' });
    
    // Preparar datos de falencias
    const failedDomains = {};
    window.quizResults.failedQuestions.forEach(failed => {
        const domain = failed.domain;
        if (!failedDomains[domain]) {
            failedDomains[domain] = [];
        }
        failedDomains[domain].push({
            question: failed.question,
            concept: extractConcept(failed.question)
        });
    });
    
    // Simular llamada a API (reemplazar con llamada real)
    try {
        const recommendations = await callRecommendationAPI(failedDomains);
        displayRecommendations(recommendations);
    } catch (error) {
        console.error('Error al obtener recomendaciones:', error);
        displayMockRecommendations(failedDomains);
    }
}

// Extraer concepto principal de la pregunta
function extractConcept(question) {
    // Lógica simple para extraer conceptos clave
    const keywords = ['GitHub Copilot', 'IA', 'seguridad', 'privacidad', 'API', 'métricas', 'optimización', 'código'];
    for (let keyword of keywords) {
        if (question.toLowerCase().includes(keyword.toLowerCase())) {
            return keyword;
        }
    }
    return 'concepto general';
}

// Llamada simulada a la API
async function callRecommendationAPI(failedDomains) {
    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Esta es una simulación - reemplazar con llamada real
    const apiEndpoint = 'https://TU_API_AQUI/recommendations';
    
    // Datos que se enviarían a la API
    const requestData = {
        failedDomains: failedDomains,
        totalQuestions: quizData.questions.length,
        correctAnswers: window.quizResults.correct,
        percentage: window.quizResults.percentage,
        timestamp: new Date().toISOString()
    };
    
    console.log('Datos a enviar a la API:', requestData);
    
    // Respuesta simulada de la API
    return {
        recommendations: generateMockRecommendations(failedDomains),
        studyPlan: generateStudyPlan(failedDomains),
        estimatedTime: calculateEstimatedTime(failedDomains),
        nextSteps: [
            "Revisa las explicaciones de las preguntas falladas",
            "Estudia los dominios con menor puntuación",
            "Practica con ejemplos prácticos",
            "Vuelve a intentar el cuestionario"
        ]
    };
}

// Generar recomendaciones simuladas
function generateMockRecommendations(failedDomains) {
    const recommendations = [];
    
    Object.entries(failedDomains).forEach(([domain, questions]) => {
        recommendations.push({
            domain: domain,
            priority: 'high',
            topics: questions.map(q => q.concept),
            resources: [
                `Documentación oficial de ${domain}`,
                `Tutoriales prácticos de ${domain}`,
                `Ejemplos y casos de uso reales`
            ],
            estimatedHours: Math.ceil(questions.length * 1.5)
        });
    });
    
    return recommendations;
}

// Generar plan de estudio
function generateStudyPlan(failedDomains) {
    const totalFailed = Object.values(failedDomains).reduce((sum, questions) => sum + questions.length, 0);
    
    return {
        totalWeeks: Math.ceil(totalFailed / 3),
        weeklyHours: 5,
        phases: [
            {
                phase: "Fundamentos",
                weeks: 1,
                focus: "Repasar conceptos básicos de los dominios fallidos"
            },
            {
                phase: "Práctica",
                weeks: 2,
                focus: "Aplicar conocimiento en ejercicios prácticos"
            },
            {
                phase: "Evaluación",
                weeks: 1,
                focus: "Realizar pruebas de práctica y revisar"
            }
        ]
    };
}

// Calcular tiempo estimado
function calculateEstimatedTime(failedDomains) {
    const totalQuestions = Object.values(failedDomains).reduce((sum, questions) => sum + questions.length, 0);
    return Math.ceil(totalQuestions * 1.5); // 1.5 horas por pregunta fallida
}

// Mostrar recomendaciones en la UI
function displayRecommendations(data) {
    const content = document.getElementById('api-response-content');
    
    content.innerHTML = `
        <div class="space-y-6">
            ${data.recommendations.map(rec => `
                <div class="glass-card p-6">
                    <div class="flex items-center justify-between mb-4">
                        <h4 class="text-lg font-semibold">${rec.domain}</h4>
                        <span class="px-3 py-1 bg-red-500 text-white rounded-full text-xs font-semibold">
                            Prioridad Alta
                        </span>
                    </div>
                    
                    <div class="mb-4">
                        <h5 class="font-semibold mb-2">Temas a estudiar:</h5>
                        <div class="flex flex-wrap gap-2">
                            ${rec.topics.map(topic => `
                                <span class="px-2 py-1 bg-blue-500 text-white rounded text-xs">${topic}</span>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="mb-4">
                        <h5 class="font-semibold mb-2">Recursos recomendados:</h5>
                        <ul class="list-disc list-inside space-y-1 text-sm">
                            ${rec.resources.map(resource => `<li>${resource}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="text-sm text-gray-300">
                        <i class="fas fa-clock mr-2"></i>
                        Tiempo estimado: ${rec.estimatedHours} horas
                    </div>
                </div>
            `).join('')}
            
            <div class="glass-card p-6">
                <h4 class="text-lg font-semibold mb-4">Plan de Estudio Recomendado</h4>
                <div class="grid md:grid-cols-2 gap-4">
                    <div>
                        <h5 class="font-semibold mb-2">Duración Total:</h5>
                        <p class="text-2xl font-bold text-green-400">${data.studyPlan.totalWeeks} semanas</p>
                        <p class="text-sm text-gray-400">${data.studyPlan.weeklyHours} horas por semana</p>
                    </div>
                    <div>
                        <h5 class="font-semibold mb-2">Tiempo estimado total:</h5>
                        <p class="text-2xl font-bold text-blue-400">${data.estimatedTime} horas</p>
                    </div>
                </div>
                
                <div class="mt-6">
                    <h5 class="font-semibold mb-3">Fases del plan:</h5>
                    <div class="space-y-3">
                        ${data.studyPlan.phases.map((phase, index) => `
                            <div class="flex items-center p-3 bg-gray-700 rounded-lg">
                                <div class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                                    ${index + 1}
                                </div>
                                <div>
                                    <h6 class="font-semibold">${phase.phase} (${phase.weeks} semanas)</h6>
                                    <p class="text-sm text-gray-400">${phase.focus}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
            
            <div class="glass-card p-6">
                <h4 class="text-lg font-semibold mb-4">Próximos Pasos</h4>
                <div class="space-y-2">
                    ${data.nextSteps.map((step, index) => `
                        <div class="flex items-center">
                            <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                                ${index + 1}
                            </div>
                            <span>${step}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="text-center">
                <button class="btn-primary px-8 py-3" onclick="restartQuiz()">
                    <i class="fas fa-redo mr-2"></i>
                    Volver a Intentar
                </button>
            </div>
        </div>
    `;
}

// Mostrar recomendaciones simuladas (fallback)
function displayMockRecommendations(failedDomains) {
    const mockData = {
        recommendations: generateMockRecommendations(failedDomains),
        studyPlan: generateStudyPlan(failedDomains),
        estimatedTime: calculateEstimatedTime(failedDomains),
        nextSteps: [
            "Revisa las explicaciones de las preguntas falladas",
            "Estudia los dominios con menor puntuación",
            "Practica con ejemplos prácticos",
            "Vuelve a intentar el cuestionario"
        ]
    };
    
    displayRecommendations(mockData);
}

// Reiniciar cuestionario
function restartQuiz() {
    currentQuestionIndex = 0;
    userAnswers = {};
    quizStarted = false;
    
    // Ocultar resultados
    document.getElementById('api-response-container').classList.add('hidden');
    
    // Volver a pantalla de bienvenida
    showScreen('welcome-screen');
    updateProgress();
    updateScore();
}

// Animaciones con Anime.js (fallback si no está disponible)
const anime = window.anime || {
    // Implementación mínima de anime.js para funcionalidad básica
    timeline: () => ({
        add: function() { return this; },
        play: function() { return this; }
    }),
    stagger: (delay) => delay,
    
    // Función principal de animación
    animate: function(targets, options) {
        const elements = typeof targets === 'string' ? document.querySelectorAll(targets) : [targets];
        elements.forEach(el => {
            if (el && options.opacity) {
                el.style.opacity = options.opacity[1] || options.opacity;
            }
            if (el && options.translateY) {
                el.style.transform = `translateY(${options.translateY[1] || options.translateY}px)`;
            }
        });
    }
};

// Asignar anime.animate a anime para compatibilidad
if (typeof anime !== 'undefined' && !anime.animate) {
    anime.animate = anime;
}