// eslint-disable-next-line import/no-extraneous-dependencies
import axios, { AxiosResponse } from 'axios';

const rest = axios.create({ baseURL: process.env.NEXT_PUBLIC_ENDPOINT });

class API {
  static getAnswer(question: string): Promise<AxiosResponse<string>> {
    return rest.get('', { params: { question } });
  }
}

export default API;
