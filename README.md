# Title: Person Counter App - A JavaScript Project

The Person Counter App is a simple JavaScript project that tracks the number of people entering a building or room. The app is designed to keep a record of the number of people who entered and provides an option to save the count for future reference. The app has been built using HTML, CSS, and JavaScript.

## Table of Contents

- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Setup

To use the Person Counter App, you need to download the `index.html`, `index.css`, and `index.js` files and save them in a folder on your local machine. The app can be run by opening the `index.html` file in a web browser.

## Usage

The app's user interface consists of a header that displays the app's name, a div element that contains the people count, a Save button, and an Increment button. The people count is displayed using an h2 tag with an id of `count-el`. The count is initially set to zero, and the increment button updates the count each time it is clicked.

The Save button records the current count in a separate div element with an id of `save-el`. The save button appends the current count to the "Previous Entries" text each time it is clicked. The count is reset to zero after each save operation.

## Contributing

If you would like to contribute to this project, you can fork the repository and make your changes on your own fork. Once you have made your changes, you can create a pull request to merge your changes back into the main repository.

1. Fork the repository by clicking the "Fork" button on the top right corner of the repository page.

2. Clone your forked repository to your local machine using the following command:
```bash 
git clone https://github.com/YOUR-USERNAME/Counter-App.git
```

3. Create a new branch for your changes:
```bash 
git branch my-new-feature
```

4. Switch to the new branch:
```bash 
git checkout my-new-feature
```

5. Make changes to the code as desired.

6. Commit the changes to your local repository:
```bash 
git add .
git commit -m "Your commit message here"
```

7. Push the changes to your forked repository:
```bash 
git push origin my-new-feature
```

8. Finally, create a pull request to merge your changes back into the main repository.
## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
