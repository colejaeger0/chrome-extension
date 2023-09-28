// const { inputVal } = require('./onclickFunction');
console.log('codesmith.js is running');
let inputVal = 'test';
const imageLocations2 = document.querySelectorAll('img');

imageLocations2.forEach(image => {
  image.setAttribute('src', inputVal);
});
console.log(inputVal);
// 'https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/216/original/white-background.png'
