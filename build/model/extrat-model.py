import requests
import json
from bs4 import BeautifulSoup

url = "https://huggingface.co/models"
response = requests.get(url)
html_content = response.text

soup = BeautifulSoup(html_content, "lxml")

def extract_models(soup):
    model_cards = soup.find_all("div", class_="card model-card")
    models = []
    
    for card in model_cards:
        model = {}
        model["name"] = card.find("h2", class_="card-title").text
        model["type"] = card.find("span", class_="badge badge-light").text
        model["description"] = card.find("p", class_="card-text").text
        model["url"] = "https://huggingface.co/models" + card.find("a")["href"]
        
        models.append(model)
    
    return models

models = extract_models(soup)

with open("output/model_list.json", "w") as file:
    json.dump(models, file, indent=4)
