function sumTable() {
    let rows = document.querySelectorAll('table tr');
    let sum = 0;

    for (let i = 1; i < rows.length - 1; i++) {
        let price = Number(rows[i].children[1].textContent);
        sum += price;
    }

    document.getElementById('sum').textContent = sum.toFixed(2);
}
