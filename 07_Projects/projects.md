#COLOR CHANGER project 1


```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function (buttons) {
  console.log(buttons);
  document.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = 'grey';
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = 'white';
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = 'blue';
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = 'yellow';
    }
  });
});
```

#project 2

```javascript

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value) / 100;
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const bmi = (weight / (height * height)).toFixed(3);
  if (bmi >= 18.6 && bmi <= 24.9) {
    results.innerHTML = `Normal Range : ${bmi}`;
  } else if (bmi < 18.6) {
    results.innerHTML = `Under Weight: ${bmi}`;
  } else if (bmi > 24.9) {
    results.innerHTML = `Over Weight: ${bmi}`;
  }
});

```


