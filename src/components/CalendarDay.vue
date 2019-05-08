<template>
    <div :class="classObject" @click="captureClick">{{ day.format('D') }}</div>
</template>

<script>
    export default {
        props: [ 'day' ],
        computed: {
            classObject() {
                let today = this.day.isSame(this.$moment(), 'day')
                return {
                    day: true,
                    today,
                    past: this.day.isSameOrBefore(this.$moment(), 'day') && !today
                }
            }
        },
        methods: {
            captureClick(event) {
                //position form
                this.$store.commit('eventFormPos', { x: event.clientX, y: event.clientY });
                // set event form to active so it displays
                this.$store.commit('eventFormActive', true);

            }
        }
    }
</script>

<style scoped>

</style>