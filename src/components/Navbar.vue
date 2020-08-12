<template>
    <nav>
        <v-app-bar flat class="indigo">
            <v-app-bar-nav-icon @click="drawer = !drawer" class="white--text">
            </v-app-bar-nav-icon>
            <v-toolbar-title class="white--text">
                <span class="font-weight-light">Todo</span>
                <span>App</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <div >
                <router-link  to="/"> <span class="links"> Home      | </span> </router-link>
                <router-link to="/about"> <span class="links"> About </span> </router-link>
            </div>
             <v-spacer></v-spacer>
            <v-btn flat color="grey">
                <span>Sign Out</span>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" class="white" absolute temporary>
            <v-list>
                <v-list-item-group>
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item>
                 </v-list-item-group>
            </v-list>
           
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            drawer: false
        };
    }
};
</script>

<style>

.links{
    color: white;
    font-size: 2rem;
    text-decoration-line: none;
}

</style>
