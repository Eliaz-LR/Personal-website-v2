<template>
    <h3>
        👋<br />
        Hi, I'm Eliaz, a {{ age }} years-old developer who is curently studying at
        <a href='https://www.iut-clermont.fr/formations/dut-informatique/'>UCA</a>.
        <br />
        I'm interested in a lot of subjects ranging from economics to technology in general.<br />
        I'm open to offers if you're looking for a full-stack developer. 😄<br />
        <a href="https://github.com/Eliaz-LR">My Github</a>. <a href="mailto:me@eliaz-lr.dev">Email me here</a> !
    </h3>
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
            this.age = (this.$dayjs().diff(this.$dayjs('2000-12-03'), 'year', true)).toFixed(9);
        }, 50)
    }
}
</script>

<style scoped>
a {
    @apply underline decoration-purple-600;
}
</style>