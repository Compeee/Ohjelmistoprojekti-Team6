# Project Information

|    First header  |    Second header             |
| ------------------ | ------------------------------------------- |
| Project Name              | eLibrary |
| Description        |  Working online library with all of its core functions                         |
| Team | Eero Kaarnalehto, Tuomo Aaltonen, Perttu Hakala, Ville Ollila                                |

# Run Locally

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
$ Run LibraryApplication.java
*** IntelliJ ***
$ You might have to right click pom.xml -> maven -> reload project if ur getting build errors
```
