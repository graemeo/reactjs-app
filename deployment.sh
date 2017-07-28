ansible-galaxy install -r requirements.yml -p ./roles --force
ansible-playbook deployment.yml --extra-vars "host=$HOST user=$USER ssh_identity='$SSH_IDENTITY'" -vvv
