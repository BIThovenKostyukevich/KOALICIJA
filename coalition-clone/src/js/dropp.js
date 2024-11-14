// Обработчик клика по дропдауну
document.querySelectorAll('.dropdown-only').forEach(button => {
    button.addEventListener('click', function (event) {
        event.stopPropagation();  // Останавливаем событие, чтобы избежать его распространения

        const isActive = this.classList.contains('active'); 

        closeAllDropdowns();  // Закрываем все дропдауны, чтобы предотвратить открытие нескольких

        if (!isActive) {
            this.classList.add('active');  // Открываем текущий дропдаун
        }
    });
});

// Закрытие всех дропдаунов
function closeAllDropdowns() {
    document.querySelectorAll('.dropdown-only').forEach(button => {
        button.classList.remove('active');  // Убираем активный класс с каждого дропдауна
    });
}

// Закрытие дропдаунов при клике вне их области
document.addEventListener('click', function(event) {
    // Проверяем, что клик не был сделан по кнопке бургер-меню или по дропдауну
    if (!event.target.closest('.dropdown-only') && !event.target.closest('.burger-btn')) {
        closeAllDropdowns();  // Закрываем все дропдауны, если клик был вне их области
    }
});





document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const burgerMenuContent = document.querySelector('.burger-menu-content');
    const dropdowns = document.querySelectorAll('.dropdown-only');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        burgerMenuContent.classList.toggle('active');
        document.body.classList.toggle('no-scroll'); // Блокируем/разблокируем прокрутку
    });

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', () => {
            dropdown.classList.toggle('active');
        });
    });
});
