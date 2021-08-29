import { Application } from 'egg';

export default (app: Application) => {
    const { controller, router } = app;

    router.get('/', controller.home.index);
    // ================================== user
    router.get('/api/currentUser', controller.api.user.currentUser);
    router.post('/api/login/account', controller.api.user.account);
    router.post('/api/login/outLogin', controller.api.user.outLogin);
};
