export default {
    state: {
        loginShow:false,
        signShow:''
    },
    mutations: {
        //展示登录页
        showView(state){
            state.loginShow = !state.loginShow
        },
        //切换登录状态
        toLogin(state){
            state.signShow = true
        },
        //切换注册状态
        toSignUp(state){
            state.signShow = false
        }
    }
}