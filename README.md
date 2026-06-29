
# 🔗 Practical Task: Module 2 Scenarios Automation

This repository contains the automation suite for the Module 2 practical task. The project implements a testing framework using WebdriverIO and Mocha, with a strong focus on exploring and implementing different interfaces of the Chai assertion library.
The scenarios are written for the [Practice Software Testing](https://practicesoftwaretesting.com/).

###  Task Requirements (Module 2 Scenarios)

The following objectives were accomplished in this task:
1. **Framework Setup:** Built a testing framework using WDIO and Mocha setup.
2. **Chai Integration:** Ensured the Chai assertion library is set up and used correctly within the framework.
3. **Assertion Practice:** Practiced with `Assert`, `Should`, and `Expect` interfaces to validate test outcomes.
4. **Interface Comparison:** Demonstrated an understanding of the differences between the mentioned Chai interfaces.
5. **Version Control:** Pushed the code to a remote repository and created a Merge Request.

### Technologies Used

* **Framework:** WebdriverIO (v8)
* **Test Runner:** Mocha
* **Assertion Library:** Chai (using `expect`, `should`, and `assert`)
* **Design Pattern:** Page Object Model (POM)
* **Language:** JavaScript / Node.js

### Covered Areas:
- Sign up / Sign in
- User profile & Favorite products
- Basket & Checkout
- Search, Filter, Sort
- Language change

### Setup & Installation

1. Clone the repository.
2. Ensure you have Node.js installed (v18 or higher recommended).
3. Install dependencies:

   ```bash
   npm install
   ```
### How to Run the Tests
To execute the test suite in parallel across Firefox and Edge, run:

   ```bash
   npm run test
   ```
### Linting
 To check the code for style and syntax errors using ESLint (Airbnb style), run:
 ```bash
   npm run lint
   ```