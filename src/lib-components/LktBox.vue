<script setup lang="ts">
import {computed, useSlots} from 'vue';
import {__} from "lkt-i18n";

const props = withDefaults(defineProps<{
    title: string
    icon: string
    iconAtEnd: boolean
    style: string
    class: string
}>(), {
    title: '',
    icon: '',
    iconAtEnd: false,
    style: '',
    class: '',
});

const classes = computed(() => {
        let r = [];
        if (props.class) r.push(props.class);
        return r.join(' ');
    }),

    computedTitle = computed(() => {
        if (props.title.startsWith('__:')) {
            return __(props.title.substring(3));
        }
        return props.title;
    });

const slots = useSlots();
</script>

<template>
    <section class="lkt-box" v-bind:class="classes" :style="style">
        <header class="lkt-box-header" v-if="computedTitle.length > 0">
            <div class="lkt-box-title">
                <i v-if="icon && !iconAtEnd" :class="icon"/>
                {{ computedTitle }}
                <i v-if="icon && iconAtEnd" :class="icon"/>
            </div>
        </header>
        <div class="lkt-box-content" v-if="slots.default">
            <slot name="default"/>
        </div>
    </section>
</template>