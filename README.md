Javascript random password generator.

This is a random password generator that pulls from 4 seperate arrays containing uppercase, lowercase, numbers, and special characters within them. 
The length of the password and the contents of the password and which values that it contains are determined by the user with the use of prompts.

There are 5 total prompts. The first is a prompt asking the user on the length of the password between 8 and 128 characters in total. Prompts 2-5 are confirm prompts allowing the user to confirm or cancel (boolean) whether or not they would like the specific characters to be portrayed. 

Depending on the selection of characters, there is a sequence of if else statements that determine which arrays are concatenated together. After the selected arrays are chosen, a for loop then runs through the arrays for the length determined by the user, which is then posted onto the page index.html.  