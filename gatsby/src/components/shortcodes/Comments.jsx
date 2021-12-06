import { Giscus } from "@giscus/react"
import React from "react"

export default function Comment() {
  return (
    <div className={`relative post-comments md:px-36`}>
      <Giscus
        key={"Comments"}
        repo="aianshume/codenanshu"
        repoId="MDEwOlJlcG9zaXRvcnkzODIzMjE5Mjc="
        category="Q&A"
        categoryId="DIC_kwDOFsnFB84B-WZk"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        theme="dark_high_contrast"
      />
    </div>
  )
}
