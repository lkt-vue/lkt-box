<script setup lang="ts">
import {computed, useSlots} from 'vue';
import {extractI18nValue} from "lkt-vue-kernel";

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

const slots = useSlots();

const classes = computed(() => {
        let r = [];
        if (props.class) r.push(props.class);
        return r.join(' ');
    }),

    computedTitle = computed(() => {
        return extractI18nValue(props.title);
    });
</script>

<template>
    <section class="lkt-box" v-bind:class="classes" :style="style">
        <header class="lkt-box-header" v-if="computedTitle.length > 0 || slots.header">
            <div class="lkt-box-title">
                <i v-if="icon && !iconAtEnd" :class="icon"/>
                <template v-if="slots.header">
                    <slot name="header"/>
                </template>
                <template v-else>
                    {{ computedTitle }}
                </template>
                <i v-if="icon && iconAtEnd" :class="icon"/>
            </div>
        </header>
        <div class="lkt-box-content" v-if="slots.default">
            <slot name="default"/>
        </div>
    </section>
</template>