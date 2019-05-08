<template>
    <div :class="classObject" @click="captureClick">
        {{ day.format('D') }}
        <ul class="event-list">
            <li v-for="event in events">{{ event.description }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: [ 'day' ],
        computed: {
            events() {
                let mockData = [
                    { description: 'Random event 1', date: this.$moment('2019-05-08', 'YYYY-MM-DD') },
                    { description: 'Random event 2', date: this.$moment('2019-05-07', 'YYYY-MM-DD') },
                    { description: 'Random event 3', date: this.$moment('2019-06-08', 'YYYY-MM-DD') }
                ];
                return mockData.filter(event => event.date.isSame(this.day, 'day'));
            },
            classObject() {
                let today = this.day.isSame(this.$moment(), 'day');
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