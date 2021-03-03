// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  let found = authors.find((author) => author.id === id)
  return (!found) ? null : found
}

function findBookById(books, id) {
  let found = books.find((book) => book.id === id)
  return (!found) ? null : found
}

function partitionBooksByBorrowedStatus(books) {
  // arrays that'll hold returned / borrowed books
  let borrowed = [];
  let returned = [];
  // loop through all books and check if they're returned
  for (book in books) {
    let iterator = books[book];
    iterator.borrows[0].returned ? returned.push(iterator) : borrowed.push(iterator);
  }
  let allBooks = [borrowed, returned];
  return allBooks
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map((transaction) => {
    let match = accounts.find((acct) => acct.id === transaction.id);
    let merge = {...transaction, ...match};
    return merge;
  }).slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
