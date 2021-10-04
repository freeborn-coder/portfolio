<template>
    <Header />
    <main class="min-h-[70vh] mt-5 mx-2">
    
        <div class="sm:w-2/3 md:w-2/3 lg:w-2/5 mx-auto">
           <h3 class="font-semibold text-xl sm:text-2xl mb-3">Do you have any gig or project that matches my skill set? Feel free to hit me up..</h3> <br>
            
            <div v-if="errorResponse" class="bg-red-200 text-red-600 p-3 rounded-xl shadow font-semibold mb-10 absolute top-10 right-10">
                {{ errorResponse }}
            </div>
            <div v-if="successResponse" class="bg-green-200 text-green-600 p-3 rounded-xl shadow font-semibold mb-10 absolute top-10 right-10">
                {{ successResponse }}
            </div>

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

export default {
    name:'Contact',
    components:{Header,Footer},
    data(){
        return {
            fullname:'',
            subject:'',
            message:'',
            email:'',
            errorResponse:'',
            successResponse:''
        }
    },
    watch:{
        errorResponse: function(newValue){
            if(newValue) setTimeout(()=> (this.errorResponse = ''),3000);
        },
        successResponse:function(newValue){
            if(newValue) setTimeout(() => (this.successResponse = ''),3000);
        }
    },
    methods:{
        async sendEmail(){

            try{
                let data = new FormData();
                data.append('email',this.email);
                data.append('fullname',this.fullname);
                data.append('message',this.message);
                data.append('subject',this.subject);

                let res = await fetch('https://ganani-mail-sender.herokuapp.com/index.php',{
                    method:'POST',
                    body:data
                });
                
                res = await res.json();
                this.successResponse = res.data.message;

            }catch(err){
                console.log(err);
                this.errorResponse = 'There was a problem. Try again';
            }
            
        }
    }
}

</script>

<style scoped>

</style>
