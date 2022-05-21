# Abstract
seed application of the lifeos project.  This is intended to become a shell that i can work on and evolve over time into the full potential of the lifeos ideology.  

so in the meantime in an effort to keep it simple i will limit the first version of this seed to be a simple server cli for manipulating a node databse.

# Needed
* Database (server)
* API (server)
* UI (client)

# Problems
* need to find a way to route commands dynamically
  * ? so here is what we have.  a server that can accept a request and return a response it can also communicate in a rtc style as well if needed.  but my gut tells me its not the right solution here (i could be wrong it happens a lot lol.). 

## naive approach
use a switch statement to account for each possible command allowed.  passing the request to the router with the relevant args parsed out.

## Better Approach
loop over a dictionary/hash containing nodes with the relvenant markup needed. 

### psuedocode
```
    @Request: #GET, #MIDDLEWARE {

        @commands = [
            {
                command: "cd",
                route: ""
            },
            {
                command: "ls",
                route: ""
            },
            {
                command: "clear",
                route: ""
            }
        ]

        @iterate command in commands {
            @Route( 
                Params: (request, response)
                ?? How do i call the routed method ??
            )
        }

    }


```
#### legend 
```
@ = block
$ = variable
```

# needed functions for this psuedocode
route 


# Algorithm

## List of Commands
* Help
* New 
* Move
* List
* Commit