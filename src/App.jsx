import './App.css';
import { Calendar } from './components/Calendar';
import moment from 'moment';
import 'moment/dist/locale/ru';

function App() {
  const currentMoment = moment();

  // предыдущий и следующий месяц в строчках (май)
  // currentMoment.subtract(-1, 'month');

  // месяц на 6 строк с воскресенья (сянтябрь)
  // currentMoment.subtract(-5, 'month');

  currentMoment.locale('ru');

  const date = {
    day:
      currentMoment.format('dddd').charAt(0).toUpperCase() +
      currentMoment.format('dddd').substring(1),
    date: +currentMoment.format('D'),
    month:
      currentMoment.format('MMMM').charAt(0).toUpperCase() +
      currentMoment.format('MMMM').substring(1),
    monthGenitive: currentMoment.format('D MMMM').substring(2),
    year: +currentMoment.format('YYYY'),
    firstDayOfMonth:
      currentMoment.startOf('month').day() > 0 ? currentMoment.startOf('month').day() : 7,
    lastDateMonth: +currentMoment.endOf('month').format('D'),
    lastDatePreviousMonth: +currentMoment.subtract(1, 'month').endOf('month').format('D'),
  };
  console.log(date);
  return (
    <>
      <Calendar date={date}></Calendar>
    </>
  );
}

export default App;
