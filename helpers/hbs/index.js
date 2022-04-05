const registerHbsHelpers = (hbs) => {
  hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());
  hbs.registerHelper('isEven', (val) => val % 2 === 0);
  hbs.registerHelper('isTabActive', (section, currentUrl) => currentUrl === section);
  hbs.registerHelper('isNotLastIndex', (index, length) => index !== length - 1);
  hbs.registerHelper('selectOption', (value, optionValue) => value?.toString() === optionValue.toString());
  hbs.registerHelper('readableDate', (date) => {
    if (!date) {
      return '';
    }

    const year = date.getFullYear();
    const month = (`${date.getMonth() + 1}`).padStart(2, '0');
    const day = date.getDate();

    const hours = (`${date.getHours()}`).padStart(2, '0');
    const minutes = (`${date.getMinutes()}`).padStart(2, '0');
    const seconds = (`${date.getSeconds()}`).padStart(2, '0');

    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  });
  hbs.registerHelper('humanDate', (date) => {
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    if (!date) {
      return '';
    }

    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = date.getDate();

    return `${month} ${day}, ${year}`;
  });
};

module.exports = registerHbsHelpers;
