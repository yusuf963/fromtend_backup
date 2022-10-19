## Description

If you are not familiar with how elections work in the UK, please see this short BBC video https://www.youtube.com/watch?v=cRxUhGetEPQ

The results API presents a simple elections result service.

### Domain
The domain for the election represents some key concepts:
- _**constituencyId**_ a unique integer id to identify a location. E.g "Brent Central" is 90
- _**party**_ is a short 3, or 4, letter code for a party for instance LAB = Labour, CON = Conservative etc.
- _**votes**_ the number of votes gained by a party in a constituency
- _**share**_ the % share of the total votes the party received

### API
The API has 3 endpoints:
- GET `/result/{id}` to get an elections result for a given id.
- POST `/result` to add a new result
- GET `/scoreboard` to get the running totals. This is unimplemented.

## Setup
Requires: 
* node (14) - available from https://nodejs.org/en/download/
* npm - will be installed with node, or see https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

```
npm install
npm start
```

If you need to run it on another port, instead of `npm start`, you can run the below, where 9000 is swapped for your preferred port:

```bash
PORT=9000 npm start
```

At this point we don't ask you to do any more until your booked assessment time. 

You're ready for your assessment as long as the following are true:
- You can open this folder in your preferred code editor
- You can run all the tests with `npm test` and all 4 pass
- You can run `npm start` without any errors and http://localhost:3000/ returns "Cannot GET /"

:warning:  If you make any changes to the code, please ensure you return it to it's initial (HEAD) state before your assessment.

## Assessment Time

During your assessment we will ask you to work though the task in `tasks.md` with a pair. Please do not work on or complete these prior to the assessment.
