<template>
  <div id="square" @click="onClick(current)">
    
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
        onClick(current) {
            //emit event, send square to Game
            this.$emit("click-square", current);
        },
        checkAdjToPrev() {
            
        },
        turnGreen() {

        },
    },
}
</script>