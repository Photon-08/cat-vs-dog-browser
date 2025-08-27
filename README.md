# 🐱🐶 Browser-Based Cat vs Dog Classifier

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge)](https://photon-08.github.io/cat-vs-dog-browser/)
[![TensorFlow.js](https://img.shields.io/badge/TensorFlow.js-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)](https://www.tensorflow.org/js)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🎯 Project Overview

**This is a Proof of Concept (POC)** demonstrating that complex machine learning models can be deployed and run entirely in web browsers using TensorFlow.js. The primary goal is not to showcase the most accurate cat vs dog classifier, but rather to prove the technical feasibility of browser-based machine learning inference.

This project features a client-side web application that uses a pre-trained TensorFlow.js model to classify uploaded images as either "Cat" or "Dog" - all processing happens locally in your browser with zero server-side computation required.

## 🚀 Live Demo

Experience the application live at: **[https://photon-08.github.io/cat-vs-dog-browser/](https://photon-08.github.io/cat-vs-dog-browser/)**

## ✨ Key Features

- **🧠 Complete Browser-Based ML**: Full machine learning inference running locally in the browser
- **🔒 Privacy-First**: No images are uploaded to any server - all processing happens locally
- **⚡ Zero Backend**: No Node.js, Python servers, or cloud APIs required for inference
- **📱 Modern UI**: Clean, responsive interface built with vanilla HTML, CSS, and JavaScript
- **🎨 Real-time Preview**: Instant image preview before classification
- **🚀 Easy Deployment**: Can be hosted on any static file server or CDN

## 🎓 Technical Achievement

This project demonstrates several important concepts:

- **Model Conversion**: Converting traditional TensorFlow models to TensorFlow.js format
- **Browser Optimization**: Running neural networks efficiently in JavaScript environments
- **Client-Side Processing**: Performing complex computations without server dependencies
- **Static Hosting**: Deploying ML applications using only static web hosting

## 🛠️ Technologies Used

- **TensorFlow.js** - Machine learning inference in the browser
- **Vanilla JavaScript** - Core application logic
- **HTML5** - Structure and file handling
- **CSS3** - Modern, responsive styling
- **GitHub Pages** - Static hosting and deployment

## 🚀 Getting Started

### Prerequisites

- Any modern web browser (Chrome, Firefox, Safari, Edge)
- A simple HTTP server (for local development)

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Photon-08/cat-vs-dog-browser.git
   cd cat-vs-dog-browser
   ```

2. **Start a local server**:
   
   Using Python 3:
   ```bash
   python3 -m http.server 8000
   ```
   
   Using Python 2:
   ```bash
   python -m SimpleHTTPServer 8000
   ```
   
   Using Node.js:
   ```bash
   npx serve .
   ```

3. **Open the application**:
   Navigate to `http://localhost:8000` in your web browser

4. **Test the classifier**:
   - Click "Select Image" and choose a cat or dog photo
   - Click "Predict" to see the model's classification

## 📁 Project Structure

```
cat-vs-dog-browser/
├── index.html                 # Main application interface
├── predict.js                # ML model loading and prediction logic
├── style.css                 # Application styling
├── tfjs_model_directory/     # TensorFlow.js model files
│   ├── model.json           # Model architecture and metadata
│   └── group1-shard*.bin    # Model weights (10 binary files)
└── README.md                # This documentation
```

## 🎯 Project Limitations & Scope

**Important Note**: This is a proof of concept focused on demonstrating technical feasibility rather than achieving state-of-the-art accuracy. 

- **Model Accuracy**: The model prioritizes browser compatibility over maximum accuracy
- **Dataset Scope**: Trained on a limited dataset for demonstration purposes
- **Performance**: Optimized for web deployment rather than computational efficiency
- **Use Case**: Educational and demonstrative - not intended for production image classification

## 🌐 Deployment

This project is automatically deployed to GitHub Pages at [https://photon-08.github.io/cat-vs-dog-browser/](https://photon-08.github.io/cat-vs-dog-browser/) whenever changes are pushed to the main branch.

## 🤝 Contributing

This project welcomes contributions, especially those that improve:
- Browser compatibility
- Model optimization for web deployment
- User interface enhancements
- Documentation improvements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- TensorFlow.js team for making browser-based ML possible
- The open-source community for tools and inspiration
- GitHub Pages for free static hosting

---

**💡 Remember**: This project demonstrates the "art of the possible" with browser-based machine learning, showing that complex models can run client-side without compromising user privacy or requiring server infrastructure.
