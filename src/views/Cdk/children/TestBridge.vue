<template>
    <div class="testBridge">
        <div @click="handleCall">前端->客户端(jsbridge: web_test)<span class="c-green">{{webRes}}</span></div>
        <div @click="handleRegister" class="m-t-20">客户端->前端(jsbridge: app_test)<span class="c-green">{{appRes}}</span></div>
    </div>
</template>

<script>
export default {
    name: 'testBridge',
    data () {
        return {
            webRes: '',
            appRes: ''
        }
    },
    mounted () {
        $jsBridge.register('app_test', res => {
            this.appRes = '拿到数据：' + res
        })
    },
    methods: {
        handleCall () {
            this.webRes = '已发送'
            $jsBridge.call('web_test', 'hello', res => {
                this.webRes = '成功'
            })
        },
        handleRegister () {
            this.appRes = '时刻监听着'
        }
    }
}
</script>

<style scoped lang="less">
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
.c-green {
    color: #42b983;
}
.m-t-20 {
    margin-top: 30px;
}
</style>
