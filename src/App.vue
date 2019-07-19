<template>
    <v-app>
        <app-navigation></app-navigation>

        <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';

export default {
    name: 'App',
    components: {
        AppNavigation
    }
};
</script>

<style>
.home-hero {
    background: url('require(http://source.unsplash.com/0BhSKStVtdM)');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>
