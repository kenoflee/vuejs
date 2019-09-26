<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <app-quote >
                   <h1>The quote</h1>
                   <div>This is the quote</div>
               </app-quote>
            </div>
        </div>
    </div>
</template>

<script>

    import Quote from './components/Quote.vue';

    export default {
        components: {
            appQuote: Quote,
        }
    }
</script>

<style>
</style>
