# HotTakesBackend
A simple server made using Node.js, Express, and MongoDB

## Live url: 
http://104.197.168.4/

# Types
## USER
Body:
```json
{
    "_id":"String",
    "username": "String",
    "password": "String",
    "posts":[{"take"}]
}
```
## TAKE
Body:
```json
{
    "_id":"String",
    "upvotes": "Int",
    "downvotes": "Int",
    "userid":"String"
}
```

# Endpoints

### GET /users/
Returns a list of all users.

### POST /users/add/
Creates a new user.

Body:
```json
{
    "username": "String",
    "password": "String"
}
```

### GET /users/<user_id>/
Returns a list of all posts of given user.

### GET /users/find/
Returns a list of all posts of given user.

Body:
```json
{
    "username": "String"
}
```

### GET /takes/
Returns a list of all takes of all users.

### POST /takes/<user_id>/
Adds a post to user in user data base, as well as the list of all takes.

Body:
```json
{
    "text": "String"
}
```

### POST /takes/upvote/<post_id>/
Increments upvote count for a specific take in both the user and takes databases.

### POST /takes/downvote/<post_id>/
Increments downvote count for a specific take in both databases.

