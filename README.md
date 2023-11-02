# KS3 Science Revision Quiz

KS3 Science Revision Quiz is the name of a quiz designed for people to test their Key Stage 3 science knowledge. It is intended to show correct answers as a way to learn and also provide a score so people know how well they are doing.

The site is live, the link to this is found [HERE](https://sarah2244-4.github.io/science-revision-quiz/).

![Website](assets/images/site-mockups.JPG)

## Contents

- [User Experience (UX)](#user-experience-ux)
  - [Goals](#goals)
  - [Users](#users)
  - [New User Stories](#new-user-stories)
  - [Existing User Stories](#existing-user-stories)
- [Design](#design)
  - [Wireframes](#wireframes)
  - [Colour Scheme](#colour-scheme)
  - [Typography](#typography)
  - [Imagery](#imagery)
  - [Effects](#effects)
  - [Design Choices](#design-choices)
- [Features](#features)
  - [Existing Features](#existing-features)
  - [Future Features](#future-features)
- [Testing](#testing)
- [Technologies Used](#technologies-used)
  - [Main Languages](#main-languages)
  - [Frameworks, Libraries & Programs](#frameworks-libraries--programs)
- [Deployment](#deployment)
  - [GitHub Pages](#github-pages)
  - [Local Source Files](#local-source-files)
- [Credits](#credits)

## User Experience (UX)

### Goals

The goal of the site is for an intiuitive quiz that allows users to select answers and find out how well they have done.

Users want to be able to intuitively play the quiz.

### Users

Users will primarily be Key Stage 3 students (11-14 year olds) looking for a revision tool to practise answering questions before an exam. 

### New User Stories

A first time user of the site wants to be able to:
- Know what the quiz is about
- Easily and intuitively navigate the game
- See when they get an answer correct or incorrect
- Find out the correct answer if they get an answer incorrect
- Find out their overall score
- See what question they are on

### Existing User Stories

An existing user wants to be able to:
- See if they have improved by comparing their score to previous tries
- Answer different questions each time they have a go
- Spend different amounts of time answering the quiz as revision

## Design

### Wireframes

| Start | Gameplay | End of Game |
| :---: | :---: | :---: |
| [Mobile](assets/images/wireframes/index-mobile.jpg) | [Mobile](assets/images/wireframes/gallery-mobile.jpg) | [Mobile](assets/images/wireframes/contact-mobile.jpg) |
| [Tablet](assets/images/wireframes/index-tablet.jpg) | [Tablet](assets/images/wireframes/gallery-tablet.jpg) |[Tablet](assets/images/wireframes/contact-tablet.jpg)|
| [Desktop](assets/images/wireframes/index-desktop.jpg) | [Desktop](assets/images/wireframes/gallery-desktop.jpg) | [Desktop](assets/images/wireframes/contact-desktop.jpg) |


### Colour Scheme

- The site's colour scheme is based on this: 

![Colour scheme](assets/images/colour-scheme.JPG)

- The whole colour palette was selected using the palette generator on [Coolors](coolors.co).
- Orange is associated with fun, therefore it was selected as a primary colour. 
- Blue is associated with learning and respectibility, which is important so users feel they can trust the website. 
    - It was chosen as the background colour as the colour is fairly neutral is gentle on the eyes and good for use in light and dark.
- I used this [contrast checker](https://webaim.org/resources/contrastchecker/) to ensure elements had a high enough contrast ratio. Using this, I had to tweak a few of the colours from the colour palette chosen. 


### Typography

- The handwritten font Shadows Into Light was chosen to provide a more personal feel. It was used on the site/business name 'Golden Ape Visual Media' and in the about me greeting and thank you message as they make the about me message and business name more personal.
- Mukta was chosen for the rest of the site as it is a clean sans-serif font which reads clearly and fits in with the minamilistic theme. 

### Effects 

- When the mouse hovers over a button, the shadow gets smaller and the background colour darkens to make it look like an actual button is being pressed to show that it can be clicked.
- The cursor also changes to a pointer when it hovers over a button or a link to show you can click it.

### Design choices

- The site is as consistent as possible across all screen sizes. 
- The buttons were animated to make it clear that they could be selectable. 
- I included very basic instructions on how to play as there are many quizzes that work in the same way, which everyone will be familiar with. 
- I tried adding in a background image to the start screen but it was too busy so I added it to the body. I used a science doodle image as most users will be children.
  - The white container in front of the background image allows all elements to be seen clearly. 
- The images on the landing page are also science doodles designed to add some colour to the page and make it more engaged for young users. 
- Originally I put the choices in a 2x2 grid as are often found in quizzes, but some of the answers are fairly long so the longer stacked choice boxes are more readable. 

## Features

### Existing Features

#### Start of Quiz

- The landing page initially contains information on what the quiz is about and how to play for new users. 
- There is a bright button in the center of the page that allows you start the quiz. If you click this you will start a quiz of 5 questions. 
- There are two further buttons that offer the choice to answer a different number of questions once selected. They change colour to make it clear they have been selected.

#### Gameplay

- This view shows users what question number they are on and how many there are as well as their current score to allow them to keep track of their progress.
- The question number container is above the question to give it a border.
- The question is the only large text on the container so it stands out.
- The answer choices are listed and are subtly animated so users can see when the mouse hovers over them.
- Once a choice has been selected the following happens:
  - If correct it turns green.
  - If incorrect it turns red and the correct answer turns green.
  - All choices are disabled to prevent other options being selected. 
  - The continue button appears, allowing users to move onto the next question. 
- When the continue button is clicked, the next question is displayed and the answer choices are reset to their original colours. 
- Questions displayed are selected at random and come up in a different order. 

#### End of Quiz

- A well done message pops up to display to the user how many questions they got correct out of the numnber of questions they answered. 
- The continue button changes into a try again button. This change is animated so it draws users attention to it and they are more likely to play the quiz again.
  - The try again button is blue so it stands out from the orange, red and green behind it. 

#### 404 Page

![404 error message](assets/images/error-404.JPG)

- This page was customised to maintain site-wide consistency and povide a clear direct route back to the quiz along with the 404 error message.

### Future Features

If there was more time to implement more features, these may include to:
- Add in more questions to the question bank so users can select to answer more questions and questions presented are more random.
- Create different types of questions, such as fill in the blanks. 
- Add pop up messages explaining the correct answer in more detail.

## Testing 

### Automated Testing 

- For automated tests I used Jest.
- I chose to use automated testing when initially creating the `newGame()` function as it is reliable and provided quick feedback on whether the game was starting correctly before I had relevant styling in place to see myself.
- I found tests in jest wouldn't work if functions used variables defined globally - I had to redefine them inside the functions. 
- The tests showed that when starting a new game:
  - The game score was reset to 0 in the object and on the site
  - The start button disappears and the game container appears
  - 10 random questions were initially generated
  - The first question displayed was at the start of the question array

### Manual Testing 

Since the project was small, once the initial function was set up the rest of my testing was manual so I could see in the console what was going wrong and view all functionality and responsivity. All manual testing was done with Chrome Developer Tools.

#### Responsivity 

| Tests for all gameplay | iPhone SE | Pixel 5 | Samsung Galazy S8+ | iPad Air | Surface Pro 7 | Nest Hub | Desktop |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | 
| Responsive | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| All buttons change when hovered over | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| All buttons can be clicked | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Start container fits on the screen | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Game container fits on the screen | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| No need to scroll | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| All text fits in containers | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Question and answers fit on the screen without overlapping | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Start button becomes smaller for smaller screens | Yes | Yes | Yes | N/A | N/A | N/A | N/A |
| Continue button moves lower down for smaller screens | Yes | Yes | Yes | N/A | N/A | N/A | N/A |
| Well done box increases in size to fit text for smaller screens | Yes | Yes | Yes | N/A | N/A | N/A | N/A |

#### Browser Compatibility

| Tests for all gameplay | Chrome | Firefox | Edge | Opera |
| --- | :---: | :---: | :---: | :---: |
| Loads as expected | Yes | Yes | Yes | Yes |
| Responsive | Yes | Yes | Yes | Yes |

#### Functionality and Usability

| User Action | Expected response | Correct Response |
| --- | --- | :---: |
| Click 5 Questions | Gives a quiz of 5 questions | Yes | 
| Click 5 Questions | Changes colour | Yes | 
| Click 10 Questions | Gives a quiz of 10 questions | Yes |
| Click 10 Questions | Changes colour | Yes | 
| Click start quiz without selecting number of questions | Gives a quiz of 5 questions | Yes | 
| Select correct answer | Choice turns green | Yes | 
| Select correct answer | Score increases by 1 | Yes | 
| Select incorrect answer | Choice turns red | Yes | 
| Select incorrect answer | Correct choice turns green | Yes | 
| Select incorrect answer | Scores stays the same | Yes | 
| Select answer | Choices become disabled | Yes |
| Select answer | Continue button appears | Yes |
| Continue button is clicked | Next question is shown | Yes |
| Continue button is clicked | Continue button disappears | Yes |
| Next question loads | Answer choices are enabled | Yes |
| Next question loads | Answer choices are back to original colour | Yes |
| Next question loads | Question number increases by 1 | Yes |
| Continue button is clicked on last question | Well done message is shown | Yes |
| Continue button is clicked on last question | Correct final score is shown | Yes |
| Continue button is clicked on last question | Continue button changes to try again button | Yes |
| Navigated to page that doesn't exist | Custom 404 page loads | Yes |
| Click return to quiz link on 404 page | Returns to index page | Yes | 
| Click header text | Returns to index page | Yes | 

### Testing User Stories

#### New Users

| Goal | Result | Image |
| --- | --- | :---: |
| Know what the quiz is about | The text on the landing page describes what the quiz is about with basic how to play instructions. | |
| Easily and intuitively navigate the site | The design is minimalistic with clear buttons that animate as the mouse hovers over them. Buttons link to the next stage of the quiz, such as the start game button and the continue button. During the game users can click on the header to return to the landing page and restart the quiz. Users never need to click the back button. | [navigation bar](assets/images/navigation-bar.JPG) |
| See when they get an answer correct or incorrect | Correct answer choices turn green, which is the universal colour for correct, and incorrect turn red, which is the universal colour for an incorrect answer. | [gallery](assets/images/gallery-large-screen.JPG) |
| Find out the correct answer if they get an answer incorrect | The correct answer is displayed in green when the user gets an answer incorrect. | [footer](assets/images/footer-gold.JPG) |
| Find out what their overall score is | A dynamic score counter is present above the questions. This increases by 1 as soon as a correct answer is chosen. | |
| See what question they are on | A dynamic question counter is present above the questions. It increases by 1 when the continue button is clicked. It also shows how many questions there are in total so users can work out how many questions are left. | | 
  
#### Existing User Stories

| Goal | Result | Image |
| --- | --- | :---: |
| See if they have improved by comparing their score to previous tries | The end of quiz well done message appears with a score. Users can compare this score to previous goes. | [contact form](assets/images/contact-form.JPG)  |
| Answer different questions each time they have a go | There is a function that shuffles the questions presented from the question bank so they are always presented in a different order. | [gallery](assets/images/gallery-large-screen.JPG) |
| See when they get an answer correct or incorrect | Correct answer choices turn green, which is the universal colour for correct, and incorrect turn red, which is the universal colour for an incorrect answer. | [gallery](assets/images/gallery-large-screen.JPG) |
| Find out the correct answer if they get an answer incorrect | A dynamic question counter is present above the questions. It increases by 1 when the continue button is clicked. It also shows how many questions there are in total so users can work out how many questions are left. | [footer](assets/images/footer-gold.JPG) |
| Spend different amounts of time answering the quiz as revision | Users can select how many questions they would like to answer. The more questions, the longer they will spend practising |  | 

### Bugs

#### Resolved bugs

- 
    

#### Unresolved Bugs

- 

## Validating

I used the [W3 Validator](https://validator.w3.org/) to validate my code. 

Initial issues were: 

- The 404 and thank you pages contained extra body tags. 
- The modals contained example aria-lablledby values that didn't match an existing ID as the modals did not have titles.

All pages have been run through the validator and all files pass. 

![W3C Validator message](assets/images/w3validator.JPG)

## Lighthouse Testing

### Initial Testing 

![Initial Lighthouse test](assets/images/testing/lighthouse-initial-test.JPG)

Initial testing found issues with:

- For performance images massively impacted load time. I then resized them and changed the image types to .WebP.
- The SEO had issues with a missing description in the head, which I added in. 
- Accessibility showed that ARIA IDs were not unique. I was unsure how to recifty this as it came from the Bootstrap navbar. 
- Also the footer headings had skipped heading order to h5 so I changed these to h2 and resized them in the style.css file. 

Once everything had been fixed I tested the pages with Lighthouse again. 

### Final Results of Testing

#### Index Page

![Index page Lighthouse test](assets/images/testing/lighthouse-index.JPG)

#### Gallery Page

![Gallery page Lighthouse test](assets/images/testing/lighthouse-gallery.JPG)

#### Contact Page

![Contact page Lighthouse test](assets/images/testing/lighthouse-contact.JPG)

## Technologies Used 

### Main Languages

HTML5 and CSS3 used. 

### Frameworks, Libraries & Programs

- Visual Studio Code as code editor. 
- GitHub Desktop to store repository and allow me to code using VS code. 
- [GitHub](https://github.com/) to store repository online.
- [Google fonts](https://fonts.google.com/) for the fonts.
- [Font Awesome](https://fontawesome.com/) for social media icons.

## Deployment

### GitHub Pages

To deploy the site to GitHub pages the steps followed were:
- Log into GitHub account
- Open the correct repository 
- In the GitHub repository, go to 'Settings'
- In the settings menu, go to 'Pages' under the subheading 'Code and automation'
- Under the heading 'Source', select 'Deploy from a branch' from the dropdown menu
- Under the heading 'Branch', ensure 'main' is selected from the dropdown and the folder selected is '/(root)'
- Click 'Save' and the website will be live in a few minutes
- The live link can be found [here](https://sarah2244-4.github.io/science-revision-quiz/)

### Local Source Files

To deploy the website using source files follow the steps:
- Open the GitHub repository [here](https://github.com/sarah2244-4/science-revision-quiz)
- In the repository click on the green '<> Code' dropdown
- Select 'Download ZIP'
- Navigate to the Zip file in your file explorer and open it
- Right click on the 'index.html' file and open with the chosen browser

To clone the repsoitory: 
- Open the GitHub repository [here](https://github.com/sarah2244-4/science-revision-quiz)
- In the repository click on the green '<> Code' dropdow
- Copy the HTTPS URL link
- Open the terminal on the computer's IDE
- Type in `git clone` followed by the copied URL 

## Credits

### Content

- I referred back to code I had previously written throughout the course, including the jest testing project to help with the automated Jest tests.
- [Am I Responsive?](https://ui.dev/amiresponsive) to display a mock-up of my site in different viewports.
- I used [Coolors](https://coolors.co/) to help me come up with a colour scheme.
- I used [WebAIM](https://webaim.org/resources/contrastchecker/) to check the contrast of the colours used on all the elements. 

### Images

- The background image and images on the landing page are all downloaded from [Creative Fabrica](https://www.creativefabrica.com/), through which I have a commercial license and can use these images on websites. 

### Advice

- Thank you to the Code Institute community on Slack for providing advice, particularly on changing the method on my form and advising to create a thank you page for it to limk to.
- Thank you to my mentor Spencer for his invaluable advice and expertise.





## Testing

### Manual Testing
- I used Chrome Dev Tools to find errors. 
- I added in console.log(") to functions during development to see what was displayed. 
- To test `function generateQuestions(numberOfQuestions)` I changed the `numberOfQuestions` to different numbers and checked the console that the correct length array was produced. 
    - I also refreshed the browser to check the questions were different each time to ensure shuffling was working. 
- Changing `currentQuestionIndex` to above 1 didn't change the question displayed when tested in the `newGame()` function. 
    - When this was moved above the `generateQuestions(numberOfQuestions)` this changed the question index displayed.
- Below 768px the well done message spilled out of the container
    - Added media query to make message container larger and change padding
- Below 486px the bottom choice and continue button overlapped 
    - Added in media query to bring the game container higher on the screen
- Below 768px the longer question answer spilled out of the game container and overlapped the continue button
    - Added media query to change font size 
- It was showing red when I selected correct answers after question 1. I used 
```
console.log(selectedAnswer)
console.log(answer)
```
which showed me that I wasn't updating the current question index in the correct place as it thought the correct answer was for the previous question. I moved the `++` and it worked.

#### Testing User Stories

