class ValidationError extends Error {
  constructor(msg, data) {
    super(msg);
    this.data = data;
    this.message = msg;
  }
}

export default ValidationError;
