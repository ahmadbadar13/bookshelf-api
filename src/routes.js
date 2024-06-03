const { addBooksHandler,
        getAllBooksHandler,
        getBooksByIdHandler,
        editBooksByIdHandler,
        deleteBooksByIdHandler,
      } = require('./handler');

const routes = [
  // Menambahkan data buku
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler,
  },
  // Menampilkan semua buku
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  // Akses ke menu detail buku
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBooksByIdHandler,
  },
  // Edite data buku
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBooksByIdHandler,
  },
  // Menghapus data buku
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBooksByIdHandler,
  },
];

module.exports = routes;
