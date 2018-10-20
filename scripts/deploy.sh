#! /bin/bash

scp scripts/production.sh nick@soundoftext.com:~/Deployment/soundoftext-web.sh

ssh nick@soundoftext.com "/bin/bash ~/Deployment/soundoftext-web.sh"
