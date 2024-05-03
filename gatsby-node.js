/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path");
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/data": path.resolve(__dirname, "src/data/index"),
        "@/data-br": path.resolve(__dirname, "src/data-br/index"),
        "@/components": path.resolve(__dirname, "src/components"),
        "@/components-br": path.resolve(__dirname, "src/components-br"),
        "@/context": path.resolve(__dirname, "src/context/"),
        "@/css": path.resolve(__dirname, "src/assets/css/"),
        "@/images": path.resolve(__dirname, "src/assets/images/"),
        "@/images-br": path.resolve(__dirname, "src/assets/images-br/"),
      },
    },
  });
};
