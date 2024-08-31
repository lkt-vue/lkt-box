<script setup lang="ts">
import {computed} from 'vue';
import {__} from "lkt-i18n";

const props = withDefaults(defineProps<{
    palette: string
    title: string
    icon: string
    iconAtEnd: boolean
    style: string
    class: string
}>(), {
    palette: '',
    title: '',
    icon: '',
    iconAtEnd: false,
    style: '',
    class: '',
});

const classes = computed(() => {
        let r = ['lkt-box'];

        if (props.palette) r.push(`lkt-box--${props.palette}`, `palette-${props.palette}`);
        if (props.class) r.push(props.class);
        return r.join(' ');
    }),

    computedTitle = computed(() => {
        if (props.title.startsWith('__:')) {
            return __(props.title.substring(3));
        }
        return props.title;
    });
</script>

<template>
    <section v-bind:class="classes" :style="style">
        <header class="lkt-box-header" v-if="computedTitle.length > 0">
            <div class="lkt-box-title">
                <i v-if="icon && !iconAtEnd" :class="icon"/>
                {{ computedTitle }}
                <i v-if="icon && iconAtEnd" :class="icon"/>
            </div>
        </header>
        <slot name="default"/>
    </section>
</template>