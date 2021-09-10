<template>

  <Header />
  <main class="min-h-[60vh] mx-2 md:flex md:justify-evenly md:items-center md:flex-row-reverse">
    
        <div class="md:w-1/2 flex justify-center">
            <img src="@/assets/img/me.jpg" alt="freeborn iwarri" class="rounded-full shadow-xl w-2/3 landscape:w-3/5 landscape:md:w-3/5">
        </div>
        
        <div class="md:w-1/2 mt-5 md:mt-0">
            <p class="mb-1">Hello there,</p>
            <h1 class="font-bold text-3xl sm:text-4xl">I'm Freeborn Iwarri.</h1><br>
            <!-- <p class="text-lg">I solve problems using the tools and techniques of Software Engineering.</p>  -->
            <p class="text-lg mb-2">I am a fullstack developer with experience building web applications using Laravel, MySQL and Vue Js. I also build android apps using Flutter and Java.</p> 
            <!-- <p class="text-lg mb-2">I also build mobile apps using Flutter and Java.</p> <br> -->
            <p class="text-lg">In my free time, I play video games, listen to music, or read programming books.</p> 
            <br><br>

            <a href="/contact" @click.prevent="gotoContact"
              class="rounded bg-[#FE332E] text-white font-semibold w-full md:w-1/2 mx-auto px-5 py-3">
              CONTACT ME
            </a>

            <br><br>
        </div>
  </main>
  <Footer />

</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,Footer
  },
  methods:{
    gotoContact(){
      this.$root.currentRoute = '/contact';
      history.pushState({to:'/contact'},'Contact','/contact');
    }
  }
}
</script>

<style>
</style>
