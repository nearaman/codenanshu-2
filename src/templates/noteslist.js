import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/shortcodes/seo.js";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { green_gradient } from "../styles/Gradient.module.css";

export default function Notes(props) {
  const allPostsData = props.data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <Seo title="Notes - codenanshu developer blog" />
      <section>
        <h1 className="text-3xl md:mt-10 font-bold text-center text-textWhite">
          <span className={green_gradient}>Notes </span> 🧑🏼‍🚀
        </h1>
        <div>
          <div className="px-4 py-12 mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8 lg:divide-y lg:divide-gray-100">
                {allPostsData.map((post) => {
                  const reImage = getImage(post.frontmatter.image);
                  return (
                    <div
                      className="pt-8 sm:flex lg:items-end group"
                      key={post.id}
                    >
                      <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                        <GatsbyImage
                          className="w-full rounded-md lg:h-32 lg:w-32"
                          image={reImage}
                          alt={post.frontmatter.title}
                        />
                      </div>
                      <div>
                        <span className="text-sm text-textBlue">
                          {post.frontmatter.date}
                        </span>
                        <p className="mt-3 text-lg font-medium leading-6">
                          <Link
                            to={`/notes/${post.frontmatter.slug}`}
                            className="
                      text-xl text-textWhite
                      lg:text-2xl
                    "
                          >
                            {post.frontmatter.title}{" "}
                          </Link>
                        </p>
                        <p className="mt-2 text-lg text-textWhiteBlue">
                          {" "}
                          {post.frontmatter.description}{" "}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly mt-10">
          <Link to={props.pageContext.previousPagePath}>
            <button className="p-2 rounded-md bg-secBlack text-white shadow-2xl">
              Prev
            </button>
          </Link>
          <Link to={props.pageContext.nextPagePath}>
            <button className="p-2 rounded-md bg-secBlack text-white shadow-2xl">
              Next
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query MyNotesQuery($limit: Int, $skip: Int) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "notes" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        frontmatter {
          title
          slug
          description
          date
          image {
            childImageSharp {
              gatsbyImageData(
                width: 400
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        id
      }
    }
  }
`;
