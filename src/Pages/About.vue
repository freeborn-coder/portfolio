<template>
    <Header />
    <main class="min-h-[60vh] mt-10 mx-2 md:flex md:flex-row-reverse">
        
        <div class="md:w-1/2 mb-16">
            <div class="flex justify-center md:justify-end md:pr-10">
                <img src="@/assets/img/me.jpg" alt="freeborn iwarri" class="rounded-full shadow-xl w-2/3 sm:w-1/2 md:w-3/4 lg:w-1/2">
            </div>
        </div>

        <div class="md:w-1/2">
            <div class="mt-5 md:mt-0">
                <h2 class="font-bold text-2xl">So who am I?</h2><br>
                <p class="text-lg">
                    I love programming. It's challenging and rewarding. The thrill of solving problems, fixing a bug that 
                    I've struggled with for days got me hooked. The magic of pressing a button and the computer does a lot of magic
                    in the background to produce a world-changing output makes me believe I'll keep writing code, even if I was not being paid
                    for it.
                    <br><br>
                    I started professional web development in 2020, but before then, I've been learning PHP and Java since 2016.
                    I've learned and improved a lot since then. I've built Dashboards with Laravel and Vue JS, I've designed and implemented
                    REST APIs with Laravel and MySQL.
                    I'm always striving to grow and improve my skills and abilities.
                    I dream of creating a product that will serve people and change my country and the world for the better in one way or the other.
                </p>
                    <!-- <br> -->
                    <!-- I have a passion for programming. <br>
                    I taught myself programming when I was in the University, and created programs that solved mathemtatical equations.
                    I enjoy solving problems, and programming gives me an avenue to do that.<br><br>
                    I am always committed to growth and development which is why I spend my time
                    and resources to improve my skills and take my craft to the highest possible level.</p>  -->
            </div>
            <hr class="my-10 border-line-color">

            <h2 class="font-bold text-2xl">Work History</h2><br>
            <div class="flex items-center cursor-pointer" onclick="location.href = 'https://adscerts.com/scholar/8E39106A70539BF8'">
                <div class="w-1/10 bg-red-500">
                    <img class="h-[100px] rounded" src="@/assets/img/dreamlabs.jpg" alt="Dreamlabs Abuja">
                </div>
                <div class="ml-5 w-2/3">
                    <p class="text-lg font-semibold mb-1">DreamLabs Nigeria Limited</p> 
                    <p class="mb-1">Software Engineer</p>
                    <p>June 2021 - Present</p>
                </div>
            </div>
            <br>
            <div class="flex items-center cursor-pointer" onclick="location.href = 'https://adscerts.com/scholar/8E39106A70539BF8'">
                <div class="w-1/10 bg-red-500">
                    <img class="h-[100px] rounded" src="@/assets/img/dreamlabs.jpg" alt="Dreamlabs Abuja">
                </div>
                <div class="ml-5 w-2/3">
                    <p class="text-lg font-semibold mb-1">DreamLabs Nigeria Limited</p> 
                    <p class="mb-1">Software Engineering Intern</p>
                    <p>Dec 2020 - June 2021</p>
                </div>
            </div>

            <hr class="my-10 border-line-color">

            <div class="mt-5 md:mt-0">
                <h2 class="font-bold text-2xl">Education</h2><br>
                <div class="flex items-center">
                    <div class="w-1/10 bg-red-500">
                        <img class="h-[100px] rounded" src="@/assets/img/uniport.jpg" alt="university of Port Harcourt">
                    </div>
                    <div class="ml-5 w-2/3">
                        <p class="text-lg font-semibold mb-1">University of Port Harcourt</p> 
                        <p class="mb-1">Bachelors, Computer Science</p>
                        <p>(2013 - 2017)</p>
                    </div>
                </div>
            </div>
            
            <hr class="my-10 border-line-color">
            
            <div class="mt-5 md:mt-0 pb-4">
                <h2 class="font-bold text-2xl">Certifications</h2><br>
                <div class="flex items-center cursor-pointer" onclick="location.href = 'https://www.udemy.com/certificate/UC-57656dce-128d-4168-b64c-5717f6e1dbc3/'">
                    <div class="w-1/10 ">
                        <img class="h-[100px] rounded" src="@/assets/img/aws.jpg" alt="udemy">
                    </div>
                    <div class="ml-5 w-2/3">
                        <p class="text-lg font-semibold mb-1">Amazon Web Services (AWS)</p> 
                        <p class="mb-1">AWS Certified Cloud Pracitioner</p>
                        <p>Issued Nov 2021Expires Nov 2024</p>
                    </div>
                </div>
                <br>
                <div class="flex items-center cursor-pointer" onclick="location.href = 'https://www.udemy.com/certificate/UC-57656dce-128d-4168-b64c-5717f6e1dbc3/'">
                    <div class="w-1/10">
                        <img class="h-[100px] rounded" src="@/assets/img/udemy.jpg" alt="udemy">
                    </div>
                    <div class="ml-5 w-2/3">
                        <p class="text-lg font-semibold mb-1">Udemy</p> 
                        <p class="mb-1">UI/UX Master Course: Strategy, Design, and Development</p>
                        <p>July, 2021</p>
                    </div>
                </div>
                <br>
                <div class="flex items-center cursor-pointer" onclick="location.href = 'https://adscerts.com/scholar/8E39106A70539BF8'">
                    <div class="w-1/10 bg-red-500">
                        <img class="h-[100px] rounded" src="@/assets/img/google-developers.jpg" alt="Google developers">
                    </div>
                    <div class="ml-5 w-2/3">
                        <p class="text-lg font-semibold mb-1">Google Developers</p> 
                        <p class="mb-1">Android Development</p>
                        <p>Feb, 2021</p>
                    </div>
                </div>

            </div>
            
            <hr class="my-10 border-line-color">

            <div class="mt-5 md:mt-0 flex justify-between items-center rounded">
                
               <img src="../assets/img/php.png" alt="php logo">
               <img src="../assets/img/laravel.png" alt="php logo">
               <div class="rounded pt-1" style="background-color:white">
                   <img class="" src="../assets/img/mysql.png" alt="php logo">
                </div>
               <img src="../assets/img/javascript.png" alt="php logo">
               <img src="../assets/img/vue.png" alt="php logo">
               <img src="../assets/img/tailwind.png" alt="php logo">
               <div class="rounded pt-2" style="background-color:white">
               <img src="../assets/img/css.png" alt="php logo">
               </div>
               <img src="../assets/img/html.png" alt="php logo">
               <!-- <img src="../assets/img/figma.jpeg" alt="php logo"> -->

            </div>
            
        </div>

    </main>
    <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name:'About',
    components:{Header,Footer}
}

</script>

<style scoped>

</style>
