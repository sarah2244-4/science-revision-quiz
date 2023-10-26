# Science Revision Quiz
 Milestone project 2

## User stories

Users who access the application want to be able to: 

- Play a revision quiz
- See whether they got the question correct
- See what the correct answer was if they got it incorrect
- See their score at the end
- Have a different set of questions each time they play 


## UX design 

## Testing

### Manual Testing
- I used Chrome Dev Tools to find errors. 
- I added in console.log(") to functions during development to see what was displayed. 
- To test `function generateQuestions(numberOfQuestions)` I changed the `numberOfQuestions` to different numbers and checked the console that the correct length array was produced. 
    - I also refreshed the browser to check the questions were different each time to ensure shuffling was working. 
- Changing `currentQuestionIndex` to above 1 didn't change the question displayed when tested in the `newGame()` function. 
    - When this was moved above the `generateQuestions(numberOfQuestions)` this changed the question index displayed.
- Below 784px the well done message spilled out of the container
    - Added media query to make message container larger
- Below 486px the bottom choice and continue button overlapped 
    - Added in media query to bring the game container higher on the screen

#### Testing User Stories

### Automated Testing 
- For automated tests I used Jest.
- Tests in jest wouldn't work if functions used variables defined globally - I had to redefine them inside the functions. 
- selectedQuestions was not defined in jest.