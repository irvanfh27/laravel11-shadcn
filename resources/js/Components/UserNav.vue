<script setup lang="ts">
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/Components/ui/avatar'
import { Button } from '@/Components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu'
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import NavLink from "@/Components/NavLink.vue";
import { Head, Link, router } from '@inertiajs/vue3';
import DropdownLink from "@/Components/DropdownLink.vue";



const logout = () => {
    router.post(route('logout'));
};
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="ghost" class="relative h-8 w-8 rounded-full">
                <Avatar class="h-8 w-8">
                    <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                    <AvatarFallback>SC</AvatarFallback>
                </Avatar>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-56" align="end">
            <DropdownMenuLabel class="font-normal flex">
                <div class="flex flex-col space-y-1">
                    <p class="text-sm font-medium leading-none">
                        {{ $page.props.auth.user.name }}
                    </p>
                    <p class="text-xs leading-none text-muted-foreground">
                        {{ $page.props.auth.user.email }}
                    </p>
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
                <DropdownMenuItem>
                    <DropdownLink :href="route('profile.show')" :active="route().current('profile.show')" class="w-full">
                        Profile
                    </DropdownLink>
                </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <form @submit.prevent="logout" class="w-full">
                    <DropdownLink as="button">
                        Log Out
                    </DropdownLink>
                </form>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
