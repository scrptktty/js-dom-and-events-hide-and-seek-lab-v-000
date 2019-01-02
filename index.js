NodeList.prototype.forEach = Array.prototype.forEach
const lis = document
  .getElementById('app')
  .querySelectorAll('ul.ranked-list li');

function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document
    .getElementById('app')
    .querySelector('#nested .target')
}

function deepestChild() {
  return document
  .getElementById('app')
  .querySelector('#grand-node div div div div')
}

function increaseRankBy(n) {
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString()
  }
}
