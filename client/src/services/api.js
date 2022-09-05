class API {
  token = null;

  getToken() {
    return this.token;
  }

  setToken(token) {
    this.token = token;
  }

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
    return this._makeRequest({
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

      return await response.json();
    } catch (e) {
      // Будет отклонён только при сбое сети или если что-то помешало запросу выполниться.
    }
  }

  login(url, data) {
    return this._makeRequest({ url, data }).then(({ token, ...response }) => {
      if (token) {
        this.setToken(token);
      }

      return response;
    });
  }
}

export default new API();
