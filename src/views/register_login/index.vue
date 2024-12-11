<template>
    <!-- 登录注册页面 -->
    <div class="login-register-container">
        <!-- lottie动画 -->
        <DotLottieVue class="lottie" autoplay loop :data="JSON.stringify(IndexJson)" />

        <!-- 注册容器 -->
        <div class="register-container">

        </div>
        <!-- 登录容器 -->
        <div class="login-container">
            <h2 class="login-title">LOGIN</h2>
            <el-form ref="ruleFormRef" :model="loginForm" :rules="rules" label-width="auto" class="demo-ruleForm">
                <el-form-item prop="userName">
                    <el-input v-model="loginForm.userName" type="text" autocomplete="off" size="large"
                        :prefix-icon="User" placeholder="用户名" />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" type="password" autocomplete="off" size="large"
                        placeholder="密码" show-password :prefix-icon="Lock" />
                </el-form-item>
                <el-form-item prop="validatorKey">
                    <el-input-number v-model.number="loginForm.validatorKey" size="large" placeholder="验证码"
                        :controls="false">
                        <template #prefix>
                            <el-icon>
                                <svg t="1733814264848" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="4238" width="1em" height="1em">

                                    <path
                                        d="M943.1 172c-2.4-0.2-245.1-25.3-413.8-147.8-5.1-3.7-11-5.6-17.3-5.6-6.2 0-12.2 1.9-17.3 5.6C326.9 146 83.3 171.8 80.9 172c-15.2 1.4-26.6 14.1-26.6 29.3 0 6.7 0.6 165.8 54.8 344.4 32.1 105.8 76.4 196.4 131.9 269.2 70.3 92.3 158.5 156 262 189.2 2.9 0.9 5.9 1.4 9 1.4s6.1-0.5 8.9-1.4c103.6-33.2 191.7-96.8 262-189.2 55.4-72.7 99.8-163.2 131.9-269.2 54.1-178.6 54.8-337.7 54.8-344.4C969.7 186.1 958.3 173.5 943.1 172zM910.1 227.2l-0.1 1.6c-2.9 58.1-13.4 174.4-51.4 299.9-66.7 220.1-183.1 360.1-346 416.1L512 945l-0.6-0.2C349 888.9 232.7 749.4 165.8 530.1c-39.8-130.5-49.4-254.2-51.8-301.4l-0.1-1.6 1.5-0.2c70.6-10.3 250.5-44.8 395.5-142.4l0.9-0.7 1 0.7C658 182.1 837.9 216.6 908.5 227L910.1 227.2z"
                                        p-id="4239"></path>
                                    <path
                                        d="M641.8 351 467 580.3l-89-76.1c-5.3-4.5-12.1-7-19.1-7-8.6 0-16.8 3.7-22.4 10.3-10.5 12.3-9.1 31 3.3 41.5l112.7 96.4c5.2 4.4 12.4 7 19.6 7 0.9 0 1.8 0 2.7-0.1 8-0.8 15.4-5 20.3-11.4l193.7-254c4.8-6.3 6.8-14 5.7-21.8-1-7.8-5.1-14.7-11.3-19.5C670.1 335.6 651.6 338.1 641.8 351z"
                                        p-id="4240"></path>
                                </svg>
                            </el-icon>
                        </template>
                    </el-input-number>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="" style="width: 300px;height: 38px;">
                        登录
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'
import { DotLottieVue } from '@lottiefiles/dotlottie-vue' //引入lottie动画
import IndexJson from '@/assets/lottie/index.json' //lottie动画json文件

defineOptions({
    name: 'App',
})
const ruleFormRef = ref<FormInstance>() // 表单实例

const loginForm = reactive({ //表单数据
    userName: '', //用户名
    password: '', //密码
    validatorKey: '', //验证码
})

const rules = {
    userName: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
    ],
    validatorKey: [
        { required: true, message: '请输入验证码', trigger: 'blur' },
        { min: 4, max: 4, message: '长度为 4', trigger: 'blur' }
    ]
}

</script>

<style scoped lang="scss">
.login-register-container {
    width: 100%;
    height: 100%;
    //background: url('../../assets/bg.jpg') no-repeat center / cover;
    position: relative;

    .lottie {
        width: 60%;
        height: 80%;
        margin: 0 auto;
    }

    .login-container {
        width: fit-content;
        height: fit-content;
        position: absolute;
        bottom: 21%;
        right: 5%;
        background-color: #ffffff;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.3) inset;
        border-radius: 10px;
        padding: 20px;

        .login-title {
            font-size: 20px;
            width: 10ch;
            animation: typing 2s steps(10) infinite alternate-reverse;
            text-wrap: nowrap;
            overflow: hidden;
        }

        .demo-ruleForm {
            width: 300px;
            height: 310px;
            padding-top: 20px;
        }
    }
}

@keyframes typing {

    //打字效果的动画
    from {
        width: 0ch;
    }
}
</style>
