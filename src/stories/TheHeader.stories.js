import TheHeader from "@/components/TheHeader.vue";

export default {
    component: TheHeader,
    title: "TheHeader"
};

export const Light = () => ({
    components: { TheHeader },
    template: '<TheHeader/>'
});

export const Dark = () => ({
    components: { TheHeader },
    template: '<TheHeader mode="header--dark"/>'
});