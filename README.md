<div align="center">
<h1 align="center">

<br>
Pulley Takehome Assignment
</h1>

</div>

---

```
@author = "Waun Broderick"
@purpose= "Pulley Takehome Assignment"
@date = "24/02/2023 - DD/MM/YYYY"

@email = "waunbroderick@gmail.com"

@status = "DEV"
```

---

# Contents

- [Introduction](#introduction) :pushpin:
- [Usage](#usage) :video_game:
- [Installation](#installation) :building_construction:
- [Testing](#testing) :construction_worker:
- [Changes](#changes) :sparkles:

---

### Introduction

This application allows a user to query Shakespeare's Hamlet to search for the presence of words within its passages.

An over view of the requirements can be found in the [Original README](<./README(README(Pulley).md)>).

---

## Usage

#### Web Application

The Web-Application is avaialable, [HERE](https://pulley-ss-client.onrender.com/) (https://pulley-ss-client.onrender.com/)

Enter a phrase in the query field to search for the presence of your phrase in the passages. The query is not case-sensitive, and may take some time to load.

#### Local Installation

_Client_

```bash
$ cd client && npm i
$ npm run start
```

_Server_

```bash
$ go run main.go
```

---

### Installation

**Method 1: CMD Line**

> **Requirements**
> NodeJS
> npm
> Go

```bash
$ cd client && npm i
```

---

### Testing

_Automated checking of tests has not yet been incorporated into the application so they much be done manually for now._

_To Run Go tests_

```bash
$ go test
# To test code coverages
go test -coverprofile=coverage
```

---

### Changes

- Added React Front-end
- Used AntDesign (familiarity)
- Improved visual presentation
- Switched out table for one easier to parse, w pagination, and result grouping
- Added highlighting to the query words being searched
- Added Alert popup for query that returns null
- Added form validation for empty string
- Removed case sensitivity of query
- Added clear button to clear the table
- Added a couple tests for the GO Server
- Added favicon

##### If More Time Permitted

- Full Go test code coverage
- Automated React Component tests
- Code test check on build in CI/CD pipeline (Jenkins/CicleCI?)
- A history of searched items on the front-end
- Dockerize the Application
- Add state management to the FE (recoil or redux) so I can implment some sort of caching
