document.getElementById('add-note-button').addEventListener('click', addNote);
document.getElementById('theme-toggle-checkbox').addEventListener('change', toggleTheme);

function addNote() {
    const noteInput = document.getElementById('note-input');
    const notesContainer = document.getElementById('notes-container');

    if (noteInput.innerHTML.trim() === '') {
        alert('Please write a note.');
        return;
    }

    const note = document.createElement('div');
    note.className = 'note';

    const noteContent = document.createElement('div');
    noteContent.className = 'note-content';
    noteContent.innerHTML = noteInput.innerHTML;

    const iconContainer = document.createElement('div');
    iconContainer.className = 'icon-container';

    // Edit icon
    const editIcon = document.createElement('i');
    editIcon.className = 'fa-solid fa-pen icon';
    editIcon.addEventListener('click', function() {
        editNoteContent(noteContent);
    });

    // Delete icon
    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa-solid fa-trash icon';
    deleteIcon.addEventListener('click', function() {
        deleteNoteElement(note);
    });

    iconContainer.appendChild(editIcon);
    iconContainer.appendChild(deleteIcon);

    note.appendChild(noteContent);
    note.appendChild(iconContainer);

    notesContainer.appendChild(note);

    noteInput.innerHTML = '';
}

function editNoteContent(noteContent) {
    const currentText = noteContent.innerHTML;
    const newText = prompt('Edit your note:', currentText);
    if (newText !== null) {
        noteContent.innerHTML = newText;
    }
}

function deleteNoteElement(note) {
    const notesContainer = document.getElementById('notes-container');
    notesContainer.removeChild(note);
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('dark-mode')) {
        createStars();
    } else {
        removeStars();
    }
}

function createStars() {
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        document.body.appendChild(star);
    }
}

function removeStars() {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => star.remove());
}

// Function to format text
function formatText(command, value = null) {
    document.execCommand(command, false, value);
}

// Function to toggle bullets
function toggleBullets() {
    document.execCommand('insertUnorderedList', false, null);
}
