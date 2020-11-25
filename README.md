# Content-Uploader-backendAPI

### Features Implemented
1. MVC Architecture Applied.
2. Used Express.js a node.js web application framework.
3. Path- middleware/upload.js: initializes Multer Storage engine and defines middleware function to save uploaded files in uploads folder.
4. Path- resources/static/assets/uploads: folder for storing uploaded files.
5. Path- routes/index.js: defines routes for endpoints that is called from HTTP Client, use controller to handle requests.
6. Path- server.js: initializes routes, runs Express app.

## Contains RestAPIs which performs CRUD operations

### Install node modules
`npm install`

### Start Server
`npm start`

## Use Postman API tool to hit the routes and perform operations on this API.
### To Upload any files to the Disk
`POST http://localhost:8080/upload`

### To Fetch any file from the Disk
`GET http://localhost:8080/file/{FILE_NAME.FORMAT}`

### To Fetch all files uploaded on the Disk
`GET http://localhost:8080/files`

### To Remove any file from the Disk
`DELETE http://localhost:8080/files/{FILE_NAME.FORMAT}`
