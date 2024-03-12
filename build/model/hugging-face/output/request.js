async function loadModel(
    ) {
      try {
        // Load the model asynchronously
    const model = await tf.loadLayersModel(config.modelPath);
        return model;
      } catch (error) {
        console.error("Error loading model:", error);
      }
    }
    
    async function generateRequest(query) {
      try {
        // Prepare data, generate the request and get the response asynchronously
    const response = await model.predict(query);
        return response;
      } catch (error) {
        console.error("Error generating request:", error);
      }
    }
    