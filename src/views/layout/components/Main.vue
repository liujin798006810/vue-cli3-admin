<template>
    <div class="container">
        <tags />
        <div class="contents">
            <transition name="fade-transform" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
import Tags from './Tags'

export default {
    components:{
        Tags
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    min-height: calc(100vh - 56px);
    position: relative;
    overflow: hidden;
    
    .contents {
        height: 100%;
    }
}
</style>