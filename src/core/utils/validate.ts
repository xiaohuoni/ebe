export const isValidIdentifier = (name: string) => {
  return /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/.test(name);
};

export const isValidcompName = (name: string) => {
  return /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF.]*$/.test(name);
};

export const ensureValidClassName = (name: string) => {
  if (!isValidIdentifier(name)) {
    return `$${name.replace(/[^_$a-zA-Z0-9]/g, '')}`;
  }
  return name;
};

export const isFirstLetterUpperCase = (str: string): boolean => {
  if (!str) return false;
  const firstLetter = str.charAt(0);
  return firstLetter === firstLetter.toUpperCase();
};
