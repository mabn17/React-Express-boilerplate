#! /usr/bin/env bash


if [ -z "$2" ]
  then
    echo "Inte tillräckligt med argument"
    exit 1
fi

USERNAME=$1
USERPASS=$2
DATABASE="chaufforsverksamheten"

echo "Uppdaterar nya Tabeller, Vyer, Procedurer ... "
mysql "-u$USERNAME" "-p$USERPASS" $DATABASE < ./ddl.sql

echo "Stoppar in värden i tabeller ... "
mysql "-u$USERNAME" "-p$USERPASS" $DATABASE < ./insert.sql


if [[ $3 == "-b" || $3 == "--backup" ]]; then
    echo "Skapar backup ..."
    mysqldump "-u$USERNAME" "-p$USERPASS" $DATABASE > ./backup.sql
fi

echo "Klar!"
exit 0