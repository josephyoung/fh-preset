module.exports = (api) => {
  api.render("./template");
  api.extendPackage({
    dependencies: {
      lodash: "^4.17.15",
      axios: "^0.19.2",
      "element-ui": "^2.13.1",
      qs: "^6.9.4",
      nprogress: "^0.2.0",
    },
    devDependencies: {
      serve: "^11.3.0",
    },
  });
};
