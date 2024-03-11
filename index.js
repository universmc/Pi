// index.js
// Importer les fonctions et variables nécessaires
const { initializeAssistant } = require('./src/lib/assistant');
const { getUserInput } = require('./src/util/readline');

// Exécution de la fonction principale
async function main(
) {
  const assistantData = await initializeAssistant();
  // ...
}

main().catch(console.error);
