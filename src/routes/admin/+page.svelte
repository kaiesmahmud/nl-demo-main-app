<script>
	import { fetchAllUsers } from './../../lib/function/fetchAllUsers.js';
    onMount(()=>{
        fetchAllUsers();
    })
    import AdminBody from "../../lib/components/admin-dashboard/AdminBody.svelte";
    import AdminNav from "../../lib/components/admin-dashboard/AdminNav.svelte";
    import { onMount } from 'svelte';
    let adminNavItems = [
        {
            name:"All-Products",
            icon: "circum:shop",
            value:"all-products"
        },
        {
            name:"Add-Products",
            icon: "material-symbols-light:add"  ,
            value:"add-products"
        },
        {
            name:"All-Users",
            icon: "ph:users-thin",
            value:"all-users"
        },
        {
            name:"All-Orders",
            // icon: "fluent-mdl2:reservation-orders",
            icon: "lets-icons:order-light",
            value:"all-orders"
        },
        // {
        //     name:"All-Category",
        //     icon: "material-symbols-light:category-outline" ,
        //     value:"all-category"
        // },

        {
            name:"Analytics",
            icon: "arcticons:adobe-analytics" ,
            value:"analytics"
        },
        {
            name:"Search Engine Optimization",
            icon: "arcticons:auditor"  ,
            value:"seo"
        },
        
    ]
    
</script>

<div class=" flex flex-col md:flex-row gap-2 p-3 md:p-5 bg-slate-100 ">
    <AdminNav {adminNavItems}  />
    <AdminBody/>
</div>

