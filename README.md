# pagination-test

Process

Upon starting this challenge, reading the exercise and requirments thoroughly was very crucial 
to help me understand how to start due to my inexperience with pagination. I found this test 
challenging because from researching the documentation and learning about the diffrent methods 
of pagination, I learned more about the page and limit parameters then the parameters that was specified.

Pseudo coding the use cases was my first step to tackeling the methods that would be used if the range would be 
specified. If range was not specified then the defualt parameters of start = 5 and end = 20 would be executed. When 
the "By" key gets quarried the code will start checking the use case for "ID" or "NAME". I used the slice method 
to extract the data but found myself stuck on the "Name" parameter. With more research I realized not parsing 
the name to integer was my issue. After I parseInt() all over the code for the "name" use case, I realized
the code looked messy so I created a function to parseInt() all the names in attempt to clean up the code. 
Using the sort method was my solution for ascending and descending order, was the easier use case to solve for me.

Delivered 

Single api endpoint that paginates on "id" or "name" fields. Covering some use cases to prevent error with quarrying the data specified. 
Langauge used is JavaScript with Node.js back-end framework and Express.js to set up the server. Seed data was an array that was populated with a for loop. 
App is uploaded to Heroku for testing.
