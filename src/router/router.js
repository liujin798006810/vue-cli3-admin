import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
import NProgress from 'nprogress' 
import 'nprogress/nprogress.css'

Vue.use(Router)

const getComponent = (name, component) => () => import(`@/views/${name}/${component}.vue`)

const router = new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: getComponent('login', 'index')
        },
        {
            path: '/',
            redirect: '/login',
            component: getComponent('login', 'index')
        },
        {
            path: '/home',
            component: getComponent('layout', 'Layout'),
            children: [{
                    path: '/home',
                    component: getComponent('home', 'index'),
                    meta: {
                        title: '首页'
                    }
                },
                {
                    path: '/404',
                    component: getComponent('error', '404'),
                    meta: {
                        title: '404'
                    }
                },
                {
                    path: '/403',
                    component: getComponent('error', '403'),
                    meta: {
                        title: '403'
                    }
                },
                {
                    path: '/500',
                    component: getComponent('error', '500'),
                    meta: {
                        title: '500'
                    }
                },
                {
                    path: '/userList',
                    component: getComponent('userManage', 'userList'),
                    meta: {
                        title: '用户列表'
                    }
                },
                {
                    path: '/lotteryUserList',
                    component: getComponent('userManage', 'lotteryUserList'),
                    meta: {
                        title: '中奖用户列表'
                    }
                },
                {
                    path: '/userEarning',
                    component: getComponent('userManage', 'userEarning'),
                    meta: {
                        title: '用户收益'
                    }
                },
                {
                    path: '/assetRecord',
                    component: getComponent('userManage', 'assetRecord'),
                    meta: {
                        title: '资产记录'
                    }
                },
                {
                    path: '/earnings',
                    component: getComponent('dataManage', 'earnings'),
                    meta: {
                        title: '收益概况'
                    }
                },
                {
                    path: '/assets',
                    component: getComponent('dataManage', 'assets'),
                    meta: {
                        title: '资产概况'
                    }
                },
                {
                    path: '/behavior',
                    component: getComponent('dataManage', 'behavior'),
                    meta: {
                        title: '行为概况'
                    }
                },
                {
                    path: '/pizzaGame',
                    component: getComponent('gameManage', 'pizzaGame'),
                    meta: {
                        title: '命运之轮'
                    }
                },
                {
                    path: '/treasure',
                    component: getComponent('gameManage', 'treasure'),
                    meta: {
                        title: '密室夺宝'
                    }
                },
                {
                    path: '/coin',
                    component: getComponent('assetManage', 'coin'),
                    meta: {
                        title: '币种管理'
                    }
                },
                {
                    path: '/treasureInfo',
                    component: getComponent('assetManage', 'treasureInfo'),
                    meta: {
                        title: '密室夺宝房间对账'
                    }
                },
                {
                    path: '/pizzaGameInfo',
                    component: getComponent('assetManage', 'pizzaGameInfo'),
                    meta: {
                        title: '命运之轮房间对账'
                    }
                },
                {
                    path: '/userRollIn',
                    component: getComponent('assetManage', 'userRollIn'),
                    meta: {
                        title: '用户转入总额'
                    }
                },
                {
                    path: '/userConsumption',
                    component: getComponent('assetManage', 'userConsumption'),
                    meta: {
                        title: '用户消费总额'
                    }
                },
                {
                    path: '/assetRolloutList',
                    component: getComponent('assetManage', 'assetRolloutList'),
                    meta: {
                        title: '转出审核列表'
                    }
                },
                {
                    path: '/identityAuth',
                    component: getComponent('otcManage', 'identityAuth'),
                    meta: {
                        title: '实名认证'
                    }
                },
                {
                    path: '/merchantAuth',
                    component: getComponent('otcManage', 'merchantAuth'),
                    meta: {
                        title: '法币商户认证'
                    }
                },
                {
                    path: '/entrustList',
                    component: getComponent('otcManage', 'entrustList'),
                    meta: {
                        title: '委托列表'
                    }
                },
                {
                    path: '/transationList',
                    component: getComponent('otcManage', 'transationList'),
                    meta: {
                        title: '订单列表'
                    }
                },
                {
                    path: '/appeal',
                    component: getComponent('otcManage', 'appeal'),
                    meta: {
                        title: '申诉'
                    }
                },
                {
                    path: '/juheNotice',
                    component: getComponent('shopManage', 'juheNotice'),
                    meta: {
                        title: '聚合首页公告'
                    }
                },
                {
                    path: '/juheAd',
                    component: getComponent('shopManage', 'juheAd'),
                    meta: {
                        title: '聚合首页广告位'
                    }
                },
                {
                    path: '/shopBanner',
                    component: getComponent('shopManage', 'shopBanner'),
                    meta: {
                        title: '一币商城banner'
                    }
                },
                {
                    path: '/goodsMain',
                    component: getComponent('shopManage', 'goodsMain'),
                    meta: {
                        title: '商品管理'
                    }
                },
                {
                    path: '/orderMain',
                    component: getComponent('shopManage', 'orderMain'),
                    meta: {
                        title: '订单管理'
                    }
                },
                
            ]
        }, 
        {
            path: '*',
            redirect: '/404',
        }
    ]
})

router.beforeEach((to, from, next) => {
    NProgress.start()

    if (to.path !== '/login' && !store.state.token) {
        next('/login')
        NProgress.done() 
    } else {
        next()
    }
})

router.afterEach(() => {
    NProgress.done() 
})

export default router