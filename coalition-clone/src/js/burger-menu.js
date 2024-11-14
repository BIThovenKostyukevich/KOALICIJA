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

    // Закрытие меню при клике на ссылку внутри
    const menuLinks = document.querySelectorAll(".burger-menu-content a");
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            toggleMenu();
        });
    });
});
