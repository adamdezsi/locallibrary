// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id);
  return !found ? null : found;
}

function sortAccountsByLastName(accounts) {
  let result = accounts.sort((a, b) => (a.name.last > b.name.last ? 1 : -1));
  return result;
}

function getTotalNumberOfBorrows(account, books) {
  let counter = 0;
  let borrowed = books.map((book) => {
    return book.borrows.forEach((x) => {
      if (account.id === x.id) {
        counter++;
      }
    });
  });
  return counter;
}

function getBooksPossessedByAccount(account, books, authors) {
  console.log(books)
  // let result = books.filter((books.borrows)  => (borrows[0].id === account.id && !borrows[0].returned)).map((book) => {
  let result = books.filter(({borrows})  => (borrows[0].id === account.id && !borrows[0].returned)).map((book) => {
    let author = authors.find((auth) => auth.id === book.authorId);
    return {...book, author};
  });
  return result;
}

specificType = function (invar) {

  retval = typeof invar;

  if (retval != 'object') {
    return retval;
  } else {

    if (invar === null) {
      return "null"
    }

    if (JSON.stringify(invar)[0] == "{") {
      return "object";
    } else {
      return "array";
    }

  }
}

specificType = function (invar) {

    retval = typeof invar;

    if (retval != 'object') {
      return retval;
    } else {

      if (invar === null) {
        return "null"
      }

      if (JSON.stringify(invar)[0] == "{") {
        return "object";
      } else {
        return "array";
      }

    }
  }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
