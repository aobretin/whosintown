import { BASE_URL, APP_ID } from "constants/query";

export const createFetchUrl = (url: string, params?: string[]) => {
  const formattedParams = params ? `/${params.join("/")}` : "";

  return `${BASE_URL}/${url.toLowerCase()}${formattedParams}?app_id=${APP_ID}`;
};

export const formatDate = (date: Date | string, unifier = ".") => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();

  let month = (newDate.getMonth() + 1).toString();
  let day = newDate.getDate().toString();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [day, month, year].join(unifier);
};
