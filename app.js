const zaps = [...document.querySelectorAll('.boutton')];
const listekeycode = zaps.map((zap) => zap.dataset.key);
const visuel = document.querySelector('.visuel');

document.addEventListener('keyown', (e) => {
  const valeur = e.keycode.toString();
});

document.addEventListener('click', (e) => {
  const valeur = e.target.dataset.key;
  calculer(valeur);
});
const calculer = (valeur) => {
  if (listekeycode.includes(valeur)) {
    switch (valeur) {
      case "8":
        visuel.textContent = "";
        break;
      case "13":
        const calcul = eval(visuel.textContent);    
        visuel.textContent = calcul;
        break;
      default:
        const indexkeycode = listekeycode.indexOf(valeur);
        const zap = zaps[indexkeycode];
        visuel.textContent += zap.innerHTML;
    }
  }
};
