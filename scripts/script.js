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

const testBooks = [mistborn, wellOfAscension, heroOfAges]

function addBookToLibrary(bookToAdd) {
    myLibrary.unshift(bookToAdd)
    return;
}

testBooks.forEach(book => addBookToLibrary(book));

// Render books
myLibrary.forEach(book => {
    const bookCard = document.createElement('div');
    const cardTitle = document.createElement('h3');
    const cardContent = document.createElement('ul');
    const cardAuthor = document.createElement('li');
    const cardPages = document.createElement('li')
    const cardRead = document.createElement('li');

    cardTitle.textContent = book.title;
    cardAuthor.textContent = book.author;
    cardPages.textContent = book.pages;
    cardRead.textContent = book.read;

    cardContent.append(cardAuthor, cardPages, cardRead);
    bookCard.append(cardTitle,cardContent);
    contentContainer.appendChild(bookCard);
})