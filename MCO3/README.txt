*********************************
CCAPDEV (S17) 

GROUP 3
ASAYAS, Isaac Rafael G.
DUCUT, Ezekiel 
 
MCO Phase 3
*********************************


GROUP 3 utilized Google Firebase as their back-end model. Specifically the following:
- Authentication Firebase: for the EMAIL/PASSWORD operations of the web 
application (sign-ups, sign-ins, and sign-outs, Comment system including adding/deleting comment).

- Realtime Database Firebase: for all other important details that 'Authentication' can't support. 
Information such as other Customer's profile information, their "Comments" and other important details. 
Thus, this database acts like the main database for the website application.

********************************************
** Instructions for Website Functionality **
********************************************
1) In the folder, Use command prompt and use the command "node server.js"
2) In the browser, type "localhost:3000"
	(For the controller to access other requests to the proper file webpage, just add "/websitename"
	when accessing other webpages i.e. localhost/mcdo, localhost/jollibee)
3) You will then be directed to the homepage.html
4) "homepage.html" is the index file of the application.
5) The user can proceed to "register" to be able to sign-up an account.
6) Otherwise, the user can proceed to "login" if registered account is about to be used.

7) As seen in the home page, "homepage.html", by clicking on the images, 
the user will be redirected to the following web pages to allow them to see each establishments' pages. 
Wherein, they can post their "comments" or reviews regarding the chosen establishment.
8) The pseudonym is more of a placeholder for pen name and the comment for the reviews.
9) After submitting the comments, these will be reflected on the same page under the establishment's page.
10) Users can post comments only when logged in and delete only THEIR comments and not others.





****************************************************
** Instructions for GOOGLE FIREBASE Functionality **
****************************************************
1) In order to sign-up an account, the user must click on the register button.
2) The web page will require the user to input some important profile information in order to create an account. 
This will, then, be store in the database (Firebase Authentication).

For access for the authentication list of emails, please click this link:
https://console.firebase.google.com/u/0/project/evalu-eat547a3/authentication/users

For access for the authentication list of commentsplease click this link:
https://console.firebase.google.com/u/0/project/evalu-eat-547a3/database/evalu-eat-547a3-default-rtdb/data/~2F


**************************************************************************
Good day, Mr. Sampedro!

An access has been granted specifically to your DLSU Email Address. This link will automatically direct you to the database named, "Evalu-EAT!", as we suppose that you have an existing account in Google Firebase.

Thank you!

**************************************************************************

3) Respectively, 'email address', and 'password' will be stored in the database. Then, this will be used to validate inputs in the "Sign-in" functionality of the application.
4) After a successful sign-up, the program will redirect the user to the "Sign-in" page wherein, it requires the user's "email address" and password".
5) The program will now be validating these inputs, whether an account already exists or non-existing.


