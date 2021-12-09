---
title: "What Are the Best Javascript Libraries for REST API Automation Testing"
date: "2021-08-04"
description: "JavaScript API Automation Testing - which libraries/frameworks to use? "
image: ./hero.png
slug: "what-are-the-best-js-library-for-rest-api-testing"
category: "blog"
---

To do API automation testing with JavaScript, we'll first need to know which libraries or frameworks we can use that'll help build our test framework.

Since we are doing API testing, we'll need some way to make HTTP calls programmatically and for that, we will be  
using the [SuperTest](https://www.npmjs.com/package/supertest) npm package.

### [](#supertest)**SuperTest**

SuperTest is built on top of [SuperAgent](https://github.com/visionmedia/superagent) which basically allows you to make HTTP requests and SuperTest provides a high-level abstraction for testing those HTTP requests. Let's take a look at an example:

```javascript
const request = require("supertest");
request()
  .get("/user") // access user route
  .expect("Content-Type", /json/) // verify the content type
  .expect("Content-Length", "15")
  .expect(200) // verify the status code
  .end(function (err, res) {
    if (err) throw err; // any additional code
  });
```

Enter fullscreen mode Exit fullscreen mode

You can easily add assertions by just chaining these expect commands. We can continue to write tests this way but we need a better way to be able to group tests or run individual tests and for that, we'll need some kind of test framework.

### [](#mocha-js)**Mocha JS**

[Mocha JS](https://mochajs.org/), is a really popular JavaScript test framework that runs on node js. You get a lot of features pre-build with the Mocha test framework -

- You can group your tests
- Skip your tests
- Use hooks to set up or tear down your tests
- It also comes with reporting as well as retry support along with many other useful features

Let's take a look at basic Mocha JS example -

```javascript
describe("Array", function () {
  // describe block allows you to group your tests
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      // it block is where you will run your test
      // any verification here...
    });
  });
});
```

Enter fullscreen mode Exit fullscreen mode

Now, let's take a look at how Mocha test would look like with SuperTest -

```javascript
describe("GET /user", function () {
  it("responds with json", function (done) {
    request(app)
      .get("/user")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
```

Enter fullscreen mode Exit fullscreen mode

If you notice, we took the SuperTest `request` block and put that inside the `it` block. In the same way, we can create multiple `it` blocks for various test scenarios.

Now, for any test, we need to verify whether something works or not, and for that, we can use assertions.

### [](#chai-js)**Chai JS**

Chai is an assertion library for node and browser that can be paired with any testing framework (in our case Mocha JS). Chai provides multiple interfaces which are basically different ways for you to write your assertions - so they have `should`, `expect`, and `assert`. So whichever style you are comfortable with using, you can use that in your tests.

Let's take a look at some Chai assertion example -

```javascript
// Using chai.should();
foo.should.be.a("string");
foo.should.equal("bar");

// Using chai.expect
expect(foo).to.be.a("string");
expect(foo).to.equal("bar");

// Using chai.assert
assert.typeOf(foo, "string");
assert.equal(foo, "bar");
```

Enter fullscreen mode Exit fullscreen mode

Now once we have added assertion, we can start writing tests with no issues. However, we need some way to see a report of all the tests we are running and see the pass / fail status of each.

So good thing is that Mocha comes with pre-built reporters which we can use that is the `spec reporter` which gives this simple terminal results view.

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--rnH16y4s--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/he1uuya798f4wve5npwl.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--rnH16y4s--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/he1uuya798f4wve5npwl.png)

It's sufficient enough when we are getting started but we can also implement a nice HTML reporter using [mochawesome](https://www.npmjs.com/package/mochawesome) reporter.

### [](#mochawesome)**Mochawesome**

Mochawesome has a nice, modern look and comes with some good features -

- supports for test and suite nesting
- shows before and after hooks
- shows code along with each test which is great for debugging purposes.

Here's how a sample Mochawesome report looks like -  
[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--2upknhTW--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/7jb6vm9fbbljuzkd6q4w.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--2upknhTW--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/7jb6vm9fbbljuzkd6q4w.png)

So there you go using SuperTest, Mocha, Chai, and Mochawesome we can create an API test automation framework in JavaScript.  
Note: There are many other alternatives that can be used for these libraries or frameworks, however, for this [tutorial series](https://www.youtube.com/watch?v=ZSVw3TyZur4&list=PL6AdzyjjD5HDR2kNRU2dA1C8ydXRAaaBV&ab_channel=AutomationBro) this is what we will be using.

---

### [](#check-out-the-video-below-to-see-a-detailed-explanation-of-the-above-post)**Check out the video below to see a detailed explanation of the above post**:

Follow [@automationbro](https://dev.to/automationbro) on Twitter for the latest updates  
Subscribe to my [YouTube channel](https://www.youtube.com/automationbro?sub_confirmation=1) to see more content like this
