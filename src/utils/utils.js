export const getRandomNumber = (max) => {
  return 1 + Math.floor(Math.random() * max);
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const convertTime = (duration) => {
  const hours = Math.floor(duration / 60);
  const minutes = Math.round((duration / 60 - hours) * 60);

  return (
    `${hours}h ${minutes}m`
  );
};
