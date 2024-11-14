
document.querySelectorAll('.dropdown-only').forEach(button => {
    button.addEventListener('click', function (event) {
        event.stopPropagation();  

        const isActive = this.classList.contains('active'); 

        closeAllDropdowns();  
        if (!isActive) {
            this.classList.add('active');  
        }
    });
});


function closeAllDropdowns() {
    document.querySelectorAll('.dropdown-only').forEach(button => {
        button.classList.remove('active'); 
    });
}


document.addEventListener('click', function(event) {
    
    if (!event.target.closest('.dropdown-only') && !event.target.closest('.burger-btn')) {
        closeAllDropdowns();  
    }
});





document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const burgerMenuContent = document.querySelector('.burger-menu-content');
    const dropdowns = document.querySelectorAll('.dropdown-only');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        burgerMenuContent.classList.toggle('active');
        document.body.classList.toggle('no-scroll'); 
    });

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', () => {
            dropdown.classList.toggle('active');
        });
    });
});
