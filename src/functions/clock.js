let clock = document.getElementById('myclock');

function time() {
  let d = new Date();
  let s = d.getSeconds();
  let m = d.getMinutes();
  let h = d.getHours();
  let resultClock = `${h}:${m}:${s}`;
  clock.textContent = resultClock;
}

export default time;
