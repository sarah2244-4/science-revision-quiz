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
- Easily and intuitively navigate
- See when they get an answer correct
- Find out what the correct answer was if they got it incorrect
- Find out what their overall score is
- See what question they are on

### Existing User Stories

An existing user wants to be able to:
- See if they have improved by comparing their score to previous tries
- Answer different questions each time they have a go
- Answer questions in a different order if they do repeat 

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

### Design choices

- The site is as consistent as possible across all screen sizes. 
- The buttons were animated to make it clear that they could be selectable. 
- I did not include instructions on how to play as there are many quizzes that work in the same way, which everyone will be familiar with. 
- Originally I put the choices in a 2x2 grid as you often find, but some of the answers are fairly long so the longer stacked choice boxes are more readable. 

## Features

### Existing Features

#### Navigation Bar

![Navigation bar](assets/images/navigation-bar.JPG)

![Navigation bar for small screens](assets/images/navigation-bar-small-screens.JPG)

- The logo and company name is on the left and the links are clear and easy to find on the right hand side.
- This is the same across all pages for consistency. 
- The logo is linked to the 'About' (home) page. 
- Every main page for the site is linked so there is no need to use the browser back button. 
- There is a toggle button on the navigation bar for small screens as the whole bar doesn't fit across the top. This is inuitive to use as it appears on many sites.
- The navigation buttons are animated so that when you hover over them there is a slow colour change to make it clear users are able to click on it. 

### Hero



- Beneath the navigation bar there is a hero image, which is the same across all main pages for consistency. 
- It features an enquiry button to focus users attention to the fact that there is a way to enquire more and encourage more users to fill in the contact form. 
- The enquire button was styled so the background was white to stand out from the background whilst also maintaining white text to fit in with the text in the navigation bar. 
- The hero image doesn't show on the 404 page as it took away from the 404 error message, and the main aim of this page is to display the error and direct them back to an existing page. 
- It also doesn't appear on the thank you page as a form has already been submitted by the user so the thank you message is more important than the enquiry button at this point. 

#### About Page  

![About me](assets/images/about-me.JPG)

- The landing page gives inforamtion about the photographer so users get an introduction and are drawn into the site.
- The about me text wraps around the image and this is responsive to all screen sizes. 
- Small screen sizes would only have a very thin column of text next to the image, so the image appears above the text to make it more readable. 

#### Image Carousel 

![Image carousel](assets/images/image-carousel.JPG)

- There is an image carousel that showcases a small selection of images so people can see some of the portfolio while reading the about me section without having to visit the gallery page. This should make them want to click on the gallery page to view more. 
- The carousel does not have arrows as the images can be seen again on the gallery page. 
- The timing was made fairly short on based on how long users were expected to look at the image before clicking elsewhere so it would change before users moved on. 

#### Footer

![Footer](assets/images/footer-gold.JPG)

- The footer provides important contact information for users and clear social media links.
- The background is a light gold to separate it from the body so that it subtly stands out. 
- The social media links are coloured slightly darker to stand out and are animated to change colour when the mouse hovers over so users know they can be clicked.
- It is responsive so the columns stack for a smaller screen size as they don't fit across the page.

#### Gallery Page

![Gallery page for large screens](assets/images/gallery-large-screen.JPG)

![Gallery page for medium screens](assets/images/gallery-medium-screen.JPG)

![Modal](assets/images/modal.JPG)

- The gallery page provides a colourful porfolio of images that stand out from the rest of the website.
- Images are thumbnails that fill the screen. These thumbnails are responsive to different page sizes so they are never too small. They stack individually in a small screen, and as the screen size gets bigger the thumbnails are in rows of 2 or 3 across.
- When an image is clicked, it will appear larger in a modal. This is particularly useful for the larger screen sizes where it makes a large difference to the image size so users can see the image clearly to help make decision about hiring the photographer.

#### Contact Page

![Contact form](assets/images/contact-form.JPG)

- Users can complete the contact form to enquire further about the services offered, prices or anything else. 
- The first input field is autofocused when loaded so the contact form is loaded straight into view and users can start filling it out without clicking with their mouse. 
- Selected inputs have a coloured box shadow so it is clear when an input is selected. This is particularly useful if a user is using the tab key to navigate the form.
- Inputs have been marked required with an asterisk in the label. This is universally used so users will understand what this means. 
- The borders for required inputs are red when they contain invalid information to provide a visual way of showing the input needs completing.

#### Thank You Page

![Thank you message](assets/images/thank-you.JPG)

- This page loads when a contact form has been submitted so users recieve feedback that they have submitted their form and feel assured the photographer will respond. 
- The handwriting font was chosen as the thank you message to provide a personal feel. 
- Users are directed back to the home (about) page to encourage them to continue exploring the site.
- The home link has been made clear as it is in bold and animates when a mouse hovers over it. 

#### 404 Page

![404 error message](assets/images/error-404.JPG)

- This page was customised to maintain site-wide consistency and povide a clear direct route back to the home (about) page along with the 404 error message.
- The home link is important has been made clear as it is in bold and animates when a mouse hovers over it. 

### Future Features

- A map to show their location once they are running out of a studio. 
- A live calendar with slots that users can book. 
- An FAQ question if they have a lot of similar queries.

## Testing 

View the testing document [here](testing.md). 

## Technologies Used 

### Main Languages

HTML5 and CSS3 used. 

### Frameworks, Libraries & Programs

- Visual Studio Code as code editor. 
- GitHub Desktop to store repository and allow me to code using VS code. 
- [GitHub](https://github.com/) to store repository online.
- [Google fonts](https://fonts.google.com/) for the fonts.
- [Font Awesome](https://fontawesome.com/) for social media icons.
- [Bootstrap v5.3](https://getbootstrap.com/) for the responsive grid layout, navbar, carousel and modal codes.

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
- Open the GitHub repository [here](https://github.com/sarah2244-4/Project-1-goldenapevisualmedia)
- In the repository click on the green '<> Code' dropdown
- Select 'Download ZIP'
- Navigate to the Zip file in your file explorer and open it
- Right click on the 'index.html' file and open with the chosen browser

To clone the repsoitory: 
- Open the GitHub repository [here](https://github.com/sarah2244-4/Project-1-goldenapevisualmedia)
- In the repository click on the green '<> Code' dropdow
- Copy the HTTPS URL link
- Open the terminal on the computer's IDE
- Type in `git clone` followed by the copied URL 

## Credits

### Content

- I referred back to code I had previously written throughout.
- The navbar code comes from Bootstrap framework [here](https://getbootstrap.com/docs/5.3/components/navbar/).
- The carousel code comes from Bootstrap framework [here](https://getbootstrap.com/docs/5.3/components/carousel/).
- The modal also comes from Bootstrap framework [here](#https://getbootstrap.com/docs/5.3/components/modal/).
- [Am I Responsive?](https://ui.dev/amiresponsive) to display a mock-up of my site in different viewports.
- To center the rectangle logo into a circle I used [this website](https://www.webfx.com/blog/web-design/circular-images-css/) to help me.
- To fix the hero image overlay I used [this website](https://dzuz14.medium.com/code-a-full-width-hero-background-image-with-transparent-overlay-95d757f8ff2c) to help me.
- I used [Coolors](https://coolors.co/) to help me come up with a colour scheme.
- I used [WebAIM](https://webaim.org/resources/contrastchecker/) to check the contrast of the colours used on all the elements. 

### Images

- The logo image was used with permission from a friend. 
- 

### Advice

- Thank you to the Code Institute community on Slack for providing advice, particularly on changing the method on my form and advising to create a thank you page for it to limk to.
- Thank you to my mentor Spencer for his invaluable advice and expertise.

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

### Automated Testing 
- For automated tests I used Jest.
- Tests in jest wouldn't work if functions used variables defined globally - I had to redefine them inside the functions. 
- selectedQuestions was not defined in jest.