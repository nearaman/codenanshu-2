import React from "react"
import Layout from "../components/Layout"
import { green_gradient } from "../styles/Gradient.module.css"
import { post } from "../styles/Blog.module.css"
import { Link } from "gatsby"

export default function About() {
  return (
    <Layout>
      <section>
        <div className="py-20 min-h-main layout">
          <h2 className="text-textWhite text-lg">About</h2>
          <h1 className="mt-1">
            <span className={`${green_gradient} text-xl`}>Anshu Meena</span>
          </h1>
          <div className="mt-4">
            <figure className="float-right ml-6 w-36 md:w-72 overflow-hidden rounded shadow-sm dark:shadow-none">
              <div
                style={{
                  position: "relative",
                  height: 0,
                  paddingTop: "112.342%",
                  cursor: "default",
                }}
                className="img-blur"
              >
                <div className="absolute top-0 left-0">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "rgba(0, 0, 0, 0) none repeat scroll 0% 0%",
                      opacity: 1,
                      border: "0px none",
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "rgba(0, 0, 0, 0) none repeat scroll 0% 0%",
                        opacity: 1,
                        border: "0px none",
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%",
                      }}
                    >
                      <img
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background:
                            "rgba(0, 0, 0, 0) none repeat scroll 0% 0%",
                          opacity: 1,
                          border: "0px none",
                          margin: 0,
                          padding: 0,
                        }}
                        alt="anshu meena profile"
                        aria-hidden="true"
                        src="/aianshume.webp"
                      />
                    </span>
                    <img
                      alt="aianshume profile"
                      title="Photo of me"
                      src="/aianshume.webp"
                      decoding="async"
                      data-nimg="intrinsic"
                      style={{
                        position: "absolute",
                        inset: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "medium none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                      }}
                      srcSet="/aianshume.webp"
                    />
                    <noscript />
                  </span>
                </div>
              </div>
            </figure>
            <article className={`prose text-textWhiteBlue ${post}`}>
              <p>
                Hello! I'm Anshu. I started learning web development in May
                2019, which is the start of the pandemic. I have nothing much to
                do so I decided to learn web development from a youtube course,
                then started watching a bunch of{" "}
                <Link to="https://youtube.com/c/CodeNanshu">
                  <span>youtube videos</span>
                </Link>{" "}
                to explore more about web development especially frontend
                development.
              </p>
              <p>
                There are a lot of things and technologies to learn in frontend
                development and I am motivated to learn as much as possible. I
                enjoy learning something new and getting feedback to make myself
                better and improve.
              </p>
              <p>
                In this website I will be writing some blogs and showcase my
                projects. I believe that writing what I have learned is the best
                way to remember things, and I can share my knowledge along the
                way. So do contact me and I will be very happy to help!
              </p>
            </article>
          </div>
        </div>
      </section>
    </Layout>
  )
}
