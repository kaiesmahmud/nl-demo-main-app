<script>
    import "../app.css";
    import Footer from "../lib/components/Footer.svelte";
    import Navbar from "../lib/components/Navbar.svelte";
</script>
<div>
    <Navbar/>
    <slot/>
    <Footer/>
</div>