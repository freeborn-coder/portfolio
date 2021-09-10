<template>
    <a :href="to" @click.prevent="navigate" class="nav-item">
        <slot></slot>
    </a>
</template>

<script>
    export default {
        name:'Link',
        props:['to'],
        methods:{
            navigate(){
                this.$emit('navigation');
                this.$root.currentRoute = this.to;
                history.pushState({to:this.to},this.to.substring(1),this.to);
            }
        }
    }
</script>

<style lang="stylus" scoped>
    
</style>
