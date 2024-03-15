<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    href: String,
    active: Boolean,
});

const classes = computed(() => {
    return props.active
        ? 'text-sm font-medium text-muted-foreground transition-colors text-primary transition duration-150 ease-in-out'
        : 'text-sm font-medium text-muted-foreground transition-colors hover:text-primary transition duration-150 ease-in-out';
});
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
