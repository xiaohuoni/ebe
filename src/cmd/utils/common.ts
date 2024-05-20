export const toBool = (v: string) => {
  if (v === 'true') {
    return '$true$';
  }
  if (v === 'false') {
    return '$false$';
  }
  return v;
};
