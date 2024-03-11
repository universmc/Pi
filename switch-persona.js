// switch-persona.js
// Cette fonction permet de charger les données de persona à partir d'un fichier JSON spécifié.
async function loadPersonaData(personaName) {
    // ...
  }
  
  // Cette fonction permet de changer de persona en fonction du nom fourni en argument.
  async function changePersona(newPersona) {
    try {
      const newPersonaData = await loadPersonaData(newPersona);
      // ...
  } catch (error) {
      console.error("Erreur lors du chargement des données de persona :", error);
    }
  }
  
  // Exportez les fonctions pour être utilisées dans d'autres fichiers
  module.exports = {
    loadPersonaData,
    changePersona
  };
  