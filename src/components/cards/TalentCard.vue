<template>
    <v-card class="mx-auto" min-width="250" max-width="300">
        <div class="p-2">
            <v-img height="100px" max-width="100" :src="image" cover></v-img>
        </div>

        <v-card-title>
            {{ name }}
        </v-card-title>

        <v-card-subtitle>
            {{ profession }}
        </v-card-subtitle>

        <v-card-actions>
            <v-btn @click="show = !show" color="#2F9E40" text="Ver mais"></v-btn>
            <v-spacer></v-spacer>
            <v-btn :icon="show ? 'mdi-chevron-up text-maingreen' : 'mdi-chevron-down text-maingreen'" @click="show = !show"></v-btn>
        </v-card-actions>

        <v-expand-transition>
            <div v-show="show">
                <v-card-text>
                    {{ details }}
                </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>

<script>
    import router from "@/router/index.js"

    export default {
        name: 'TalentCard',
        props: {
            image: String,
            name: String,
            profession: String,
            details: String,
            id: Number
        },
        data() {
            return {
                activePopover: false,
                isAdmin: this.$store.getters.isAdmin,
                show: false
            }
        },
        methods: {
            showHidPopover() {
                if (this.isAdmin) {
                    let popover = document.getElementById(`popover-${this.id}`)
                    this.activePopover ? popover.style.display = 'none' : popover.style.display = 'inline'
                    this.activePopover = !this.activePopover
                }
            },
            editTalent() {
                router.push('/editar/card-talento').then(() => {
                    var element = document.getElementById("navbar");
                    window.location.reload();
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                });
            }
        },
    }
</script>
<style lang="">

</style>