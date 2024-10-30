const axios = require('axios');

// Remplacez 'votre_api_key' par votre clé API d'OpenAI
const apiKey = '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';
const client = axios.create({
  headers: { 'Authorization': `Bearer ${apiKey}` }
});

// Remplacez 'davinci-codex' par le modèle spécifique que vous souhaitez utiliser
const url = 'https://api.openai.com/v1/engines/davinci-codex/completions';

// Définissez votre prompt et d'autres paramètres selon vos besoins
const data = {
  prompt: 'Votre prompt ici',
  max_tokens: 100
};

client.post(url, data)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
