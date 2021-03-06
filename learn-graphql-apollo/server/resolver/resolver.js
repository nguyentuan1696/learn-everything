const  {books, authors} = require('../data/static')

const resolver = {
  Query: {
    books: () => books,
    book: (parent,args) => books.find(book => book.id.toString() === args.id),
    authors: () => authors,
    author: (parent, args) => authors.find(author => author.id.toString() === args.id)

  },
}

module.exports = resolver