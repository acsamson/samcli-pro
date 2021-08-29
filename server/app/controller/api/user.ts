/*
 * @Description:
 * @Author: acsamson
 * @Date: 2021-06-05 02:57:55
 * @LastEditTime: 2021-06-05 03:05:52
 * @LastEditors: acsamson@foxmail.com
 * @FilePath: /samtools/server/app/controller/api/user.ts
 */
import { Controller } from 'egg';

export default class UserController extends Controller {
    // 获取当前用户信息
    public async currentUser() {
        const { ctx } = this;
        ctx.body = {
            success: true,
            data: {
                name: 'acsamson',
                avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
            }
        }
    }
    // 进行登录, 获取当前权限
    async account() {
        const { ctx } = this;
        ctx.body = {
            currentAuthority: ['admin'],
            status: 'ok',
            type: 'account'
        }
    }
    // 登出
    async outLogin() {
        const { ctx } = this;
        ctx.body = {
            data: { },
            success: true
        }
    }
}
