/*
Assignment 4: Automate from website 3 test cases with css selector
Navigate to this application: https://practicetestautomation.com/practice-test-login/

TestData:
Use next credentials to execute Login: Username: student | Password: Password123
*/


/*
Test case 1: Positive LogIn test
Open page
Type username student into Username field
Type password Password123 into Password field
Push Submit button
Verify new page URL contains practicetestautomation.com/logged-in-successfully/
Verify new page contains expected text ('Congratulations' or 'successfully logged in')
Verify button Log out is displayed on the new 
*/

/*
Test case 2: Negative username test
Open page
Type username incorrectUser into Username field
Type password Password123 into Password field
Push Submit button
Verify error message is displayed
Verify error message text is Your username is invalid!
*/

/*
Test case 3: Negative password test
Open page
Type username student into Username field
Type password incorrectPassword into Password field
Push Submit button
Verify error message is displayed
Verify error message text is Your password is invalid!
*/