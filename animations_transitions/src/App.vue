<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <select v-model="alertAnimation" name="" id="" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <br>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br><br>
                <!-- 
                    You can only animate one div per transition
                -->
                <transition :name="alertAnimation">
                    <div class="alert alert-info" v-if="show">This is some Info</div>
                </transition>

                <!-- type: animation or transition
                    responds to the animation finishing
                -->
                <transition name="slide" type="animation">
                    <div class="alert alert-info" v-if="show">This is some Info</div>
                </transition>

                <!-- when show is set to true and 'appear' attribute is added, transition is triggered onload   -->
                <transition
                    appear
                    enter-active-class="animated bounce"
                    leave-active-class="animated shake"
                    >
                    <div class="alert alert-info" v-if="show">This is some Info</div>
                </transition>

                <!-- 
                    mode="out-in" allows the old value fades out before the new value fades in
                    other values: "in-out"
                -->
                <transition :name="alertAnimation" mode="out-in">
                    <!-- 
                        key attribute is used for vuejs to differentiate the elements. key value must be unique
                    -->
                    <div class="alert alert-info" v-if="show" key="info">This is some Info</div>
                    <div class="alert alert-warning" v-else key="warning">This is some Warning</div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
                <br><br>

                <transition
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"
                    
                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
                    >
                    <div style="width: 100px; height: 100px; background-color:lightgreen;" v-if="load"></div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
                load: true,
                alertAnimation: 'fade',
            }
        },
        methods: {
            beforeEnter(el) {
                console.log('beforeEnter');
            },
            enter(el, done) {
                console.log('enter');
                //done(); is used to tell vuejs that the animation is finished
                done();
            },
            afterEnter() {
                //done() is required in enter for afterEnter to be triggered
                console.log('afterEnter ');
            },
            enterCancelled(el) {
                console.log('enterCancelled');
            },
            beforeLeave(el) {
                console.log('beforeleave');
            },
            leave(el, done) {
                console.log('leave');
                done();
            },
            afterLeave(el) {
                //done() is required in leave for afterLeave to be triggered
                console.log('afterleave');
            },
            leaveCancelled(el) {
                console.log('leaveCancelled');
            },
        }
    }
</script>

<style>
    /* name="fade" reflects here */
    .fade-enter {
        opacity: 0; 
    }

    .fade-enter-active {
        transition: opacity 1s;
    }

    .fade-leave {
        /* opacity of 1 is by default */
        /* opacity: 1 */
    }

    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter {
        opacity: 0;
        /*
            slide-in refers to the keyframes 'slide-in'
            ease-out: start fast end slow
            forwards: animation ends at finishing position
         */
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }

    .slide-leave {

    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);
        }
    }
</style>
