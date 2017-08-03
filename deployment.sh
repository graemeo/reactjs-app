#!/bin/bash

function usage {
   echo "Invalid parameter"
   exit 1
}

while [[ $# -gt 0 ]] 
do
   case $1 in
     -h|--host) 
        host=$2
        shift
        ;;
     -u|--user)
        user=$2
        shift
        ;;
     -i|--identity)
        identity=$2
        shift
        ;;
     -f|--force)
        force=true
        shift
        ;;
     *)
        usage
   esac
   shift
done

echo $host
echo $user
echo $identity
echo $force

#ansible-galaxy install -r requirements.yml -p ./roles --force -v
#ansible-playbook deployment.yml --extra-vars "host=$host user=$user ssh_identity='$identity'" -vvv
