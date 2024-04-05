<script setup lang="ts">
import {computed} from 'vue';

const props = withDefaults(defineProps<{
    palette: string
    style: string
    class: string
}>(), {
    palette: '',
    style: '',
    class: '',
});

const classes = computed(() => {
    let r = ['lkt-box'];

    if (props.palette) r.push(`lkt-box--${props.palette}`, `palette-${props.palette}`);
    if (props.class) r.push(props.class);
    return r.join(' ');
});
</script>

<template>
    <section v-bind:class="classes" :style="style">
        <slot name="default"></slot>
    </section>
</template>