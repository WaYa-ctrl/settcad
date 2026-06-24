document.addEventListener('DOMContentLoaded', () => {
    // Находим модальное окно и все кнопки
    const modal = document.getElementById('modal');
    const openButtons = document.querySelectorAll('[data-modal-open]');
    const closeButtons = document.querySelectorAll('[data-modal-close]');

    // Функция для открытия окна
    openButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'block'; // Показываем окно
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden'; // Отключаем прокрутку сайта, пока открыта форма
        });
    });

    // Функция для закрытия окна
    function closeModal() {
        modal.style.display = 'none'; // Прячем окно
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // Возвращаем прокрутку
    }

    // Закрываем окно при нажатии на крестик
    closeButtons.forEach(button => {
        button.addEventListener('click', closeModal);
    });

    // Закрываем окно при клике на темный фон вокруг формы
    window.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('modal__backdrop')) {
            closeModal();
        }
    });
});