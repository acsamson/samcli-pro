[English](./README.md) | [简体中文](./README.zh-CN.md)
# 🍧Intro

This project contains two different branches: 
* fullstack: cli（micro front end for enterprise applications + node server + mongoDB）
* fepro: micro front end for enterprise applications

And I set fullstack branch as main branch. You can use samcli-create to first settled your project:
```shell
npm i -g samcli-create
samcli-create your_project_name
```

## 🍧Start

Before we start, We need to determine if our environment has dependencies installed:
* xl_close_port
* MongoDB

if not, we run `sh ./init-onlyOnce.sh` to install it.

`start main:`
```shell
sh ./start.sh
```
`start children:`
```shell
cd client/app/docs
yarn
yarn start
```
