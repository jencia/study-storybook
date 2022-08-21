<template>
  <button type="button" :class="classes" @click="onClick">{{ label || 'Button' }}</button>
</template>

<script setup lang="ts">
import './button.css';
import { computed } from 'vue';

const props = defineProps<{
  label: string;
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
}>();
const emit = defineEmits<{
  (name: 'onClick', event?: MouseEvent): void;
}>()

const classes = computed(() => ({
    'storybook-button': true,
    'storybook-button--primary': props.primary,
    'storybook-button--secondary': !props.primary,
    [`storybook-button--${props.size || 'medium'}`]: true,
}));

const onClick = () => emit('onClick');
</script>
