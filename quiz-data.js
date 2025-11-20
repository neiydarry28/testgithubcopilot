// Datos del cuestionario con categorización por dominios
const quizData = {
    questions: [
        {
            id: 1,
            domain: 1,
            domainName: "IA Responsable",
            question: "¿Qué principio ético de IA de Microsoft tiene como objetivo garantizar que los sistemas de IA traten a todas las personas por igual?",
            options: [
                { letter: "A", text: "Privacidad y Seguridad" },
                { letter: "B", text: "Equidad" },
                { letter: "C", text: "Fiabilidad y Seguridad" },
                { letter: "D", text: "Inclusividad" }
            ],
            correctAnswers: ["B"],
            explanation: "La equidad se enfoca en asegurar que los sistemas de IA no discriminen ni muestren sesgos contra ningún individuo o grupo de personas. Este principio es crítico para promover resultados equitativos y evitar que la IA perpetúe las desigualdades sociales existentes.",
            hint: "Piensa en el principio que busca igualdad de trato para todos los usuarios."
        },
        {
            id: 2,
            domain: 1,
            domainName: "IA Responsable",
            question: "¿Qué se puede hacer durante el desarrollo de la IA para minimizar el sesgo?",
            options: [
                { letter: "A", text: "Recolectar cantidades masivas de datos para el entrenamiento" },
                { letter: "B", text: "Enfocarse en la precisión de los datos" },
                { letter: "C", text: "Usar datos diversos, métricas de equidad y supervisión humana" },
                { letter: "D", text: "Mejorar la eficiencia computacional y la velocidad" }
            ],
            correctAnswers: ["C"],
            explanation: "Minimizar el sesgo requiere una estrategia multifacética: datos diversos, métricas de equidad para medir rendimiento en subgrupos sensibles, y supervisión humana para evaluar daños en el mundo real.",
            hint: "La diversidad y supervisión son clave para reducir sesgos."
        },
        {
            id: 3,
            domain: 1,
            domainName: "IA Responsable",
            question: "¿Por qué es importante garantizar la seguridad del código utilizado en las herramientas de IA Generativa?",
            options: [
                { letter: "A", text: "Previene el acceso no autorizado y posibles brechas de datos" },
                { letter: "B", text: "Permite al sistema manejar conjuntos de datos más grandes" },
                { letter: "C", text: "Mantiene la integridad del sistema de IA" },
                { letter: "D", text: "Apoya el desarrollo de características más avanzadas" }
            ],
            correctAnswers: ["A"],
            explanation: "El código inseguro crea vulnerabilidades que los atacantes pueden explotar para obtener control, robar datos sensibles o exfiltrar valiosos pesos del modelo.",
            hint: "La seguridad primero previene ataques maliciosos."
        },
        {
            id: 4,
            domain: 1,
            domainName: "IA Responsable",
            question: "¿Cómo puede un gestor de redes sociales promover transparencia al usar IA para filtrar contenido?",
            options: [
                { letter: "A", text: "Proporcionar explicaciones claras sobre el filtrado de IA" },
                { letter: "B", text: "Confiar en compañías de IA de buena reputación" },
                { letter: "C", text: "Actualizar regularmente el algoritmo" },
                { letter: "D", text: "Enfocarse en la satisfacción del usuario" }
            ],
            correctAnswers: ["A"],
            explanation: "La transparencia requiere comunicación clara sobre cómo funciona el sistema, qué contenido se filtra y el razonamiento detrás de las decisiones.",
            hint: "La transparencia se basa en explicaciones claras al usuario."
        },
        {
            id: 5,
            domain: 2,
            domainName: "Planes y Características",
            question: "¿Cuál es el rol principal del comando de barra diagonal '/optimize' en Visual Studio?",
            options: [
                { letter: "A", text: "Traduce código a un lenguaje más performante" },
                { letter: "B", text: "Formatea automáticamente el código" },
                { letter: "C", text: "Resume documentación" },
                { letter: "D", text: "Mejora el rendimiento analizando complejidad" }
            ],
            correctAnswers: ["D"],
            explanation: "El comando /optimize identifica cuellos de botella de rendimiento, analiza la complejidad algorítmica y sugiere mejoras para tiempos de ejecución más rápidos.",
            hint: "Este comando se enfoca en mejorar el rendimiento del código."
        },
        {
            id: 6,
            domain: 2,
            domainName: "Planes y Características",
            question: "¿Qué plan de GitHub Copilot podría usar una organización de Azure DevOps sin requerir una licencia de GitHub Enterprise?",
            options: [
                { letter: "A", text: "GitHub Copilot Enterprise" },
                { letter: "B", text: "GitHub Copilot for Azure DevOps" },
                { letter: "C", text: "Copilot Teams" },
                { letter: "D", text: "GitHub Copilot Individual" }
            ],
            correctAnswers: ["B"],
            explanation: "GitHub Copilot for Azure DevOps es la solución específica para organizaciones que usan Azure DevOps sin necesidad de licencia Enterprise.",
            hint: "Busca la opción específica para Azure DevOps."
        },
        {
            id: 7,
            domain: 2,
            domainName: "Planes y Características",
            question: "¿Cuál es el mejor método para establecer políticas de organización para GitHub Copilot Business?",
            options: [
                { letter: "A", text: "Crear un archivo copilot.policy en cada repositorio" },
                { letter: "B", text: "Crear copilot.policy en el repositorio .github" },
                { letter: "C", text: "Configurar políticas en la configuración de organización" },
                { letter: "D", text: "Usar GitHub Actions" }
            ],
            correctAnswers: ["C"],
            explanation: "Las políticas de GitHub Copilot Business se gestionan centralizadamente a nivel de organización dentro de la configuración de GitHub para garantizar consistencia.",
            hint: "La configuración centralizada a nivel de organización es la mejor práctica."
        },
        {
            id: 8,
            domain: 2,
            domainName: "Planes y Características",
            question: "¿Qué información puedes obtener mediante la API REST de Suscripciones de GitHub Copilot Business? (Elige dos)",
            options: [
                { letter: "A", text: "Sugerencias de código para usuario específico" },
                { letter: "B", text: "Listar asignaciones de puestos (seats)" },
                { letter: "C", text: "Resumen de uso para miembros" },
                { letter: "D", text: "Listar miembros sin suscripción" }
            ],
            correctAnswers: ["B", "C"],
            explanation: "La API REST permite listar asignaciones de puestos (gestión de usuarios) y obtener resúmenes de uso (métricas), pero no accede a sugerencias específicas por privacidad.",
            hint: "La API se enfoca en gestión y métricas, no en contenido específico."
        },
        {
            id: 9,
            domain: 2,
            domainName: "Planes y Características",
            question: "¿Cuál es la mejor manera de compartir feedback sobre GitHub Copilot Chat en GitHub Mobile?",
            options: [
                { letter: "A", text: "Sección de feedback en el sitio web" },
                { letter: "B", text: "Tuitear a la cuenta oficial de GitHub" },
                { letter: "C", text: "Usar emojis en la interfaz de Copilot Chat" },
                { letter: "D", text: "Menú de Configuración en la app" }
            ],
            correctAnswers: ["C"],
            explanation: "Los emojis en la interfaz de Copilot Chat proporcionan retroalimentación inmediata y específica sobre las respuestas del chat.",
            hint: "La retroalimentación más directa está integrada en la interfaz."
        },
        {
            id: 10,
            domain: 2,
            domainName: "Planes y Características",
            question: "¿Qué función específica realiza el comando de barra diagonal '/fix'?",
            options: [
                { letter: "A", text: "Propone cambios para problemas detectados" },
                { letter: "B", text: "Convierte pseudocódigo en código ejecutable" },
                { letter: "C", text: "Genera nuevos fragmentos de código" },
                { letter: "D", text: "Inicia revisión con análisis estático" }
            ],
            correctAnswers: ["A"],
            explanation: "El comando /fix analiza código seleccionado o errores y propone correcciones específicas para problemas detectados.",
            hint: "Este comando está diseñado para 'arreglar' problemas existentes."
        },
        {
            id: 11,
            domain: 2,
            domainName: "Planes y Características",
            question: "¿Qué planes de GitHub Copilot excluyen tus datos del entrenamiento predeterminado? (Elige dos)",
            options: [
                { letter: "A", text: "GitHub Copilot Codespace" },
                { letter: "B", text: "GitHub Copilot Business" },
                { letter: "C", text: "GitHub Copilot Individual" },
                { letter: "D", text: "GitHub Copilot Enterprise" }
            ],
            correctAnswers: ["B", "D"],
            explanation: "Los planes empresariales (Business y Enterprise) ofrecen mayores controles de privacidad, incluida la exclusión del entrenamiento del modelo con datos de la organización.",
            hint: "Los planes empresariales tienen mejores controles de privacidad."
        },
        {
            id: 12,
            domain: 2,
            domainName: "Planes y Características",
            question: "¿A qué características de Chat se puede acceder desde un IDE compatible? (Elige dos)",
            options: [
                { letter: "A", text: "Explicar código y sugerir mejoras" },
                { letter: "B", text: "Informarse sobre releases y commits" },
                { letter: "C", text: "Generar pruebas unitarias" },
                { letter: "D", text: "Planificar tareas de codificación" }
            ],
            correctAnswers: ["A", "C"],
            explanation: "Copilot Chat en el IDE se enfoca en tareas relacionadas con código: explicar/mejorar código y generar pruebas unitarias usando comandos como /explain, /fix y /tests.",
            hint: "El chat en IDE está centrado en tareas de código, no gestión de proyectos."
        },
        {
            id: 13,
            domain: 2,
            domainName: "Planes y Características",
            question: "¿Qué características de Copilot Enterprise están disponibles en TODOS los IDEs comercialmente compatibles?",
            options: [
                { letter: "A", text: "Bases de conocimiento" },
                { letter: "B", text: "Chat" },
                { letter: "C", text: "Sugerencias en línea" },
                { letter: "D", text: "Resúmenes de pull request" }
            ],
            correctAnswers: ["C"],
            explanation: "Las sugerencias en línea (autocompletado de código) es la funcionalidad central disponible en todos los IDEs compatibles.",
            hint: "La función más básica y universal es el autocompletado."
        },
        {
            id: 14,
            domain: 2,
            domainName: "Planes y Características",
            question: "¿Qué dos opciones navegan a la configuración de detección de duplicados?",
            options: [
                { letter: "A", text: "Configuración de organización -> Copilot -> Políticas" },
                { letter: "B", text: "Configuración de empresa -> Copilot -> Políticas" },
                { letter: "C", text: "Configuración de repositorio -> Copilot -> Políticas" },
                { letter: "D", text: "Configuración de usuario -> Copilot -> Políticas" }
            ],
            correctAnswers: ["A", "B"],
            explanation: "Las políticas de detección de duplicados son configuraciones administrativas controladas a nivel de organización y empresa.",
            hint: "Las políticas administrativas se configuran a nivel organizacional."
        },
        {
            id: 15,
            domain: 2,
            domainName: "Planes y Características",
            question: "¿Qué insights puede proporcionar la API de métricas para evaluar efectividad? (Elige dos)",
            options: [
                { letter: "A", text: "Informes sobre mejoras en calidad de código" },
                { letter: "B", text: "Rastrear sugerencias aceptadas y usadas" },
                { letter: "C", text: "Retroalimentación sobre estilo de codificación" },
                { letter: "D", text: "Métricas de aceptación de Copilot Chat" }
            ],
            correctAnswers: ["B", "D"],
            explanation: "La API de métricas se centra en adopción y uso: tasa de aceptación de sugerencias y métricas específicas de Copilot Chat.",
            hint: "La API se enfoca en métricas de uso, no calidad de código."
        },
        {
            id: 16,
            domain: 2,
            domainName: "Planes y Características",
            question: "¿Cómo generas sugerencias de código con GitHub Copilot en la CLI?",
            options: [
                { letter: "A", text: "Describe arquitectura -> 'copilot generate' -> Acepta" },
                { letter: "B", text: "Escribe código -> 'copilot refine' -> Revisa" },
                { letter: "C", text: "Escribe comentarios -> Atajo -> Selecciona" },
                { letter: "D", text: "'gh copilot suggest' -> Describe -> Selecciona" }
            ],
            correctAnswers: ["D"],
            explanation: "El comando de CLI es 'gh copilot suggest' donde describes la tarea en lenguaje natural y Copilot sugiere el comando de shell.",
            hint: "El comando específico es 'gh copilot suggest'."
        },
        {
            id: 17,
            domain: 3,
            domainName: "Funcionamiento y Datos",
            question: "¿Cuáles afirmaciones son verdaderas sobre las sugerencias de código? (Elige dos)",
            options: [
                { letter: "A", text: "Limitadas a sugerencias de una línea" },
                { letter: "B", text: "No exponen vulnerabilidades de seguridad" },
                { letter: "C", text: "Siempre compilarán sin modificaciones" },
                { letter: "D", text: "Atajos para aceptar siguiente palabra" },
                { letter: "E", text: "Sugerencias alternativas en nueva pestaña" }
            ],
            correctAnswers: ["D", "E"],
            explanation: "Copilot ofrece sugerencias multi-línea, puede tener errores, pero permite usar atajos para aceptar palabras y mostrar alternativas en pestañas.",
            hint: "Copilot es flexible con atajos y múltiples opciones."
        },
        {
            id: 18,
            domain: 3,
            domainName: "Funcionamiento y Datos",
            question: "¿Qué razones pueden hacer que las sugerencias no funcionen? (Elige tres)",
            options: [
                { letter: "A", text: "Sin conexión a internet" },
                { letter: "B", text: "Lenguaje de programación no compatible" },
                { letter: "C", text: "Archivos en .gitignore" },
                { letter: "D", text: "Sin licencia válida" },
                { letter: "E", text: "Exclusión de contexto activa" }
            ],
            correctAnswers: ["A", "B", "D"],
            explanation: "Copilot requiere conexión a internet, licencia válida y un lenguaje compatible. Los archivos .gitignore y exclusión de contexto no impiden el funcionamiento general.",
            hint: "Los requisitos básicos son conexión, licencia y compatibilidad."
        },
        {
            id: 19,
            domain: 6,
            domainName: "Pruebas y Métricas",
            question: "¿Cómo usar insights de la API de métricas para mejorar el desarrollo? (Elige dos)",
            options: [
                { letter: "A", text: "Estadísticas de depuración en tiempo real" },
                { letter: "B", text: "Generación automatizada de documentación" },
                { letter: "C", text: "Análisis de sugerencias vs codificación manual" },
                { letter: "D", text: "Perspectivas sobre lenguajes más útiles" }
            ],
            correctAnswers: ["C", "D"],
            explanation: "La API permite comparar tasas de aceptación para medir productividad e identificar lenguajes donde Copilot ofrece mayor valor.",
            hint: "La API ayuda a medir productividad y valor por lenguaje."
        },
        {
            id: 20,
            domain: 6,
            domainName: "Pruebas y Métricas",
            question: "¿Cómo pueden los usuarios dar feedback sobre Copilot Chat usando su IDE?",
            options: [
                { letter: "A", text: "Enviar email al equipo de soporte" },
                { letter: "B", text: "Botón 'Compartir Feedback' en el panel" },
                { letter: "C", text: "Formulario en el sitio web de GitHub" },
                { letter: "D", text: "Publicar en foros de GitHub" }
            ],
            correctAnswers: ["B"],
            explanation: "El botón 'Compartir Feedback' en el panel de Copilot Chat es la forma más directa e integrada de proporcionar retroalimentación.",
            hint: "Busca la opción integrada directamente en la interfaz."
        },
        {
            id: 21,
            domain: 6,
            domainName: "Pruebas y Métricas",
            question: "¿Qué se puede configurar en GitHub Copilot CLI? (Elige dos)",
            options: [
                { letter: "A", text: "Analíticas de uso" },
                { letter: "B", text: "Editor por defecto" },
                { letter: "C", text: "Confirmación de ejecución por defecto" },
                { letter: "D", text: "Subcomandos de CLI de GitHub" }
            ],
            correctAnswers: ["A", "C"],
            explanation: "Usando 'gh copilot config' puedes optar por participar en analíticas de uso y establecer confirmación antes de ejecutar comandos sugeridos.",
            hint: "La configuración CLI se enfoca en uso y confirmación."
        },
        {
            id: 22,
            domain: 5,
            domainName: "Casos de Uso",
            question: "¿Sobre qué tipos de contenido puede responder la Base de Conocimiento de Copilot? (Elige tres)",
            options: [
                { letter: "A", text: "Binarios compilados" },
                { letter: "B", text: "Fragmentos de código" },
                { letter: "C", text: "Patrones de diseño" },
                { letter: "D", text: "Capturas de pantalla" },
                { letter: "E", text: "Documentación" }
            ],
            correctAnswers: ["B", "C", "E"],
            explanation: "Las bases de conocimiento se indexan desde repositorios que contienen documentación, fragmentos de código y patrones de diseño descritos.",
            hint: "La base de conocimiento trabaja con texto y código, no imágenes o binarios."
        },
        {
            id: 23,
            domain: 7,
            domainName: "Privacidad y Contexto",
            question: "Si trabajas en proyectos de código abierto, ¿cómo se paga GitHub Copilot Individual?",
            options: [
                { letter: "A", text: "Factura o tarjeta de crédito" },
                { letter: "B", text: "Suscripción de Azure" },
                { letter: "C", text: "Método de pago en perfil de usuario" },
                { letter: "D", text: "Es gratuito para mantenedores de código abierto" }
            ],
            correctAnswers: ["D"],
            explanation: "GitHub Copilot Individual es gratuito para estudiantes verificados, profesores y mantenedores de proyectos populares de código abierto.",
            hint: "GitHub apoya el ecosistema de código abierto con acceso gratuito."
        },
        {
            id: 24,
            domain: 6,
            domainName: "Pruebas y Métricas",
            question: "¿Cuál es el propósito principal de los registros de auditoría en GitHub Copilot Business?",
            options: [
                { letter: "A", text: "Rastrear líneas de código sugeridas" },
                { letter: "B", text: "Asignar licencias de software" },
                { letter: "C", text: "Monitorear conflictos de código" },
                { letter: "D", text: "Monitorear actividades de administrador" }
            ],
            correctAnswers: ["D"],
            explanation: "Los registros de auditoría rastrean acciones de administradores y propietarios para fines de gobernanza y seguridad.",
            hint: "Los audit logs se enfocan en actividades administrativas."
        },
        {
            id: 25,
            domain: 3,
            domainName: "Funcionamiento y Datos",
            question: "¿Cuál es un efecto probable del entrenamiento en patrones de código comunes?",
            options: [
                { letter: "A", text: "Sugerir proyectos completamente novedosos" },
                { letter: "B", text: "Sugerir soluciones innovadoras no populares" },
                { letter: "C", text: "Sugerir soluciones homogéneas" },
                { letter: "D", text: "Sugerir fragmentos que reflejan prácticas comunes" }
            ],
            correctAnswers: ["D"],
            explanation: "Un modelo entrenado en código público aprenderá y sugerirá las prácticas y patrones más comunes encontrados en esos datos.",
            hint: "El modelo refleja lo que más ve en los datos de entrenamiento."
        },
        {
            id: 26,
            domain: 3,
            domainName: "Funcionamiento y Datos",
            question: "¿Cómo maneja GitHub Copilot las características obsoletas de lenguajes?",
            options: [
                { letter: "A", text: "Siempre filtra elementos obsoletos" },
                { letter: "B", text: "Puede sugerir sintaxis obsoletas si están en datos de entrenamiento" },
                { letter: "C", text: "Rechaza prompts con características obsoletas" },
                { letter: "D", text: "Actualiza automáticamente a última versión" }
            ],
            correctAnswers: ["B"],
            explanation: "Si los datos de entrenamiento contienen código obsoleto (común en repositorios antiguos), el modelo puede aprender y sugerir esa sintaxis.",
            hint: "El modelo aprende de lo que ve, incluyendo código antiguo."
        },
        {
            id: 27,
            domain: 3,
            domainName: "Funcionamiento y Datos",
            question: "¿Cuáles son los pasos del ciclo de vida de una sugerencia de GitHub Copilot? (Elige dos)",
            options: [
                { letter: "A", text: "Procesamiento de datos de telemetría" },
                { letter: "B", text: "Generar sugerencias" },
                { letter: "C", text: "Reentrenamiento del modelo" },
                { letter: "D", text: "Almacenamiento de datos del usuario" },
                { letter: "E", text: "Capturar contexto del usuario" }
            ],
            correctAnswers: ["B", "E"],
            explanation: "El ciclo inmediato es: capturar contexto del usuario (código, cursor) y generar sugerencias basadas en ese contexto.",
            hint: "El ciclo básico es obtener contexto y generar sugerencias."
        },
        {
            id: 28,
            domain: 3,
            domainName: "Funcionamiento y Datos",
            question: "¿Qué rol juega el pre-procesamiento en Copilot Chat?",
            options: [
                { letter: "A", text: "Formatea la respuesta de salida" },
                { letter: "B", text: "Filtra información irrelevante del prompt" },
                { letter: "C", text: "Enriquece el prompt con contexto adicional" },
                { letter: "D", text: "Genera respuesta directamente" }
            ],
            correctAnswers: ["C"],
            explanation: "El pre-procesamiento enriquece el prompt simple del usuario con contexto relevante (código de archivos abiertos, etc.) para obtener respuestas más precisas.",
            hint: "El pre-procesamiento agrega contexto al prompt original."
        },
        {
            id: 29,
            domain: 5,
            domainName: "Casos de Uso",
            question: "¿Qué comprobaciones adicionales deben pasar las respuestas antes de enviarse? (Elige dos)",
            options: [
                { letter: "A", text: "Calidad del código" },
                { letter: "B", text: "Compatibilidad con configuración del usuario" },
                { letter: "C", text: "Benchmarking de rendimiento" },
                { letter: "D", text: "Sugerencias que coinciden con código público" }
            ],
            correctAnswers: ["A", "D"],
            explanation: "Se aplican filtros de calidad para eliminar sugerencias de baja calidad y detección de duplicados para verificar coincidencias con código público.",
            hint: "Los filtros se enfocan en calidad y duplicación."
        },
        {
            id: 30,
            domain: 5,
            domainName: "Casos de Uso",
            question: "¿Cuáles son limitaciones potenciales de GitHub Copilot Chat? (Elige dos)",
            options: [
                { letter: "A", text: "Manejo de estructuras de código complejas" },
                { letter: "B", text: "Datos de entrenamiento limitados" },
                { letter: "C", text: "Soporte para todos los lenguajes" },
                { letter: "D", text: "Sin sesgos en sugerencias" }
            ],
            correctAnswers: ["A", "B"],
            explanation: "Los LLM tienen limitaciones en comprender arquitecturas muy complejas y sus datos de entrenamiento tienen fecha de corte, pudiendo no conocer versiones nuevas.",
            hint: "Los modelos tienen limitaciones en complejidad y actualidad."
        },
        {
            id: 31,
            domain: 5,
            domainName: "Casos de Uso",
            question: "¿Cuál es el impacto de la técnica 'Fill-In-the-Middle' (FIM) en las sugerencias?",
            options: [
                { letter: "A", text: "Mejora considerando prefijo y sufijo" },
                { letter: "B", text: "Usa solo bases de datos externas" },
                { letter: "C", text: "Usa solo prefijo del código" },
                { letter: "D", text: "Ignora prefijo y sufijo" }
            ],
            correctAnswers: ["A"],
            explanation: "FIM permite al modelo considerar el código antes (prefijo) y después (sufijo) del cursor, permitiendo 'rellenar el medio' con mayor precisión.",
            hint: "FIM usa contexto tanto antes como después del cursor."
        },
        {
            id: 32,
            domain: 7,
            domainName: "Privacidad y Contexto",
            question: "¿Cómo usa Copilot Individual los datos de los prompts? (Elige dos)",
            options: [
                { letter: "A", text: "Ayuda a generar sugerencias conscientes del contexto" },
                { letter: "B", text: "Usa datos para mejorar motor de búsqueda" },
                { letter: "C", text: "Usa datos para entrenar modelos" },
                { letter: "D", text: "Almacena sin encriptar para procesamiento" }
            ],
            correctAnswers: ["A", "C"],
            explanation: "Los datos del prompt se usan para generar sugerencias contextuales y, en el plan Individual, pueden usarse para entrenar y mejorar modelos.",
            hint: "En Individual, los datos pueden usarse para entrenamiento del modelo."
        },
        {
            id: 33,
            domain: 4,
            domainName: "Diseño de Avisos",
            question: "¿Qué usa GitHub Copilot en el IDE para determinar el contexto del prompt?",
            options: [
                { letter: "A", text: "Pestañas abiertas, ubicación del cursor, código seleccionado" },
                { letter: "B", text: "Todo el código visible en el IDE" },
                { letter: "C", text: "Todo el código en el repositorio" },
                { letter: "D", text: "Pestañas abiertas y carpeta de terminal" }
            ],
            correctAnswers: ["A"],
            explanation: "Copilot construye contexto a partir de señales heurísticas: archivo actual, ubicación del cursor, código seleccionado y otras pestañas abiertas.",
            hint: "El contexto se construye de elementos inmediatos del entorno de trabajo."
        },
        {
            id: 34,
            domain: 4,
            domainName: "Diseño de Avisos",
            question: "¿De qué elementos deriva el LLM de Copilot contexto adicional?",
            options: [
                { letter: "A", text: "Sistema de control de versiones" },
                { letter: "B", text: "Esquema de resaltado de sintaxis" },
                { letter: "C", text: "Frecuencia de commits" },
                { letter: "D", text: "Archivos vecinos o relacionados" }
            ],
            correctAnswers: ["D"],
            explanation: "Además del archivo actual, Copilot usa archivos vecinos o relacionados (como importados o editados juntos) para contexto más rico.",
            hint: "Busca contexto en archivos cercanos y relacionados."
        },
        {
            id: 35,
            domain: 5,
            domainName: "Casos de Uso",
            question: "¿Cuál es un beneficio de usar modelos personalizados en GitHub Copilot?",
            options: [
                { letter: "A", text: "Usa el motor LLM de la organización" },
                { letter: "B", text: "Las respuestas son más rápidas" },
                { letter: "C", text: "Se garantiza que las respuestas sean correctas" },
                { letter: "D", text: "Usa prácticas y patrones de tus repositorios" }
            ],
            correctAnswers: ["D"],
            explanation: "Los modelos personalizados se afinan con el código de tu organización, reflejando prácticas, patrones y bibliotecas internas específicas.",
            hint: "Los modelos personalizados aprenden de tu código específico."
        },
        {
            id: 36,
            domain: 7,
            domainName: "Privacidad y Contexto",
            question: "¿Cómo identifica Copilot código coincidente y maneja código público? (Elige dos)",
            options: [
                { letter: "A", text: "Detecta y evita sugerir fragmentos textuales de código público" },
                { letter: "B", text: "Filtra sugerencias que coinciden con código público" },
                { letter: "C", text: "Usa modelos entrenados solo en repositorios privados" },
                { letter: "D", text: "Revisa y almacena datos de repositorios privados" }
            ],
            correctAnswers: ["A", "B"],
            explanation: "La detección de duplicados compara sugerencias con un índice de código público y bloquea coincidencias textuales para evitar problemas de propiedad intelectual.",
            hint: "La detección se enfoca en evitar duplicación con código público."
        },
        {
            id: 37,
            domain: 4,
            domainName: "Diseño de Avisos",
            question: "¿Cómo usa Copilot el historial de chat para mejorar el autocompletado?",
            options: [
                { letter: "A", text: "Comparte historial con servicios de terceros" },
                { letter: "B", text: "Analiza interacciones para identificar patrones" },
                { letter: "C", text: "Registra para monitorear actividad del usuario" },
                { letter: "D", text: "Ofrece fragmentos basados en prompts anteriores" }
            ],
            correctAnswers: ["D"],
            explanation: "El historial de chat sirve como contexto para ofrecer sugerencias personalizadas basadas en interacciones y correcciones anteriores.",
            hint: "El historial ayuda a personalizar futuras sugerencias."
        },
        {
            id: 38,
            domain: 7,
            domainName: "Privacidad y Contexto",
            question: "¿Cuál es el propósito principal del filtro de detección de duplicados?",
            options: [
                { letter: "A", text: "Comparar contra repositorios privados" },
                { letter: "B", text: "Prevenir duplicación de código" },
                { letter: "C", text: "Controlar sugerencias visibles para desarrolladores" },
                { letter: "D", text: "Detectar y bloquear sugerencias que coinciden con código público" }
            ],
            correctAnswers: ["D"],
            explanation: "El filtro detecta y bloquea sugerencias que coinciden textualmente con código público en GitHub para evitar problemas de propiedad intelectual.",
            hint: "El filtro protege contra duplicación con código público."
        },
        {
            id: 39,
            domain: 4,
            domainName: "Diseño de Avisos",
            question: "¿Cuál es una estrategia recomendada para mejorar la relevancia del código generado?",
            options: [
                { letter: "A", text: "Mantener prompts muy cortos" },
                { letter: "B", text: "Proporcionar ejemplos de entrada/salida" },
                { letter: "C", text: "Evitar mencionar el lenguaje" },
                { letter: "D", text: "Usar solo lenguaje natural" }
            ],
            correctAnswers: ["B"],
            explanation: "Proporcionar ejemplos claros de entrada y salida es mucho más efectivo que descripciones vagas, mejorando drásticamente la relevancia.",
            hint: "Los ejemplos específicos mejoran mucho la precisión."
        }
    ],

    domains: {
        1: { name: "IA Responsable", percentage: 7, color: "#ff6384" },
        2: { name: "Planes y Características", percentage: 31, color: "#36a2eb" },
        3: { name: "Funcionamiento y Datos", percentage: 15, color: "#ffcd56" },
        4: { name: "Diseño de Avisos", percentage: 9, color: "#4bc0c0" },
        5: { name: "Casos de Uso", percentage: 14, color: "#9966ff" },
        6: { name: "Pruebas y Métricas", percentage: 9, color: "#ff9f40" },
        7: { name: "Privacidad y Contexto", percentage: 15, color: "#c7c7c7" }
    }
};