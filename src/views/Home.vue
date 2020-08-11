<template>
    <div class="home">
        <!-- text, font classes on vuetify -->
        <Buttons></Buttons>
        
    </div>
</template>

<script>
// @ is an alias to /src
import Buttons from '@/components/Buttons';

export default {
    name: 'Home',
    components: {
        Buttons,
    },
};
</script>
