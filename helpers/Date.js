export default function formatDate(date) {
  if (!(date instanceof Date)) {
    return "";
  }
  const month = date.getMonth() + 1;
  const day = date.getDay();
  const year = date.getFullYear();
  let parsedDate = `${year}-`;
  parsedDate += month < 10
    ? `0${month}`
    : month;
  parsedDate += day < 10
    ? `-0${day}`
    : `-${day}`;

  return parsedDate;
}
