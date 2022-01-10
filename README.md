# SNOW-Angular-http-client
Most front-end applications need to communicate with a server over the HTTP protocol, in order to download or upload data and accesss other back-end services. 
Angular provides a simplified client HTTP API for Angular applications, the HttpClient service class in @angular/common/http.
The Angular HttpClient offers testability features, typed request and response objects, request and response interception, Observable APIs, and streamlined error handling.

The HttpClient Module is already included when creating a new Angular app. 
We just need to register it in our Angular application. In src/app/app.module.ts file, import the HttpClientModule module to make use of the HttpClient service.
![image](https://user-images.githubusercontent.com/12488769/148707322-d0a2a31a-e3a0-45ea-aefa-32677249dbec.png)

Also, include the HttpClientModule in @NgModule's imports array.

![image](https://user-images.githubusercontent.com/12488769/148707326-3840bd56-671a-4e96-8360-bcaf5705939f.png)


Now, the Angular HttpClient is ready to use or inject with the Angular service or component.
![image](https://user-images.githubusercontent.com/12488769/148707319-c24cb48d-8051-4cf0-9010-bbee32dc2e0c.png)

The HttpClient service is used for communication between front-end web apps and backend services. 
This communication is done over the HTTP protocol. 
The HttpClient service is available as an injectable class, with methods to perform HTTP requests. 
The Angular HttpClient Methods are request(), delete(), get(), patch(), post(), put(), head(), jsonp(), and options(). 
All HttpClient methods return an Observable of something. 
In general, an observable can return multiple values over time. 
An observable from HttpClient always emits a single value and then completes, never to emit again.

The HttpHeaders service is used for the header configuration options of an HTTP request. 
HTTP Headers let the client and the server share additional information about the HTTP request or response
For example, we use the content-type header to indicate the media type of the resource like JSON, text, blob, etc.

## Handling errors
By using Angular's HttpClient along with catchError from RxJS, we can easily write a function to handle errors within each service. 
HttpClient will also conveniently parse JSON responses and returns an observable object.
There are two categories of errors which need to be handled differently:
Client-side: Network problems and front-end code errors. With HttpClient, these errors return ErrorEvent instances.
Server-side: AJAX errors, user errors, back-end code errors, database errors, file system errors. With HttpClient, these errors return HTTP Error Responses.

By verifying if an error is an instance of ErrorEvent, we can figure out which type of error we have and handle it accordingly.
To catch errors, we "pipe" the observable result from http.get() (or any HttpClient methods) through an RxJS catchError() operator. 
Also, we add the retry(1) function to the pipe to retry all requests once before failing.

## Example: creating server
We are going to create a fake backend server using the json-server NPM module in our Angular app. 
This module will allow us to communicate with a server to which we can send and receive data locally.
Run the npm install -g json-server command to set the fake json-server globally.

## Example: creating data
In the root folder of the Angular project, create a folder by the name of backend and also create a file by the name of database.json. 
This file will have our fake JSON data. 
Add some fake data to the database.json file
![image](https://user-images.githubusercontent.com/12488769/148707421-8e4a7b90-e7c6-4043-b76e-15889abe6298.png)

## Example: Starting server
We are done setting up a fake JSON server in our Angular application. 
To start the fake JSON server, run the json-server --watch ../backend/database.json command in the terminal. 
Now, your fake json server is up and running on the port 3000. 
You are able to view this employees array by visiting http://localhost:3000/employees on the browser. 
Now that our server is ready, we communicate with the server through HTTP Requests.

## Example: creating type
We create service file that allow us to handle all HTTP requests to our application. 
All HttpClient methods return an observable object, so we need to cast the observable object into an Employee type.
Before, we create the service file we need to create an interface to define the employee type. 
So, the observable object returned by the HttpClient Methods can be cast to the Employee type.
![image](https://user-images.githubusercontent.com/12488769/148707464-21cf0463-859e-4389-829b-cfc91ebd1c3f.png)

## Example: creating service
Let's create a employee.service.ts file to handle all HTTP requests. 
We import the HttpClient and HttpHeaders services to make the HTTP request work. 
Here, we create CRUD operations using HttpClient methods (GET, POST, PUT, DELETE) and also there is some error handling logic in it.

## employee.service.ts
Let's create a employee.service.ts file to handle all HTTP requests. 
We import the HttpClient and HttpHeaders services to make the HTTP request work. 
Here, we create CRUD operations using HttpClient methods (GET, POST, PUT, DELETE) and also there is some error handling logic in it.
![image](https://user-images.githubusercontent.com/12488769/148707489-32781a9b-9607-4059-938f-4ed831caa019.png)
![image](https://user-images.githubusercontent.com/12488769/148707494-7b17d23c-1ab4-4161-b70b-08965cafb878.png)
![image](https://user-images.githubusercontent.com/12488769/148707498-132173ab-a733-4597-87b0-79dcb57a7443.png)
![image](https://user-images.githubusercontent.com/12488769/148707503-d5ecc323-aa44-49bd-95d7-a44bc0875449.png)

## http POST request
Let's make an HTTP POST Request to add one employee to the employees array in the local server using HttpClient service.
In the app.component.ts file,
![image](https://user-images.githubusercontent.com/12488769/148707531-f180d3ae-aa4c-4784-98f9-13b6f5901880.png)

## http GET request
Now let's make an HTTP GET Request to get a specific employee details from the employees array in the local server using HttpClient service.
In the app.component.ts file,
![image](https://user-images.githubusercontent.com/12488769/148707553-e960df2c-b313-4439-888c-a0b9d1c66009.png)

Let's make an HTTP GET Request to get all the employee details in the employees array.
In the app.component.ts file,

![image](https://user-images.githubusercontent.com/12488769/148707570-8cf4dcd5-d750-406b-b3b8-63daf1a82f9d.png)
![image](https://user-images.githubusercontent.com/12488769/148707576-2597a426-607d-4da9-923c-10c939b3dc59.png)

## http PUT request
Let's make an HTTP PUT Request to update a specific employee details in the employees array.
![image](https://user-images.githubusercontent.com/12488769/148707619-c982ed60-7563-4f38-9c14-de99a2beb929.png)

## HTTP DELETE Request
Let's make an HTTP DELETE Request to delete a specific employee in the employees array.
![image](https://user-images.githubusercontent.com/12488769/148707653-e33e25eb-b2a2-43e4-af0d-1fe86a94459e.png)

## not found
We can request a specific employee's details by passing the id in the request URL. 
If the id in the request URL is not present in the employee array, it results in an server- side error. 
These errors can be handled by the error handler method defined in the EmployeeService.
![image](https://user-images.githubusercontent.com/12488769/148707681-f5ed6aa5-a93b-49e3-adfc-4d6e1b60368d.png)

