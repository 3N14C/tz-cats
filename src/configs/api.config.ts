import { API_URL } from '@/constants';
import axios, { CreateAxiosDefaults } from 'axios';

const options: CreateAxiosDefaults = {
  baseURL: API_URL,
};

export const apiPublic = axios.create(options);
