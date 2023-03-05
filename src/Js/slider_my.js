let offset = 0;// зміщення


const sliderLine = document.querySelector('.slider_line');


document.querySelector('.btn-next').addEventListener('click', function () {
  offset += 270;
  if (offset > 540) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
});
document.querySelector('.btn-prev').addEventListener('click', function () {
  offset -= 270;
  if (offset < 0) {
    offset = 540;
  }
  sliderLine.style.left = -offset + 'px';
});