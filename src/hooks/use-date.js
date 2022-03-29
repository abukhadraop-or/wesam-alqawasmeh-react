/**
 * Change date format from yyyy-mm-dd to month dd, year.
 *
 * @param {String} date movie release date String.
 *
 * @returns {String}
 */

const useDate = (date) => {
  const monthsObj = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    10: "October",
    11: "November",
    12: "December",
  };

  const oldDate = date.split("-");

  const newDateFormat = `${monthsObj[oldDate[1]]} ${oldDate[2]}, ${oldDate[0]}`;

  return newDateFormat;
};

export default useDate;
