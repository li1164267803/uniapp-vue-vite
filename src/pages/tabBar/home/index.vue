<template>
    <div>
        shouye
        {{ state }}
        <u-button color="#3660ff" shape="circle" @click="btnFn">我的一个按钮</u-button>
    </div>
</template>
<script setup>
import { reactive } from 'vue'
const state = reactive({
    a: 222
})
console.log(234234234, this)
function btnFn() {
    console.log(333)
    state.a += 3
}
</script>

<script>
export default {
    mounted() {
        console.log(3453455, this, this.$isapp) // 0
    }
}
</script>
<style lang="scss" scoped></style>
