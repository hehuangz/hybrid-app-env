<template>
  <div class="test">
    <div @click="handleClick">测试HTTP请求</div>
  </div>
</template>

<script>
export default {
    name: 'test',
    methods: {
        handleClick () {
            this.$apis.getUserDetail({
                uis: 11114
            }).then(res => {
                console.log(res)
            })
        }
    }
}
</script>
