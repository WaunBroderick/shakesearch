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

```bash
$ cd client && npm i
```

_Accept all paramters following setup.sh script to ensure smooth installation_

---

### Changes

- Added React Front-end
- Used AntDesign (familiarity)
- Improved visual presentation
- Switched out table for one easier to parse, w pagination, and result grouping
- Added highlighting to the query words being searched
- Removed case sensitivity of query
- Added clear button to clear the table
- Added favicon
