// Task: Task Manager Functionality
// Description: Manage tasks through different stages (Open, In Progress, Complete) 
// with validation, creation, moving, finishing, and deleting capabilities.

function solve() {
    const inputTask = document.getElementById('task');
    const inputDescription = document.getElementById('description');
    const inputDate = document.getElementById('date');
    const addButton = document.getElementById('add');

    const sections = document.querySelectorAll('section');
    const openSectionDiv = sections[1].children[1];
    const inProgressSectionDiv = document.getElementById('in-progress');
    const completeSectionDiv = sections[3].children[1];

    addButton.addEventListener('click', (e) => {
        e.preventDefault();

        if (!inputTask.value.trim() || !inputDescription.value.trim() || !inputDate.value.trim()) {
            return;
        }

        const article = document.createElement('article');

        const h3 = document.createElement('h3');
        h3.textContent = inputTask.value;

        const pDescription = document.createElement('p');
        pDescription.textContent = `Description: ${inputDescription.value}`;

        const pDate = document.createElement('p');
        pDate.textContent = `Due Date: ${inputDate.value}`;

        const divFlex = document.createElement('div');
        divFlex.className = 'flex';

        const startButton = document.createElement('button');
        startButton.className = 'green';
        startButton.textContent = 'Start';

        const deleteButton = document.createElement('button');
        deleteButton.className = 'red';
        deleteButton.textContent = 'Delete';

        divFlex.appendChild(startButton);
        divFlex.appendChild(deleteButton);

        article.appendChild(h3);
        article.appendChild(pDescription);
        article.appendChild(pDate);
        article.appendChild(divFlex);

        openSectionDiv.appendChild(article);

        inputTask.value = '';
        inputDescription.value = '';
        inputDate.value = '';

        deleteButton.addEventListener('click', () => {
            article.remove();
        });

        startButton.addEventListener('click', () => {
            article.remove(); 

            divFlex.innerHTML = ''; 

            const deleteBtnInProgress = document.createElement('button');
            deleteBtnInProgress.className = 'red';
            deleteBtnInProgress.textContent = 'Delete';

            const finishButton = document.createElement('button');
            finishButton.className = 'orange';
            finishButton.textContent = 'Finish';

            divFlex.appendChild(deleteBtnInProgress);
            divFlex.appendChild(finishButton);
            article.appendChild(divFlex);

            inProgressSectionDiv.appendChild(article);

            deleteBtnInProgress.addEventListener('click', () => {
                article.remove();
            });

            finishButton.addEventListener('click', () => {
                article.remove();
                divFlex.remove();
                completeSectionDiv.appendChild(article);
            });
        });
    });
}
