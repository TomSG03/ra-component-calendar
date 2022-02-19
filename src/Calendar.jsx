import Tbody from "./Table";

function monthName(month) {
  const end = month.length - 1;
  if (month[end] === 'ь' || month[end] === 'й') {
    return month.substring(0, end) + 'я';
  } else {
    return month + 'а';
  }
}

function Calendar({ date }) {
  return ( 
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{date.day}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{date.date}</div>
          <div className="ui-datepicker-material-month">{monthName(date.month)}</div>
          <div className="ui-datepicker-material-year">{date.year}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{date.month}</span>&nbsp;<span className="ui-datepicker-year">{date.year}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <thead>
          <tr>
            <th scope="col" title="Понедельник">Пн</th>
            <th scope="col" title="Вторник">Вт</th>
            <th scope="col" title="Среда">Ср</th>
            <th scope="col" title="Четверг">Чт</th>
            <th scope="col" title="Пятница">Пт</th>
            <th scope="col" className="ui-datepicker-week-end" title="Суббота">Сб</th>
            <th scope="col" className="ui-datepicker-week-end" title="Воскресенье">Вс</th>
          </tr>
        </thead>
        <Tbody table={date.calendar} today={date.date}/>
      </table>
    </div>
  )
}

export default Calendar;