<template>
    <header 
        class="header"
        :class="{ 'header--dark' : darkmode }">
        Storybook website
    </header>
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

.header {
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

.header--dark {
    color: #fff;
    background-color: #444;
}

</style>