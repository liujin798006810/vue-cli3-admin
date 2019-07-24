<template>
    <div class="home">
        <el-row :gutter="40">
            <el-col :lg="6" :sm="12">
                <div class="bg-white">
                    <el-row>
                        <el-col :span="12">
                            <div class="icons">
                                <i class="el-icon-jh-yonghu"></i>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <ul class="icons-right">
                                <li class="chain">用户</li>
                                <li>
                                    <countTo :startVal="user.startVal" :endVal="user.endVal" :duration="1000"></countTo>
                                </li>
                            </ul>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
            <el-col :lg="6" :sm="12">
                <div class="bg-white">
                    <el-row>
                        <el-col :span="12">
                            <div class="icons icons1">
                                <i class="el-icon-jh-xiaoxi"></i>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <ul class="icons-right">
                                <li class="chain">消息</li>
                                <li>
                                    <countTo :startVal="user.startVal" :endVal="user.endVal" :duration="1000"></countTo>
                                </li>
                            </ul>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
            <el-col :lg="6" :sm="12">
                <div class="bg-white">
                    <el-row>
                        <el-col :span="12">
                            <div class="icons icons2">
                                <i class="el-icon-jh-qushi"></i>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <ul class="icons-right">
                                <li class="chain">今日访问</li>
                                <li>
                                    <countTo :startVal="user.startVal" :endVal="user.endVal" :duration="1000"></countTo>
                                </li>
                            </ul>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
            <el-col :lg="6" :sm="12">
                <div class="bg-white">
                    <el-row>
                        <el-col :span="12">
                            <div class="icons icons3">
                                <i class="el-icon-jh-yanjing"></i>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <ul class="icons-right">
                                <li class="chain">总访问量</li>
                                <li>
                                    <countTo :startVal="user.startVal" :endVal="user.endVal" :duration="1000"></countTo>
                                </li>
                            </ul>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
        
    </div>
</template>

<script>
import countTo from "vue-count-to"
import echarts from "echarts"

export default {
    name: "home",

    components: { 
        countTo 
    },

    data() {
        return {
            user: {
                startVal: 0,
                endVal: 1095
            },
        }
    }
}
</script>

<style lang="scss" scoped>
.home {
    padding: 40px;
    background: $base-gray1;

    .bg-white {
        background: $base-white;
        box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
        border-color: rgba(0, 0, 0, 0.05);
        margin-bottom: 20px;
        cursor: pointer;

        .icons {
            text-align: left;
            width: 86px;
            height: 86px;
            margin: 10px;
            padding: 13px;
            transition: 0.3s ease-in-out;
            border-radius: 3px;

            i {
                font-size: 60px;
            }

            &:hover {
                background: $base-bule1;

                .el-icon-jh-yonghu {
                    color: $base-white;
                }
            }

            .el-icon-jh-yonghu {
                font-size: 60px;
                color: $base-bule1;
            }
        }

        .icons1 {
            &:hover {
                background: $base-ye;

                .el-icon-jh-xiaoxi {
                    color: $base-white;
                }
            }

            .el-icon-jh-xiaoxi {
                color: $base-ye;
            }
        }

        .icons2 {
            &:hover {
                background: $base-green;

                .el-icon-jh-qushi {
                    color: $base-white;
                }
            }

            .el-icon-jh-qushi {
                color: $base-green;
            }
        }
        .icons3 {
            &:hover {
                background: $base-pink;

                .el-icon-jh-yanjing {
                    color: $base-white;
                }
            }

            .el-icon-jh-yanjing {
                color: $base-pink;
            }
        }
        .icons-right {
            font-size: 24px;
            margin-top: 16px;
            margin-right: 16px;

            li {
                margin: 10px 0;
            }
        }

        .chain {
            color: rgba(0, 0, 0, 0.45);
            font-size: 18px;
        }

    }
}
</style>

