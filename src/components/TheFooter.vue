<template>
    <footer 
        class="footer"
        :class="{ 'footer--dark' : darkmode }">
        &copy; Dutchwebworks May 2020
    </footer>
</template>

<script>
    export default {
        props: {
            darkmode: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss">
// ---------------------------------------------
// Block
// ---------------------------------------------

.footer {
    padding: 20px;
    color: #444;
    font-family: sans-serif;
    background-color: #ccc;
}

// ---------------------------------------------
// Element
// ---------------------------------------------



// ---------------------------------------------
// Modifier
// ---------------------------------------------

.footer--dark {
    color: #fff;
    background-color: #444;
}

</style>