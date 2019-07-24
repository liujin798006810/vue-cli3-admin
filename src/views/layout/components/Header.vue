<template>
    <div class="head-container clearfix">
        <div class="fl">
            <showAside :toggle-click="toggleClick"/>
        </div>

        <div class="fr">
            <div class="header-user-con">
                <div class="btn-fullscreen" @click="handleFullScreen">
                    <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                        <i class="el-icon-rank"></i>
                    </el-tooltip>
                </div>
            
                <div class="avatar-container">
                    <el-menu mode="horizontal" class="user-info" unique-opened router>
                        <el-submenu index="1">
                            <template slot="title">
                                <span class="tool-tip" :title="username">您好，{{username}}</span>
                            </template>
                            <li class="el-menu-item">
                                <i class="el-icon-jh-yonghu2"></i>用户信息
                            </li>
                            <li class="el-menu-item">
                                <i class="el-icon-jh-bianji"></i>修改密码
                            </li>
                            <li class="el-menu-item">
                                <i class="el-icon-jh-icon"></i>退出
                            </li>
                        </el-submenu>
                    </el-menu>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
import showAside from "@/components/showAside"

export default {
    components: {
        showAside
    },

    data() {
        return {
            fullscreen: false,
            username: "超级管理员"
        }
    },

    computed: {
        isCollapse: {
            get: function() {
                return this.$store.state.isCollapse
            },
            set: function(newValue) {
                this.$store.commit("IS_COLLAPSE", newValue)
            }
        }
    },

    methods: {
        toggleClick() {
            this.isCollapse = !this.isCollapse
        },
        
        logout(command) {
            this.$store.commit('TAGES_LIST', [])
            this.$router.push("/login")
        },
        
        handleFullScreen() {
            let element = document.documentElement
            
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen()
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen()
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen()
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen()
                }
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen()
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen()
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen()
                } else if (element.msRequestFullscreen) {
                    element.msRequestFullscreen()
                }
            }

            this.fullscreen = !this.fullscreen
        }
    }
}
</script>

<style lang="scss" scoped>
.head-container {
    height: 56px;
    line-height: 56px;
    background-color: #2e3233;
    border-bottom: 1px solid #f0f0f0;
    color: #fff;
}

.header-user-con {
    display: flex;
    height: 50px;
    align-items: center;
}

.btn-fullscreen {
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
}

.btn-fullscreen {
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
    margin-bottom: 10px;
}

.el-dropdown-link {
    color: #fff;
    cursor: pointer;
}

.el-dropdown-menu__item {
    text-align: center;
}

</style>


