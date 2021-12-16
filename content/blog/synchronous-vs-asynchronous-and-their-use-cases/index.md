---
title: "Synchronous vs asynchronous programming and their use cases"
date: "2021-07-09"
description: "Synchronous and asynchronous"
image: ./hero.jpeg
slug: "synchronous-vs-asynchronous-and-their-use-cases"
category: "blog"
---

## Synchronous vs asynchronous programming and their use cases

Synchronous and asynchronous are two different types of programming implementations that confuse a lot of new developers. This knowledge is very essential to create performant and scalable systems.

In short, a synchronous program blocks further operation till the current task execution has been completed. On the other hand, an asynchronous program allows to start multiple tasks at once, then progress and finish in _overlapping_ time. Here the term _overlapping_ is important. In the rest of this article, we will try to understand these concepts in detail and how they can be used to create efficient programs. To make you understand the differences between synchronous (parallel) and asynchronous (concurrent) programming, I will use a real-world restaurant example.

## Concurrent and parallel restaurant orders

### Concurrent/Asynchronous restaurants

Suppose, on a nice weekend you go to hang out with your friends in a restaurant. You see there's only one counter. You go to the counter and place your order.

The cashier forwards your order to the kitchen and gives you a token. When your order is prepared, the token number will be shown on the large display. So you get back to the table. While you're waiting for your order, you're having a good gossip with your friends. Because that's what people generally do, right?

When you're called to take your order, you pause your conversation, go to the counter to get the food and then get back and start eating. The conversation still goes on. At some point, you guys are done and leave the restaurant.

**Now, think of yourself as a computer program**

So, you're waiting in line to place the order. But the wait is not noticeable as the line is moving very fast. The reason is the cashier is only taking the orders, but not instantly preparing the items. **(Wait for a program/functions/job to get placed in the system)**

When it's finally your turn, you process the menu in your head, place your order and pay. **(Program gives parameters and execution logic to the system)**

Now you have to wait. But even when you're waiting, you've switched your attention to your gossiping. So, you're not totally idle and still doing something productive while waiting. **(Don't wait for the current task to complete and pick something else to work on)**

At one point, your order is prepared. You go to the counter, get your food, return to your table and start enjoying the meal. **(When the initial job's processing is complete, pick up where the program left off with that task and continue).**

So, we can say the story has three tasks. We assume that all the tasks are asynchronous:

1. Get the food
2. Gossiping with friends
3. Eating the food

When you placed the order on the counter, you started task 1. When it was being processed, you were focusing on task 2. So the task status is:

```
Task 1 = In Progress
Task 2 = In Progress
Task 3 = Waiting for execution (dependent on task 1)
```

When your order is complete, you go to the counter to fetch the items. Then you return to your table and enjoy the meal. Task 1 is complete and task 3 starts

```
Task 1 = Complete
Task 2 = In Progress (50% complete)
Task 3 = In Progress
```

Please note, task 2 is halfway complete as you started doing it much earlier. You're eating your food and also talking with your friends. Doing two tasks at once? So what? Remember, all the tasks are asynchronous. Besides, tasks 2 and 3 are not dependent on each other. Task 2 and 3 is progressing in **overlapping** time. For better understanding, think of it this way:

- When you're eating, you're not talking. But your friends are talking so the conversation is still going on.
- When you're not eating, you're talking.

You can think of your talking as a separate async process. After some talk, you're waiting for feedback from your friends. At that waiting moment, you're eating your food. This goes on till both task 2 and 3 is complete.

That's it! That's how asynchronous programming works. Of course, we will jump into technical details in the later portions of this article.

For now, just note that all the above things happened in a **single-core processor** with a **single-threaded program**. We will get more into this later.

### Parallel/Synchronous restaurants

Now let's imagine the restaurant has 4 counters to take orders. There are long lines in all the 4 queues and they are working parallelly. The catch is, the cook and the cashier is the same person. Meaning, the same person takes the order and prepares the item for you.

You choose the first queue, when your time comes after waiting, you place the order. Now, you have to wait in line. You can't move because someone else might take your position. The cashier/cook comes back with your order after some time. While you're waiting, other people are also waiting just like you to get their turn to place an order and get their food.

In this scenario, you're **synchronized** with the cashier/cook. You have to wait and be there at the exact moment that the cashier/cook finishes your order and gives them to you, or otherwise, someone else might take them. Then your cashier/cook finally comes back with your order, after a long time waiting there in front of the counter.

After getting the food, you get back to the table to eat. As you had to wait in the queue, you didn't get any time to have a good conversation with your friends. You just eat the food and leave the restaurant.

**Now, imagine you're the computer program**

The restaurant has 4 cashiers, which in the computer world would translate into 4 processor cores. For such, at least 4 threads are needed. You will be able to relate the rest of the story with the computer world easily so I'm not going to break it down further.

For the rest of the article, I would use the word 'synchronous' and 'sync' (short form) interchangeably. The same goes for asynchronous/async.

### Is asynchronous programming better than synchronous programming?

You saw from the story, for async programming you needed only 1 processor and a single thread. Whereas, sync programming, required 4 processors with 4 threads. Besides, you didn't get any time to gossip with your friends. It seems that synchronous programming is resource-heavy and also doesn't let you do much work. Hence, the burning question, is synchronous programming bad?

**No. This is a common misconception.**

The more precise answer is, "it depends". Using asynchronous programming where it should not be used would result in an extremely poor performing application. Let's jump into the technical details and everything will be clear as the blue sky.

## Synchronous vs Asynchronous: Technical differences

The most popular asynchronous programming language is **Node.js**. On the other hand, Java, C++, Python all languages are synchronous by default. Newer versions of Python have asynchronous programming support, but it's still at an early stage and not mature at all. Such capability of doing both synchronous and asynchronous programming might make Python way more popular in future than it is now.

Asynchronous program is always single-threaded. The architecture and implementation of an asynchronous system require it to be single-threaded. Maybe we will discuss that in a separate article in future (If you're curious, you can look into JavaScript Event Loop). So, anything you write in Node.js will be single-threaded and will run under a single processor core.

If you don't have a clear idea about threading, you can read my article on [Python multithreading and multiprocessing](https://muhib.me/python-gil). Although it discusses Python, it explains the concept of threading independently.

### Async: The good side

Synchronous programs can be single-threaded or multi-threaded, depending on the developer's specification. A Python program (synchronous) can have a web process having multiple threads. Each thread can handle one web request at once and no more.

But due to the nature of asynchronous programming that we discussed, it can handle hundreds of requests by just using a single thread. For this reason, such programs are very lightweight.

So if it was a Python web application, you would need 100 threads to handle 100 different user requests at once. Creating and dropping threads is resource-intensive. You might be able to handle the same 100 users with a single thread if it's written in Node.js, which is really lightweight from a resource usage perspective.

### Async: The bad side

Wow! So good! Why don't we use async programming everywhere then? Unfortunately, everything good also has a significant bad side.

Async is only the best when you're doing I/O heavy operation (network request, database read etc). But for CPU intensive operations, asynchronous programs will be a nightmare. Because CPU operations are not the same as I/O. **During mathematical operation, the CPU (processor) will be blocked, which in turn will block the only single thread that the program has.** As a result, all the other user requests (assuming it's a web app) will be blocked till the current mathematical calculation is done, resulting in very poor performance. In such cases, you have to use something like Python or Java which is synchronous.

Besides, error handling for asynchronous calls might get tricky.

### Is async faster than sync in general?

No. Well, technically it might be but that doesn't create any noticeable difference in most cases. The main advantage of asynchronous programming is it is very lightweight from the resource usage perspective. Both memory and processor usage. So with async programming, you can do a lot more with a lot less resources.

## Use cases

### Synchronous programming

It's best for creating applications that use the CPU a lot. For example, training ML models, doing heavy mathematics etc. That doesn't necessarily mean that it can't be used for I/O operations. In fact, many I/O applications are created using synchronous programming languages like Java, C++ and Python. The only difference is, if you used an asynchronous program in those cases then it would use less resource

### Asynchronous programming

There are many use cases. It ultimately boils down to I/O operation. But I'm still breaking it down for your better understanding

- **I/O intensive web applications:** You already know it's best for handling web requests, database requests etc. If your server has 4 processor cores, you can spawn 4 different processes with one thread each, effectively increasing system throughput up to 4x times.

- **Hybrid web application:** In most cases, you might need both CPU and I/O intensive tasks. In that case, you can use a combination of both by creating separate services. Take Uber as an example. Uber might have a separate `RouteCalculator` service for calculating the best route. This is CPU intensive task so this can be written in Python. On the other hand, for fetching user data or creating and updating users, Uber might have another `UserService` which is written in Node.js. The final resulting application is the union of both services where they communicate with each other effectively. The most popular web apps you see is written in this way using microservices (or similar) architectures.

- **Causing side-effects:** For complex applications, there are a lot of secondary tasks that are not directly related to the end-user. For example, when a user registers on Facebook, it will notify the other services, send and aggregate event logs, generate friend suggestions for the future etc. As these are not directly related to the immediate registration, Facebook can reply with a success response while queuing those tasks asynchronously for later execution.

- **ML applications:** Machine learning involves mathematical calculations. If your application works with ML, you can issue an asynchronous request to run ML jobs (written in Python maybe) while you finish up other tasks in your main application.

- **Performance improvements:** Using asynchronous operations might drastically improve application performance, or at least, make it look like a better performer. Separating async and sync operations is a crucial task for best performance. For example, when you move folders in Google Drive, the folders are immediately moved from the UI side, making it seem faster. But the actual folder move operation (backend) is done asynchronously which would take slightly more time.

That's it for today. Feel free to leave any feedback or questions in the comments below.
