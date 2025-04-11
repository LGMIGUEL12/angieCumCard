(function () {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
  openB = $('open'),
  closeB = $('close'),
  timer = null;
  console.log('wat', card);
  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

})();



const style = document.querySelector(".text pre style");
const card = document.querySelector(".front face back face");


script = `
    .....
Hola Señorita Anny!
  Vengo a molestarle  
Y decearle un feliz
cumpleaños(PASADO) señorita
guapa, espero que este
muy bien y de maravilla
que lo haya pase de manera
espectacular con amigos 
y/o familia

Que cumpla muchos años
mas y que siga siempre
tan hermosa y maravillosa
como siempre
 ..........
          Feliz Cumpleaños
`;


let counter = 0;

let intervalID = setInterval(() => {
  counter++;
  style.textContent = script.substring(0, counter);
  style.scrollTop = style.scrollHeight;
  if (counter > script.length) {
    clearInterval(intervalID);
  }
}, 90);