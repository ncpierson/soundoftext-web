#! /bin/bash

# Don't run as sudo!
if [ "$EUID" -eq 0 ]; then
  echo "Must not run as sudo!"
  exit 1
fi

# Software Dependencies

sudo apt-get update

sudo apt-get install nginx -y

## NVM / Node

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash
source ~/.nvm/nvm.sh
nvm install --lts

## Node Dependencies

npm install -g yarn

# Firewall Setup (DigitalOcean Specific)

sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable

# Deployment Setup

cd ~

[[ -d Deployment ]] || mkdir Deployment

sudo mkdir -p /var/www/soundoftext.com
sudo chown $USER:$USER /var/www/soundoftext.com

sudo bash -c "cat > /etc/nginx/sites-available/soundoftext.com" <<"EOF"
map $sent_http_content_type $expires {
  default                off;
  text/html              epoch;
  text/css               max;
  application/javascript max;
  ~image/                max;
}

server {
  listen 80;
  listen [::]:80;

  root /var/www/soundoftext.com;

  expires $expires;

  server_name soundoftext.com production.soundoftext.com;

  location / {
    try_files $uri /index.html;
  }

  location = /service-worker.js {
    expires off;
    add_header Cache-Control no-cache;
    access_log off;
  }
}
EOF

sudo ln -s /etc/nginx/sites-available/soundoftext.com /etc/nginx/sites-enabled/
sudo service nginx reload
