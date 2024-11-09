<template lang="">
    <section v-if="isAdmin" class="hover:bg-govblue rounded-lg transition duration-200 m-2 py-2">
        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn class="flex items-center rounded-lg relative" v-bind="props">
                    <img :src="require('@/assets/icons/bell.svg')" class="w-7 mx-3" alt="" />
                    <img v-if="notiCount > 0" :src="require('@/assets/icons/dot.svg')"
                        class="w-4 absolute right-6 bottom-4" alt="" />
                </v-btn>
            </template>
            <v-list v-if="notifications.length > 0"
                class="flex flex-col gap-1 divide divide-maingreen rounded-xl max-w-132 max-h-96 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-fv-listl [&::-webkit-scrollbar-thumb]:bg-maingreen">
                <v-list-item v-for="(notification, i) in notifications" :key="i">
                    <NotificationCard :companyName="notification.externalCompany" :notificationId="notification.id"
                        :readed="notification.readed" />
                </v-list-item>
                <v-list-item
                    class="flex flex-col effect text-maingreen hover:text-white px-10 py-2 cursor-pointer transition duration-200 hover:bg-red-500">
                    <router-link to="/notifications">Ver todas as mensagens</router-link>
                </v-list-item>
            </v-list>
            <v-list v-else>
                <v-list-item
                    class="flex effect text-maingreen hover:text-white px-10 py-2 cursor-pointer transition duration-200 hover:bg-red-500">
                    <router-link to="/notifications">Sem mensagens novas.</router-link>
                </v-list-item>
            </v-list>
        </v-menu>
    </section>
</template>

<script>
    import router from '@/router/index.js'
    import NotificationCard from "@/components/cards/NotificationCard"
    import { listContacts } from "@/services/ContactService"
    import { mapActions, mapMutations } from "vuex";

    export default {
        name: 'NotificationDropdown',
        created() {
            if (this.isAdmin) {
                listContacts(this.contact).then((response) => {
                    this.notifications = response.data
                    this.notiCount = this.notifications.length
                })
            }
        },
        components: {
            NotificationCard
        },
        data() {
            return {
                isAdmin: this.$store.getters.isAdmin,
                user: this.$store.getters.getUser,
                notifications: [],
                notiCount: null
            }
        },
        methods: {
            ...mapMutations([
                "setAlert"
            ]),
            ...mapActions([
                "isAlertFired"
            ]),
            showSignOutSuccess() {
                let div = document.getElementById("success-logout-alert")
                div.style.display = "flex"
            },
            logOut() {
                // this.setUser(null);
                // this.setToken(null);

                // window.localStorage.setItem("refresh_token", null)
                // document.cookie = `refresh_token = ${null}`

                // this.$nextTick(() => {
                //     this.showSignOutSuccess()
                //     setInterval(() => {
                //         router.push("/").then(() => {
                //             window.location.reload()
                //         })
                //     }, 3000)
                // })
            }
        }
    }
</script>

<style scoped>
    .effect:hover img {
        fill: white;
    }

    .v-list {
        padding: 0;
        border: #2F9E40 solid 2px;
        border-radius: 4px;
        /* ou qualquer valor desejado */
    }

    .v-btn.v-btn--density-default {
        height: 97%;
        /* ou um valor específico desejado */
    }

    .v-btn--variant-elevated {
        box-shadow: none;
    }

    .v-btn--variant-elevated,
    .v-btn--variant-flat {
        background: none;
        color: none;
    }

    .v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line {
        padding-inline: 0px;
    }
</style>