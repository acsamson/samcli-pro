# 🍧（简介

脚手架(微前端 + node服务端)

## 🍧（运行

首次运行需要看下有没有装指定依赖, 依赖在init-onlyOnce.sh里, 执行 `sh ./init-onlyOnce.sh` 安装即可.
启动主应用:
```shell
cd server
yarn
cd ../client/main
yarn
cd ../../
sh ./start.sh
```
启动子应用:
```shell
cd client/app/docs
yarn
yarn start
```