# express-api-typescript
setting up express api using type script - inprogress

#
**Install dependencies:**
* yarn install

#
**Build/Run application:**
* yarn start (for production environment) **/**
* yarn dev (for development environment)

#
**Application health status:**
* information about the application and its health status

**Get:**
```
http://localhost:3130/health
http://localhost:3130/keep-alive
http://localhost:3130/ping
http://localhost:3130/version
```
#
**Student Module:**

* **Post:**
```
http://localhost:3130/api/v1/student
```
**Body:**
######
```
{
	"firstName": "Danish",
	"lastName": "Siddiq",
	"registrationNumber": 1234567,
	"email": "danish.siddiq@email.com"
}
```

#
* **Get:**
```
http://localhost:3130/api/v1/student/:id
```

#
* **Put:**
```
http://localhost:3130/api/v1/student/:id?firstName=danish1&lastName=siddiq1
```

#
* **Delete:**
```
http://localhost:3130/api/v1/student/:id
```

#
**Improvements:**

Feel free to add further features into it


