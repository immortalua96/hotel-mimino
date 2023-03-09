// В 4 рядку замінити ".slider__room" на назву свого файлу

$(document).ready(function () {
  $('.slider__room').slick({
    // Кількість слайдів
    slidesToShow: 1,
    //   Швидкість перемикання
    speed: 800,
    // Безкінечність повторення
    infinite: true,
    // Автоплей
    autoplay: false,
    // Зупинка при ховері та фокусі
    pauseOnHover: true,
    pauseOnFocus: true,
    // Перемикання анімації по швидкості натискання на кнопку
    waitForAnimate: true,
    // Центральне позиціювання головного слайду
    centerMode: true,
    // Розриви між слайдами в ширину
    variableWidth: true,
    // Перший телефон
    mobileFirst: true,
    // Адаптивність (в сеттінг пипшемо функцію і значення)
    // responsive: [
    //   {
    //     breakpoint: 1440,
    //     settings: {},
    //   },
    // ],
  });
});
