<template>
    <div class="Test">
        <router-link to="/">跳转到Home</router-link>
        <div @click="handleTestHttp">测试HTTP请求</div>
        <div @click="handleTestVant">测试Vant定制样式</div>
        <test-vant v-if="testVant" />
        <div @click="handleTestToast">测试Toast</div>
        <div @click="handleTestStore">测试Store</div>
        <test-store v-if="testStore" />
        <div @click="handleTestJsBridge">测试jsBridge</div>
        <test-bridge v-if="testJsBridge" />
    </div>
</template>

<script>
import TestVant from './children/TestVant'
import TestStore from './children/TestStore'
import TestBridge from './children/TestBridge'
export default {
    name: 'Test',
    components: {
        TestVant,
        TestStore,
        TestBridge
    },
    data () {
        return {
            testVant: false,
            testStore: false,
            testJsBridge: false
        }
    },
    methods: {
        handleTestHttp () {
            this.$apis.getUserDetail({
                uid: 11114
            }).then(({ code, data, message }) => {
                if (code === '2000') {
                    this.$Toast('成功')
                }
            })
        },
        handleTestVant () {
            this.testVant = true
        },
        handleTestToast () {
            this.$Toast('提示内容')
        },
        handleTestStore () {
            this.testStore = true
        },
        handleTestJsBridge () {
            this.testJsBridge = true
        }
    }
}
</script>
