<template>
  <div id="square">
    
  </div>
</template>

<script>

export default {
    props: {
        previous: {
            type: Object,
            required: false,
        },
        current: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            
        }
    },
    methods: {
        onClick() {
            //emit event, send square to Game
        },
        checkAdjToPrev() {

        },
        turnGreen() {

        },
    },
}
</script>