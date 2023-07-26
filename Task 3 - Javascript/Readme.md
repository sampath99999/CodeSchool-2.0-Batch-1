# Task 3 - Javascript

### ⏲️ Deadline - Saturday 5:00 PM

👉 Prepare a Register Page with Following Functionalities:<br>

**On Left Side**:<br> Image should be changed for every 30 Sec(Can find some Free API's gives images of building or nature at that resolution)<br><br>

**On Right Side**:<br>

1.  Add few more fields **Date of Birth**, **Date of Joining**, **Gender**, **Country**, **University**
1.  Gender Should be Radio Buttons with Male, Female, Other
1.  County: Get Country list from Random Open API's
1.  Upon Selecting Country get University List from Following API
    <br> http://universities.hipolabs.com/search?country=india
    <br>Note: Change India with Respective Country
1.  Should have following validations

-   **First Name & Last Name**<br>

    1. Minimum length: 2 characters<br>
    1. Maximum length: 50 characters<br>
    1. Alphabetic characters only (no numbers or symbols)<br>
    1. Title case or capitalization (e.g., John, Alice)

-   **Email**<br>

    1. Format: Follow standard email format (e.g., user@example.com).<br>
    1. Minimum Length: Not empty.<br>
    1. Maximum Length: Reasonable limit.<br>
    1. Domain Name: Valid domain after "@" symbol.<br>
    1. No Spaces: Disallow spaces.<br>
    1. No Consecutive Dots: Avoid ".." in the local part.<br>
    1. Single "@" Symbol: Allow only one "@" symbol.<br>
    1. Valid Characters: Limit to alphanumeric, period, underscore, and hyphen.<br>

-   **Phone Number**<br>

    1. Format: 10-digit number only (e.g., 1234567890).<br>
    1. Digits Only: Numeric digits (0-9) only, no other characters.<br>
    1. No Spaces or Dashes: Disallow spaces, dashes, or special characters.<br>
    1. No Country Code: Phone number without country code (e.g., +1).<br>
    1. Give Country code's in Select Box before Phone Number Input as Shown in Picture, get country code's from Open API's

-   **Passwords**<br>

    1. Minimum Length: At least 5 characters.<br>
    1. Maximum Length: No more than 25 characters.<br>
    1. Uppercase Letters: Require at least one uppercase letter.<br>
    1. Lowercase Letters: Require at least one lowercase letter.<br>
    1. Numbers: Require at least one number (digit).<br>
    1. Special Characters: Require at least one special 1.character (e.g., !, @, #, $, %, etc.).<br>
    1. No Common Words or Patterns: Disallow common or easily guessable passwords like "password" or "123456".<br>
    1. No Sequential Characters: Disallow sequential characters or numbers like "abcdef" or "123456".<br>
    1. No Repeating Characters: Disallow repeating characters consecutively, such as "aa" or "11".<br>
    1. No Spaces: Password should not contain spaces.<br>

-   **DOB**<br>
    1. Past Date: Should be in the past.<br>
    1. Age: Must be 18 years or older.<br>
-   **DOJ**<br>
    1. After DOB: Should be after the Date of Birth.<br>
    1. Age Restriction: Must be at least 18 years from the Date of Birth.

👉 After clicking On Sign Up - Should do <b>POST</b> request to https://demo-api-wh0x.onrender.com/register, and show result below Sign Up Button <br><br>
👉 Should have Dropdown Menu in Header as shown in picture 

![image](https://github.com/sampath99999/CodeSchool-2.0-Batch-1/assets/112122835/fc1c7a33-227b-41ae-849b-462ff3f19dda)
