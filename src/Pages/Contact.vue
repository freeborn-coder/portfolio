<template>
    <Header />
    <main class="min-h-[70vh] mt-5 mx-2">
    
        <div class="sm:w-2/3 md:w-2/3 lg:w-2/5 mx-auto">
           <h3 class="font-semibold text-xl sm:text-2xl mb-3">Do you have any gig or project that matches my skill set? Feel free to hit me up..</h3> <br>

            <form @submit.prevent="sendEmail">
                <input required type="text" name="fullname" v-model="fullname" placeholder="Your fullame" class="rounded-md w-full px-3 py-2 bg-[#e1e1e1] placeholder-gray-500 text-gray-800 mb-6">
                <input required type="email" name="email" v-model="email" placeholder="Your email" class="rounded-md w-full px-3 py-2 bg-[#e1e1e1] placeholder-gray-500 text-gray-800 mb-6">
                <input required type="text" name="subject" v-model="subject" placeholder="Subject" class="rounded-md w-full px-3 py-2 bg-[#e1e1e1] placeholder-gray-500 text-gray-800 mb-6">
                <textarea required placeholder="Message" v-model="message" name="message" class="rounded-md w-full px-3 py-2 bg-[#e1e1e1] placeholder-gray-500 text-gray-800" rows="5"></textarea>
                <br><br>
                <br>
                <button type="submit" class="w-full rounded bg-[#FE332E] text-white font-semibold py-2">SEND</button>
            </form>
        </div>
        <br>
    </main>
    <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'

export default {
    name:'Contact',
    components:{Header,Footer},
    data(){
        return {
            fullname:'',
            subject:'',
            message:'',
            email:''
        }
    },
    methods:{
        async sendEmail(){

            axios.defaults.headers.common['Authorization'] = 'Bearer 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';
            axios.defaults.headers.common['Content-Type'] = 'application/json';

            const data = {
                personalizations: [
                    {
                        to: [{"email": "freeborniwarri@gmail.com"}],
                        dynamic_template_data:{
                            sender:`${this.fullname} (${this.email})`,
                            message:`${this.message}`
                        }
                    }
                ],
                from: {"email": `${this.email}`},
                subject: `${this.subject}`,
                template_id:'d-af438611510849048b3467fe2cab124c'
            }

            let res = await axios.post('http://api.sendgrid.com/v3/mail/send/',data);
            console.log('response: ',res);
        }
    }
}

</script>

<style scoped>

</style>
