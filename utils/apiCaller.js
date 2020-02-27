import axios from 'axios';
import {isEmpty} from 'lodash';

import config from '../config';

const callApi = async (
  method = 'get',
  url = '',
  data = {},
  headers = {
    'content-type': 'application/json',
    Accept: 'application/json'
  }
) => {
  console.warn('url and data', url, data);
  if (method === 'get' && !isEmpty(data)) {
    const queryParams = encodeURI(JSON.stringify(data));

    url = `${config.serverURL}/${url}?params=${queryParams}`;
  } else {
    url = `${config.serverURL}/${url}`;
  }
  const options = {
    method,
    url,
    data,
    headers,
    withCredentials: true
    // timeout: 1000 * 10
  };

  if (method === 'get') {
    delete options.data;
  }
  try {
    const response = await axios({
      ...options
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export default callApi;
