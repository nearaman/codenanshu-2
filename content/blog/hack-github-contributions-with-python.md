---
title: Hack GitHub Contributions  With Python Programming
description: Hack GitHub Contributions With Python Programming
date: 2021-07-09
slug: hack-github-contributions-with-python
category: blog
image: ../assets/hack-github-contributions-with-python.jpeg
---

GitHub is the best place for programmers, where all programmers provide there code and other programmers see the code and provide good or bad review. The problem is How To Hack GitHub Contributions whenever we have no idea to upload some codes on GitHub the GitHub leave blank our Contributions in our main profile its looks really bad that we have not contributions this days or months or sometimes years so finally i go a solution for that problem by watching some YouTube videos are waste my 30 minutes of life about searching this topic on internet and finally i got result and i am going to provide this result for you in just 5 minutes.

First Step we need to choose a programming language to do this work for us as we all are programmers we all know that our favorite programming language is **PYTHON** but if don't know python that don;t worry because a provide the full to code to copy and paste and run and got your results so lets write come codes.

![write.gif](https://cdn.hashnode.com/res/hashnode/image/upload/v1614668499405/I4_M9uwyJ.gif)
so lets write some code from know.
wait wait wait before write some code i want to say something this code is not mine i am not write this code i just copy and paste it here all hole credit for this work is given to [Mohitesh Ch Agarwal](https://github.com/mohitesh07) click on the name and visit hist GitHub profile and if you want to see the demo of this code then visit my profile @[Anshu Meena](https://github.com/anshumeena1947) and i also provide some screenshots for the demo

![screenshot-github.com-2021.03.02-11_41_58.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1614668779582/MhLaB9e3e.png)

![screenshot-github.com-2021.03.02-11_41_28.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1614668786696/8pfjxlXDL.png)

so finally write some code and do this work so follow me and gogogo

simple steps

1. create a folder.
2. create HelloWorld.py in the folder.
3. open vs code editor in this folder.
4. open HelloWorld.py in vs and just paste the bellow code.

```
print("Hello World")
```

5. and just save file and run and check the output if output is Hello World then every thing is working fine.
6. now create another file name as bot.txt
   (so now we have two files HelloWorld.py and bot.txt)
7. Create a GitHub Repository and init it in this folder and commit all the files
8. now check the GitHub Repo files are came or not ?
9. if files are upload then create a new file name as **main.py**
10. after that lets just copy the below code and paste it in **main.py**

```python
import os

## Number of days you want to make commits
for i in range(1,365*2 + 1):
    d = str(i) + ' day ago'
    ## Open a text file and modify it
    with open('bot.txt', 'a') as file:
        file.write(d)
    ## Add bot.txt to staging area
    os.system('git add bot.txt')
    ## Commit it
    os.system('git commit --date="' + d + '" -m "first commit"')

## push the commit to GitHub
os.system('git push -u origin master')

```

![write that down.gif](https://cdn.hashnode.com/res/hashnode/image/upload/v1614669387028/UWULmKiUy.gif)

OK finally we done everything its time to run the code and check .. but warning hare ** you need to python 3 to do this** so lets finally run the code or just open the terminal in the folder and type

```
python3 main.py
```

its running ........ and know finally check your GitHub now its hack

if you have any dough then check this GitHub repository [Mohitesh Ch Agarwal](https://github.com/mohitesh07/github-hack) and watch this YouTube video [youtube video link is here](https://www.youtube.com/watch?v=gGHLcr3CQos)
