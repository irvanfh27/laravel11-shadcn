<script setup lang="ts">
import { cn } from '@/lib/utils'
import NavLink from "@/Components/NavLink.vue";
</script>

<template>
    <nav
        :class="cn('flex items-center space-x-4 lg:space-x-6', $attrs.class ?? '')"
    >
        <NavLink
            :href="route('dashboard')"
            :active="route().current('dashboard')"
            class="text-sm font-medium transition-colors hover:text-primary"
        >
            Dashboard
        </NavLink>
        <NavLink
            :href="route('dashboard')"
            :active="route().current('dashboard')"
            class="text-sm font-medium transition-colors hover:text-primary"
        >
            Customers
        </NavLink>
        <NavLink
            :href="route('dashboard')"
            :active="route().current('dashboard')"
            class="text-sm font-medium transition-colors hover:text-primary"
        >
            Products
        </NavLink>
        <NavLink
            :href="route('dashboard')"
            :active="route().current('dashboard')"
            class="text-sm font-medium transition-colors hover:text-primary"
        >
            Settings
        </NavLink>
w    </nav>
</template>
