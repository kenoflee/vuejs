<template>
    <div class="container">
        <h1>Filters & Mixins</h1>

        <input type="text" v-model="filterText">
        <ul>
            <li :key="fruit" v-for="fruit in filteredFruits">{{fruit}}</li>
        </ul>
    </div>
</template>

<script>
    import { fruitMixin } from './fruitMixin';

    export default {
        mixins: [fruitMixin],
        //(component lifecycle hook will always have the last word over mixins)
        created() {
            console.log('Inside List Created Hook');
        },
    }
</script>

<style>

</style>
