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
   
Pour pouvoir ajouter une vidéo en ligne il vous suffit de mettre cette dernière dans le dossier “~/Bureau/prototube/backend/videos". Ensuite recharger la page web http://localhost:3000 pour que cette dernière apparaisse sur Prototube.

Visionnage de vidéo en ligne, pour faire cela il vous suffit de cliquer sur la vidéo que vous souhaitez visonné et TADAM elle apparaît sur la page de Prototube.
