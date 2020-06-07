<template>
<div>
     <Appbar />
    <v-container>

 <v-img class="google mx-auto mb-4 mt-4" src="@/assets/washing/offer.svg"></v-img>
                   
                <div class="mx-auto text-center">
        <v-chip class="ma-2 mx-auto" color="grey" label text-color="white">
            <v-icon left>mdi-label</v-icon>
            No offer Available
        </v-chip>
                </div>
    </v-container>
</div>
</template>



<script>
    import Appbar from '@/components/utils/Appbar.vue'
    export default {
        components: {
        Appbar

        },
        data() {
            return {
                Products: {},
                dialog: false
            }
        },
        methods: {

        },
        created() {}

    }
</script>


