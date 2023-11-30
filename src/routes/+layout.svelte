<script>
	import { fetchAllProductsData } from './../lib/function/fetchAllProductsData.js';
    // import { allProductsData } from '../lib/store/store.js';
    import "../app.css";
    import Footer from "../lib/components/Footer.svelte";
    import Navbar from "../lib/components/Navbar.svelte";
    import { onMount } from 'svelte';
    
    onMount(()=>{
        fetchAllProductsData();
    })

</script>
<div class="flex items-center justify-center" >

    <div class="w-full lg:w-[80%]">
        <Navbar/>
        <slot/>
        <Footer/>
    </div>
</div>