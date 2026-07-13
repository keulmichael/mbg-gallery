# Design system MBG Gallery

Niveau de design retenu : Signature / awards.

Objectif : donner a MBG Gallery une presence editoriale memorisable, adaptee a une galerie d'art contemporain, sans effets gratuits ni informations inventees.

## Principes UI/UX Pro Max appliques

- Premiere vue centree sur MBG Gallery et une oeuvre reelle.
- Palette papier, encre chaude, argile et mousse pour eviter une lecture monochrome.
- Titres editoriaux serif, texte UI sans-serif systeme.
- Grilles asymetriques et grandes images pour servir les oeuvres.
- Focus visible, contrastes controles et animations reduites via `prefers-reduced-motion`.
- Mobile-first avec navigation horizontale simple, sans tiroir JS inutile.

## Tokens

- Couleurs : variables `--paper`, `--ink`, `--mist`, `--clay`, `--moss`.
- Radius : 2 a 8 px maximum.
- Typographies : systeme sans-serif + serif editoriale pour les titres.
- Espacements : sections genereuses, cartes limitees aux contenus repetes.
- Focus : anneaux visibles `focus-visible:ring-3`.

## Composants de base

- `SiteShell`
- `SiteHeader`
- `SiteFooter`
- `Button`
- `FadeIn`
- `LegalPage`

Les composants doivent rester lies aux contenus reels MBG Gallery et ne pas introduire de prix, avis, recompenses ou faits non fournis.
