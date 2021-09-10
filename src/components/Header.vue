<template>
    
    <header class="mb-20">
        <nav class="text-gray-400">

            <!-- side menu -->
            <div class="sm:hidden grid grid-cols-3">
                <p>
                    <i class="fas fa-bars text-2xl cursor-pointer self-start"
                    @click="openSidebar"></i>
                </p>
                <p class="pt-2 place-self-center font-semibold text-gray-500 w-10">Home</p>
            </div>

            <ul id="sidenav" ref="sidenav" 
                :class="isOpen ? 'opened':'closed'"
                class="w-[320px] left-[-320px] fixed inset-y-0 bg-[#2b243b] sm:left-0 sm:bg-transparent sm:static sm:flex sm:w-2/3 lg:w-1/3 justify-between font-semibold transition-all duration-1000">

                <li class="block py-3 px-5 font-bold text-right sm:hidden">
                    <span class="font-bold text-4xl cursor-pointer hover:text-white" 
                    @click="closeSidebar">&times;</span>
                </li>
                <li><Link to="/" @navigation="closeSidebar">Home</Link></li>
                <li>
                    <Link to="/about" @navigation="closeSidebar">About</Link>
                </li>
                <li>
                    <Link to="/projects" @navigation="closeSidebar">Projects</Link>
                </li>
                
                <li>
                    <Link to="/contact" @navigation="closeSidebar">Contact</Link>
                </li>
            </ul>
        </nav>
    </header>

</template>

<script>
    import Link from './Link.vue';

    export default {
        name:'Header',
        components:{ Link },
        data(){
            return {
                isOpen:false
            }
        },
        methods:{
            openSidebar(){
                this.isOpen = true;
            },
            closeSidebar(){
                if(this.isOpen) this.isOpen = false;
            }
        },
        created(){
            window.onpopstate = ({state}) => this.$root.currentRoute = state.to ?? '/';
        }
    }
</script>

<style scoped>
    .closed{
        left:-320px;
    }
    .opened{
        left:0px;
    }
</style>
