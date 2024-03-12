const Groq = require('groq-sdk');
const fs = require('fs');

const groq = new Groq();

async function main(
) {
  console.log("Démarrage de la session de brainstorming");

  // Chargement des modèles de phrases à partir d'un fichier JSON externe
const phraseModels = JSON.parse(fs.readFileSync('srv/json/exemple-phrase-prompt.json'));

  // Vérification de l'existence du dossier /output et création si nécessaire
if (!fs.existsSync('/output')) {
    fs.mkdirSync('/output');
  }

  // Boucle sur les modèles de phrases et génération d'idées
for (const model of phraseModels) {
    console.log(`Génération d'idée en fonction du modèle: ${model.name}`);

    const chatCompletion = await groq.chat.completions.create({
      "messages": [
        {
          "role": "system",
          "content": model.prompt
}
      ],
      "model": model.name,
      "temperature": 0.8,
      "max_tokens": 2042,
      "top_p": 1,
      "stream": true,
      "stop": null
});

    let fullResponse = ""; // Initialisation d'une variable pour stocker la réponse complète
for await (const chunk of chatCompletion) {
      const content = chunk.choices[0]?.delta?.content || '';
      fullResponse += content; // Accumulation des fragments de texte dans la variable fullResponse
}
const outputDir = __dirname + '/output';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}
    console.log("Réception de la réponse complète de l'IA : ", fullResponse); // Affichage de la réponse complète
// Écriture de la réponse dans un fichier Markdown externe
fs.writeFileSync(`${outputDir}/response-${model.name}.md`, fullResponse, 'utf-8');
  }

  console.log("💻 Fin de la session de brainstorming[univers-mc.cloud].");
}

main().catch(console.error);
