class Api {
  constructor({ _headers, _baseUrl }) {
    this._baseUrl = _baseUrl;
    this._headers = _headers;
  }

  _getCheckData(res) {
    return res.ok
      ? res.json()
      : Promise.reject('Error ' + res.status + res.statusText);
  }

  getPhotos = () => {
    return fetch(`${this._baseUrl}/albums/1/photos`, {
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    }).then((res) => this._getCheckData(res));
  };
}
export const api = new Api({
  _baseUrl: 'https://jsonplaceholder.typicode.com',
});
