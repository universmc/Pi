// connector.js
import fetch from 'node-fetch';
import fs from 'fs';

// Fonction pour récupérer les données du JSON
async function getConfiguration() {
  const rawData = fs.readFileSync('config.json');
  return JSON.parse(rawData);
}

// Fonction pour faire une requête HTTP
async function fetchApi(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Exemple de fonction pour récupérer les informations d'un dépôt GitHub
async function getGithubInfo(repo) {
  const config = await getConfiguration();
  const githubUrl = config.github[repo];
  const data = await fetchApi(githubUrl);
  return data;
}

// ... d'autres fonctions pour les autres services

// loader.js
import { getGithubInfo } from './connector';

async function loadGithubData() {
  const githubData = await getGithubInfo('mlDepot');
  // Met à jour l'interface utilisateur avec les données de GitHub
  // ...
}

loadGithubData();
