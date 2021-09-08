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
                <p class="text-lg">I have a passion for programming. I am always committed to growth and development which is why I spend a lot of time and resources to improve my skills  take my craft to the highest possible level.</p> 
            </div>
            <hr class="my-10 border-line-color">
            <div class="mt-5 md:mt-0">
                <h2 class="font-bold text-2xl">Education</h2><br>
                <div class="flex items-center">
                    <div class="w-1/10 bg-red-500">
                        <img class="h-[100px] rounded" src="https://media-exp1.licdn.com/dms/image/C560BAQEm7WalJhcSvQ/company-logo_200_200/0/1588655594918?e=1635984000&v=beta&t=cKU4yazReFTYcuHXefCOFkcq7kU33V4a8d359aOhrbE" alt="university of Port Harcourt">
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
                    <div class="w-1/10 bg-red-500">
                        <img class="h-[100px] rounded" src="https://media-exp1.licdn.com/dms/image/C4D0BAQFQr9e68bBOPQ/company-logo_200_200/0/1626275253364?e=1635984000&v=beta&t=uZ28psnLhedfRnUpbhVe64VERjMqagOadj5zeapcRrs" alt="udemy">
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
                        <img class="h-[100px] rounded" src="https://media-exp1.licdn.com/dms/image/C4D0BAQEx8fTz8QFKvw/company-logo_200_200/0/1615318650285?e=1635984000&v=beta&t=gsw4G746sGF7dLWehM65xWu3g8ebSPjXpnFSS1_d8Bg" alt="Google developers">
                    </div>
                    <div class="ml-5 w-2/3">
                        <p class="text-lg font-semibold mb-1">Google Developers</p> 
                        <p class="mb-1">Android Development</p>
                        <p>Feb, 2021</p>
                    </div>
                </div>

            </div>
            <hr class="my-10 border-line-color">

            <h2 class="font-bold text-2xl">Work History</h2><br>
            <div class="flex items-center cursor-pointer" onclick="location.href = 'https://adscerts.com/scholar/8E39106A70539BF8'">
                <div class="w-1/10 bg-red-500">
                    <img class="h-[100px] rounded" src="https://media-exp1.licdn.com/dms/image/C4D0BAQE8sISjiw_6aA/company-logo_100_100/0/1570014936073?e=1636588800&v=beta&t=nR2KOEUUMCXvFeV82JWx0H4Tl9zZn4kvYT4gzeBIeCI" alt="Dreamlabs Abuja">
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
                    <img class="h-[100px] rounded" src="https://media-exp1.licdn.com/dms/image/C4D0BAQE8sISjiw_6aA/company-logo_100_100/0/1570014936073?e=1636588800&v=beta&t=nR2KOEUUMCXvFeV82JWx0H4Tl9zZn4kvYT4gzeBIeCI" alt="Dreamlabs Abuja">
                </div>
                <div class="ml-5 w-2/3">
                    <p class="text-lg font-semibold mb-1">DreamLabs Nigeria Limited</p> 
                    <p class="mb-1">Software Engineering Intern</p>
                    <p>Dec 2020 - June 2021</p>
                </div>
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
