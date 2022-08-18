<template>
    <h2>
        👋<br/>
        Hi, I'm Eliaz, a {{ age }} years-old developer who is curently studying at 
        <a href='https://www.iut-clermont.fr/formations/dut-informatique/'>UCA</a>.
        <br/>
        I'm interested in a lot of subjects ranging from economics to technology in general.<br/>
        Check out my <a href="https://github.com/Eliaz-LR">Github</a>.
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

<style scoped>
a{
    @apply underline decoration-slice;
}
</style>