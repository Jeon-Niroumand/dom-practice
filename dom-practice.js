const container = document.querySelector('#container');

//Text in a div up top
const content = document.createElement('div');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

// Red text in a p
const redText = document.createElement('p')
redText.textContent = "Hey I'm red!";
redText.style.color = 'red';
container.appendChild(redText);

//Blue text in an h3
const blueText = document.createElement('h3');
blueText.textContent = "I'm a blue h3!";
blueText.style.color = 'blue';
container.appendChild(blueText);


// Box with black border and pink background in a div
const fancyBox = document.createElement('div');
const h1 = document.createElement('h1');
const p = document.createElement('p');
h1.textContent = "I'm in a div";
p.textContent = "ME TOO!";
fancyBox.setAttribute('style', 'border-style: solid; background: pink;');
fancyBox.appendChild(h1);
fancyBox.appendChild(p);
container.appendChild(fancyBox);
