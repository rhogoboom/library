const myLibrary = [];
const contentContainer = document.querySelector('.content');

// Initialize constructor function
function Book(title, author, pages, read) {
    // Book constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

// Add prototype methods
Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.read ? 'read' : 'not yet read'}`;
}

// initialize individual book instances for testing purposes
const mistborn = new Book('Mistborn', 'Brandon Sanderson', 672, true);
const wellOfAscension = new Book('Well of Ascension', 'Brandon Sanderson', 781, true);
const heroOfAges = new Book('Hero of Ages', 'Brandon Sanderson', 608, false);
const randobook1 = new Book('I Dunno', 'Me', 7, true)
const randobook2 = new Book('I Dunno', 'Me', 8, true)
const randobook3 = new Book('I Dunno', 'Me', 8, true)
const randobook4 = new Book('I Dunno', 'Me', 8, true)

const testBooks = [mistborn, wellOfAscension, heroOfAges, randobook1, randobook2, randobook3, randobook4, randobook4, randobook4]

function addBookToLibrary(bookToAdd) {
    myLibrary.unshift(bookToAdd)
    return;
}

testBooks.forEach(book => addBookToLibrary(book));

// Render books
function renderLibrary(library) {
    const newCards = []
    let i = 0;
    library.forEach(book => {
        const bookCard = document.createElement('div');
        const cardTitle = document.createElement('h3');
        const cardContent = document.createElement('ul');
        const cardAuthor = document.createElement('li');
        const cardPages = document.createElement('li')
        const cardRead = document.createElement('li');
        const removeButton = createBookRemoveButton();
    
        bookCard.classList.add('book-card');
        bookCard.dataset.index = i;
        i++;
    
        cardTitle.textContent = book.title;
        cardAuthor.textContent = `By: ${book.author}`;
        cardPages.textContent = `Pages: ${book.pages}`;
        cardRead.textContent = `${book.read ? 'Read' : 'Not Read'}`;
    
        cardContent.append(cardAuthor, cardPages, cardRead);
        bookCard.append(cardTitle,removeButton, cardContent);

        newCards.push(bookCard);
    })
    contentContainer.replaceChildren(...newCards);

}

renderLibrary(myLibrary);

const dialog = document.querySelector('dialog');
const showButton = document.querySelector('dialog + button');
const submitButton = document.querySelector('#add-new-book')
const closeButton = document.querySelector('#cancel-add-new-book');

showButton.addEventListener('click', () => {
    dialog.showModal();
});

closeButton.addEventListener('click', () => {
    dialog.close();
});

submitButton.addEventListener('click', (e) => {
    const addForm = document.querySelector('#add-book-form')
    const formInputs = [...document.querySelectorAll('#add-book-form input')];
    if(!formInputs.every(input => input.validity.valid)) {
        return
    }
    const bookTitle = document.querySelector('#book-title').value;
        const bookAuthor = document.querySelector('#author-name').value;
        const bookPages = parseInt(document.querySelector('#pages').value);
        const bookRead = document.querySelector('#read').checked;

        addBookToLibrary(new Book(bookTitle, bookAuthor, bookPages, bookRead));
        renderLibrary(myLibrary);
        e.preventDefault();
        addForm.reset()

    dialog.close();
} )

function createBookRemoveButton() {
    const btn = document.createElement('button');
    btn.textContent = 'x';
    btn.classList.add('remove-button');
    btn.addEventListener('click', () => {
        const thisIndex = btn.parentElement.dataset.index;
        myLibrary.splice(thisIndex, 1);
        renderLibrary(myLibrary);
    })
    return btn;
}

