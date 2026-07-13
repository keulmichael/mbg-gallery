# Accessibilite, responsive et RGPD

## Accessibilite

- Viser WCAG AA quand c'est faisable.
- Utiliser des landmarks HTML, une hierarchie de titres logique et des liens explicites.
- Conserver des etats `focus-visible` visibles.
- Ne pas transmettre une information uniquement par la couleur.
- Respecter `prefers-reduced-motion` pour les animations.
- Prevoir des labels et messages d'erreur explicites pour chaque formulaire ajoute.

## Responsive

- Construire mobile-first.
- Eviter le debordement horizontal.
- Garder des zones tactiles d'au moins 40 px de haut lorsque possible.
- Definir des largeurs maximales lisibles pour les blocs de texte.
- Tester mobile, tablette, desktop et grande largeur avant livraison.

## RGPD

- Collecter uniquement les donnees necessaires.
- Ajouter une information proche de chaque formulaire.
- Ne pas charger de traceur non essentiel avant consentement.
- Ne pas afficher de bandeau cookies si aucun traceur soumis au consentement n'est utilise.
- Permettre de refuser aussi simplement que d'accepter lorsqu'un consentement est requis.
- Completer la politique de confidentialite avec les traitements, bases legales, durees, destinataires et droits reels.
