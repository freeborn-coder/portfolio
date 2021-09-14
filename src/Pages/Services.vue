<template>
    <Header />
    <main class="min-h-[60vh] mt-5 mx-2">
    
        <h1>FRONTEND DEVELOPMENT</h1>
        <p>
            I convert designs into responsive websites with html and css, and Vue JS.
        </p>
        <br>
        <h1>BACKEND DEVELOPMENT</h1>
        <p>
            I provide REST APIs, Database Design and development, project deployment, and more.
        </p>


        <!-- <div class="sm:w-2/3 md:w-2/3 lg:w-2/5 mx-auto">
           <h3 class="font-semibold text-xl sm:text-2xl mb-3">Do you have any gig or project that matches my skill set? Feel free to hit me up..</h3> <br>

            <form method="POST" action="mailto:freeborniwarri@gmail.com">
                <input type="text" name="fullname" placeholder="Full name" class="rounded-md w-full px-3 py-2 bg-[#e1e1e1] placeholder-gray-500 text-gray-800 mb-6">
                <input type="text" name="subject" placeholder="Subject" class="rounded-md w-full px-3 py-2 bg-[#e1e1e1] placeholder-gray-500 text-gray-800 mb-6">
                <textarea placeholder="Message" name="message" class="rounded-md w-full px-3 py-2 bg-[#e1e1e1] placeholder-gray-500 text-gray-800" rows="5"></textarea>
                <br><br>
                <br>
                <button type="submit" class="w-full rounded bg-[#FE332E] text-white font-semibold py-2">SEND</button>
            </form>
        </div> -->
        
    </main>
    <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name:'Contact',
    components:{Header,Footer}
}

</script>

<style scoped>

</style>
