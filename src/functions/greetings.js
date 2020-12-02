let greeting = document.getElementById('mygreetings');

function greetings() {
  let day = new Date();
  let weekday = new Array(7);
  weekday[0] = 'Minggu';
  weekday[1] = 'Senin';
  weekday[2] = 'Selasa';
  weekday[3] = 'Rabu';
  weekday[4] = 'Kamis';
  weekday[5] = "Jum'at";
  weekday[6] = 'Sabtu';

  let theDay = weekday[day.getDay()];
  greeting.innerHTML = `${theDay}`;
}

export default greetings;
