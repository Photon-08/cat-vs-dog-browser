# Cats vs. Dogs Image Classifier

This project is a simple, client-side web application that uses a pre-trained TensorFlow.js model to classify images as either a "Cat" or a "Dog". It runs entirely in the browser with no need for a server-side backend for the machine learning inference.

The front end is built with vanilla HTML, CSS, and JavaScript, providing a clean and modern user interface.

## Features

- **In-Browser ML:** Performs image classification directly in your web browser using TensorFlow.js.
- **Simple Interface:** A user-friendly UI to upload an image and view the prediction.
- **Image Preview:** Shows the selected image before running the prediction.
- **Zero Backend:** The core logic requires no Node.js or other server-side processing for inference.
- **Easy to Run:** Can be served with any simple static file server.

## How to Use

### Prerequisites

1.  **A Web Browser:** Any modern web browser like Chrome, Firefox, or Edge.
2.  **A Local Web Server:** Most computers have Python pre-installed, which can easily start one.
3.  **The Model:** You must have your converted TensorFlow.js model files.

### Setup

1.  **Place the Model:**
    -   Ensure your TensorFlow.js model files are located in a directory named `tfjs_model_directory` in the root of this project. The directory should contain the `model.json` file and the binary weight files.

2.  **Start a Local Server:**
    -   Open a terminal or command prompt in the project's root directory.
    -   Run one of the following commands to start a simple local web server:

    **For Python 3:**
    ```bash
    python3 -m http.server
    ```

    **For Python 2:**
    ```bash
    python -m SimpleHTTPServer
    ```

3.  **Open the Application:**
    -   Open your web browser and navigate to `http://localhost:8000`.
    -   The "Cats vs. Dogs Classifier" page should load.

4.  **Make a Prediction:**
    -   Click the "Select Image" button and choose a local image file of a cat or a dog.
    -   The image will be displayed on the page.
    -   Click the "Predict" button to see the model's classification.

## File Structure

```
.
├── index.html          # The main HTML file for the user interface.
├── predict.js          # JavaScript for loading the model and making predictions.
├── style.css           # CSS for styling the application.
├── tfjs_model_directory/ # Directory for your TensorFlow.js model files.
│   ├── model.json
│   └── ... (weight files)
└── README.md           # This file.
```
