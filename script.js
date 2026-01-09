window.addEventListener('load', () => {
    const intro = document.getElementById('intro-overlay');
    if (!intro) return;

    setTimeout(() => {
        intro.classList.add('hidden'); // aquí desaparece el título incial
    }, 1200); // 1200 ms = 1,2 segundos
});
// proyectos
const projects = [
    {
        id: 'fresh-squeeze',
        title: 'Fresh Squeeze',
        category: 'Diseño de Producto • Diseño Centrado en el Usuario',
        shortDesc: 'Botella de vidrio para Verallia Design Awards',
        description: 'Este proyecto forma parte de los Verallia Design Awards 2023, centrados en el concepto "Off Time", que invita a repensar cómo pequeños gestos pueden convertirse en momentos de pausa y disfrute personal. La forma de la botella nace del análisis formal de distintas frutas, buscando trasladar sus proporciones y suavidad a un envase que transmita calma y armonía natural. La etiqueta es el elemento narrativo clave. Se inspira en el gesto cotidiano de pelar una fruta, que en muchas culturas asiáticas representa un acto de cuidado y amor, comparable a las ceremonias del té japonesas. Este gesto contiene una dimensión sensorial clara: el sonido, la textura, el aroma y el color que aparecen al pelar. Mi etiqueta captura esa secuencia de sensaciones en forma visual. Existe también una dimensión temporal: pelar requiere tiempo y consciencia, lo opuesto al consumo rápido. Esa pausa inevitable es precisamente el espíritu de "Off Time" (un momento para ralentizar y disfrutar). El vidrio refuerza estos valores por su sostenibilidad, honestidad y durabilidad. Representa lo esencial frente a la inmediatez. Mi diseño busca que la botella sea un recordatorio de que los gestos simples pueden transformarse en pequeñas pausas significativas dentro de la rutina diaria.',
        tools: 'Keyshot 360, Keyshot, Adobe Illustrator',
        year: '2023',
        signature: 'Verallia',
        images: [
            './imagenes/imagen1.jpg'
        ]
    },
    {
        id: 'vitabite',
        title: 'Vitabite',
        category: 'Diseño Centrado en el Usuario',
        shortDesc: 'Máquina expendedora de comida saludable',
        description: 'Se identificó una problemática en mi universidad: la ausencia de cafetería y opciones saludables. Los estudiantes enfrentamos horarios irregulares y cuando tenemos hambre, las opciones se limitan a ultraprocesados. VitaBite es un sistema que combina una máquina expendedora inteligente, una app móvil y carteles informativos. La máquina expendedora ofrece ingredientes para personalizar bowls: proteínas, granos, verduras y toppings. La app móvil VitaBite genera un plan nutricional personalizado basado en preferencias dietéticas, restricciones y objetivos de salud del usuario. Se sincroniza con la máquina para que el usuario vea qué ingredientes hay disponibles y cuales se ajustan a su necesidad calórica. Los carteles informativos están inspirados en referentes icónicos del diseño. Estos carteles tienen como objetivo abordar recetas, información nutricional, consumo responsable y educación dietética.',
        tools: 'Figma, Adobe Illustrator, Photoshop Procreate',
        year: '2023',
        signature: 'UDIT, Universidad de Diseño, Innovación y Tecnología',
        images: [
            './imagenes/imagen2.jpg',
            './imagenes/imagen3.jpg'
        ]
    },
    {
        id: 'armlamps',
        title: 'Armlamps',
        category: 'Diseño de Producto • Diseño Mobiliario',
        shortDesc: 'Colección de lámparas biomiméticas',
        description: 'Se desarrolló una colección de lámparas inspiradas en la estructura ósea de animales, diseñadas para distintos espacios (techo, suelo, pared). Cada forma existe porque resolvió un problema de supervivencia: resistencia, movilidad, eficiencia. Trasladar esa lógica a lámparas significa crear formas que no son decorativas sino funcionales por naturaleza. Se utilizó inteligencia artificial para optimizar la instalación de cables y distribución de luz, generando geometrías paramétricas inspiradas en esas estructuras naturales y se realizaron correcciones manuales en Procreate para corregir proporciones, claridad y texturas.',
        tools: 'Solid Edge, AutoCAD, Procreate, IA',
        year: '2023',
        images: [
            './imagenes/imagen4.jpg'
        ]
    },
    {
        id: 'uppa',
        title: 'Uppa',
        category: 'Diseño Industrial • Diseño Inclusivo',
        shortDesc: 'Silla de Ruedas para escaleras',
        description: 'Se desarrolló una silla de ruedas manual diseñada para facilitar la subida y bajada de escalones mediante un mecanismo de rampa y doble rueda que resuelve una barrera en la movilidad de usuarios con discapacidad motriz. El sistema de geometría angular y palancas permite al usuario interactuar activamente con el entorno. Al empujar y tirar la palanca, dos ruedas enganchan cada escalón, elevando la silla paso a paso, otorgando control y autonomía sin dependencia de terceros. Se siguió un enfoque de diseño centrado en el usuario, concretamente enfocado en personas con discapacidad.  El resultado transforma escalones de obstáculo insuperable a un desafío manejable, permitiendo acceso a edificios, viviendas y espacios urbanos sin dependencia de rampas o elevadores especiales.',
        tools: 'Fusion 360, Photoshop, CNC, Corte láser',
        year: '2022',
        images: [
            './imagenes/imagen5.jpg'
        ]
    },
    {
        id: 'pawpal',
        title: 'PawPal',
        category: 'Diseño Industrial',
        shortDesc: 'Transportín adaptable para mascotas',
        description: 'Se desarrolló un transportín expandible para mascotas diseñado para viajes de larga duración, cumpliendo con las normativas de transporte de las principales aerolíneas. Se incorporó un sistema de ventilación optimizado que garantiza circulación continua de aire fresco, esencial para mantener el bienestar del animal durante vuelos largos. Una ventana de metacrilato integrada permite que el animal vea el exterior sin exponerse, reduciendo la sensación de aislamiento y estrés por confinamiento. El sistema expandible maximiza el espacio disponible sin comprometer la normativa aérea, permitiendo cambios posturales naturales que reducen estrés físico y psicológico durante el transporte.',
        tools: 'Rhinoceros, Keyshot, Procreate, Illustrator',
        year: '2025',
        images: [
            './imagenes/imagen8.jpg'
        ]
    },
    {
        id: 'footpointer',
        title: 'Footpointer',
        category: 'Diseño de Producto • Diseño Inclusivo',
        shortDesc: 'Ratón de ordenador operado con el pie',
        description: 'Se desarrolló un ratón de ordenador operado con el dedo gordo del pie, diseñado para personas con movilidad reducida en extremidades superiores. El dispositivo permite que usuarios con discapacidades físicas interactúen con ordenadores mediante movimientos de los pies, eliminando la necesidad de usar manos o brazos. Su forma ergonómica se adapta al arco del pie, mejorando el control y la precisión durante la interacción. A diferencia de los ratones convencionales, ofrece acceso intuitivo al cursor y funciones de clic mediante el dedo gordo, reduciendo el esfuerzo físico requerido. Este tipo de dispositivo es especialmente valioso para usuarios con paraplegia, parálisis cerebral o lesiones de médula espinal que limitan el uso de brazos y manos. Permite que personas con movilidad severa limitada mantengan independencia y autonomía en la interacción con computadoras.',
        tools: 'Rhinoceros, Keyshot, Procreate, Adobe Illustrator',
        year: '2023',
        images: [
            './imagenes/imagen6.jpg'
        ]
    },
    {
        id: 'accessgrip',
        title: 'AccessGrip',
        category: 'Diseño Industrial • Diseño Inclusivo',
        shortDesc: 'Sistema de agarre inteligente para usuarios con discapacidad',
        description: 'Se desarrolló un sistema de agarre para la Fundación ONCE, controlado por el robot Temi y diseñado para guiar personas con discapacidad visual en espacios como hospitales. El mango incorpora vibraciones que comunican giros, paradas y obstáculos, permitiendo que usuarios ciegos reciban información de navegación en tiempo real mediante retroalimentación háptica. Integra un sensor de presencia que detecta cuándo el usuario coge o suelta el agarre, permitiendo al robot interpretar su intención y ajustar su comportamiento. El sistema se compone de una base con circuito electrónico, una tapa de protección y dos agarres con mango integrado, facilitando portabilidad y durabilidad. El resultado otorga autonomía y seguridad a usuarios con discapacidad sensorial en entornos complejos.​',
        tools: 'Rhinoceros, Keyshot, Procreate',
        year: '2025',
        signature: 'Fundación Once',
        images: [
            './imagenes/imagen7.jpg'
        ]
    }
];

// navegaciñon
const navLinks = document.querySelectorAll('.sidebar-nav-link');
const sections = document.querySelectorAll('.content-section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section') + '-section';
        navLinks.forEach(l => l.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));

        link.classList.add('active');
        document.getElementById(sectionId).classList.add('active');

        if (link.getAttribute('data-section') === 'projects') {
            showProjectsIndex();
        }
        
        window.scrollTo(0, 0);
    });
});

// renders
function showProjectsIndex() {
    const indexContainer = document.getElementById('projects-index');
    const detailsContainer = document.getElementById('project-details');
    
    indexContainer.style.display = 'grid';
    detailsContainer.innerHTML = '';
    
    indexContainer.innerHTML = projects.map(project => `
        <a href="#" class="project-index-item" data-project="${project.id}">
            <div class="project-index-title">${project.title}</div>
            <div class="project-index-category">${project.category}</div>
        </a> 
    `).join('');

    // evento para nombrar los index de las listas
    document.querySelectorAll('.project-index-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = item.getAttribute('data-project');
            showProjectDetail(projectId);
        });
    });
}

// detalles de proyectos
function showProjectDetail(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const indexContainer = document.getElementById('projects-index');
    const detailsContainer = document.getElementById('project-details');
    
    indexContainer.style.display = 'none';
    
    detailsContainer.innerHTML = `
        <a href="#" class="back-button" id="back-to-index"> ← Volver a proyectos</a>
        <div class="project-header">
            <h2 class="project-title">${project.title}</h2>
        </div>
        <div class="project-info">
            <div class="project-info-item">
                <span class="project-info-label">Sector de diseño</span>
                <div class="project-info-value">${project.category}</div>
            </div>
            <div class="project-info-item">
                <span class="project-info-label">Herramientas utilizadas</span>
                <div class="project-info-value">${project.tools}</div>
            </div>
            <div class="project-info-item">
                <span class="project-info-label">Año</span>
                <div class="project-info-value">${project.year}</div>
            </div>
             <div class="project-info-item">
                <span class="project-info-label">Firma</span>
                <div class="project-info-value">${project.signature}</div>
    </div>
        </div>
        <p class="about-text">${project.description}</p>
        <div class="project-gallery">
            ${project.images.map(img => `<img src="${img}" alt="${project.title}" class="project-image">`).join('')}
        </div>
    `;

    // boton de "volver a proyectos"
    document.getElementById('back-to-index').addEventListener('click', (e) => {
        e.preventDefault();
        showProjectsIndex();
    });
    window.scrollTo(0, 0);
}
showProjectsIndex();
