Cahier des charges: 

1.  Les objectifs et le contexte
Mon projet consiste à développer une plateforme web de vidéo complète, pouvant servir de base à quiconque voudrait développer sa plateforme de streaming (type Youtube). Elle sera déployée via des conteneurs Docker et automatisée avec Ansible. Je voudrais parvenir à ce qu’elle permette aux utilisateurs d’uploader, de visionner en ligne, de partager (via lien), et de télécharger des vidéos.
Mon projet vise à répondre au besoin de plateforme de streaming personnalisable pour divers domaine tel que: l’éducation, les entreprises ou le divertissement. Comme je l’ai précisé précédemment il servira de bases aux développeurs ou aux organisations qui souhaiteraient proposer leur propre contenu sans dépendre de plateformes externes, cela leur permettrait de garder un contrôle total sur les données ainsi que sur la personnalisation de l’interface.

2. L'architecture globale (VM et Playbooks)
Infrastructure :
Machines Virtuelles : 
Pour réaliser ce projet je pensais créer 2 machines virtuelles (ubuntu): une pour héberger les services frontend et backend, et une pour le stockage des vidéos.
Conteneurs Docker :
-Le conteneur Base de données : Ce conteneur servira à stocker toute les informations utiles pour la plateforme tel que: les informations sur chaque vidéo (titre, description...), et potentiellement un historique des vidéo que on été visionnées. Je pensais utiliser MySQL pour mettre en place cette base de données..
-Le conteneur Stockage de fichiers : Comme son nom l’indique ce conteneur servira à conserver les vidéos en elles-même, permettant un accès rapide et sécurisé aux utilisateurs.
-Le conteneur Frontend : Le frontend est la partie visible par l’utilisateur. Ce conteneur sera donc déployé avec un serveur d'application pour afficher la mise en page, permettre la navigation, et offrir les options d’uploader et de télécharger des vidéos. Pour résumer, ce conteneur mettra en place l’interface avec laquelle les utilisateurs interagiront.
-Le conteneur Backend : Le backend, comme son nom l’indique, comprend tout ce qui se passe en arrière-plan. Le conteneur backend que je vais créer servira à traiter les demandes des utilisateurs, comme les téléchargements ou les lectures des vidéos. De plus, il servira également à gérer les interactions avec la base de données et le stockage de fichiers. Ce conteneur backend sera construit avec une API (Python) et il me servira à gérer la logique de mon application.
L’automatisation et le déploiement avec Ansible :
L’automatisation de mon déploiement nécessitera plusieurs composants:
Playbook principal : 
Tout d’abord, il y aura un playbook central, servira à “diriger” le déploiement complet de l'infrastructure de ma plateforme vidéo.
Les playbooks pour le déploiement automatisé : 
Ces playbooks seront au minimum au nombre de 4: un pour chacun des conteneurs soit Frontend, Backend, BDD et le stockage de vidéo. Grâce à ces playbooks, l’ensemble de mon infrastructure pourra être déployé en un seul clic, facilitant ainsi les démonstrations et simplifiant le processus d'installation.

4. Livrables
A la fin du projet les éléments suivant vous seront fournis: 
-Les Playbooks Ansible pour le déploiement automatisé de l’infrastructure.
-Une présentation et démonstration du projet à son état d’avancement à la date finale 


Tuto d'installation et d'utilisation de Prototube:

1. Pré-requis
Assurez-vous que Docker, Docker Compose et Ansible sont installés sur votre machine.
Récupérer le dossier sur git et placer le ici:
~/Bureau/prototube

2. Déployer les conteneurs avec les playbooks

a. Déployer le Backend :

Positionnez-vous dans le dossier contenant les playbooks :
cd ~/Bureau/prototube

Et exécutez cette commande :
ansible-playbook -i inventory.yml playbooks/backend.yml

b. Déployer le Frontend :

Toujours dans le même dossier, exécutez :
ansible-playbook -i inventory.yml playbooks/frontend.yml

Ensuite dans ~/Bureau/prototube/prototube_frontend/frontend, exécutez la commande npm start ce qui va démarrer notre appli node.js (Frontend du site en React.js) permettant d'afficher l'interface utilisateur sur http://localhost:3000.

3. Tester l'installation
   
Backend : Ouvrez votre navigateur et accédez à http://127.0.0.1:5000. Vous devriez voir un message indiquant :
{"message": "Backend API Prototube fonctionne !"}

Frontend : Accédez à http://localhost:3000. La page React devrait s'afficher.

Vérifier les vidéos :
Assurez-vous que les vidéos sont listées correctement en testant :
http://127.0.0.1:5000/videos.

4. Structure des dossiers
   
Projet principal : ~/Bureau/prototube

Playbooks Ansible : ~/Bureau/prototube/playbooks/

Backend : ~/Bureau/prototube/backend/

Frontend : ~/Bureau/prototube/frontend/

5. Ajout de vidéo
   
Pour pouvoir ajouter une vidéo en ligne il vous suffit de mettre cette dernière dans le dossier “~/Bureau/prototube/backend/videos. Ensuite recharger la page web http://localhost:3000 pour que cette dernière apparaisse sur Prototube.

Visionnage de vidéo en ligne, pour faire cela il vous suffit de cliquer sur la vidéo que vous souhaitez visonné et TADAM elle apparaît sur la page de Prototube.
