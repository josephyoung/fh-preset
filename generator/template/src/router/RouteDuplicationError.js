class RouteDuplicationError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'RouteDuplicationError';
  }
}

export default RouteDuplicationError;
