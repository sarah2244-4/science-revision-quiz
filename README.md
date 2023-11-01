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

The goal of the site is for a clear, intiuitive website that contains all relevant information for users about the photographer. 

The photographer's goal is to introduce themselves and showcase a portfolio of images. They would also like to provide a way for users to communicate with them to see what they offer and find out more information or book a service. 

Users want to be able to understand and intuitively navigate through the website, view images easily, find out more about the photographer and contact them for more information. 

### Users

Users will be adults looking for a professional photographer to shoot their event. They will be interested in viewing a selection of the photographer's images to compare to other photographers and contacting the photographer for more information. 

### New User Stories

A first time user of the site wants to be able to:
- Easily and intuitively navigate the site
- Find out what type of photographer they are
- Browse an existing portfolio of images
- Navigate to the social media
- Contact the photographer with questions or to book them
- Book a service

### Existing User Stories

An existing user wants to be able to:
- Contact the photographer with questions or to book them
- View up to date images
- Find links to social media accounts

## Design

### Wireframes

| Index Page | Gallery Page | Contact Page |
| :---: | :---: | :---: |
| [Mobile](assets/images/wireframes/index-mobile.jpg) | [Mobile](assets/images/wireframes/gallery-mobile.jpg) | [Mobile](assets/images/wireframes/contact-mobile.jpg) |
| [Tablet](assets/images/wireframes/index-tablet.jpg) | [Tablet](assets/images/wireframes/gallery-tablet.jpg) |[Tablet](assets/images/wireframes/contact-tablet.jpg)|
| [Desktop](assets/images/wireframes/index-desktop.jpg) | [Desktop](assets/images/wireframes/gallery-desktop.jpg) | [Desktop](assets/images/wireframes/contact-desktop.jpg) |


### Colour Scheme

- The main colour scheme of the site is greyscale in order to keep it minimililstic and empahsise the coloured images. 
- There is a pop of gold to match the colours from the logo. 

### Typography

- The handwritten font Shadows Into Light was chosen to provide a more personal feel. It was used on the site/business name 'Golden Ape Visual Media' and in the about me greeting and thank you message as they make the about me message and business name more personal.
- Mukta was chosen for the rest of the site as it is a clean sans-serif font which reads clearly and fits in with the minamilistic theme. 

### Imagery

- The logo is a friend's existing business' existing logo. It was used with permission. 
- All other imagery used on the webiste is from a stock webiste which is referenced in the [credits](#credits "Credits") section. 
- Images were chosen to give a pop of colour against the greyscale theme of the website. 
- There is one black and white image to make it stand out as a wedding image rather than a sports event image.

### Effects 

- Links in the navigation bar and footer are animated to change colour when a mouse hovers over them so users know they can click them. 

![Navigation links hover effect](assets/images/nav-link-hover.JPG)

![Social media icons hover effect](assets/images/social-hover.JPG)

### Design choices

- The website is as consistent as possible across all screen sizes. 
- I chose to use Bootstrap to help with responsiveness as this site would likely be accessed on both mobile and desktop by different age groups.
- I decided the gold was needed to encorporate the company's logo colours into the site.
- It was important the gallery images could be viewed clearly as it's a main feature, which is why I made the decision to enlarge them in a modal.
- The design is minimilistic to make it clear how to navigate the site and to put emphasis on the images to allow the pictures to speak for themselves.
- The hero image was maintained on every page as the title for each page. The enquire button on the hero image stayed on the contact page, as when clicked the page would re-load to focus lower down on the form. 

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

![Hero](assets/images/hero.JPG)

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

#### Testing User Stories

### Automated Testing 
- For automated tests I used Jest.
- Tests in jest wouldn't work if functions used variables defined globally - I had to redefine them inside the functions. 
- selectedQuestions was not defined in jest.