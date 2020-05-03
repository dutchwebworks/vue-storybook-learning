<template>
    <header 
        class="header"
        :class="mode">
        Storybook website
    </header>
</template>

<script>
    export default {
        props: {
            mode: {
                type: String,
                default: ""
            }
        }
    }
</script>

<style lang="scss">
// ---------------------------------------------
// Block
// ---------------------------------------------

.header {
    padding: 20px 40px;
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