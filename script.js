// script.js

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Kezdeti megjelenési animáció betöltéskor (Fade-in hatás)
    const projects = document.querySelectorAll('.project-card');
    
    projects.forEach((project, index) => {
        // Lépcsőzetes megjelenés (staggered animation)
        setTimeout(() => {
            project.classList.add('visible');
        }, index * 150); 
    });

   
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Aktív gomb stílusának cseréje
            filterButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            const filterValue = e.target.getAttribute('data-filter');

            // Projektek szűrése
            projects.forEach(project => {
                // Eltüntetjük az animációhoz
                project.classList.remove('visible');
                
                setTimeout(() => {
                    const projectCategories = project.getAttribute('data-category');
                    
                    if (filterValue === 'all' || projectCategories.includes(filterValue)) {
                        project.classList.remove('hidden');
                        // Rövid késleltetés a visszahozáshoz, hogy sima legyen az animáció
                        setTimeout(() => project.classList.add('visible'), 50);
                    } else {
                        project.classList.add('hidden');
                    }
                }, 300); // Ez megegyezik a CSS transition idejével
            });
        });
    });

});