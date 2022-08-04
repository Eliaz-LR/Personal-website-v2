<template>
    <h2>
        Hi, I'm a {{ age }} years-old developer who is curently studying at 
        <a href='https://www.iut-clermont.fr/formations/dut-informatique/'>UCA</a>.
    </h2>
</template>

<script>
export default {
    data() {
        return {
            age: {}
        }
    },
    created() {
        this.interval = setInterval(() => {
            this.age = (this.$dayjs().diff(this.$dayjs('2000-12-03'), 'year',true)).toFixed(9);
        }, 50)
    }
}
</script>