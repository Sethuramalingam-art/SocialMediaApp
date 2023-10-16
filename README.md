# SocialMediaApp

# Technologies used

# ReactJS

# NodeJS

# Mongoose

# JWT Auth

# Nodejs Packages

# Express => backend framework - npm i express

# Body Parser => Process the request body - npm i body-parser

# bcrypt => password encrption - npm i bcrypt

# cors = > cors origin request - npm i cors

# dotenv => env. variables

# gridfs-stream multer multer-girdfs-storage => file upload and locally as well

# helmet => for request saftey

# morgan => login

# jsonwebtocket => authentication

# moogoose => monogdb access

# npm i express body-parser bcrypt cors dotenv gridfs-stream multer multer-gridfs-storage helmet morgan jsonwebtocket mongoose

# Server: When you have "type": "module" in the package.json file, your source code should use import syntax. When you do not have, you should use require syntax; that is, adding "type": "module" to the package.json enables ES 6 modules.

# Configurations

npm install -g nodemon

to start backend server => npm start => nodemon index.js


if you want npx install => npm install -g npx 

**redux-presist** - Redux persist takes your Redux state object and save it to Persistence storage.

For example, If we store your redux reducers using redux persist, It will not clear when you close your app. You have that old data when you open your app again.

Whenever you uninstall your app, at that time only your reducers will be clear.

**react-dropzone** -> used for document upload in frontend

**yup** => for validations 

****formik** **=> for form handling

**@mui/icons** => for material ui

for frontend

npm install react-redux @reduxjs/toolkit redux-presist react-dropzone dotenv formik 
yup react-router-dom@latest @mui/material @emotion/react @emotion/styled @mui/icons-material

we’ve learned how to use Redux Persist in Redux Toolkit to save our data in persistent storage. Therefore, our data will still remain even after a browser refresh. We also explored several options for customizing Redux Persist, for example, specifying which storage engine to use, and customizing what is persisted in our state using the blacklist and whitelist properties.

Although at the time of writing, Redux Persist is under maintenance and has not been updated for some time, it is still a great tool with strong community support.
