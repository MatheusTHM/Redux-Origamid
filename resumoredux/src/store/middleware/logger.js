const logger = (store) => (next) => (action) => {
  const result = next(action);
  console.log(action);
  return result;
};

export default logger;
