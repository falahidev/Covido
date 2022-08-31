const linkBox = document.querySelector('.link-box');
const link = document.querySelector('.link');

linkBox.addEventListener('click', () => {
   navigator.clipboard.writeText(link.value);

   showSnack('کپی شد');
}, true);