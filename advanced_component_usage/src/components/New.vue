<template>
    <div>
        <h3>New Quote</h3>
        <button @click="counter++">Increase</button>
        <p>{{counter}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                counter: 0,
            }
        },
        destroyed() {
            //The component is destroyed and recreated dynamically
            console.log('Destroyed!');
        }
    }
</script>

<style>

</style>
