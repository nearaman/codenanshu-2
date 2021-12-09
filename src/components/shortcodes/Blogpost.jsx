import React from "react";
import Layout from "../Layout";
import Seo from "../shortcodes/seo";
import { post } from "../../styles/Blog.module.css";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Comments from "./Comments";

export default function Blogpost({ data }) {
  const { title, date, description } = data.markdownRemark.frontmatter;
  const html = data.markdownRemark.html;
  const image = getImage(data.markdownRemark.frontmatter.image);

  return (
    <Layout>
      <Seo title={title} description={description} />
      <article
        className="py-10 sm:px-24 md:px-36 lg:px-72 xl:px-80 2xl:px-96 lg:flex lg:justify-center items-center lg:flex-col lg:max-w-6xl xl:max-w-7xl 2xl:max-w-screen-2xl"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1
            id={title.replaceAll(" ", "-")}
            className="text-textWhite font-bold text-3xl sm:text-4xl leading-tight"
          >
            {title}
          </h1>
          <p className="text-textBlue my-3">last updated on {date}</p>
          <GatsbyImage image={image} alt={title} className="my-3 rounded" />
        </header>
        <section
          id="post"
          className={post}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
      <Comments />
    </Layout>
  );
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        description
        image {
          childImageSharp {
            gatsbyImageData(
              width: 612
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      html
    }
  }
`;
