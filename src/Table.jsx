import React from 'react'

function whatClassName(item, date, col) {
  let clList = '';
  if (item.prop === 'other') {
    clList += 'ui-datepicker-other-month';
  }
  if (col === 5 || col === 6) {
    clList = 'ui-datepicker-week-end';
  }
  if (item.day === date) {
    clList = 'ui-datepicker-today';
  }
  return clList;
}

function Tbody({ table, today }) {
  return (
    <tbody>
      {
        table.map((e, row) => {
          return <tr key={row}>
            {e.map((n, col) => {
              return <td key={n.id} className={whatClassName(n, today, col)}>{n.day}</td>
            })}
          </tr>
        })
      }
    </tbody>
  )
}

export default Tbody;
