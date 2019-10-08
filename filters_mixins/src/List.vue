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
    export default {
        data() {
            return {
                fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
                filterText: '',
            }
        },
        computed: {
            /*
            often, the computed property are better solutions than filters because 
            computed property can detect the changes in the filter and knows when to recalculate
            */
            filteredFruits() {
                return this.fruits.filter((element) => {
                    return element.match(this.filterText);
                });
            },
        },
    }
</script>

<style>

</style>
