###
 # @Description: 项目一键启动
 # @Author: acsamson
 # @Date: 2021-06-01 17:08:22
 # @LastEditTime: 2021-06-13 01:43:14
 # @LastEditors: acsamson@foxmail.com
 # @FilePath: /samtools/init.sh
### 
echo "mac安装基础依赖..."
npm i -g xl_close_port
echo "mac安装mongodb..."
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
echo "✅ mac安装mongodb结束, 输入mongo可以查看是否安装正确"
echo "✅ mongo默认端口: 27017, 默认无密码"
