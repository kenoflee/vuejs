<template>
    <div class="container">
        <div class="title">
            <slot name="title"></slot>
        </div>
        <hr>
        <div>
            <slot name="content"></slot>

            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['quote']
    }
</script>

<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: auto;
    }

    h1 {
        color: red;
    }

    .title {
        font-style: italic;
    }
</style>
