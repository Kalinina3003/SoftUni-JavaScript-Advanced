function extract(content) {
    let text = document.getElementById(content).textContent;
    let matches = text.match(/\(([^]+)\)/g);

    return matches.map(x => x.slice(1, -1)).join('; ');
}
