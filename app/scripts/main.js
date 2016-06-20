const form = document.body.querySelector('form');
const container = document.body.querySelector('#container');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  container.innerHTML = '';
  const num = document.body.querySelector('#num').value;
  fib(num);
});

function fib(num) {
  // Init Fibonacci Sequence
  const fseq = [0, 1];

  for(var i = 2; i < num; i++) {
    const f = fseq[i - 1] + fseq[i - 2];
    fseq.push(f);
  }

  fseq.forEach((val, i, fseq) => {
    const marker = document.createElement('label');
    marker.style.height = `${val}rem`;
    marker.style.zIndex = `-${val}`;
    marker.innerHTML = `<span>F${i+1}</span><span>${val}</span>`;
    container.appendChild(marker);
  });
}
