// Task: Table - Search Engine.
// Description: Search table cells for matching text,
// highlight matching rows, and clear previous results and the input field.

function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchField = document.querySelector('#searchField');
      const searchText = searchField.value.toLowerCase();
      const rows = document.querySelectorAll('tbody tr');

      rows.forEach(row => {
         row.classList.remove('select');

         const cells = row.querySelectorAll('td');

         for (let cell of cells) {
            if (searchText !== '' && cell.textContent.toLocaleLowerCase().includes(searchText)) {
               row.classList.add('select');
               break;
            }
         }
      });

      searchField.value = '';
   }
}
