let offset = 0;// зміщення
const sliderLine = document.querySelector('.slider_line');
document.querySelector('.btn-next').addEventListener('click', function () {
  offset -= 250;
  sliderLine.style.left = offset + 'px';
});