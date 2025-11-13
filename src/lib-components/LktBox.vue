<script setup lang="ts">
import {computed, useSlots} from 'vue';
import {Box, BoxConfig, extractI18nValue, getDefaultValues} from "lkt-vue-kernel";

const props = withDefaults(defineProps<BoxConfig>(), getDefaultValues(Box));

const slots = useSlots();

const classes = computed(() => {
        let r = [];
        if (props.class) r.push(props.class);
        return r.join(' ');
    }),

    computedTitle = computed(() => {
        return extractI18nValue(props.title);
    }),
    displayLktHeader = computed(() => {
        return typeof props.header === 'object'
            && Object.keys(props.header).length > 0;
    });
</script>

<template>
    <section class="lkt-box" v-bind:class="classes" :style="style">
        <lkt-header v-if="displayLktHeader" v-bind="header"/>
        <header class="lkt-box-header" v-else-if="computedTitle.length > 0 || slots.header">
            <div class="lkt-box-title">
                <template v-if="typeof icon === 'object' && !iconAtEnd">
                    <lkt-icon v-bind="icon"/>
                </template>
                <i v-else-if="icon && !iconAtEnd" :class="icon"/>
                <template v-if="slots.header">
                    <slot name="header"/>
                </template>
                <template v-else>
                    {{ computedTitle }}
                </template>
                <template v-if="typeof icon === 'object' && iconAtEnd">
                    <lkt-icon v-bind="icon"/>
                </template>
                <i v-else-if="icon && iconAtEnd" :class="icon"/>
            </div>
        </header>
        <div class="lkt-box-content" :class="contentClass" v-if="slots.default">
            <slot name="default"/>
        </div>

        <template v-if="slots['web-element-actions']">
            <slot name="web-element-actions"/>
        </template>
    </section>
</template>