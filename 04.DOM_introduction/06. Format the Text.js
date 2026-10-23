// Task: Format the Text 
// Description: Split the input text into sentences and group them into paragraphs. 
// Each paragraph must contain no more than 3 sentences. 
// Ignore empty sentences and append the generated paragraphs to the output div.

function solve() {
  const input = document.getElementById('input').value;
  const output = document.getElementById('output');

  const sentences = input
    .split('.')
    .map(sentence => sentence.trim())
    .filter(sentence => sentence.length > 0);

  output.innerHTML = '';

  for (let i = 0; i < sentences.length; i += 3) {
    const paragraphText = sentences
      .slice(i, i + 3)
      .join('. ') + '.';

    output.innerHTML += `<p>${paragraphText}</p>`;
  }
}
