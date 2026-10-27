# Portfolio d'Anis Rekima

Portfolio React et Vite : realisations detaillees, galeries de captures,
competences et prises de contact pour des missions freelance ou une alternance.

## Developpement

```sh
npm ci
npm run dev
```

## Captures des projets

Les 21 captures sont dans `public/image/`. Leur association aux sept projets et
leur ordre d'affichage sont definis dans le champ `captures` de
`src/project-cases.js`. Ajouter un fichier a ce dossier et son nom a la liste du
projet pour enrichir une galerie. La premiere image sert d'apercu principal.

Le site affiche les copies WebP sans perte dans `public/image/webp/`. Pour les
regenerer apres ajout ou remplacement d'une capture (FFmpeg requis) :

```sh
node scripts/optimize-images.mjs
```

Les presentations se trouvent dans `src/project-cases.js`. Les objectifs,
fonctionnalites, technologies et limites de chaque projet peuvent y etre ajustes.
Les captures illustrent les realisations ; elles ne constituent pas des
demonstrations interactives des applications d'origine.

## Verification et publication

```sh
npm run build
npm run preview
```

Le workflow `.github/workflows/deploy.yml` compile puis publie `dist/` lors
d'un push sur `main`. GitHub Pages doit avoir `GitHub Actions` comme source.
