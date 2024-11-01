
document.querySelectorAll('.dropdown-menu-lng').forEach(button => {
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
    document.querySelectorAll('.dropdown-menu-lng').forEach(button => {
        button.classList.remove('active');
    });
}


document.addEventListener('click', closeAllDropdowns);
