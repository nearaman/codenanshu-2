const path = require(`path`);
const pagination = require("gatsby-awesome-pagination");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    query Articles {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            category
          }
        }
      }
    }
  `);

  const tutorialsPosts = data.allMarkdownRemark.nodes.filter(
    (post) => post.frontmatter.category == "tutorials"
  );
  const blogPost = data.allMarkdownRemark.nodes.filter(
    (post) => post.frontmatter.category == "blog"
  );
  const notesPost = data.allMarkdownRemark.nodes.filter(
    (post) => post.frontmatter.category == "notes"
  );

  pagination.paginate({
    createPage, // The Gatsby `createPage` function
    items: blogPost, // An array of objects
    itemsPerPage: 9, // How many items you want per page
    pathPrefix: "/blog", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve("./src/templates/bloglist.js"),
  });

  pagination.paginate({
    createPage, // The Gatsby `createPage` function
    items: tutorialsPosts, // An array of objects
    itemsPerPage: 9, // How many items you want per page
    pathPrefix: "/tutorials", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve("./src/templates/tutorialslist.js"),
  });

  pagination.paginate({
    createPage, // The Gatsby `createPage` function
    items: notesPost, // An array of objects
    itemsPerPage: 9, // How many items you want per page
    pathPrefix: "/notes", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve("./src/templates/noteslist.js"),
  });

  data.allMarkdownRemark.nodes.forEach((node) => {
    createPage({
      path: `/${node.frontmatter.category}/${node.frontmatter.slug}/`,
      component: path.resolve("./src/components/shortcodes/Blogpost.jsx"),
      context: { slug: node.frontmatter.slug },
    });
  });
};
