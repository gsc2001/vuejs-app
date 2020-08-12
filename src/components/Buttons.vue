<template>
    <!-- <v-app> -->
    <div>
        <h1>Buttons:</h1>
        <p class="red white--text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
            voluptas accusamus dolorum eveniet provident magni quae modi!
            Excepturi veritatis atque fugiat, a sunt possimus necessitatibus
            veniam, deserunt vero nemo praesentium.
        </p>
        <v-btn depressed color="blue">
            <v-icon left>mdi-email</v-icon>
            <span> Email Me!</span>
        </v-btn>
        <v-btn text depressed color="blue">
            <v-icon>mdi-twitter</v-icon>
        </v-btn>

        <v-btn fab color="pink">
            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn color="green" class="hidden-sm-and-down">
            visible > sm
        </v-btn>
    </div>
    <!-- </v-app> -->
</template>

<script>
export default {
    name: 'Buttons'
};
</script>
