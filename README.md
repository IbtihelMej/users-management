# users-management

# DevTeam

Ibtihel MEJRI : Développeuse
Date démarrage: 17/07/2022

# users-management

SPA

L’application a pour objectif d’interagir avec une api test décrite à cette adresse :

https://reqres.in/

# L’application affichera quatre écrans principaux:

 1. Page d'inscription

 2. Page d'authentification

 3. Gestion d'utilisateur

 4. Détails d'utilisateur

# 1 Inscription

Cet écran doit afficher un formulaire avec deux champs: courriel et mot de passe.

Le courriel doit contenir un courriel valide de formation xxx@xxx.xxx

Le mot de passe ne peut pas etre vide

Le mot de passe doit adhérer aux régles de sécurité suivantes: min 8 lettres, inclure une lettre majuscule, une lettre miniscule et un chiffre

Le formulaire doit envoyer une requete POST à l'API /api/register et doit maintient le token recu

# 2 Authentification

Cet écran doit afficher un formulaire avec deux champs: courriel et mot de passe.

Le courriel doit contenir un courriel valide de formation xxx@xxx.xxx

Le mot de passe ne peut pas être vide

Le formulaire doit envoyer une request POST à l'API /api/login et doit maintient le token recu

# 3 Gestion des utilisateurs

Button pour ajouter un nouveau utilisateur

Seulement la colonne email est affichee

Chaque ligne devra aussi contenir un bouton amenant à l'écran de détails de l'utilisateur

# 4 Détails d'utilisateur

Les champs affichées seront: id, email, prénom, nom de famille

Un lien vers la liste de gestion des utilisateurs

# Notes

Limitation de l'API publique: Seulement les utilisateurs deja defini dans reqres peuvent s'inscrire ou s'authentifier

Maintenir le token recu en memoire seulement (e.x. champ dans un service)

Demontrer votre attention aux détails visuels

# Livraison

Utiliser un répo GITHUB public et partager le lien

Inclure des screenshots demontrants les écrans de l'application en mode desktop et mobile (ou un screencast)

# Bonus 1

Ajouter un champ de subscription "retaper votre mot de passe" avec une validation

# Bonus 2

Test unitaire pour les validations des formulaires d'entrés
