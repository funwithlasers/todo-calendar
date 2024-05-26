import { fromZonedTime, toZonedTime } from 'date-fns-tz';
import { format, isSameDay } from 'date-fns';

// function formatDate(date)
// {
//   return(
//     format(date, 'yyyy') + '-' +
//     format(date, 'MM') + '-' +
//     format(date, 'dd')
//   );
// }

function _formatDate(date) {
  var d = new Date(date);
  var month = '' + (d.getMonth() + 1);
  var day = '' + d.getDate();
  var year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [year, month, day].join('-');
}

function _isSameDay(date1, date2) {
  try {
    return isSameDay(date1, date2);
  } catch (error) {
    console.error('Error compating dates:', error);
    throw error;
  }
}

function _convertToUtc(utcTime, timeZone) {
  try {
    return fromZonedTime(utcTime, timeZone);
  } catch (error) {
    console.error('Error converting time:', error);
    throw error;
  }
}

function _convertToLocal(utcTime, timeZone) {
  try {
    const zonedDate = toZonedTime(utcTime, timeZone);
    const formattedDate = format(zonedDate, 'yyyy-MM-dd HH:mm:ssXXX', { timeZone });

    return formattedDate;
  } catch (error) {
    console.error('Error converting time:', error);
    throw error;
  }
}

const DateUtils = {
  formatDate: _formatDate,
  isSameDay: _isSameDay,
  convertToUtc: _convertToUtc,
  convertToLocal: _convertToLocal
}

export { DateUtils };