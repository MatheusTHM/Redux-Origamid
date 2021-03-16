const li = Array.from(document.querySelectorAll('li'));

const getEllemtAttr = (key) => (el) => el.getAttribute(key);

const getAttrDataSlide = getEllemtAttr('data-slide');
const getAttrId = getEllemtAttr('id');

const dataSlideList = li.map(getAttrDataSlide);
const idList = li.map(getAttrId);

console.log(dataSlideList);
console.log(idList);
