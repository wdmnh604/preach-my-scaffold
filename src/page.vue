<template>
    <div @click="test" :style="{'font-size':'30px','background-color':msg}">{{msg}}</div>
</template>
<script>
    var getRandomColor = function () {
        return '#' + (Math.random() * 0xffffff << 0).toString(16);
    }

    export default {
        data() {
            return {
                msg: 'abcdef'
            }
        },
        methods: {
            test() {
                this.msg = getRandomColor();
            }
        }
    }
</script>