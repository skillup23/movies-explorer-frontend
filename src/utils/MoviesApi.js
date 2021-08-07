class MoviesApi {
  constructor({ address }) {
    this._address = address;
  }

  getMoviesList() {
    return fetch(`${this._address}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
      })
  }
}

const apiMovies = new MoviesApi({
  address: 'https://api.nomoreparties.co/beatfilm-movies',
});

export default apiMovies;