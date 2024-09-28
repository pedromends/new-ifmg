<template lang="">
    <section>
        <AlertSuccessDelete/>
        <AlertSuccessLogin/>
        <AlertErrorLogin/>
        <AlertSuccessRegister/> 
        <AlertErrorRegister/>
        <AlertSuccessCompany/>
        <AlertSuccessResearcher/>
        <AlertSuccessTalent/>
        <ContactSent />
        <SignOutSuccess />
    </section>
</template>

<script>
import AlertSuccessLogin from '@/components/alert/AlertSuccessLogin';
import AlertErrorLogin from '@/components/alert/AlertErrorLogin';
import AlertSuccessRegister from '@/components/alert/AlertSuccessRegister';
import AlertErrorRegister from '@/components/alert/AlertErrorRegister';
import AlertSuccessCompany from "@/components/alert/AlertSuccessCompany.vue";
import AlertSuccessDelete from "@/components/alert/AlertSuccessDelete.vue";
import AlertSuccessResearcher from "@/components/alert/AlertSuccessResearcher.vue";
import AlertSuccessTalent from "@/components/alert/AlertSuccessTalent.vue";
import ContactSent from "@/components/alert/ContactSent";
import SignOutSuccess from "@/components/alert/SignOutSuccess";

export default {
    name: 'AllAlerts',
    components:{
        AlertSuccessDelete ,
        AlertSuccessLogin,
        AlertErrorLogin,
        AlertSuccessRegister ,
        AlertErrorRegister,
        AlertSuccessCompany,
        AlertSuccessResearcher,
        AlertSuccessTalent,
        ContactSent,
        SignOutSuccess
    }
}
</script>