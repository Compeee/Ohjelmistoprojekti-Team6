# Project Information

|    First header  |    Second header             |
| ------------------ | ------------------------------------------- |
| Project Name              | eLibrary |
| Description        |  Working online library with all of its core functions                         |
| Team | Eero Kaarnalehto, Tuomo Aaltonen, Perttu Hakala, Ville Ollila                                |

# Run Locally

### Tools and Software needed
```
Intellij Community Edition for running backend and backend tests
```
###

### 1. Clone repo

```
$ git clone https://github.com/Compeee/Ohjelmistoprojekti-Team6.git
```

### 2. Setup Database

```
$ cd Ohjelmistoprojekti-Team6
$ cd project
$ docker-compose up -d
```

### 3. Run backend
```
$ cd server 
$ cd src/main/java/com/example/libraryapp
*** IntelliJ ***
$ Run LibraryApplication.java
$ You might have to right click pom.xml -> maven -> reload project if ur getting build errors
```
### 3. Run frontend
```
$ cd client 
$ npm start
```
