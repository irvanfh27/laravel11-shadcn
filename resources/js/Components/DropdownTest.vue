<script setup>
import { cn } from '@/lib/utils.js'
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
</template>

<style scoped>

</style>
