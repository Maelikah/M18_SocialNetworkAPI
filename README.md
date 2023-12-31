# Social Network API

</br>

![Github License](https://img.shields.io/badge/license-MIT-blue.svg)

</br>

---

##   📝 Description


---

</br>

The purpose of this repository is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list by using Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the Express.js and Mongoose packages.

</br>

---


##   ⌨️ Programming Languages & Technologies
---

</br>

<div style="display: inline_block">

[![JavaScript](./assets/javascript.svg)](https://devdocs.io/javascript/)
&nbsp;&nbsp;
[![NodeJS](./assets/nodejs.svg)](https://nodejs.org/en/docs)
&nbsp;&nbsp;
[![ExpressJS](./assets/expressjs.svg)](https://expressjs.com/en/4x/api.html)
&nbsp;&nbsp;
[![MongoDB](./assets/mongodb.svg)](https://www.mongodb.com/docs/)
&nbsp;&nbsp;
[![Mongoose](./assets/mongoose.svg)](https://mongoosejs.com/docs/)
&nbsp;&nbsp;
[![Insomnia](./assets/insomnia.svg)](https://docs.insomnia.rest/)
&nbsp;&nbsp;
[![Screencastify](./assets/screen-castify-red.svg)](https://learn.screencastify.com/hc/en-us)

</div>

</br>


---

## 📑 Table of Contents

---

</br>

- [Installation](#💿-installation)
- [Usage](#💻-usage)
- [License](#🔏-license)
- [Credits](#🖋️-credits)
- [Tests](#🧪-tests)
- [User Story](#✍️-user-story)
- [Acceptance Criteria](#👏-acceptance-criteria)


</br>


---

##  💿 [Installation](#📑-table-of-contents)

---

</br>

1. Fork and clone repository to local machine 
2. Run `npm i` to install dependencies in local project directory



</br>


---

##   💻 [Usage](#📑-table-of-contents)

---

</br>

1. Open integrated terminal
2. Run `npm run seed` to add database seeds
3. Run `npm start` to initialize the server
4. Go to `http://localhost:3001` to access the app
5. Test endpoints in Insomnia


</br>

The github URL containing the code for this project is located at:

https://github.com/Maelikah/M18_SocialNetworkAPI

</br>


User Input Functionality:

![API Tests Preview](./assets/API_Tests.gif)


</br>


---

##  🔏 [License](#📑-table-of-contents)

---

</br>


 This project is licensed under the terms of the `MIT` license. 


</br>


---

## 🖋️ [Credits](#📑-table-of-contents)

---

</br>


- https://shields.io/category/license
- https://github.com/devicons/devicon/tree/master/icons
- https://nodejs.org/en/docs
- https://mongoosejs.com/docs/tutorials/getters-setters.html
- https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/01-format/
- https://thecodebarbarian.com/formatting-javascript-dates-with-moment-js.html
- https://momentjs.com/




</br>


---

##   🧪 [Tests](#📑-table-of-contents)

---

</br>



✏️ **USER**
  * Get All Users: `GET /api/users/`
  * Create a new user:  `POST /api/users` using JSON body:
    ```
    {
        "username": "test username",
        "email": "test email"
    }
    ```
  * Get Single User: `GET /api/users/:userId`

  * Update Single User: `PUT /api/users/:userId`
    ```
    {
        "username": "update username",
        "email": "upadate email"
    }
    ```

  * Delete User & Related Thoughts: `DEL /api/user/:userId`

<br>

✏️ **THOUGHT**
  * Get All Thoughts: `GET /api/thoughts/`
  * Create New Thought: `POST /api/thoughts/`
    ```
    {
        "thoughtText": "test text",
        "username": "test username"
    }
    ```
  * Get Single Thought: `GET /api/thoughts/:thoughtId`
  * Update Single Thought: `PUT /api/thoughts/:thoughtId`
    ```
    {
        "thoughtText": "update thought text"
    }
    ```
  * Delete Thought & Related Reactions: `DEL /api/thoughts/:thoughtId`

<br>

✏️ **FRIEND**
  * Create New Friend: `POST /api/users/:userid/friends/:friendId`
  * Delete Friend: `DEL /api/users/:userid/friends/:friendId`


<br>

✏️ **REACTION**
  * Create New Reaction: `POST /api/thoughts/:thoughtId/reactions`
  * Delete Reaction: `DEL /api/thoughts/:thoughtId/reactions/:reactionId`


</br>


---

## ✍️ [User Story](#📑-table-of-contents)

---

</br>

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```


</br>

---

## 👏 [Acceptance Criteria](#📑-table-of-contents)

---

</br>


```md
GIVEN a social network API:
- WHEN I enter the command to invoke the application
    - THEN my server is started and the Mongoose models are synced to the MongoDB database
- WHEN I open API GET routes in Insomnia for users and thoughts
    - THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia
    - THEN I am able to successfully create, update, and delete users and thoughts in my database
- WHEN I test API POST and DELETE routes in Insomnia
    - THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

</br>


---

[Back to Top](#social-network-api)

