<template>

   <div></div>

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