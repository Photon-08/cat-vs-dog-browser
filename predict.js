const imageSelector = document.getElementById('image-selector');
const predictButton = document.getElementById('predict-button');
const predictionSpan = document.getElementById('prediction');
const status = document.getElementById('status');
const imagePreview = document.getElementById('image-preview');

let model;

async function loadModel() {
  try {
    model = await tf.loadGraphModel('tfjs_model_directory/model.json');
    status.textContent = 'Model loaded. Select an image.';
    imageSelector.disabled = false;
    predictButton.disabled = false;
  } catch (e) {
    status.textContent = 'Error loading model: ' + e.message;
    console.error(e);
  }
}

loadModel();

imageSelector.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            imagePreview.src = event.target.result;
            imagePreview.classList.remove('hidden');
            predictionSpan.textContent = '';
            status.textContent = 'Image loaded. Ready to predict.';
        };
        reader.readAsDataURL(file);
    }
});

predictButton.addEventListener('click', async () => {
  if (!imageSelector.files[0]) {
    status.textContent = 'Please select an image first.';
    return;
  }

  try {
    status.textContent = 'Predicting...';
    const tensor = tf.browser.fromPixels(imagePreview).resizeNearestNeighbor([150, 150]).toFloat().expandDims();
    const prediction = await model.predict(tensor).data();
    predictionSpan.textContent = prediction[0] > 0.5 ? 'Dog' : 'Cat';
    status.textContent = 'Prediction complete.';
  } catch (e) {
    status.textContent = 'Error during prediction: ' + e.message;
    console.error(e);
  }
});
