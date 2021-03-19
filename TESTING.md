# Pattern Spielen (Pattern Play) - Testing document**

[Associated Readme document](README.md)

---
># **RESPONSIVE DESIGN TESTING**

Tested responsiveness of the features on each page using the following methods:
* Google Chrome DevTools at resolutions:
    * 1600 x 992
    * 1280 x 802
    * 768 x 1024 (iPad)
    * 414 x 736 (iPhone 6/7/8 plus)
    * 411 x 731 (Pixel 2)
    * 411 x 823 (Pixel 2 XL)
    * 375 x 812 (iPhone X)
    * 375 x 667 (iPhone 6/7/8)
    * 320 x 568 (iPhone 5)
    * 320 x 480

The test sheet and results can be viewed from this link:
[Responsive Test results](assets/readme/PatternSpiel-ResponsiveTestsv0.1.pdf)

* Also tested the live site on the following devices:
    * Huawei P smart 2019 smart phone
    * Samsung A12 smart phone
    * Laptop at 1920 x 1080 resolution (scaled at 100%, 125% and 150%)
    * Apple iPad 7th Generation (iOS v 14.2)
    * Amazon Fire HD 8 tablet
    * Apple iPhone 5 and iPhone 8
---
># **FUNCTIONALITY TESTING**
The following testing completed at resolutions using Google Chrome Devtools: 
* 1920 x 1080 (desktop)
* 768 x 1024 (iPad)
* 320 x 568 (iPhone 5)

The test sheet for the tests detailed below and results can be viewed from this link:
[Functional Test results](assets/readme/PatternSpiel-FunctionalTestsv0.1.pdf)

---
# Landing Page:
## Display

* Page fills the entire screen and no scroll bars shown; all interactive and display items fit onto the page.
* Background image displayed full screen.
* Pattern Spielen is displayed in large colourful letters on one line
* 'Start' button is displayed centre and slightly larger than the 'How to play' button.
* 'How to play' button is displayed below the 'Start button and is slight smaller.
* Contact button is displayed at the bottom right of the screen.
* Social media icons are displayed centre at the bottom of the page 
* Content is relevant, consistent, free of spelling and grammatical errors.
* Music plays and can be muted with a button displayed top right.

### Desktop only:

* button feedback animations occur when player hovers over them.
* button feedback animations occur when player clicks them.

### Mobile and tablet only:

* Pattern Spielen is displayed on two lines.

## Navigation

- Clicking the 'Start' button will start the gameplay options displayed as buttons
- Clicking the 'How to Play' button will open the 'How to Play' page.
- Clicking the 'Contact' button will open the 'Contact' page.

---
# How to Play page:
## Display

* Page fills the entire screen and no scroll bars shown; all interactive and display items fit onto the page.
* Background image displayed full screen.
* Clear heading at the top of the page
* Instructions content is relevant, consistent, free of spelling and grammatical errors.
* Social media icons are displayed centre at the bottom of the page 

### Desktop only:

* Main menu button feedback animation occurs when player hovers over it.
* Main menu button feedback animation occurs when player clicks it.

## Navigation

- Clicking the 'Main menu' button will take the player to the landing page.

---
# Contact us page:
## Display

* Page fills the entire screen and no scroll bars shown; all interactive and display items fit onto the page.
* Background image displayed full screen.
* Contact Us form displays centre.
* ‘Name’, ‘Email’ and ‘Question’ fields present with user hint in each.
* Submit button present at the bottom of the form.
* All fields to be filled in to allow submission of form. Error message will display if field empty upon submission.
* Email field will insist on '@' symbol use before submission allowed.
* Upon submission, user feedback displayed confirming message sent.
* 'Main menu' button displayed below the submit button.
* Social media icons are displayed centre at the bottom of the page 
* Content is relevant, consistent, free of spelling and grammatical errors.

### Desktop only:

* Each form field highlights when user mouse hover.
* Each form field border changes upon user selection.
* Submit button feedback animation occurs when player hovers over it.
* Submit button feedback animation occurs when player clicks it.
* Main menu button feedback animation occurs when player hovers over it.
* Main menu button feedback animation occurs when player clicks it.

## Navigation

- Clicking the 'Main menu' button will take the player to the landing page.

---
# Game:
## Options

* After clicking 'Start' on the Landing page, four buttons are displayed: 'easy', 'medium', 'hard', 'custom'
* After clicking easy; an easy difficulty game is started with the following parameters: ????
* After clicking medium; a medium difficulty game is started with the following parameters: ????
* After clicking hard; a hard difficulty game is started with the following parameters: ????
* After clicking custom, three 'grid size' options are displayed (3x3, 4x4, 5x5)
* After selecting a grid size option and clicking the button, three colour options are displayed (3 colours, 4 colours, 5 colours)
* After selecting a colour option and clicking the button, three view timer options are displayed (5 seconds, 10 seconds, 15 seconds)
* After selecting a view timer option and clicking the button, four player timer options are displayed (No timer, 10 seconds, 20 seconds, 30 seconds)
* After selecting a player timer option and clicking the button, a 'start' button is then displayed.  Clicking this starts the game by generating a random pattern on a grid as per the selected options.
* Once the game is started, a 3x3 grid is displayed with 4 colours after selecting these options
* Once the game is started, a 3x3 grid is displayed with 5 colours after selecting these options
* Once the game is started, a 3x3 grid is displayed with 6 colours after selecting these options
* Once the game is started, a 4x4 grid is displayed with 4 colours after selecting these options
* Once the game is started, a 4x4 grid is displayed with 5 colours after selecting these options
* Once the game is started, a 4x4 grid is displayed with 6 colours after selecting these options
* Once the game is started, a 5x5 grid is displayed with 4 colours after selecting these options
* Once the game is started, a 5x5 grid is displayed with 5 colours after selecting these options
* Once the game is started, a 5x5 grid is displayed with 6 colours after selecting these options
* On five separate occasions selecting various options, the view timer option '5 seconds' worked as expected once the game started (please detail the options selected each time)
* On five separate occasions selecting various options, the view timer option '10 seconds' worked as expected once the game started (please detail the options selected each time)
* On five separate occasions selecting various options, the view timer option '15 seconds' worked as expected once the game started (please detail the options selected each time)
* On five separate occasions selecting various options, the player timer option '10 seconds' worked as expected once the game started (please detail the options selected each time)
* On five separate occasions selecting various options, the player timer option '20 seconds' worked as expected once the game started (please detail the options selected each time)
* On five separate occasions selecting various options, the player timer option '30 seconds' worked as expected once the game started (please detail the options selected each time)
* On five separate occasions selecting various options, the player timer option 'No Timer' worked as expected once the game started (please detail the options selected each time)

## Auto-generated pattern

* After selecting difficulty 'easy',  a pattern is displayed in a 3x3 grid showing up to 4 colours and is displaying for  10 seconds.
* After selecting difficulty 'medium',  a pattern is displayed in a 4x4 grid showing up to 4 colours and is displaying for  10 seconds.
* After selecting difficulty 'hard',  a pattern is displayed in a 5x5 grid showing up to 4 colours and is displaying for  10 seconds.
* A pattern is displayed in a 3x3 grid showing up 4 colours for the chosen time and when timer has finished the player is taken to a screen show a blank 3x3 grid with a palette showing 4 colours. Conduct three times for 5, 10, 15 seconds.
* A pattern is displayed in a 3x3 grid showing up 5 colours for the chosen time and when timer has finished the player is taken to a screen show a blank 3x3 grid with a palette showing 5 colours Conduct three times for 5, 10, 15 seconds.
* A pattern is displayed in a 3x3 grid showing up 6 colours for the chosen time and when timer has finished the player is taken to a screen show a blank 3x3 grid with a palette showing 6 colours Conduct three times for 5, 10, 15 seconds.
* A pattern is displayed in a 4x4 grid showing up 4 colours for the chosen time and when timer has finished the player is taken to a screen show a blank 4x4 grid with a palette showing 4 colours Conduct three times for 5, 10, 15 seconds.
* A pattern is displayed in a 4x4 grid showing up 5 colours for the chosen time and when timer has finished the player is taken to a screen show a blank 4x4 grid with a palette showing 5 colours Conduct three times for 5, 10, 15 seconds.
* A pattern is displayed in a 4x4 grid showing up 6 colours for the chosen time and when timer has finished the player is taken to a screen show a blank 4x4 grid with a palette showing 6 colours Conduct three times for 5, 10, 15 seconds.
* A pattern is displayed in a 5x5 grid showing up 4 colours for the chosen time and when timer has finished the player is taken to a screen show a blank 5x5 grid with a palette showing 4 colours Conduct three times for 5, 10, 15 seconds.
* A pattern is displayed in a 5x5 grid showing up 5 colours for the chosen time and when timer has finished the player is taken to a screen show a blank 5x5 grid with a palette showing 5 colours Conduct three times for 5, 10, 15 seconds.
* A pattern is displayed in a 5x5 grid showing up 6 colours for the chosen time and when timer has finished the player is taken to a screen show a blank 5x5 grid with a palette showing 6 colours Conduct three times for 5, 10, 15 seconds.

## Player-completed pattern

Once the Auto-generated pattern timer has reduced to 0, the following happens:

1. Screen automatically changes to an empty grid that reflects the options chosen.  
2. A colour palette is presented that reflects the options chosen.
3. A timer starts that reflects the options chosen.

Test the above for:

### Difficulty levels:

- Easy
- Medium
- Hard.

### Custom game:

| 3x3 grid, 4 colours, 10 second timer | 4x4 grid, 4 colours, 10 second timer | 5x5 grid, 4 colours, 10 second timer |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
|                                      |                                      |                                      |
| 3x3 grid, 4 colours, 15 second timer | 4x4 grid, 4 colours, 15 second timer | 5x5 grid, 4 colours, 15 second timer |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
|                                      |                                      |                                      |
| 3x3 grid, 4 colours, 20 second timer | 4x4 grid, 4 colours, 20 second timer | 5x5 grid, 4 colours, 20 second timer |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
|                                      |                                      |                                      |
| 3x3 grid, 5 colours, 10 second timer | 4x4 grid, 5 colours, 10 second timer | 5x5 grid, 5 colours, 10 second timer |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
|                                      |                                      |                                      |
| 3x3 grid, 5 colours, 15 second timer | 4x4 grid, 5 colours, 15 second timer | 5x5 grid, 5 colours, 15 second timer |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
|                                      |                                      |                                      |
| 3x3 grid, 5 colours, 20 second timer | 4x4 grid, 5 colours, 20 second timer | 5x5 grid, 5 colours, 20 second timer |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
|                                      |                                      |                                      |
| 3x3 grid, 6 colours, 10 second timer | 4x4 grid, 6 colours, 10 second timer | 5x5 grid, 6 colours, 10 second timer |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
|                                      |                                      |                                      |
| 3x3 grid, 6 colours, 15 second timer | 4x4 grid, 6 colours, 15 second timer | 5x5 grid, 6 colours, 15 second timer |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
|                                      |                                      |                                      |
| 3x3 grid, 6 colours, 20 second timer | 4x4 grid, 6 colours, 20 second timer | 5x5 grid, 6 colours, 20 second timer |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
|                                      |                                      |                                      |

## Results

For all above conditions (Player-completed pattern tests) test the below:

* That a loss is recorded when:
   1. timer runs out
   2. player gets pattern wrong
* That a win is recorded when:
   1. the player gets the pattern right in the allotted time

* When a loss is recorded:
   1. a message appears to inform the player as such
   2. a button is presented for the player to click to continue game.
   3. the loss is recorded in the score board
* When Win is recorded:
   1. a message appears to inform the player as such
   2. the player result (time taken) is displayed
   3. a button is presented for the player to click to continue game.
   4. the win is recorded in the score board

* On the 10th and final round:
    1. a win/loss is recorded as expected.
    2. player is presented with two buttons: 'view score' and 'main menu'.
    3. upon clicking 'view score' the score table is shown.
    4. upon clicking 'main menu' the landing page is shown again.

---
># **QUALITY CHECKS**
# Approach
## CSS style sheet:
* [Autoprefixer](https://autoprefixer.github.io/)
* [W3C CSS validation](https://jigsaw.w3.org/css-validator/)
## HTML:
* [W3C Markup Validation](https://validator.w3.org/)

## JavaScript:

* [JSLint](https://jslint.com/)


## Website performance:

* Google Chrome Lighthouse.
* Opera Lighthouse.
* Microsoft Edge Lighthouse.
* Firefox Lighthouse.

---
# Results
## W3C CSS Validation:
<p>
<a href="http://jigsaw.w3.org/css-validator/check/referer">
    <img style="border:0;width:88px;height:31px"
        src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
        alt="Valid CSS!" />
    </a>
</p>

* Errors: 
* Warnings: 

## W3C Markup Validation:
Tested each page by validation of the URL's:

* index.html: 
* howToPlay.html: 
* contact.html: 

## JS Lint:

## Website Performance:

Chrome Lighthouse score prior to code check and validation, and testing (responsive and functional):

The following activities were then completed:

Subsequent website performance checks:

* ### Chrome Lighthouse:

* ### Opera Lighthouse:

* ### Microsoft Edge Lighthouse:

* ### Firefox Lighthouse:

---
># **USER STORIES TESTING**
#### The below details how the website meets the requirements of each user story. Features of each page that specifically meet these are described and shown in a red box on each screenshot.
* *Be able to easily play the game on any device*
* *Have my memory skills challenged with a fun game*
* *Have set skill levels so I can determine the level of challenge*
* *Customise the game options so I can set my own challenge*
* *Have a record/score to see how much I have improved so as to challenge myself and my peers.*
* *Be able to easily navigate the game and site.*
* *I want have clear instructions so I know how to play.*
* *I want to be able to provide feedback/suggestions/issues to the developer.*

---
># **PROBLEMS AND FIXES**
>
### View Timer function.
* The timer function code was learnt from a youTube tutorial for a countdown timer.  However 
this was for a timer that was not involved in executing any functions once complete.
It was found that when implemented that once the timer hit zero and the clearinterval() was 
invoked, that the timer actually carried on even though the display was not updating anymore and displayed '0'.
This meant that the generatePlayerGrid() being triggered by the timer was repeated being invoked and therefore
repeatedly generated.  This meant that the user was not able to add colours.
* *Fix: Bim_Alumni informed me that the setInterval() method needed to be declared as a variable
so that when there is a variable to declare with the clearInterval() method and stop the timer completely.*

### Responsive design on the score column.
* It was required that the score column is not show on any device 768px width and below and 
instead the user accesses the score and main menu from a button that would appear at the top 
of the screen.  to do this bootstrap display property was used 
(https://getbootstrap.com/docs/4.6/utilities/display/) and the classes 'd-none' and 'd-lg-block' 
added to the score column created in the js file.  However adding these had the unexpected effect 
of overwriting the 'align-items-center' class and so the main menu button and text was justified left.
Numerous options were tried to overcome this (adding in classes in different order, styling the column 
in css) but none worked. 
* *Fix: To overcome this the 'button' and 'h1' tags were placed in a div (where before this they were 
not needed to be in a div) and the div styled as 'text-align: center'*

### View timer not stopping when Main Menu button selected from game area.
* clearInterval(patternDisplayTimer) was added the mainMenu() function however this did not result in the
timer stopping and so whilst the user exited to the main menu from the game page whilst the time was counting
down once the timer finished the user was then placed within the game page.
* *Fix: Within the viewTimer() function two event listeners were added for the Main menu button (one for the 
score column and one for the mobile view buttons).  clearInterval(patternDisplayTimer) was added within a function
for each of these*
