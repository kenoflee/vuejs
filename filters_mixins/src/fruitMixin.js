export const fruitMixin = {
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
    created() {
        console.log('created');
    },
}