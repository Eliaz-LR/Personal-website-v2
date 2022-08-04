<template>
    <h2>
        Hi, I'm a {{ age }} years-old developer who is curently studying at 
        <a href='https://www.iut-clermont.fr/formations/dut-informatique/'>UCA</a>.
        <br/>
        Check out my <a href="https://github.com/Eliaz-LR">Github</a> and my <a href='https://www.linkedin.com/in/eliaz-le-riche'>LinkedIn</a>.
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