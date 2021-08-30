[English](./README.md) | [简体中文](./README.zh-CN.md)

# 🍧介绍

该项目包含两个不同的分支:

* fullstack: cli（微前端 + electron + node + mongoDB）
* fepro: 微前端中台

我把fullstack分支设为主分支。您可以使用samcli-create创建您的项目:

```shell
npm i -g samcli-create
samcli-create your_project_name
```

## 🍧开始

在开始之前，我们需要确定我们的环境是否已经安装了依赖项:

* xl_close_port
* mongodb

如果没有，则运行 `sh ./init-onlyOnce.sh` 进行安装。

`启动主应用:`
```shell
sh ./start.sh
```
`启动子应用:`
```shell
cd client/app/docs
yarn
yarn start
```