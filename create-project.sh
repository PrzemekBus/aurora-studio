#!/bin/bash

# Użycie: ./create-project.sh nazwa-nowego-projektu

if [ -z "$1" ]; then
  echo "Podaj nazwę projektu: ./create-project.sh nazwa-projektu"
  exit 1
fi

NEW_NAME=$1
TEMPLATE_FOLDER="clean-react-tailwind"

cp -r $TEMPLATE_FOLDER $NEW_NAME
cd $NEW_NAME

# Zmiana nazwy w package.json
if [ -f "package.json" ]; then
  sed -i "s/\"name\": \".*\"/\"name\": \"$NEW_NAME\"/" package.json
fi

# Zmiana tytułu w index.html
if [ -f "index.html" ]; then
  sed -i "s/<title>.*<\/title>/<title>$NEW_NAME<\/title>/" index.html
fi

echo "✅ Projekt '$NEW_NAME' został utworzony i skonfigurowany!"
echo "Uruchom: cd $NEW_NAME && npm install && npm run dev"