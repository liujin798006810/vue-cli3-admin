<template>
    <div class="aside">
        <el-scrollbar wrap-class="scrollbar-wrapper">
            <el-menu
                class="el-menu-vertical-admin"
                :default-active="currentRoute"
                :unique-opened="true"
                :collapse="isCollapse"
                @select="select"
                router
            >
                <!-- <template v-for="item in menus">

                    <el-submenu :index="item.resourcePath" v-if="item.menuNodeList">
                        <template slot="title">
                            <i :class="item.resourceIcon"></i>
                            <span slot="title">{{ item.nodeName }}</span>
                        </template>
                            
                        <template v-for="subItem in item.menuNodeList">
                            <el-submenu :index="subItem.resourcePath" :key="subItem.id" v-if="subItem.menuNodeList">
                                <template slot="title">
                                    <i :class="subItem.resourceIcon"></i>
                                    <span slot="title">{{ subItem.nodeName }}</span>
                                </template>
                                <el-menu-item
                                    v-for="(threeItem,i) in subItem.menuNodeList"
                                    :key="threeItem.id"
                                    :index="threeItem.resourcePath"
                                >
                                    {{ threeItem.nodeName }}
                                </el-menu-item>
                            </el-submenu>

                            <el-menu-item :index="subItem.resourcePath" :key="subItem.id" v-else>{{ subItem.nodeName }}</el-menu-item>
                        </template>

                    </el-submenu>
                    
                    <el-menu-item :index="item.resourcePath" :key="item.resourcePath" v-else>
                        <i :class="item.resourceIcon"></i>
                        <span slot="title">{{ item.nodeName }}</span>
                    </el-menu-item>

                </template> -->
                <leftMenu :menus="menus" />
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
import leftMenu from "./Left"
import { mapState } from "vuex"
import { menu } from "@/menu"

export default {
    components: {
        leftMenu
    },

    data() {
        return {
            menus: menu
        }
    },
    
    computed: {
        currentRoute() {
            return this.$route.path.replace("/", "")
        },
        ...mapState(["isCollapse"]),
    },
    methods: {
        select(index, indexPath) {
            console.log(index, indexPath)
        }
    },

    mounted() {
        //暂时这样处理
        this.$store.commit("MENU_LIST", [])
    }
}
</script>

<style lang="scss" scoped>
.aside {
    transition: width 0.28s;
    height: 100%;
    position: fixed;
    font-size: 0px;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    background-color: #313d49;

    .el-menu-vertical-admin:not(.el-menu--collapse) {
        width: 200px;
        min-height: 100vh;
        text-align: left;
    }

    .el-menu--collapse {
        height: 100%;
    }
}
</style>
