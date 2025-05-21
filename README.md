# Froyo

As you pick out a flavor at your favorite local frozen yogurt shop, you overhear the management team discussing how they would like a way for customers to order online. You make small talk and offer your services to help them build a web app.

## Instructions

Build a website according to this user story:

> Upon opening the website, a visitor receives a prompt to enter a list of comma-separated froyo flavors.
> They type `vanilla,vanilla,vanilla,strawberry,coffee,coffee`.
> In the browser console, they are able to see how many of each flavor they have ordered.
> In this case, they observe that they have ordered three vanilla, two coffee, and one strawberry.

There is no starter code for this workshop, but you are encouraged to review the solutions to previous workshops! Use the rubric in Canvas to guide you.

## Milestones

You can check your progress against these milestones if you would like some guidance on what to do next.

1. Have you created an HTML file to live serve?
2. Is the HTML file connected to a JS file?
3. Can you prompt the user for froyo flavors and store their input?
4. Can you parse the user input into an array of froyo flavors?
5. Can you build an object to track which flavors you have counted so far?
6. How should that object be updated as you iterate through the array of flavors?
7. Are you using functions to organize your code?
8. Do your variables and functions have meaningful names?
9. Is your code formatted?

## Submission

Please submit the link to your public GitHub repository.


## Em's learning note:
### A. break down the prompt/requirements into tiny goals easy enough to code (Divide-Conquer-Glue)
### B. Goals: 1. prompt user to input flovaors  2. convert input into array  3. count each flavor's appearance  4. output to browser console
### C. For goal 2:
  #### 1. use the .map() method learning in Block 14 (to create a new array by applying a function to each element of the original array)
     -> so that I don't have to: for (let i = 0; i < flavors.length; i++) {...}, which makes the code a bit complex/messy
  #### 2. how to split user's input strings into comma-seperated form (user's prompted to input comma-spearated flavors in goal 1 already)
     -> https://www.w3schools.com/jsref/jsref_split.asp
  #### 3. user input with space(s) before/after ?
     -> https://www.w3schools.com/jsref/jsref_trim_string.asp
  #### 4. user input case sensitive?
     -> https://www.w3schools.com/jsref/jsref_tolowercase.asp
  #### 5. Easier to look up syntax this way: in W3Schools, on the left panel, select "JS Strings" and there lists all the methods available for Strings 
### D. For goal 3:
  Added else to fix the "undefined" results/errors after testing -- this ensures that new flavors will not be skipped (I hope!)





