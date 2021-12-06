---
title: "Anime Hero - Anime finder using AWS Amplify - AWS Amplify Hackathon"
date: "2021-07-08"
description: "best app for anime lovers"
image: ./hero.jpeg
slug: "create-anime-finder-using-react-and-aws-amplify"
category: "blog"
---

This is really amazing project for me i don't believe that i create this project in just 3 days actually i join hashnode in 24 February and i got notification about AWS Amplify Hackathon on 25 February i do not know any framework i have only knowledge of HTML, CSS and JavaScript so when i read the term and conditions related to hackathon then i going to learn REACT JS.

I take 1 day to learn about the react js basic i search on YouTube and Google to learn REACT js and final i learn all the basics like,

1. JSX
2. State And Props
3. Functional And Class Base components
4. CSS in JSX and Tailwind in React

after all i create a

```
create-react-app Anime-hero
```

letter on i install **Tailwindcss** in react app and then never write CSS in react app i use classes of tailwind CSS and provide a nice look to web App but i have no any UI design in my mind so try on google but i do not get any of cool and nice design on anime website later on i find **tailblocks** as my helper in my UI design due to lack of time to create app i decided to take UI from the Tailbocks and the create my web app.

I got little bit everything for my web app and now there is a big problem with my web app i have not data to show on the website like **Anime name** and staring date and ending date all the data related to the anime and i have no time to download the data from the internet and then show on the web app so i want a API which provide me all the data related to anime i try to find out so many API but some are paid or some are not working for me.

Now finally i found a API name as [**Jikan**](https://jikan.docs.apiary.io/#) but i don't know how to use it

![tenor.gif](https://cdn.hashnode.com/res/hashnode/image/upload/v1614397106201/tf-Bu_wxa.gif)
now its time to understand how this API work after to many Google search and Watching some YouTube Videos i found how to use it and now let fetch this API in in our react app so go to the app.js file of react app and start fetching the data from the API and store in the state on the class components

and now i have the biggest problem in my app i try to fetch the API and the then send in the state and then want to send the state data the props of other components but my data from the API take time to fetch . i all ready know that i can fix this problem by simply using **asysnc** and **await** but the problem is i never try to study this topic.

so after so so so many searches and watching video finely after working 5 hours i got errors and errors only .

![error.gif](https://cdn.hashnode.com/res/hashnode/image/upload/v1614397506331/RvFtTHL7Q.gif)
so i think i need to take some rest and then start working this time is 11 pm so i desired to sleep and then work early in the morning.
after wake up i open the computer and re start the programming and thank you so much to stackoverflow my code is working fine .then on just code and code and finally i create this app and deploy on AWS amplify..

finally my app is created thank you so much hashnode to provide me this opportunity to learn so many things like how to use async and await in JavaScript and how to find errors and help to learn react js i am very happy that i create something for this hackathon i never thing that i can create something like that in this little time but that you once again you give me motivation to do this i know that this is not i a good project but i am satisfy with this web app in react.

thank you so much..

so finally lets toke about the application
i use these technology to build this app

1. React JS
2. Tailwind css
3. matarial ui
4. some APIs

one the first screen of app you can see some details of random anime data

![screenshot-main.d16yghp0p3mpte.amplifyapp.com-2021.02.27-09_29_25.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1614398448139/GhIQ7IYqm.png)

as you scrol down you can see a button and a search bar where you can search and click the button and to get the best suggestion of animes

![screenshot-main.d16yghp0p3mpte.amplifyapp.com-2021.02.27-09_31_46.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1614398555503/KNpqDEcP1.png)

and when ever you search for your anime you got a watch link this anime for free

![screenshot-main.d16yghp0p3mpte.amplifyapp.com-2021.02.27-09_33_42.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1614398659316/4iLQl78vN.png)
these are the work of my app this help you to search anime fast and also provide a watch link to watch it this one solve i favorite problem..

that all in my app thank you much to read this article
finally done.

![tenor.gif](https://cdn.hashnode.com/res/hashnode/image/upload/v1614398921459/Jpu5gFt4u.gif)

If you want to see the live demo then click on this link
[Live demo](https://main.d16yghp0p3mpte.amplifyapp.com/)

And if you want to see the code then check it out in GitHub repository
[GitHub repo](https://github.com/anshumeena1947/anime-web-app)
