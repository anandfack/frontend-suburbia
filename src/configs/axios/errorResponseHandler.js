const errorResponseHandler = (error) => {
  if (error) {
    let message;
    if (error.response) {
      if (error.response.status === 500) message = "Something went wrong";
      else message = error.response.data.message;

      console.log(message);

      return Promise.reject(error);
    }
  }
};

export default errorResponseHandler;
