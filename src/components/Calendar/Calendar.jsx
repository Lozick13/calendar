import React from 'react';

export function Calendar(props) {
  const {
    day,
    date,
    month,
    monthGenitive,
    year,
    firstDayOfMonth,
    lastDateMonth,
    lastDatePreviousMonth,
  } = props.date;

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{day}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{date}</div>
          <div className="ui-datepicker-material-month">{monthGenitive}</div>
          <div className="ui-datepicker-material-year">{year}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{month}</span>&nbsp;
          <span className="ui-datepicker-year">{year}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">
              Пн
            </th>
            <th scope="col" title="Вторник">
              Вт
            </th>
            <th scope="col" title="Среда">
              Ср
            </th>
            <th scope="col" title="Четверг">
              Чт
            </th>
            <th scope="col" title="Пятница">
              Пт
            </th>
            <th scope="col" title="Суббота">
              Сб
            </th>
            <th scope="col" title="Воскресенье">
              Вс
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.from({
            length: Math.ceil((lastDateMonth + firstDayOfMonth - 1) / 7),
          }).map((_, i) => (
            <tr key={i}>
              {Array.from({ length: 7 }).map((_, j) => {
                console.log((lastDateMonth + firstDayOfMonth) / 7);
                const dayNumber = j + 1 + 7 * i - firstDayOfMonth + 1;

                // следующий месяц
                if (dayNumber > lastDateMonth) {
                  const newDate = dayNumber - lastDateMonth;

                  return (
                    <td className="ui-datepicker-other-month" key={j}>
                      {newDate}
                    </td>
                  );
                }

                // сегодня
                if (dayNumber === date) {
                  return (
                    <td className="ui-datepicker-today" key={j}>
                      {dayNumber}
                    </td>
                  );
                }

                // месяц
                if (dayNumber > 0 && dayNumber <= lastDateMonth) {
                  return <td key={j}>{dayNumber}</td>;
                }

                // прошлый месяц
                return (
                  <td className="ui-datepicker-other-month" key={j}>
                    {lastDatePreviousMonth - firstDayOfMonth + j + 1}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
