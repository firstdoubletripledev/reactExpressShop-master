#!/bin/bash

cd packages

rm -rf deploy
mkdir deploy

cd server
yarn build:babel

cp -R dist ../deploy/
cp package.json ../deploy/
cp .env ../deploy/
cp .env ../deploy/

cd ../client
yarn build
cp -R build ../deploy/

cd ..
rm -rf ../../../deployShopBanHoa/dist
rm -rf ../../../deployShopBanHoa/build
rm -rf ../../../deployShopBanHoa/package.json
rm -rf ../../../deployShopBanHoa/.env

cp -R deploy/* ../../../deployShopBanHoa/
cp -R deploy/.env ../../../deployShopBanHoa/

cd ../../../deployShopBanHoa/
git add .
git commit -am "make it better"
git push heroku master