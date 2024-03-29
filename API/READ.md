# 12-16-2022
## Format Fetch With CSS Grid
    Ref
    https://css-tricks.com/introduction-fr-css-unit/

## Method Element.closest()
    Returns entire element with contents inside. When calling on a class that class must hav a '.'
    Will's Snippet: 
        console.log(document.getElementsByClassName(example-class')[0].closest('.ancestor-class-name'));

    Ref
    https://developer.mozilla.org/en-US/docs/Web/API/Element/closest

-- Created 
    - API/json/album.json
    - API/html/fetchAlbum.html
COMMENT:
> Must re-root the fetch(file) to the right folder

## Challenges
Raninder
1. Fetch data from json file ("https://dummyjson.com/products")
    Format into a webstore page

    - storeFront.html


12-15-2022:

## Fetch API
    an interface between apps that pulls data from one server and delivers it to another
    Ref
    https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data



## What is Synchronous Programming
    Tasks Performed one at a time
## What is Asynchronous Programming
    will run multiple programs at a time, holds attributes to time programs to run at certain times
    Ref
    https://www.outsystems.com/blog/posts/asynchronous-vs-synchronous-programming/


## Promise and Promise Chaining
    A promise is a JavaScript object that calls a function
        i.e writing a program to fetch an API
    Ref
    https://blog.greenroots.info/javascript-promises-explain-like-i-am-five
        This example breaks down the ryhme Jack and Jill into the steps of Promise chaining
    https://www.programiz.com/javascript/promise

## What is JSON?
    A file that holds and array of objects to call with jquery

## Fetch Requests

## Post Requests
    Posting data to an json file
    The method key will have the value 'POST'. body will be set equal to the JSON.stringify() format of the data object that was just created. headers will have the value of 'Content-Type': 'application/json; charset=UTF-8'.

    Ref 
    https://www.w3schools.com/js/js_json_intro.asp
## Document Fragments
    const list - document.createDocumentFragment();
### Assignment:
-- Think about 2 project ideas
1. Dynamic Nav Bar:
    - Drop down panel with pernament highlight over selected tabs
2. Text Adventure
    - Using radio buttons to allow the player navigate the path of the story using 'if else' statements

## Challenges:

Raninder

1. Console.log() the name, username, email address, ands street name of the first person in the array.
Do the same for everyone in the array:
https://jsonplaceholder.typicode.com/users 

-- Created - Challenges/js/consoleLog.js

COMMENTS
+ The data requested has been displayed on the page in a table. To better display each data point, padding has been added to the <td> in a <style> tag on the document. Additionally, I attempted to add a <th> tag [line 28] 
> I am attempting to append <th> to my table with carters suggestion of placing it in a ele.innerHTML method but I haven't had much success with it. This is the last thing I would like to do before finishing it. 

2. Create three img tags and set the src to three random pictures in the array
Remember to get a random number use Math.floor(Math.random*3):
https://jsonplaceholder.typicode.com/photos

-- Created - Challenges/html/threeRandomeImg.html

Carter

1. https://reqres.in/api/users

i. console.log() the response you get back

ii. console.log() the first name and email of the first person in the data array (george bluth)

iii. console.log() the first name and last name of the fourth person in the data array (eve holt)

iv. Using a loop console.log() everyones email

2. https://restcountries.com/v3.1/all

i. console.log() the common name of every country

ii. create a button that says Random. 
    when you click on the button have it display the flag, common name, the continent, and the capital city of a random country
    Also make it so that if you press the button again the old information is removed first before appending the new information

iii. Create a search feature for the countries
     Have an input and a button
     When the button is pressed search the api for the country in the input
     When you search you should use the common name of the country
