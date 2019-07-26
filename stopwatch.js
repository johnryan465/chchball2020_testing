var inc = 1000;

clock();

function clock() {
  const date = new Date();

  const hours = ((date.getHours() + 11) % 12 + 1);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;

  document.querySelector('.hour-hand').style.transform = `rotate(${hour}deg)`
  document.querySelector('.minute-hand').style.transform = `rotate(${minute}deg)`
  document.querySelector('.seconds-hand').style.transform = `rotate(${second}deg)`
}

setInterval(clock, inc);
