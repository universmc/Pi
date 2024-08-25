#!/bin/bash
declare -a notes

function show_menu {
echo "╔═════════════════════════════════════╗"
echo "║   ✨ Menu de gestion de notes ✨    ║"
echo "╠═════════════════════════════════════╣"
echo "║                                     ║" 
echo "║  1. Ajouter une note                ║"
echo "║  2. Afficher toutes les notes       ║"
echo "║  3. Supprimer une note              ║"
echo "║  4. Modifier une note               ║"
echo "║  0. Quitter                         ║"
echo "║                                     ║" 
echo "╚═════════════════════════════════════╝" 
}

function add_note {
    read -p "Titre de la note : " title
    read -p "Contenu de la note : " content

    notes["$title"]="$content"
echo "Note ajoutée avec succès !"
}

function get_notes {
    if [ ${#notes[@]} -eq 0 ]; then
echo "Aucune note à afficher."
else
echo "╔═════════════════════════════════════╗"
echo "║Liste des notes :"
echo "╠═════════════════════════════════════╣"
echo "║                                     ║" 
for key in "${!notes[@]}"
do
echo "║  Titre : $key                       ║"
echo "║  Contenu :                          ║"
echo "║  ${notes[$key]}"
echo "║                                     ║" 
echo "╚═════════════════════════════════════╝"
done
fi
}

function remove_note {
    read -p "Titre de la note à supprimer : " title

    if [ -z "${notes[$title]}" ]; then
unset notes["$title"]
        echo "Note supprimée avec succès !"
else
echo "Note non trouvée."
fi
}

function edit_note {
    read -p "Titre de la note à modifier : " title

    if [ ! -z "${notes[$title]}" ]; then
read -p "Nouveau contenu de la note : " content
        notes["$title"]="$content"
echo "Note mise à jour avec succès !"
else
echo "Note non trouvée."
fi
}

while true; do
show_menu
    read -p "Sélection : " choice

    case $choice in
1) add_note ;;
        2) get_notes ;;
        3) remove_note ;;
        4) edit_note ;;
        0) break ;;
        *) echo "Entrée non valide." ;;
    esac
done
