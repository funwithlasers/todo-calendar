import { format } from 'date-fns';


// function formatDate(date)
// {
//   return(
//     format(date, 'yyyy') + '-' +
//     format(date, 'MM') + '-' +
//     format(date, 'dd')
//   );
// }

function formatDate(date) {
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

export { formatDate };