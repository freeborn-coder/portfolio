<template>
    <Header />
    
    <main class="min-h-[60vh] mt-10 mx-2">
        
        <h2 class="font-bold text-2xl mb-20">Here are some of the cool stuff I have done..</h2><br>             
        
        <div class="md:flex md:justify-between">

            <div class="md:w-1/2 flex flex-col justify-center pb-4">
                <h5 class="font-semibold text-xl mb-5">EAZY CALC (React Calculator)</h5>
                <p class="leading-8">
                    I created a basic online calculator using React, to test out my React Skills. It performs basic arithmetic of addition, substraction,
                    multiplication and division. It enables me to gain familiarity of the basic react concepts and how to use tailwindcss with react.
                </p>
                <br>
                <p class="flex items-center mb-4">
                    <!-- <a target="_blank" href="https://github.com/freeborn-coder/portfolio"><i class="fab fa-github fa-3x mr-6" title="view on github"></i></a> -->
                    <a href="https://github.com/freeborn-coder/react-calculator"
                        class="font-semibold px-4 py-2 rounded bg-transparent text-white border-2 
                        border-white hover:bg-gray-100 hover:text-black transition-colors duration-150">
                        View code <i class="fab fa-github"></i>
                    </a>
                    &nbsp;&nbsp;
                </p>
            </div>
            <div class="md:w-1/2 sm:flex sm:justify-start items-center">

                <div>
                    <img class="w-[290px] md:w-[400px] mb-3 h-auto mx-2 md:mx-10 rounded-md filter drop-shadow-2xl" src="@/assets/img/portfolio-desktop.png" alt="followers manager screenshot">
                </div>
                
                <div class="hidden md:block">
                    <img class="h-[350px] md:h-[400px] md:mx-10 rounded-md filter drop-shadow-xl" src="@/assets/img/portfolio-mobile-mockup.png" alt="followers manager screenshot">  
                </div>
            </div>
        </div>


        <hr class="my-10 border-line-color">
        
        <div class="md:flex md:justify-between">

            <div class="md:w-1/2 flex flex-col justify-center pb-4">
                <h5 class="font-semibold text-xl mb-5">My Personal Portfolio</h5>
                <p class="leading-8">
                    The website you're currently viewing was designed and developed by me. I created the UI designs with
                    Figma and developed the website using Vue JS and Tailwind CSS. This websites serves as an avenue for potential clients 
                    and employers to get more information about me, my skills and experience. It also provides a way to contact me.
                </p>
                <br>
                <p class="flex items-center mb-4">
                    <!-- <a target="_blank" href="https://github.com/freeborn-coder/portfolio"><i class="fab fa-github fa-3x mr-6" title="view on github"></i></a> -->
                    <a href="https://github.com/freeborn-coder/portfolio"
                        class="font-semibold px-4 py-2 rounded bg-transparent text-white border-2 
                        border-white hover:bg-gray-100 hover:text-black transition-colors duration-150">
                        View code <i class="fab fa-github"></i>
                    </a>
                    &nbsp;&nbsp;
                    <a target="_blank" class="font-semibold px-4 py-2 rounded bg-transparent text-white border-2 
                        border-white hover:bg-gray-100 hover:text-black transition-colors duration-150"
                        href="https://www.figma.com/file/RmYOvi1afuI6Mw2EZD4Oqt/My-portfolio?node-id=230%3A3">
                        View design <i class="fab fa-figma filter drop-shadow-2xl" title="view figma design"></i>
                    </a>
                </p>
            </div>
            <div class="md:w-1/2 sm:flex sm:justify-start items-center">

                <div>
                    <img class="w-[290px] md:w-[400px] mb-3 h-auto mx-2 md:mx-10 rounded-md filter drop-shadow-2xl" src="@/assets/img/portfolio-desktop.png" alt="followers manager screenshot">
                </div>
                
                <div class="hidden md:block">
                    <img class="h-[350px] md:h-[400px] md:mx-10 rounded-md filter drop-shadow-xl" src="@/assets/img/portfolio-mobile-mockup.png" alt="followers manager screenshot">  
                </div>
            </div>
        </div>

        <div class="md:flex md:justify-between">

            <div class="md:w-1/2 flex flex-col justify-center pb-4">
                <h5 class="font-semibold text-xl mb-5">Followers Manager for Twitter</h5>
                <p class="leading-8">
                    This app helps you to manage your twitter followers. You can see who unfollowed you, follow/unfollow users, and even request for
                    follow back. It was made using Java and Android Studio. It uses the Twitter API and firebase realtime database for implementing it's functionalities.
                </p>
                <br>
                <p class="flex items-center">
                    <!-- <a target="_blank" href="https://github.com/freeborn-coder/followers-manager"><i class="fab fa-github fa-3x mr-6" title="view on github"></i></a> -->
                    
                    <a href="https://github.com/freeborn-coder/followers-manager"
                        class="font-semibold px-4 py-2 rounded bg-transparent text-white border-2 
                        border-white hover:bg-gray-100 hover:text-black transition-colors duration-150">
                        View code <i class="fab fa-github"></i>
                    </a>
                    &nbsp;&nbsp;
                    <a target="_blank" href="https://play.google.com/store/apps/details?id=com.gananidevs.followersmanagerfortwitter&hl=en&gl=US">
                        <img class="w-[180px] sm:w-[200px] filter drop-shadow-xl" src="@/assets/img/googleplay.png" alt="" title="view on google play">
                    </a>
                </p>
            </div>
            <div class="md:w-1/2 flex sm:justify-start">
                <img class="h-[300px] md:h-[400px] aspect mx-2 md:mx-10 rounded-md filter drop-shadow-xl" src="@/assets/img/home.png" alt="followers manager screenshot">
                <img class="h-[300px] md:h-[400px] md:mx-10 rounded-md filter drop-shadow-xl" src="@/assets/img/home.png" alt="followers manager screenshot">  
            </div>
        </div>
       

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
