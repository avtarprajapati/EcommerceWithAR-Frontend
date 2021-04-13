export const domain = () => {
  if (process.env.ENV === 'development') {
    return 'http://localhost:5000/api/v1';
  }
  if (process.env.ENV === 'production') {
    return 'https://ecommerce-ar-backend.herokuapp.com/api/v1';
  }
};
