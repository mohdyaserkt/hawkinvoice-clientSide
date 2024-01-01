interface CustomError {
    message: string;
    response?: {
      data?: {
        error: string;
      };
    };
  }