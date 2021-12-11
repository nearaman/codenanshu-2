import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Seo from '../components/shortcodes/seo.js'
import { green_gradient } from "../styles/Gradient.module.css";


export default function Blog(props) {
  const allPostsData = props.data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <Seo title="Blogs - codenanshu developer blog"/>
      <section>
        <h1 className="text-3xl md:mt-10 font-bold text-center text-textWhite">
          <span className={green_gradient}>BLOG</span> 🔮
        </h1>
        <div className="py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className=" mx-auto max-w-7xl">
            <div className="grid max-w-lg gap-14 mx-auto lg:grid-cols-3 lg:max-w-none">
              {allPostsData.map((post) => {
                const reImage = getImage(post.frontmatter.image);
                return (
                  <div
                    className="flex flex-col overflow-hidden rounded-lg border-gray-700 border-solid border-2 shadow-2xl"
                    key={post.id}
                  >
                    <div className="flex-shrink-0">
                      <GatsbyImage
                        className="object-cover w-full h-56"
                        image={reImage}
                        alt={post.frontmatter.title}
                      />
                    </div>
                    <div className="flex flex-col justify-between flex-1 p-6 bg-secBlack">
                      <div className="flex-1">
                        <Link
                          to={`/blog/${post.frontmatter.slug}`}
                          className="block mt-2"
                        >
                          <p className="text-xl font-semibold text-textWhite">
                            {post.frontmatter.title}
                          </p>
                          <p className="mt-3 text-base text-textWhiteBlue">
                            {post.frontmatter.description}
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
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
  query MyBlogQuery($limit: Int, $skip: Int) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "blog" } } }
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
