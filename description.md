# Project Features

## Feature 1: Event Bus Implementations

Set up:
1./events endpoint for Post, Comment, Event Bus service
2. install axios to emit events

Emitting Events: 
1.Post service emit(post) an event(with body contained actual post content) to Event bus server(4005/events)
2.Event bus post this event to post service(4000/events) comment service(4001/events) and query service (4002/events)

![Event Bus Structure](images/authentication.png "User Authentication")

## Feature 2: Query Service

1.GET /posts to handle retrieving list of posts or comments
2.POST /events to handle PostCreated event and CommentCreated event


## Kubernetes & Docker
1.Kubernetes runs a bunch of containers(one virtual machine, each service).
2.Kubernetes Cluster composed of Nodes(containers), Master Program, communication components. E.g Event Bus Node send request to communication component, which forwards it to one of Post Service Node that is running(Advantage: Don't need Event Bus code to decide)
3.Config file for Master Program. E.g make 2 copies of Post Service(in case there is a high volume of user posts).
## Note:
npm install express, cors, axios(to emit event)
npm install nodemon to update start script : nodemon index.js --> npm start
Every time, restart 3 server