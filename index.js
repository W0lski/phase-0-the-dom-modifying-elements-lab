// Write your code here!
const main = document.querySelector('#main');
main.remove();



const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = "Wol is the champion";
const body = document.querySelector('body');
body.append(newHeader);