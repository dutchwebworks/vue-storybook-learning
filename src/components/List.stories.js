import { withKnobs, object } from '@storybook/addon-knobs';
import List from "@/components/List.vue";

const listData = [
    {
        title: "Peanutbutter",
        checked: true
    },
    {
        title: "Trident",
        checked: false
    },
    {
        title: "Milk",
        checked: false
    }
];

export default {
    component: List,
    title: "List",
    decorators: [withKnobs]
};

export const Default = () => ({
    components: { List },
    template: '<List :list="list" />',
    props: {
        list: {
            default: object('list', listData),
        }
    }
});