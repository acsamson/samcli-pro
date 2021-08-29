# 🍧Intro

cli（micro front end + node server）

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