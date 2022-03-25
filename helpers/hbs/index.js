const registerHbsHelpers = (hbs) => {
  hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());
  hbs.registerHelper('isEven', (val) => val % 2 === 0);
  hbs.registerHelper('isTabActive', (section, currentUrl) => currentUrl === section);
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
};

module.exports = registerHbsHelpers;
