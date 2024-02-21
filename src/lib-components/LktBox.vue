<script lang="ts">
export default {
    name: "LktBox",
    inheritAttrs: false,
    customOptions: {}
}
</script>

<script setup lang="ts">
import {computed} from 'vue';

const props = defineProps({
    palette: String
})

const classes = computed(() => {
    let r = ['lkt-box'];

    if (props.palette) {
        r.push(`lkt-box--${props.palette}`, `palette-${props.palette}`);
    }
    return r.join(' ');
})
</script>

<template>
    <section v-bind:class="classes">
        <slot name="default"></slot>
    </section>
</template>