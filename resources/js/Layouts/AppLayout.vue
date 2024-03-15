<script setup>
import { ref } from 'vue';
import { Head, Link, router } from '@inertiajs/vue3';
import ApplicationMark from '@/Components/ApplicationMark.vue';
import Banner from '@/Components/Banner.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import MainNav from '@/Components/MainNav.vue';
import UserNav from '@/Components/UserNav.vue';
import ToggleDarkMode from "@/Components/ToggleDarkMode.vue";

defineProps({
    title: String,
});

const showingNavigationDropdown = ref(false);

const switchToTeam = (team) => {
    router.put(route('current-team.update'), {
        team_id: team.id,
    }, {
        preserveState: false,
    });
};

const logout = () => {
    router.post(route('logout'));
};
</script>

<template>
    <div>
        <Head :title="title" />

        <Banner />
        <div class="hidden flex-col md:flex">
            <div class="border-b">
                <div class="flex h-16 items-center px-4">
<!--                    <TeamSwitcher />-->
                    <MainNav class="mx-6" />
                    <div class="ml-auto flex items-center space-x-4">
                        <UserNav />
                        <ToggleDarkMode/>
                    </div>
                </div>
            </div>
            <div class="flex-1 space-y-4 p-8 pt-6">
                <header v-if="$slots.header" class="flex items-center justify-between space-y-2">
                        <slot name="header" />
                </header>
                <main>
                    <slot />
                </main>
            </div>
        </div>
    </div>
</template>
