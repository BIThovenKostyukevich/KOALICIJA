
document.querySelectorAll('.dropdown-only').forEach(button => {

    button.addEventListener('click', function (event) {
        event.stopPropagation(); 
        closeAllDropdowns(); 

        this.classList.toggle('active');

        const dropdownMenu = this.querySelector('.dropdown-menu');
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });
});

function closeAllDropdowns() {
    document.querySelectorAll('.dropdown-only').forEach(button => {
        button.classList.remove('active'); 
        const dropdownMenu = button.querySelector('.dropdown-menu');
        dropdownMenu.style.display = 'none';
    });
}

document.addEventListener('click', closeAllDropdowns);
