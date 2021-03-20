import {EVENT_TYPE, CONTENT_PUBLISHERS_CODE} from './constants';
// import Images from 'utils/images';
import moment from 'moment';

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];
// return Date Format Mon, Feb 3 2020
const formatDate = (inputDate) => {
  const date = new Date(inputDate);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${monthNames[monthIndex]} ${day}, ${year}`;
};

// return Date Format Mon, 3 Feb 2020
const formatDateDDMMYY = (inputDate) => {
  const date = new Date(inputDate);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${day} ${monthNames[monthIndex]}  ${year}`;
};

// return Date Format Feb, 3 2020
const formatDateMMDDYY = (inputDate) => {
  const date = new Date(inputDate);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${monthNames[monthIndex]} ${day},  ${year}`;
};

const formatDateAndTime = (inputDate) => {
  let formattedDateResult = '';
  let givenDay;
  let givenHour;
  let amOrpm = Number(inputDate.substring(11, 13));
  amOrpm = amOrpm > 12 ? 'PM' : 'AM';

  const givenYear = Number(inputDate.substring(0, 4));
  const givenMonth = Number(inputDate.substring(5, 7));
  givenDay = Number(inputDate.substring(8, 10));
  givenDay = givenDay < 10 ? `0${givenDay}` : `${givenDay}`;
  givenHour = Number(inputDate.substring(11, 13));
  givenHour = givenHour < 12 ? `0${givenHour}` : `${givenHour}`;
  givenHour = givenHour > 12 ? `0${givenHour - 12}` : `${givenHour}`;
  const givenMinutes = Number(inputDate.substring(14, 16));

  formattedDateResult = `${
    monthNames[givenMonth - 1]
  } ${givenDay}, ${givenYear} ${givenHour}:${givenMinutes} ${amOrpm} IST`;
  return formattedDateResult;
};

export const DATE_FORMATE = {
  MONTH_FORMATTED: 'MMM DD, YYYY, hh.mm A',
  TIME_FORMATTED: 'hh.mm A, MMM DD, YYYY',
};

export const getFormattedDateToDisplay = (
  date,
  format = DATE_FORMATE.MONTH_FORMATTED,
) => {
  if (date) {
    return moment(date).format(format).toString();
  }
  return null;
};

export const formatTimeAgo1 = (date) => {
  const currentDate = moment(new Date());
  const publishedDate = moment(date);
  console.log('currentDate', currentDate); // gives 2021-03-16T16:03:25.000Z
  console.log('receivedDate', date);
  console.log('publishedDate', publishedDate); // gives "2021-03-16T16:03:25.000Z"

  const seconds = Math.floor(currentDate.diff(publishedDate, 'seconds'));
  // const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  let interval = seconds / 2592000;
  if (interval > 2) {
    return getFormattedDateToDisplay(date, DATE_FORMATE.MONTH_FORMATTED);
  }
  if (Math.floor(interval) === 1) {
    return 'Month ago';
  }
  if (interval > 1) {
    return `${Math.floor(interval)} months ago`;
  }
  interval = seconds / 86400;
  if (Math.floor(interval) === 1) {
    return 'yesterday';
  }
  if (interval > 1) {
    return `${Math.floor(interval)} days ago`;
  }
  interval = seconds / 3600;
  if (Math.floor(interval) === 1) {
    return `Hour ago ${date}`;
  }
  if (interval > 1) {
    return `${Math.floor(interval)} hours ago`;
  }
  interval = seconds / 60;
  if (Math.floor(interval) === 1) {
    return 'Min ago';
  }
  if (interval > 1) {
    return `${Math.floor(interval)} mins ago`;
  }

  return 'just now';
};

// eslint-disable-next-line no-unused-vars
const formatTimeAgo = (postedDate) => {
  const previous = moment(postedDate);
  const current = moment(new Date().toISOString());
  // const previous = new Date(postedDate)
  // console.log('PREVIOUS DATE>>>>', previous, postedDate)
  // console.log('postedDate', postedDate);
  // console.log('currentDate', current); // gives 2021-03-16T16:03:25.000Z
  // console.log('previous', previous); // gives "2021-03-16T16:03:25.000Z"
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;
  const elapsed = current - previous;
  // console.log('seconds...', msPerMinute)
  // console.log('Minutes...', msPerHour)
  // console.log('Hours...', msPerDay)
  // console.log('Days...', msPerMonth)
  // console.log('Months...', msPerYear)
  // const seconds = current.diff(previous, 'miliseconds');
  // console.log('seconds time>>>>', seconds)
  // console.log('elapsed time>>>>', elapsed)

  if (elapsed < msPerMinute) {
    const seconds = Math.round(elapsed / 1000);

    return seconds === 60 ? '1 minute ago' : 'Few seconds ago';
  }

  if (elapsed < msPerHour) {
    const minutes = Math.round(elapsed / msPerMinute);
    return minutes === 60 ? '1 hour ago' : `${minutes} minutes ago`;
  }

  if (elapsed < msPerDay) {
    const hours = Math.round(elapsed / msPerHour);
    return hours === 24 ? '1 day ago' : `${hours} hours ago`;
  }

  if (elapsed < msPerMonth) {
    const days = Math.round(elapsed / msPerDay);
    return days === 1 ? '1 day ago' : `${days} days ago`;
  }

  if (elapsed < msPerYear) {
    const months = Math.round(elapsed / msPerMonth);
    if (months === 1) {
      return '1 month ago';
    }
    if (months === 12) {
      return '1 year ago';
    }
    return `${months} months ago`;
  }

  return `${Math.round(elapsed / msPerYear)} years ago`;
};

const getYearFromDate = (inputDate) => {
  const date = new Date(inputDate);
  return date.getFullYear();
};

const commaSeparatedValues = (array = [], key = 'id') => {
  const results = array.map((item) => item[key]);
  return results.join(',');
};
const matchYoutubeURL = (url) => {
  if (url) {
    // eslint-disable-next-line no-useless-escape
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[7].length === 11) {
      const id = match[7];
      return id;
    }
  }
  return false;
};
const getTitleSize = (list) => {
  let title = '';
  if (list.length !== 0 && list.length > 1) {
    title = `${list.length} Titles`;
  } else if (list.length !== 0 && list.length === 1) {
    title = `${list.length} Title`;
  }
  return title;
};
const isString = (val) =>
  typeof val === 'string' ||
  (!!val &&
    typeof val === 'object' &&
    Object.prototype.toString.call(val) === '[object String]');

const isEmptyObject = (value) =>
  value && value.constructor === Object && Object.keys(value).length === 0;

const isEmptyArray = (value) =>
  value && value.constructor === Array && value.length === 0;

const isEmptyString = (value) =>
  !!(value && value.constructor === String && value.length === 0);

const removeHTMLTags = (str) => {
  if (str === null || str === '') {
    return false;
  }
  str = str.toString();
  str = str.replace(/(<([^>]+)>)/gi, '');
  // str = str.replaceAll('&rsquo;', "'");
  // str = str.replaceAll('&lsquo;', "'");
  return str;
};

const getEventName = (item, eventType) => {
  let eventName = '';
  switch (eventType) {
    case EVENT_TYPE.LIKE:
      eventName =
        item.content_type.toLowerCase() === 'movie'
          ? 'movie_like'
          : 'show_like';
      break;
    case EVENT_TYPE.DISLIKE:
      eventName =
        item.content_type.toLowerCase() === 'movie'
          ? 'movie_dislike'
          : 'show_dislike';
      break;
    case EVENT_TYPE.UNLIKE:
      eventName =
        item.content_type.toLowerCase() === 'movie'
          ? 'movie_unlike'
          : 'show_unlike';
      break;
    default:
      eventName =
        item.content_type.toLowerCase() === 'movie'
          ? 'movie_like'
          : 'show_like';
  }
  return eventName;
};

const entities = {
  nbsp: ' ',
  '#160': ' ',
  lt: '<',
  '#60': '<',
  gt: '>',
  '#62': '>',
  amp: '&',
  '#38': '&',
  quot: '"',
  '#34': '"',
  apos: "'",
  '#39': "'",
  lsquo: '‘',
  '#8216': '‘',
  rsquo: '’',
  '#8217': '’',
  ldquo: '“',
  '#8220': '“',
  rdquo: '”',
  '#8221': '”',
  cent: '¢',
  '#162': '¢',
  pound: '£',
  '#163': '£',
  yen: '¥',
  '#165': '¥',
  euro: '€',
  '#8364': '€',
  copy: '©',
  '#169': '©',
  reg: '®',
  '#174': '®',
  ndash: '-',
  '#8211': '-',
};

const decodeHTMLEntities = (textInuput) =>
  textInuput.replace(
    /&([^;]+);/gm,
    (match, entity) => entities[entity] || match,
  );

// const publisherLogo = (name) => {
//   let imageURL = '';
//   switch (name) {
//     case CONTENT_PUBLISHERS_CODE.HINDUSTAN_TIMES:
//       imageURL = Images.HindustanTimes;
//       return imageURL;
//     case CONTENT_PUBLISHERS_CODE.DESI_MARTINI:
//       imageURL = Images.Desimartini;
//       return imageURL;
//     case CONTENT_PUBLISHERS_CODE.LIVE_MINT:
//       imageURL = Images.Livemint;
//       return imageURL;
//     case CONTENT_PUBLISHERS_CODE.FILM_COMPANION:
//       imageURL = Images.FilmCompanion;
//       return imageURL;
//     default:
//       imageURL = 'http://';
//       return imageURL;
//   }
// };
export default {
  formatDate,
  formatDateDDMMYY,
  formatDateMMDDYY,
  matchYoutubeURL,
  getTitleSize,
  getYearFromDate,
  commaSeparatedValues,
  isString,
  isEmptyObject,
  isEmptyArray,
  isEmptyString,
  removeHTMLTags,
  getEventName,
  formatTimeAgo,
  decodeHTMLEntities,
  formatDateAndTime,
  // publisherLogo,
};
