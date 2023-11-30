<script>
	import { fetchAllProductsData } from './../lib/function/fetchAllProductsData.js';
    import { allProductsData } from '../lib/store/store.js';
    import "../app.css";
    import Footer from "../lib/components/Footer.svelte";
    import Navbar from "../lib/components/Navbar.svelte";
    
    fetchAllProductsData();

</script>
<div>
    <Navbar/>
    <slot/>
    <Footer/>
</div>