#!/bin/sh
echo 'start auto push...'
ip=$(curl -s http://myip.ipip.net) 
ip=`echo $ip | grep -Eoe "(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])" -Eoe '^(e|b)[[:lower:]]+[[:digit:]]+?'`
cd /home/zouhangte/Desktop/zouhunter.github.io
echo $ip>./dns.txt
git pull
git add --all
git commit -m "auto update:$ip"
git push
