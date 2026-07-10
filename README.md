# Portfolio React

Portfolio personnel cree avec React et Vite, pret pour GitHub Pages.

## Lancer le projet

```bash
npm install
npm run dev
```

## Construire le site

```bash
npm run build
```

## Lier au depot GitHub

Remplace l'URL par celle de ton depot :

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/ton-pseudo/ton-depot.git
git push -u origin main
```

## Publier avec GitHub Pages

Ce projet contient un workflow GitHub Actions dans `.github/workflows/deploy.yml`.
Apres le push, active GitHub Pages dans les parametres du depot :

`Settings` -> `Pages` -> `Build and deployment` -> `GitHub Actions`.
