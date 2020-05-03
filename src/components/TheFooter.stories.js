import TheFooter from "@/components/TheFooter.vue";

export default {
    component: TheFooter,
    title: "TheFooter"
};

export const Light = () => ({
    components: { TheFooter },
    template: '<TheFooter/>'
});

export const Dark = () => ({
    components: { TheFooter },
    template: '<TheFooter darkmode />'
});