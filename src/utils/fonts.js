const FontFaceObserver = require('fontfaceobserver');

const Fonts = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css?family=Muli';
  link.rel = 'stylesheet';

  document.head.appendChild(link);

  const muli = new FontFaceObserver('Muli');

  muli.load().then(() => {
    document.documentElement.classList.add('Muli');
  });
};

export default Fonts;
