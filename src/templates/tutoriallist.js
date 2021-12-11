import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from '../components/shortcodes/seo.js'
import { green_gradient } from "../styles/Gradient.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Tutorial(props) {
  const allPostsData = props.data.allMarkdownRemark.nodes;

  return (
    <Layout>
    <Seo title="Tutorials - codenanshu developer blog"/>
      <section>
        <h1 className="text-center text-3xl md:mt-10 font-bold text-textWhite">
          <span className={green_gradient}>TUTORIALS</span> 🤹🏻
        </h1>
        <div className="py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className=" mx-auto max-w-7xl">
            <div className="grid max-w-lg gap-14 mx-auto lg:grid-cols-3 lg:max-w-none">
              {allPostsData.map((post) => {
                const reImage = getImage(post.frontmatter.image);
                return (
                  <Link to={`/tutorial/${post.frontmatter.slug}`} key={post.id}>
                    <div className="flex w-full">
                      <div className="relative flex flex-col items-start m-1 bg-secBlack shadow-2xl rounded-xl">
                        <GatsbyImage
                          className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                          image={reImage}
                          alt={post.frontmatter.title}
                        />
                        <div className="px-6 py-8">
                          <h4 className="mt-4 text-2xl font-semibold text-textWhite">
                            <span className="">{post.frontmatter.title}</span>
                          </h4>
                          <p className="mt-4 text-base font-normal text-textWhiteBlue leading-relax">
                            {" "}
                            {post.frontmatter.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
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
  query MyTutorialQuery($limit: Int, $skip: Int) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "tutorial" } } }
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
