// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let result = books.filter((book) => {
    return book.borrows.some((thing) => thing.returned === false);
  });
  return result.length;
}

function getMostCommonGenres(books) {
  let result = [];
  for (let i = 0; i < books.length; i++) {
    let exists = false;
    for (let j = 0; j < result.length; j++) {
      if (books[i].genre === result[j].name) {
        exists = true;
        result[j].count++;
      }
    }
    if (exists === false) {
      result.push({ name: books[i].genre, count: 1 });
    }
  }
  return result.sort((a, b) => (a.count > b.count ? -1 : 1)).slice(0, 5);
}
function getMostPopularBooks(books) {
  let result = [];
  for (let i = 0; i < books.length; i++) {
    result.push({ name: books[i].title, count: books[i].borrows.length });
  }
  return result.sort((a, b) => (a.count > b.count ? -1 : 1)).slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  //returns an array of objects: {name: AuthorName, count: borrowedCount}
  let result = [];
  authors.forEach(function (author) {
    let authorObject = {};
    let authorName = `${author.name.first} ${author.name.last}`;
    authorObject.name = authorName;
    authorObject.id = author.id;
    books.forEach(function (book) {
      if (book.authorId === author.id) {
        let count = 0;
        count = count + Object.keys(book.borrows).length;
        authorObject = { name: authorName, count: count };
        result.push(authorObject);
      }
    });
  });
  console.log("eredmeny", result);
  return result.sort((a, b) => (a.count > b.count ? -1 : 1)).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
