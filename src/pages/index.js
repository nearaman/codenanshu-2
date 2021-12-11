import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/shortcodes/seo";
import Svghero from '../components/shortcodes/Svghero'
import { blue_gradient, green_gradient } from "../styles/Gradient.module.css";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { pattern_dots_md } from "../styles/Patterns.module.css";

export default function Home({ data }) {
  const BlogpostData = data.blog.nodes;
  const tutorialPostData = data.tutorial.nodes;

  return (
    <Layout>
      <Seo />
      <section className="body-font">
        <div className="container mx-auto flex flex-col-reverse px-5 py-10 md:flex-row flex-col items-center">
          <div
            className={`lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center`}
          >
            <h1
              className={`title-font sm:text-4xl text-3xl mb-4 font-bold text-white`}
            >
              I'm Anshu Meena trying{" "}
              <br className="hidden lg:inline-block my-1" />
              to build{" "}
              <span className={`${blue_gradient}`}> new web for everyone</span>
            </h1>
            <p className="mb-8 leading-loose text-textWhiteBlue">
              I specialize in rapidly building software companies and web
              applications. I talk about my journey on Twitter, commit code to
              Github, and take shots on Dribbble.
            </p>
            <div className="flex justify-center">
              <Link to="/blog">
                <button className="inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Blog
                </button>
              </Link>
              <Link to="/about">
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  About
                </button>
              </Link>
            </div>
          </div>
          <div className={`lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pb-10`}>
            <Svghero/>
          </div>
        </div>
      </section>

      {/* blog section */}

      <section className="body-font py-12">
        <div className="container px-5 mx-auto">
          <div className="flex justify-between items-center my-12 px-2">
            <h2 className="text-textWhite font-medium">
              Latest <span className={green_gradient}>Articles</span>
            </h2>
            <Link to="/blog/">
              <p className="text-textWhiteBlue">All Posts {">>"}</p>
            </Link>
          </div>
          <div className="flex flex-wrap -m-4">
            {BlogpostData.map((post, index) => {
              return (
                <div className="p-4 md:w-1/4" key={index}>
                  <div
                    className={`h-full border-2 border-gray-700 rounded-md bg-bgBlack p-2 flex flex-col justify-evenly`}
                  >
                    <h3 className="title-font text-lg font-medium text-white">
                      {post.frontmatter.title}
                    </h3>
                    <p className="text-textWhiteBlue whitespace-pre-line">
                      {post.frontmatter.description}
                    </p>
                    <Link
                      to={`/blog/${post.frontmatter.slug}/`}
                      className="text-green-400 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tutorial section */}

      <section className="body-font py-12">
        <div className="container px-5 mx-auto">
          <div className="flex justify-between items-center my-12 px-2">
            <h2 className="text-textWhite font-medium">
              Awesome <span className={green_gradient}>Tutorials</span>
            </h2>
            <Link to="/tutorial/">
              <p className="text-textWhiteBlue">All Posts {">>"}</p>
            </Link>
          </div>
          <div className="flex flex-wrap -m-4">
            {tutorialPostData.map((post, index) => {
              const reImage = getImage(post.frontmatter.image);
              return (
                <div className="overflow-hidden shadow-lg md:transition md:duration-500 md:ease-in-out md:transform md:hover:-translate-y-5 md:hover:shadow-2xl rounded-lg h-90 w-80 mb-10 cursor-pointer m-auto" key={index}>
                  <Link
                    to={`/tutorial/${post.frontmatter.slug}`}
                    className="w-full block h-full"
                  >
                    <GatsbyImage
                      alt="blog photo"
                      image={reImage}
                      className="max-h-40 w-full object-cover"
                    />
                    <div className="bg-secBlack w-full p-4">
                      <p className="text-textWhite text-2xl font-medium">
                        {post.frontmatter.title}
                      </p>
                      <p className="text-textWhiteBlue font-light text-md mt-8 mb-4">
                        {post.frontmatter.description}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* skills */}

      <section className="pb-1 py-2">
        <div className="max-w-6xl mx-auto px-5 py-16 ">
          <div className="text-center mb-20">
            <h1 className=" title-font mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl text-textWhite">
              Skills
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-textWhiteBlue">
              currently in learning phase but got hand on many amazing
              technology like JavaScript and python. but due to hard practice of
              coding i got these skills right now, but ya i will change it in
              near future by using hard work.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-neworange inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
            <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col">
              <div className={`${pattern_dots_md} text-textBlue`}>
                <div className="rounded bg-secBlack p-4 transform translate-x-6 -translate-y-6  ">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full  mb-5 flex-shrink-0 p-2">
                    <svg
                      className="w-6 h-6 bg-red-400 text-black p-1 rounded"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      ></path>
                    </svg>{" "}
                  </div>
                  <div className="flex-grow">
                    <h2 className=" text-xl title-font font-medium mb-3 text-textWhite">
                      Front-end
                    </h2>
                    <p className="leading-relaxed text-sm text-justify text-textBlue">
                      i love front-end 💻 the most in the development 🏗. love to
                      developing good looking UI and UX for the user 🎨 i have
                      HTML, CSS, JS and React Js 😍 etc for the front-end
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
              <div className={`${pattern_dots_md} text-textBlue`}>
                <div className="rounded bg-secBlack p-4 transform translate-x-6 -translate-y-6 ">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                    <svg
                      className="w-6 h-6 bg-green-400 text-black p-1 rounded"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h2 className=" text-xl title-font font-medium mb-3 text-textWhite">
                      Development
                    </h2>
                    <p className="leading-relaxed text-sm text-justify text-textBlue">
                      writing code is always a passionate 👦 work for i love to
                      write code to solve problem in the software with bugs ⭐,
                      build softwares, mobile apps and website in javascript and
                      python
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
              <div className={`${pattern_dots_md} text-textBlue`}>
                <div className="rounded bg-secBlack p-4 transform translate-x-6 -translate-y-6 ">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-newyellow mb-5 flex-shrink-0">
                    <svg
                      className="w-6 h-6 bg-yellow-400 text-black p-1 rounded"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h2 className=" text-xl title-font font-medium mb-3 text-textWhite">
                      Back-end
                    </h2>
                    <p className="leading-relaxed text-sm text-justify text-textBlue">
                      Not good at all in the backend development but still have
                      enough knowladge for building full stack apps with Nodejs
                      and MongoDB and Firebase 💪. not good but working on it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* profile section */}

      <section className="antialiased text-textWhiteBlue leading-normal tracking-wider bg-cover">
        <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
          <div
            id="profile"
            className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-secBlack shadow- mx-6 lg:mx-0"
          >
            <div className="p-4 md:p-12 text-center lg:text-left">
              <div
                className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1611457194403-d3aca4cf9d11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80")',
                }}
              />
              <h1 className="text-3xl font-bold pt-8 lg:pt-0 text-textWhite">
                Ai Anshu
              </h1>
              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-textGreen opacity-35" />
              <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                <svg
                  className="h-4 fill-current text-textGreen pr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                </svg>{" "}
                Programmer
              </p>
              <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                <svg
                  className="h-4 fill-current text-textGreen pr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                </svg>{" "}
                Jaipur, Rajasthan, INDIA
              </p>
              <p className="pt-8 text-sm">
                self taught programmer and Internet entrepreneur , you can find
                me in your computer
              </p>
              <div className="pt-12 pb-8">
                <Link to="/contact">
                  <button className="hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full bg-blue-600">
                    Get In Touch
                  </button>
                </Link>
              </div>
              <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                <Link
                  className="link"
                  to="https://facebook.com/aianshume"
                  data-tippy-content="@facebook_handle"
                >
                  <svg
                    className="h-6 fill-current text-gray-600 hover:text-blue-500"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Facebook</title>
                    <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
                  </svg>
                </Link>
                <Link
                  className="link"
                  to="https://twitter.com.aianshume"
                  data-tippy-content="@twitter_handle"
                >
                  <svg
                    className="h-6 fill-current text-gray-600 hover:text-blue-500"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Twitter</title>
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                  </svg>
                </Link>
                <Link
                  className="link"
                  to="https://github.com/aianshume"
                  data-tippy-content="@github_handle"
                >
                  <svg
                    className="h-6 fill-current text-gray-600 hover:text-blue-500"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </Link>
                <Link
                  className="link"
                  to="#"
                  data-tippy-content="@unsplash_handle"
                >
                  <svg
                    className="h-6 fill-current text-gray-600 hover:text-blue-500"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Unsplash</title>
                    <path d="M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z" />
                  </svg>
                </Link>
                <Link
                  className="link"
                  to="https://instagram.com/aianshu"
                  data-tippy-content="@instagram_handle"
                >
                  <svg
                    className="h-6 fill-current text-gray-600 hover:text-blue-500"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Instagram</title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </Link>
                <Link
                  className="link"
                  to="https://youtube.com/c/CodeNanshu"
                  data-tippy-content="@youtube_handle"
                >
                  <svg
                    className="h-6 fill-current text-gray-600 hover:text-blue-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <title>YouTube</title>
                    <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/5">
            <img
              src="https://images.unsplash.com/photo-1611457194403-d3aca4cf9d11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
              className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
              loading="lazy"
              alt="programmer anshu meena"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query BlogpostQuery {
    blog: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      limit: 4
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          description
          slug
        }
      }
    }
    tutorial: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/tutorial/" } }
      limit: 3
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          description
          slug
          image {
            childImageSharp {
              gatsbyImageData(
                width: 300
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`;
