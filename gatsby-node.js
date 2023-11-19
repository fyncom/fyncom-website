/**
 * Implement Gatsby's Node APIs in this file.
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */
/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const path = require('path');
const axios = require('axios');
const fs = require('fs-extra');
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.node$/,
          use: ["node-loader"],
        },
      ],
    },
  })
}

const helpCenterTemplate = path.resolve('./src/templates/helpCenterTemplate.js');
exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  // Import `helpItems` from wherever the file is located in your project
  const { helpItems } = require('./path-to/help-items.js');

  // Fetch all markdown files and create a page for each
  for (const item of helpItems) {
    const { topicUrl, url } = item;
    // Fetch the markdown file content from the raw GitHub URL
    const content = await axios.get(url).then(res => res.data);
    // Include the markdown content in the `context` so it's available in the template
    createPage({
      path: `/help-center/${topicUrl}`,
      component: helpCenterTemplate,
      context: {
        content, // Pass markdown content to context
        title: item.title // Optional: Pass title to use in SEO component
      }
    });
  }
};
