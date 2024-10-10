# Sentiment Analysis Chrome Extension

This project is a Chrome extension that extracts reviews from Amazon product pages and performs sentiment analysis using a Flask backend with a Transformers model.

## Table of Contents
- [Sentiment Analysis Chrome Extension](#sentiment-analysis-chrome-extension)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Folder Structure](#folder-structure)
  - [Installation](#installation)
    - [Backend](#backend)
    - [Frontend](#frontend)
  - [Usage](#usage)
  - [Technologies Used](#technologies-used)
  - [Contributing](#contributing)
  - [License](#license)
    - [Notes:](#notes)

## Features
- Collects user reviews from Amazon product pages.
- Performs sentiment analysis on collected reviews (positive/negative).
- Displays the results in a user-friendly popup.

## Folder Structure
```
/sentiment-analysis-extension/
├── /backend/
│   ├── app.py                   # Flask backend application
│   ├── requirements.txt          # Python package requirements
├── /frontend/
│   ├── popup.html               # HTML for the popup interface
│   ├── popup.js                 # JavaScript for handling interactions
│   ├── content.js               # Content script for scraping reviews
│   ├── manifest.json            # Chrome extension manifest file
├── README.md                    # Project documentation
```

## Installation

### Backend
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Create a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows use `venv\Scripts\activate`
   ```
3. Install the required packages:
   ```bash
   pip install -r requirements.txt
   ```

### Frontend
1. Navigate to the `frontend` directory and load the unpacked extension in Chrome:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable "Developer mode" in the top right corner.
   - Click "Load unpacked" and select the `frontend` directory.

## Usage
1. Run the Flask backend:
   ```bash
   python app.py
   ```
   The backend will be available at `http://localhost:5000`.

2. Open an Amazon product page in Chrome.

3. Click on the extension icon to open the popup and extract reviews.

4. The sentiment analysis results will be displayed in the popup.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript, Chrome Extensions API
- **Backend**: Python, Flask, Transformers, Flask-CORS
- **Machine Learning**: Hugging Face Transformers for sentiment analysis

## Contributing
Contributions are welcome! If you have suggestions or improvements, please fork the repository and create a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

### Notes:
- Make sure to update the folder structure and instructions if there are any additional files or configurations in your project.
- If you have a license file, you can include it as mentioned in the License section.
- You can customize the content based on your project specifics.