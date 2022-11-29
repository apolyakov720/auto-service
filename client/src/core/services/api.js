import API from '@services/api';
import { getHostURL } from '@utils/common';

import { standConfig } from '../configs/stand';

const { url, APIPath } = standConfig;

const APIService = new API({ url: getHostURL(url), resource: APIPath });

export default APIService;
