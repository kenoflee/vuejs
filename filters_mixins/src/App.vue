<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{text | toUppercase | to-lowercase}}</p>
                <input type="text" v-model="filterText">
                <ul>
                    <li :key="fruit" v-for="fruit in filteredFruits">{{fruit}}</li>
                </ul>
                <hr>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './List.vue';
    import { fruitMixin } from './fruitMixin';

    export default {
        mixins: [fruitMixin],
        data() {
            return {
                //Vuejs merges in local data properties with mixins
                text: 'Hello there!',
                //remove the fruits and filterText property and replace it with MIXIN
            }
        },
        filters: {
            toUppercase(string) {
                return string.toUpperCase();
            },
        },
        computed: {
            /*
            often, the computed property are better solutions than filters because 
            computed property can detect the changes in the filter and knows when to recalculate
            */
            
            /**
             * remove filteredFruits because mixin is used
             */
        },
        components: {
            appList: List,
        },
    }
</script>

<style>

</style>
