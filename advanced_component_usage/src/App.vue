<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">

                <button @click="selectedComponent = 'appQuote'" >Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>

                <hr>
                <p>{{ selectedComponent }}</p>

                <component :is="selectedComponent">
                    <p>Default content</p>
                </component>

                <!-- <app-quote >
                    <h1 slot="title">{{quoteTitle}}</h1>


                    <div slot="content">This is the quote</div>

                    <p> This paragraph is for the default slot</p>
                </app-quote> -->
            </div>
        </div>
    </div>
</template>

<script>

    import Quote from './components/Quote.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';

    export default {
        data() {
            return {
                quoteTitle: 'The Quote',
                selectedComponent: 'appQuote' //match the appQuote selector
            }
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New,
        }
    }
</script>

<style>
</style>
