<template>

    <v-navigation-drawer v-bind:value="value" floating fixed temporary>
        <v-card>
        <v-list dense rounded>
            <v-list-item v-for="item in items" :key="item.title" link>
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        </v-card>
    </v-navigation-drawer>

</template>


<script>
    export default {
        props: {
            value: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                drawer: true,
                items: [{
                        title: 'Home',
                        icon: 'md-login'
                    },
                    {
                        title: 'About',
                        icon: 'md-login'
                    },
                ],
            }
        },
    }
</script>