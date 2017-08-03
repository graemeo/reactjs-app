#!/bin/bash

function usage {
   echo "Usage: $0 -h | --host -u | --user -i | --identity [-f | --force]"
   echo "Where"
   echo "    -h | --host is the host to which you will be configuring against"
   echo "    -u | --user is the user to logon to the host"
   echo "    -i | --identity is the SSH private key location to authenticate to the host"
   echo "    (optional) -f | --force is the option to update downloaded Ansible role(s)"
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
        force="--force"
        shift
        ;;
     --help)
        usage
        ;;
     *)
        usage
   esac
   shift
done

if [ -z $host ]  || [ -z $user ] || [ -z $identity ]
then
   usage   
fi

ansible-galaxy install -r requirements.yml -p ./roles $force -v
#ansible-playbook deployment.yml --extra-vars "host=$host user=$user ssh_identity='$identity'" -vvv
