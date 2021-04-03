export const domain = () => {
  if (process.env.ENV === 'development') {
    return 'http://localhost:5000';
  }
  if (process.env.ENV === 'production') {
    return 'https://ecommerce-ar-backend.herokuapp.com';
  }
};
