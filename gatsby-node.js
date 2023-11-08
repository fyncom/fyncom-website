/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */
const path = require('path');
const slugify = require("slugify");

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
  const helpItems = [
    { title: "Overview of Rewards Tools", description: "Learn more about our services", icon: "info-circle",
      topicUrl: "Rewards for Emails Text And More", url: "https://raw.githubusercontent.com/fyncom/fyncom-help/main/Overview-Of-FynCom-Tools.md" },
    { title: "Zapier Setup", description: "Automate Rewards in Zapier", icon: "zap",
      topicUrl: "zapier-rewards", url: "https://raw.githubusercontent.com/fyncom/fyncom-help/main/Zapier-Info.md" },
    { title: "Simple Email Setup", description: "Set up your forwarding email No API key required. 1 Rewards Campaign at a time", icon: "envelope" },
    { title: "Sendgrid API Key", description: "Add your API key to FynCom", icon: "key" },
    { title: "Sendgrid Email Rewards", description: "Attach Rewards To Emails", icon: "mail-bulk",
      topicUrl: "add-fyncom-rewards-to-sendgrid-marketing-email", url: "https://raw.githubusercontent.com/fyncom/fyncom-help/main/Attaching-FynCom-Rewards-To-Sendgrid-Emails.md" },
    { title: "Marketing & Basic Emails", description: "Set up your forwarding email Email API key required", icon: "chart-bar" },
    { title: "Sendgrid Drafts", description: "Prepare your Sendgrid draft for FynCom rewards", icon: "file-alt" },
    { title: "Account Balance", description: "Information about your balance", icon: "wallet" },
  ];


  helpItems.forEach(item => {
    if (item.url) {
      const titleSlug = slugify(item.topicUrl);
      createPage({
        path: `/help-center/${titleSlug}`,
        component: require.resolve(`./src/templates/helpItemTemplates.js`),
        context: {
          // Data passed to context is available in page queries as GraphQL variables.
          url: item.url,
          title: item.title,
          description: item.description,
        },
      });
    }
  });
}
exports.onCreateWebpackConfig = ({actions}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.node$/,
          use: ["node-loader"],
        },
      ],
    },
  });
};
