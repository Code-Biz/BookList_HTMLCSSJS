let books = [];
function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {

            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };

        books.push(book);
        showBooks();
        clearInputs();
        //we used the keyword book to pass/pass the object created above to the books array. i.e we created a named object(book)
    }
    else {
        alert(`Please fill out all fields!`);
    }
}


function showBooks() {
    const booksDiv = books.map((book, index) => `
        <div class="col-md-6 mb-4">
            <div class="card shadow-sm border-0">
                <div class="card-body">
                    <h5 class="card-title text-primary">Book ${index + 1}: ${book.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Author: ${book.authorName}</h6>
                    <p class="card-text">${book.bookDescription}</p>
                    <p class="text-secondary"><strong>Pages:</strong> ${book.pagesNumber}</p>
                </div>
            </div>
        </div>
    `);

    document.getElementById('books').innerHTML = `
        <div class="row">
            ${booksDiv.join('')}
        </div>
    `;
}


function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}