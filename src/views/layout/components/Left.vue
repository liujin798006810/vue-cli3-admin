<template>
    <div>
        <template v-for="item in menus">

            <el-submenu :index="`${item.resourcePath}` || `/menu_${item.id}`" v-if="item.menuNodeList && item.menuNodeList.length > 0">
                <template slot="title">
                    <i :class="item.resourceIcon"></i>
                    <span slot="title">{{item.nodeName}}</span>
                </template>

                <left-menu :menus="item.menuNodeList" />
            </el-submenu>
            
            <el-menu-item :index="`${item.resourcePath}` || `/menu_${item.id}`" v-else>
                <i :class="item.resourceIcon"></i>
                <span slot="title">{{item.nodeName}}</span>
            </el-menu-item>
        </template>
    </div>
</template>

<script>
export default {
    name: "leftMenu",

    props: {
        menus: {
            type: Array,
            default:  []
        }
    }
}
</script>