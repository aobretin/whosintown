import { BASE_URL, APP_ID } from "constants/query";

export const defaultQueryFn = async ({ queryKey: queryParams }) => {
    const [url, ...params] = queryParams;
    const formattedParams = params ? `/${params.join('/')}` : '';

    if (typeof url === 'string') {
      const response = await fetch(
        `${BASE_URL}/${url.toLowerCase()}${formattedParams}?app_id=${APP_ID}`
      );
      return response.json();
    }
    throw new Error('Invalid QueryKey');
}
  