---
title: "WordPress API for React App to Get Post"
date: "2021-07-09"
description: "WordPress API for React Native App to Fetch Data in App"
image: ./hero.jpeg
slug: "wordpress-api-for-react-app-to-get-data"
category: "blog"
---

WordPress is one of the best CMS in the world but you how we can fatch WordPress API for React App to get posts to in this article i am going to provide some details for WordPress REST API for React and React Native Apps so lets take a look.

# WordPress REST API

WordPress have already a WP-JSON route define in PHP that help user to fetch data from the WordPress website in JSON format, The WordPress REST API provides an interface for applications to interact with your WordPress site by sending and receiving data as JSON (JavaScript Object Notation) objects. It is the foundation of the WordPress Block Editor, and can likewise enable your theme, plugin or custom application to present new, powerful interfaces for managing and publishing your site content.

so we can use wp-json route on a WordPress website and then we can display in our react app. follow these simple steps to get out the data.

## WordPress website route

you can take your own website but for this tutorial i take a website that created by techcrunch (warning : this webisite is not my autority so please be use this in your website replace the URL)

here we have the url of the website

```
https://techcrunch.com
```

so lets add the API

```
https://techcrunch.com/wp-json/wp/v2
```

so this is the api now we need to add posts in the URL and then fetch the api
`https://techcrunch.com/wp-json/wp/v2/posts` lets fetch it
in react js

```javascript
import React, { useState, useEffect } from "react";

export default function App() {
  const data = ([data, setData] = useState([]));

  useEffect(() => {
    fetch("https://techcrunch.com/wp-json/wp/v2/posts")
      .then((res) => res.json())
      .then((info) => setData(info));
  }, []);

  return <h1>{data.title.rendered}</h1>;
}
```

in this way you can easy fetch data from the API if you need more infomation about the WORDPRESS REST API then visit https://developer.wordpress.org/rest-api/
