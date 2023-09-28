function getInputValue() {
  // Selecting the input element and get its value
  console.log('hello');
  //   var inputVal = document.getElementById('myInput').value;

  //   var inputValLocation = document.querySelectorAll('img');
  //   inputValLocation.forEach(image => {
  //     image.setAttribute('src', intputVal);
  //     // Displaying the value
  //   });
}

console.log('I AM CONNECTED');
let inputVal =
  'https://media.licdn.com/dms/image/C4D03AQG2XwBr2rylkg/profile-displayphoto-shrink_800_800/0/1572454199260?e=2147483647&v=beta&t=3GltJtHfvBmYtLEntPM8Q12QK8_9K-jx_EeeMYQNuVg';
const submitButton = document.getElementById('button');
submitButton.onclick = function () {
  inputVal = document.getElementById('myInput').value;
  console.log(inputVal);
  console.log(window);
  let inputValLocation = window.document.querySelectorAll('img');
  console.log(inputValLocation);
  inputValLocation.forEach(image => {
    image.setAttribute('src', inputVal);
  });
};
// module.exports = { inputVal };
