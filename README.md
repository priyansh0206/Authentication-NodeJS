# **URL:** https://authentication-nodejs-crs0.onrender.com/

# **Video Demo:** https://drive.google.com/file/d/1ezH4-7HGzL0FXac5h6MNvTei6ADtI63v/view?usp=sharing

# Authentication NodeJS

NodeJS Authentication based complete authentication system which can be used as a starter code for creating any new application
Authentication is a crucial aspect of web applications, ensuring that only authorized users can access specific resources. This project demonstrates the implementation of user authentication using popular technologies. It covers user registration, login, session management, email verification, and dashboard access. Our advanced user authentication and management system is designed to provide a secure and seamless experience for the users. Our system incorporates a range of features to ensure the utmost security and convenience in managing user accounts.


## Documentation

### Authentication Flow:

**User Registration:**

- Users can register by providing an email, name, and password.

- Passwords are hashed and stored securely in the database using bcrypt.

**User Login:**

- Passport.js LocalStrategy is used for authenticating users based on their email and password.

- Flash messages are employed to display login errors.
  
**Session Management:**

- Express sessions are used to manage user sessions.

- Session data is stored in MongoDB using connect-mongo for persistence.
  
**User Verification:**

- Email verification is implemented using nodemailer to send verification emails.

- Users are verified by clicking on a link in the email.
  
**Dashboard Access:**

- Authenticated users can access a protected dashboard route.

## Installation

Download the files as zip and extract.

Build Command:
```bash
  npm install
```

Start Command:
```bash
  node index.js
```
    
## Tech Stack

**Web Structure:** HTML, CSS, and JavaScript

**IDE:** Visual Code Studio

**Backend Tech:** NodeJS

**Web Framework:** Express JS

**Templating Language:** EJS (Embedded Javascript)

**Authentication Module:** Passport JS

**Database:** Mongo DB

## Screenshots

- **Home Page:**

![home1](https://github.com/priyansh0206/Authentication-NodeJS/assets/52272181/1d439233-39f4-49d9-bc58-1950f68669f7)

![home2](https://github.com/priyansh0206/Authentication-NodeJS/assets/52272181/6f14671b-d1cc-4a49-bb95-462fadbc0732)

- **Sign In / Sign Up Page:**

![signin](https://github.com/priyansh0206/Authentication-NodeJS/assets/52272181/d46cd014-ff76-4867-9086-ca550be63277)

![signup](https://github.com/priyansh0206/Authentication-NodeJS/assets/52272181/0e1371af-7784-420b-baab-52c468c6df20)

- **Wrong Credentials Popup:**

![signin_wrong](https://github.com/priyansh0206/Authentication-NodeJS/assets/52272181/2eb3a22e-d74a-42d9-a578-560c30ad0718)

- **Email for Verification:**
 
![email](https://github.com/priyansh0206/Authentication-NodeJS/assets/52272181/40ac2ede-9342-4c93-932d-43a8b5cb214a)

- **Account Verified:**

![verified](https://github.com/priyansh0206/Authentication-NodeJS/assets/52272181/593bf80c-97f8-4390-a037-1e8a611257a3)

- **Invalid Email Verification Link:**

![invalid](https://github.com/priyansh0206/Authentication-NodeJS/assets/52272181/297e9192-b1a4-4f7b-9791-b0813fe07c4b)

- **Resend Email Page**

![resend](https://github.com/priyansh0206/Authentication-NodeJS/assets/52272181/ecc2b255-3585-44c4-9e26-0b6693d1e743)

- **Login Successful / Dashboard Page**

![dashboard](https://github.com/priyansh0206/Authentication-NodeJS/assets/52272181/f46e9048-6b33-45bd-8b82-261366ca538c)

## Support

For support, contact me via email at priyansh0206@gmail.com or connect me at:

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/priyansh0206/)
