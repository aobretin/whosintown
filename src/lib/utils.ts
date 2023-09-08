import { BASE_URL, APP_ID } from "constants/query";

export const createFetchUrl = (url: string, params?: string[]) => {
  const formattedParams = params ? `/${params.join('/')}` : '';

  return `${BASE_URL}/${url.toLowerCase()}${formattedParams}?app_id=${APP_ID}`
}