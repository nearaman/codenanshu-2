const config = require("../../../config.json");

const indexName = config.ALGOLIA_INDEX_NAME;

const pageQuery = `
query search {
  allMarkdownRemark {
    nodes {
      id
      frontmatter {
        title
        description
        slug
        category
      }
    }
  }
}

`;

function pageToAlgoliaRecord({ id, frontmatter }) {
  return {
    objectID: id,
    title: frontmatter.title,
    description: frontmatter.description,
    slug: `/${frontmatter.category}/${frontmatter.slug}`,
  };
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) =>
      data.allMarkdownRemark.nodes.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
];

module.exports = queries;
