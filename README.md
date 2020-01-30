### SCHOOL API (nodejs(express) / mongodb)


#### node package (-)
- cors
- eslint
- express
- express-validator
- mongoose
- nodemon


## Routes

| Method  | Route              | Description      |
| :-------|:------------------:| ----------------:|
| GET     | /{entityName}/     | returns all item |
| POST    | /{entityName}/     | add item         |
| DELETE  | /{entityName}/:id  | delete item      |
| PUT     | /{entityName}/:id  | update item      |
| GET     | /{entityName}/:id  | return one item  |


# Database / Collections

#### Students collection                            
| name       | type               |
| :----------|:------------------:| 
| id         | String(auto)       |
| firstName  | String             |
| lastName   | String             |
| age        | Number             |
| classStudy | String             |

#### Teacher collection                            
| name       | type               |
| :----------|:------------------:| 
| id         | String(auto)       |
| firstName  | String             |
| lastName   | String             |
| age        | Number             |
| position   | String             |

#### Students-group collection                            
| name       | type               |
| :----------|:------------------:| 
| id         | String(auto)       |
| name       | Number             |
| students   | array              |

#### Lesson collection

| name       | type               |
| :----------|:------------------:| 
| id         | String(auto)       |
| topic      | String             |
| teacher    | String             |
| groupStudent  | array           |
| cabinet   | String              |
| countLesson   | String          |

