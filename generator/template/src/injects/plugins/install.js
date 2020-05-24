/**
 * @param {string} bindName
 * @param {*} value
 */
export default (bindName, value) => (Vue, { name = bindName } = {}) => {
  Object.defineProperty(Vue.prototype, name, { value });
};
