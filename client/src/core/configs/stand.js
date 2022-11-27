import APIService from '@services/api';

/** Получить имя хоста. */
const getRootUrl = (url) => url.toString().replace(/^(.*\/\/[^\/?#]*).*$/,"$1/");

const stand = USE_MOCK_API ? window.location.href : '';
const APIPath = 'api/v1';

const APIService = new APIService({ url: getRootUrl(stand), resource: APIPath });