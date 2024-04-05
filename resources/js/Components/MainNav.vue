<script setup lang="ts">
import { cn } from '@/lib/utils'
import NavLink from "@/Components/NavLink.vue";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu'

</script>

<template>
    <nav
        :class="cn('flex items-center space-x-4 lg:space-x-6', $attrs.class ?? '')"
    >

        <NavLink
            :href="route('dashboard')"
            :active="route().current('dashboard')"
            class="hover:text-primary"
        >
            Dashboard
        </NavLink>
        <DropdownMenu
        >
            <DropdownMenuTrigger
                class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Master
            </DropdownMenuTrigger>
            <DropdownMenuContent>
<!--                <DropdownMenuLabel>My Account</DropdownMenuLabel>-->
<!--                <DropdownMenuSeparator />-->
                <DropdownMenuItem>Pegawai</DropdownMenuItem>
                <DropdownMenuItem>Non Pegawai</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        <NavLink
            :href="route('dashboard')"
            :active="route().current('dashboards')"
            class="hover:text-primary"
        >
            Bupot
        </NavLink>
   </nav>
</template>
