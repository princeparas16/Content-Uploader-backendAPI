# Content-Uploader-backendAPI

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
