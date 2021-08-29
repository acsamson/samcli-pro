###
 # @Description: 
 # @Author: acsamson
 # @Date: 2021-06-11 02:56:22
 # @LastEditTime: 2021-06-12 02:07:22
 # @LastEditors: acsamson@foxmail.com
 # @FilePath: /samtools/start.sh
### 
echo '👏👏👏 欢迎使用samcli-pro, 正在启动前后端应用...'
xl_close_port -p 8000
xl_close_port -p 7001
cd server
yarn startAll