<template>
    <ul class="list">
        <li 
            v-for="(item, index) in items" 
            :key="index"
            :class="{ 'is-checked' : item.checked }"
            v-on:click="item.checked = !item.checked"
            class="list__item">
            <input type="checkbox" v-bind:checked="item.checked">
            <strike v-if="item.checked">{{ item.title }}</strike>
            <template v-else>{{ item.title }}</template>
        </li>
    </ul>
</template>

<script>
    export default {
        props: {
            list: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                items: this.list
            }
        }
    }
</script>

<style lang="scss">
.list {
    margin: 0;
    padding: 0;
}

.list__item {
    cursor: pointer;
    list-style-type: none;
    color: map-get($colors, 08);
    font-family: sans-serif;
    font-size: 18px;
}

.list__item.is-checked {
    color: map-get($colors, 07);
}
</style>