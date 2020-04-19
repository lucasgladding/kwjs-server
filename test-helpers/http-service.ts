import { AxiosResponse } from 'axios';

export function createAxiosResponse<T>(data: T): AxiosResponse<T> {
  return {
    config: {},
    data,
    headers: {},
    status: 200,
    statusText: "OK",
  };
}
