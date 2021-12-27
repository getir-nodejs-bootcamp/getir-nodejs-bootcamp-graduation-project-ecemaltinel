# Getir Node.js Bootcamp Graduation Project
## Project Installation
git clone https://github.com/getir-nodejs-bootcamp/getir-nodejs-bootcamp-graduation-project-ecemaltinel.git </br>

Run these commands respectively

>npm install to install node_modules </br>
>npm test to test the project  </br>
>npm start to start the project  </br>

After run test command you're supposed to see test results as below </br>
  
Happy-path </br>
  
    √ Welcome Route -> GET / (109 ms) 
    √ Get All Records Route /records (5 ms) 
    √ Get Specific Records with proper model (3 ms) 
    
Alternatives </br>
  
    √ Throw 400 when -> Get Specific Records with wrong model (1 ms) 
    √ Throw 404 when -> No such endpoint (2 ms) 

## API Endpoints and explanation
 		
| Type | Endpoint | Return value |
| --------------- | --------------- | --------------- |
| GET | / | Welcome |
| GET | /records | All records |
| POST | /records | Filtered Records |

## Parameters for POST

| Parameter | Type | Should be |
| --------------- | --------------- | --------------- |
| startDate | String | YYYY-MM-DD |
| endDate | String | YYYY-MM-DD |
| minCount | Number | Greater than 0 |
| maxCount | Number | Greater than 1 |

## Example req
{
"startDate": "2016-01-26",
"endDate": "2018-02-03",
"minCount": 2500,
"maxCount": 2934
}


## Example res

{
    "code": 0,
    "msg": "Success",
    "records": [
        {
            "totalCount": 2574,
            "key": "wrHDRKJa",
            "createdAt": "2016-02-23T11:32:32.624Z"
        },
        {
            "totalCount": 2759,
            "key": "cUZMtDFd",
            "createdAt": "2016-08-22T07:54:11.729Z"
        },
        {
            "totalCount": 2788,
            "key": "ckHeLNbV",
            "createdAt": "2016-07-17T23:23:20.261Z"
        }
…
    ]
}


## Worth Highlighting
You can either download the project and test it locally or use public project link below. </br>
https://ecem-altinel.herokuapp.com/


