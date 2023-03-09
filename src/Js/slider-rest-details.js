// В 4 рядку замінити ".slider__room" на назву свого файлу

$(document).ready(function () {
  $('.slider-rest-details').slick({
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
// $(document).ready(function () {
//   $('.slider-rest-details').slick({
//     // Кількість слайдів
//     slidesToShow: 5,
//     //   Швидкість перемикання
//     speed: 800,
//     // Безкінечність повторення
//     infinite: true,
//     // Автоплей
//     autoplay: true,
//     // Зупинка при ховері та фокусі
//     pauseOnHover: true,
//     pauseOnFocus: true,
//     // Перемикання анімації по швидкості натискання на кнопку
//     waitForAnimate: false,
//     // Центральне позиціювання головного слайду
//     centerMode: true,
//     // Розриви між слайдами в ширину
//     variableWidth: true,
//     // Перший телефон
//     mobileFirst: true,
//     // Адаптивність (в сеттінг пипшемо функцію і значення)
//     // responsive: [
//     //   {
//     //     breakpoint: 1440,
//     //     settings: {},
//     //   },
//     // ],
//   });
// });

// $(document).ready(function () {
//   $('.slider-rest-details').slick({
//     slidesToShow: 5,
//     autoplay: false,
//     speed: 1000,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 320,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//     ],
//   });
// });

// $('.slider').slick({
//   arrows: true,
//   dots: true,
//   slidesToShow: 3,
//   autoplay: true,
//   speed: 1000,
//   autoplaySpeed: 800,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 550,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// });
