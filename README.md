# GH-300 Quest - Certificación GitHub Copilot

Una aplicación web gamificada y moderna para practicar preguntas de la certificación GH-300 de GitHub Copilot, con retroalimentación inmediata, análisis por dominios y recomendaciones personalizadas mediante API REST.

## Características Principales

### 🎮 Gamificación Completa
- **Interfaz futurista y moderna** con efectos visuales y animaciones
- **Sistema de puntuación en tiempo real** con retroalimentación visual
- **Diseño responsivo** que funciona en dispositivos móviles y desktop
- **Efectos de transición** fluidos entre preguntas y pantallas

### 📚 Contenido Educativo
- **39 preguntas categorizadas** según los 7 dominios de la certificación GH-300
- **Retroalimentación inmediata** con explicaciones detalladas
- **Sistema de pistas** para ayudar en preguntas difíciles
- **Análisis por dominios** con desglose de resultados

### 🤖 Integración con API REST
- **Preparado para integración** con modelos LLM
- **Análisis de falencias** basado en respuestas incorrectas
- **Recomendaciones personalizadas** de estudio
- **Plan de estudio estructurado** con tiempo estimado

## Dominios de la Certificación GH-300

| Dominio | Nombre | Porcentaje | Preguntas |
|---------|--------|------------|-----------|
| Dominio 1 | IA Responsable | 7% | 4 preguntas |
| Dominio 2 | Planes y Características | 31% | 12 preguntas |
| Dominio 3 | Funcionamiento y Datos | 15% | 6 preguntas |
| Dominio 4 | Diseño de Avisos | 9% | 4 preguntas |
| Dominio 5 | Casos de Uso | 14% | 5 preguntas |
| Dominio 6 | Pruebas y Métricas | 9% | 4 preguntas |
| Dominio 7 | Privacidad y Contexto | 15% | 5 preguntas |

## Tecnologías Utilizadas

### Frontend
- **HTML5** con diseño semántico y accesible
- **Tailwind CSS** para estilos modernos y responsivos
- **JavaScript ES6+** con funcionalidades modernas
- **Fuentes personalizadas**: Inter y JetBrains Mono

### Librerías de Efectos Visuales
- **Three.js** para efectos 3D y gráficos
- **Vanta.js** para fondos animados interactivos
- **Anime.js** para animaciones fluidas
- **Font Awesome** para iconos profesionales

### Arquitectura
- **Diseño modular** con separación de datos y lógica
- **Local Storage** para persistencia de respuestas
- **API REST** preparada para integración con LLMs
- **Responsive Design** con mobile-first approach

## Instalación y Uso

### Opción 1: Abrir directamente
1. Descarga todos los archivos
2. Abre `index.html` en tu navegador
3. ¡Comienza a practicar!

### Opción 2: Servidor local
```bash
# Navega al directorio del proyecto
cd /ruta/al/proyecto

# Inicia un servidor local
python -m http.server 8000

# Abre http://localhost:8000 en tu navegador
```

## Estructura de Archivos

```
/mnt/okcomputer/output/
├── index.html              # Página principal con la interfaz
├── quiz-data.js           # Datos de preguntas y categorización
├── main.js               # Lógica de la aplicación
├── categorizacion_preguntas.md  # Documento de referencia
└── README.md             # Este archivo
```

## Configuración de la API REST

### Paso 1: Preparar el endpoint
La aplicación está lista para enviar datos a tu API REST. Necesitas configurar la URL en `main.js`:

```javascript
// En main.js, línea ~350
const apiEndpoint = 'https://TU_API_AQUI/recommendations';
```

### Paso 2: Estructura de datos enviados
La aplicación envía un objeto JSON con la siguiente estructura:

```json
{
  "failedDomains": {
    "IA Responsable": [
      {
        "question": "¿Qué principio ético...",
        "concept": "equidad"
      }
    ]
  },
  "totalQuestions": 39,
  "correctAnswers": 25,
  "percentage": 64,
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

### Paso 3: Respuesta esperada de la API
Tu API debe responder con un objeto como:

```json
{
  "recommendations": [
    {
      "domain": "IA Responsable",
      "priority": "high",
      "topics": ["equidad", "sesgo"],
      "resources": ["Documentación oficial", "Tutoriales"],
      "estimatedHours": 3
    }
  ],
  "studyPlan": {
    "totalWeeks": 3,
    "weeklyHours": 5,
    "phases": [...]
  },
  "estimatedTime": 12,
  "nextSteps": [...]
}
```

### Ejemplo de integración con LLM

```python
# Ejemplo en Python para tu API
@app.route('/recommendations', methods=['POST'])
def get_recommendations():
    data = request.json
    failed_domains = data['failedDomains']
    
    # Procesar con tu LLM favorito
    recommendations = generate_llm_recommendations(failed_domains)
    
    return jsonify(recommendations)
```

## Características de Gamificación

### Visual
- **Fondo animado** con nubes interactivas
- **Efectos de hover** en botones y opciones
- **Animaciones de transición** entre preguntas
- **Indicadores visuales** de progreso y puntuación

### Interactivas
- **Retroalimentación inmediata** con colores y animaciones
- **Sistema de pistas** para preguntas difíciles
- **Desglose por dominios** con visualizaciones
- **Recomendaciones personalizadas** basadas en resultados

## Personalización

### Colores y temas
Modifica las variables CSS en `index.html`:

```css
:root {
    --primary-color: #2d3748;
    --accent-color: #38a169;
    --danger-color: #e53e3e;
    /* ... más variables */
}
```

### Preguntas y contenido
Actualiza `quiz-data.js` para modificar:
- Preguntas y respuestas
- Explicaciones y pistas
- Categorización por dominios
- Porcentajes de certificación

### Comportamiento
Ajusta parámetros en `main.js`:
- Tiempo de espera de la API
- Número de pistas permitidas
- Configuración de animaciones
- Lógica de puntuación

## Solución de Problemas

### La aplicación no carga
1. Verifica que todos los archivos estén en el mismo directorio
2. Asegúrate de usar un servidor web para archivos locales
3. Revisa la consola del navegador para errores

### Las animaciones no funcionan
1. Verifica que las librerías CDN estén disponibles
2. Comprueba la conexión a internet
3. La aplicación tiene un fallback básico implementado

### La API no responde
1. Verifica la URL del endpoint en `main.js`
2. Asegúrate de que tu API acepte peticiones CORS
3. Revisa la estructura de datos enviados/recibidos
4. Usa la consola del navegador para debugging

## Contribuciones

Este proyecto está diseñado para ser fácilmente extensible:

### Agregar nuevas preguntas
1. Añade preguntas en `quiz-data.js`
2. Categoriza según los dominios de GH-300
3. Incluye explicaciones y pistas

### Mejorar la IA
1. Integra tu modelo LLM favorito
2. Personaliza las recomendaciones
3. Ajusta el análisis de falencias

### Nuevas características
- Sistema de guardado de progreso
- Comparación con otros usuarios
- Modo de estudio temporal
- Integración con plataformas LMS

## Licencia

Este proyecto es de código abierto y está disponible para uso educativo y comercial.

## Créditos

- **Diseño y desarrollo**: Aplicación web interactiva
- **Contenido**: Basado en la guía oficial de certificación GH-300
- **Tecnologías**: HTML5, CSS3, JavaScript ES6+, Tailwind CSS
- **Efectos visuales**: Three.js, Vanta.js, Anime.js

---

**¡Buena suerte con tu certificación GH-300!** 🚀

*Para soporte o preguntas, consulta la documentación o revisa la consola del navegador para debugging.*