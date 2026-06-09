// script.js

document.addEventListener('DOMContentLoaded', () => {
    
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
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            const filterValue = e.target.getAttribute('data-filter');

            projects.forEach(project => {
                
                project.classList.remove('visible');
                
                setTimeout(() => {
                    const projectCategories = project.getAttribute('data-category');
                    if (filterValue === 'all' || projectCategories.includes(filterValue)) {
                        project.classList.remove('hidden');
                        setTimeout(() => project.classList.add('visible'), 50);
                    } else {
                        project.classList.add('hidden');
                    }
                }, 300); 
            });
        });
    });

});