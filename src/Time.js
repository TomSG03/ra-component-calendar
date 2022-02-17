const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

// Функция определения високосного года - не пригодилась
// function getLeapYear(year) {
//   if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
//     return true;
//   }
//   return false;
// }

// Добавление дней в месяц - спереди или сзади
function addOther(arr, start, end) {
  for (let i = start + 1; i < end + 1; i++) {
    arr.push({day: i, prop: 'other'});    
  }
  return arr;
}

function getNow() {
  const nowTime = new Date();
  // const nowTime = new Date(2000, 2, 9);
  
  const now = {
    date: nowTime.getDate(),
    day: days[nowTime.getDay()],
    month: months[nowTime.getMonth()],
    year: nowTime.getFullYear(),
    // leap: getLeapYear(nowTime.getFullYear()),
    daysInMonth: (32 - new Date(nowTime.getFullYear(), nowTime.getMonth(), 32).getDate()),
    daysInMonthPrev: (32 - new Date(nowTime.getFullYear(), nowTime.getMonth() === 1 ? 12 : nowTime.getMonth() - 1, 32).getDate()),
    firstDay: new Date(nowTime.getFullYear(), nowTime.getMonth(), 1).getDay(),
  };

  const cell = [];

  if (now.firstDay === 0) {
    addOther(cell, now.daysInMonthPrev - 6, now.daysInMonthPrev);
  } else if (now.firstDay > 1) {
    addOther(cell, now.daysInMonthPrev - now.firstDay + 1, now.daysInMonthPrev);
  }
  
  for (let i = 1; i < now.daysInMonth + 1; i++) {
    cell.push({day: i, prop: 'main'});    
  }

  if ((cell.length % 7) !== 0) {
    addOther(cell, 0, 7 - (cell.length % 7))
  }

  // Перекладывем в двумерный массив
  let n = 0;
  const tCell = [];
  const countRow = cell.length / 7;
  for (let i = 0; i < countRow; i++) {
    tCell.push([])
    for (let k = 0; k < 7; k++) {
      tCell[i].push(cell[n])
      n++;
    }    
  }

  now.calendar = [...tCell];

  return now;
}

export default getNow;