class Api {
  get path() {
    if (USE_MOCK_API) {
      return 'http://localhost:3001/api/';
    }

    return '';
  }

  get(url) {
    this._makeRequest(url);
  }

  post(url, data) {
    this._makeRequest({
      method: 'POST',
      url,
      data,
    });
  }

  put() {}

  delete() {}

  async _makeRequest(params) {
    const { method = 'GET', url, data } = params;

    try {
      const resultPath = `${this.path}${url}`;

      const response = await fetch(resultPath, {
        method,
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('response: ', response);
    } catch (e) {
      //
    }
  }
}

export default new Api();
