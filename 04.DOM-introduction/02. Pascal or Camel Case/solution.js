function solve() {
  let text = document.getElementById('text').value.toLowerCase();
  let convention = document.getElementById('naming-convention').value;

  let words = text.split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  let result = words.join('');

  if (convention === 'Camel Case') {
    result = result[0].toLowerCase() + result.slice(1);
  } else if (convention !== 'Pascal Case') {
    result = 'Error!';
  }

  document.getElementById('result').textContent = result;
}
