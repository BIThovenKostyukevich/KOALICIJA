document.addEventListener("DOMContentLoaded", function () {
    const burgerIcon = document.querySelector(".burger-icon");
    const burgerMenu = document.querySelector(".burger-menu");
    const menuContent = document.querySelector(".burger-menu-content");

    // Переключение меню и скроллинга
    function toggleMenu() {
        burgerMenu.classList.toggle("active");
        document.body.classList.toggle("no-scroll");
    }

    // Открытие/закрытие меню при клике на иконку
    burgerIcon.addEventListener("click", function (e) {
        e.stopPropagation(); // Предотвращаем закрытие при клике на иконку
        toggleMenu();
    });

    // Закрытие меню при клике вне его области
    document.addEventListener("click", function (e) {
        if (!burgerMenu.contains(e.target) && burgerMenu.classList.contains("active")) {
            toggleMenu();
        }
    });

    // Обработка кликов по ссылкам в бургер-меню
    const menuLinks = document.querySelectorAll(".burger-menu-content a");

    menuLinks.forEach(link => {
        // Если ссылка имеет класс .dropdown-arrow, раскрываем подменю, не сворачивая бургер-меню
        if (link.classList.contains("dropdown-arrow")) {
            link.addEventListener("click", function (e) {
                e.preventDefault(); // Предотвращаем переход по ссылке
                e.stopPropagation(); // Останавливаем всплытие события
                
                // Переключаем класс active на текущей ссылке для отображения подменю
                this.classList.toggle('active');
                
                // Показываем или скрываем подменю
                const subMenu = this.nextElementSibling;
                if (subMenu && subMenu.classList.contains('sub-dropdown-menu')) {
                    subMenu.classList.toggle('active');
                }
            });
        } else {
            // Для всех остальных ссылок закрываем бургер-меню при клике
            link.addEventListener("click", function () {
                toggleMenu();
            });
        }
    });
    document.addEventListener('DOMContentLoaded', () => {
        const burgerMenu = document.querySelector('.burger-menu');
        const burgerIcon = burgerMenu.querySelector('.burger-icon');
        const dropdownArrows = document.querySelectorAll('.dropdown-arrow');
    
        burgerIcon.addEventListener('click', () => {
            burgerMenu.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
    
        dropdownArrows.forEach(arrow => {
            arrow.addEventListener('click', () => {
                arrow.classList.toggle('active');
            });
        });
    });
    
});
