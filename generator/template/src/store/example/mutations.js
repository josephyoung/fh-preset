export default {
  setState(state, payload) {
    for (const key in payload) {
      if (Object.prototype.hasOwnProperty.call(payload, key)) {
        const value = payload[key];
        state[key] = value;
      }
    }
  },
};
