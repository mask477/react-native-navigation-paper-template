import axios from 'axios';
import {BASE_URL} from './constants';

const errorResponse = (error: any) => {
  if ('response' in error) {
    if ('data' in error.response) {
      return error.response.data;
    }
    return error.response;
  }
  return error;
};

export const getRequest = ({
  url,
  token = null,
  abortToken = null,
}: {
  url: string;
  token?: string | null;
  abortToken?: AbortController | null;
}) => {
  return new Promise((resolve, reject) => {
    const headers: any = {
      headers: {
        Accept: 'application/json',
      },
    };

    if (token) {
      headers.headers.Authorization = `Bearer ${token}`;
    }

    if (abortToken) {
      headers.signal = abortToken.signal;
    }

    axios
      .get(url, headers)
      .then(response => {
        return resolve(response.data);
      })
      .catch(error => {
        reject(errorResponse(error));
      });
  });
};

export const postRequest = ({
  url,
  data,
  token = null,
}: {
  url: string;
  data: any;
  token?: string | null;
}) => {
  return new Promise((resolve, reject) => {
    const headers: any = {
      headers: {
        Accept: 'application/json',
      },
    };

    if (token) {
      headers.headers.Authorization = `Bearer ${token}`;
    }

    axios
      .post(url, data, headers)
      .then(response => {
        return resolve(response.data);
      })
      .catch(error => {
        reject(errorResponse(error));
      });
  });
};

export const patchRequest = ({
  url,
  data,
  token = null,
}: {
  url: string;
  data: any;
  token?: string | null;
}) => {
  return new Promise((resolve, reject) => {
    const headers: any = {
      headers: {
        Accept: 'application/json',
      },
    };

    if (token) {
      headers.headers.Authorization = `Bearer ${token}`;
    }

    axios
      .patch(url, data, headers)
      .then(response => {
        return resolve(response.data);
      })
      .catch(error => {
        reject(errorResponse(error));
      });
  });
};

export const putRequest = ({
  url,
  data,
  token = null,
}: {
  url: string;
  data: any;
  token?: string | null;
}) => {
  return new Promise((resolve, reject) => {
    const headers: any = {
      headers: {
        Accept: 'application/json',
      },
    };

    if (token) {
      headers.headers.Authorization = `Bearer ${token}`;
    }

    axios
      .put(url, data, headers)
      .then(response => {
        return resolve(response.data);
      })
      .catch(error => {
        reject(errorResponse(error));
      });
  });
};

export const deleteRequest = ({
  url,
  token = null,
}: {
  url: string;
  data: any;
  token?: string | null;
}) => {
  return new Promise((resolve, reject) => {
    const headers: any = {
      headers: {
        Accept: 'application/json',
      },
    };

    if (token) {
      headers.headers.Authorization = `Bearer ${token}`;
    }

    axios
      .delete(url, headers)
      .then(response => {
        return resolve(response.data);
      })
      .catch(error => {
        reject(errorResponse(error));
      });
  });
};

export const login = (username: string, password: string) => {
  const url = `${BASE_URL}login`;
  const data = {
    username,
    password,
  };

  return postRequest({url, data});
};
