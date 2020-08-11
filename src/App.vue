<template>
    <v-app>
        <v-main>
            <Navbar></Navbar>
            <div id>
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link>
            </div>
            <router-view> </router-view>
        </v-main>
    </v-app>
</template>

<script>
import Navbar from './components/Navbar';

export default {
    name: 'App',
    components: {
        Navbar
    }
};
</script>
