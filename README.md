# 🍧Intro

This project contains two different branch: 
* fullstack: cli（micro front end for enterprise applications + node server）
* fepro: micro front end for enterprise applications

And I set fullstack branch as main branck. You can use samcli-create to first settled your project:
```shell
npm i -g samcli-create
samcli-create your_project_name
```



## 🍧Start

Before we start, We need to determine if our environment has dependencies installed:
* xl_close_port
* mongodb

if not, we run `sh ./init-onlyOnce.sh` to install it.

start main:
```shell
cd server
yarn
cd ../client/main
yarn
cd ../../
sh ./start.sh
```
start children:
```shell
cd client/app/docs
yarn
yarn start
```