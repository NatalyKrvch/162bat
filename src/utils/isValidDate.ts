export const isValidDate = (value: string): true | string => {
  if (value.includes('_')) return 'Введіть повну дату';

  const [day, month, year] = value.split('.').map(Number);

  const date = new Date(year, month - 1, day);

  const isRealDate =
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day;

  const yearIsValid = year >= 1900 && year <= new Date().getFullYear();

  if (!isRealDate || !yearIsValid) {
    return 'Введіть реальну дату';
  }

  return true;
};
