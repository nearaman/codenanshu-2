---
title: Download Node JS in Ubuntu With NVM
description: fastest way to install latest node JS in Ubuntu
date: 2021-07-09
image: ./hero.jpeg
slug: download-nodejs-in-ubuntu
category: blog
thumbnail: ../assets/download-nodejs-in-ubuntu.jpeg
---

one of the common problem i face is i am not able to install node JS in my Ubuntu the process is not to easy first i go to the node's website and then install the tar package file and then type several commands to install the node js.
finally i found a simple solution's to fix this problem fast as possible Another way of installing Node.js that is particularly flexible is to use nvm, the Node Version Manager. This piece of software allows you to install and maintain many different independent versions of Node.js, and their associated Node packages, at the same time.

To install NVM on your Ubuntu 20.04 machine, visit the project’s GitHub page. Copy the curl command from the README file that displays on the main page. This will get you the most recent version of the installation script.

Before piping the command through to bash, it is always a good idea to audit the script to make sure it isn’t doing anything you don’t agree with. You can do that by removing the | bash segment at the end of the curl command:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh
```

Take a look and make sure you are comfortable with the changes it is making. When you are satisfied, run the command again with | bash appended at the end. The URL you use will change depending on the latest version of nvm, but as of right now, the script can be downloaded and executed by typing:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

This will install the nvm script to your user account. To use it, you must first source your .bashrc file:
source ~/.bashrc

```

now you install NVM (node version manager)
now go to the nodejs.org and find the name of latest stable version in my case its v14.16.1 ([v] stand for version) so lets install this one in our system
```

nvm install v14.16.1

```
its install the node js in your system but you can't you it right now, so you need to type one another command
```

nvm use v14.16.1

```
now its work

{{<blog-post-ad>}}
```
