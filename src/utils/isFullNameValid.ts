export const isFullNameValid = (value: string): true | string => {
  const words = value.trim().split(/\s+/);

  if (words.length < 3) {
    return 'Введіть повне ПІБ';
  }

  return true;
};
