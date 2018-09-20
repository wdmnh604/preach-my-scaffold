<style lang="less">
    .nav {
        height: 2rem;
        border-bottom: 1px solid #ddd;
        display: flex;
        flex-direction: row;
        .title {
            width: 200px;
        }
        .body {
            flex: 1;
        }
    }
</style>
<template>
    <div class="nav">
        <div class="title">
            <slot name="title">默认标题</slot>
        </div>
        <div class="body"></div>
    </div>
</template>
<script>
    export default {}
</script>
