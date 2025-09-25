document.addEventListener('DOMContentLoaded', function () {
    const skillsData = {
        labels: [
            'Python','FastAPI','Django','TensorFlow',
            'PHP','Laravel',
            'JavaScript','TypeScript','React','React Native','Electron.js',
            'SQL',
            'Git','GitHub','Linux','C/C++',
            'OpenCV','Scikit-learn'
        ],
        datasets: [{
            label: 'Compétence',
            data: [
                75, 60, 70, 50,     // Backend Python
                75, 70,            // Backend PHP
                75, 60, 60, 55, 50,// Frontend JS/TS
                62,               // SQL
                50, 50, 55, 65,    // Outils & Divers
                40, 40            // OpenCV, Scikit-learn
            ],
            backgroundColor: [
                '#0f766e','#0f766e','#0f766e','#0f766e',
                '#14b8a6','#14b8a6',
                '#5eead4','#5eead4','#5eead4','#5eead4','#5eead4',
                '#99f6e4',
                '#a7f3d0','#a7f3d0','#a7f3d0','#a7f3d0',
                '#a7f3d0','#a7f3d0'
            ],
            borderColor: '#ffffff',
            borderWidth: 1,
            borderRadius: 4
        }]
    };

    const skillCategories = {
        'Backend (Python)': ['Python','FastAPI','Django',],
        'Machine Learning/AI':['TensorFlow','OpenCV','Scikit-learn'],
        'Backend (PHP)':    ['PHP','Laravel'],
        '(JS/TS)': ['JavaScript','TypeScript','React','React Native','Electron.js'],
        'Bases de Données': ['SQL'],
        'Outils & Divers':  ['Git','GitHub','Linux','C/C++']
    };

    const ctx = document.getElementById('skillsChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: skillsData,
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        title: function (context) {
                            const label = context[0].label;
                            for (const category in skillCategories) {
                                if (skillCategories[category].includes(label)) {
                                    return category;
                                }
                            }
                            return '';
                        },
                        label: function (context) { return context.label; }
                    }
                }
            },
            scales: {
                x: { display: false, beginAtZero: true, max: 100 },
                y: {
                    ticks: {
                        font: { size: 14, weight: '500' },
                        color: '#334155'
                    }
                }
            },
            barThickness: 20
        }
    });

    // Animation d’apparition
    const sections = document.querySelectorAll('.section-fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
});

