<script>
    import AdminBody from "../../lib/components/admin-dashboard/AdminBody.svelte";
    import AdminNav from "../../lib/components/admin-dashboard/AdminNav.svelte";
    let adminNavItems = [
        {
            name:"analytics",
            icon: "arcticons:adobe-analytics" ,
            value:"analytics"
        },
        {
            name:"All-Category",
            icon: "material-symbols-light:category-outline" ,
            value:"all-category"
        },
        {
            name:"All-Products",
            icon: "circum:shop",
            value:"all-products"
        },
        {
            name:"All-Users",
            icon: "ph:users-thin",
            value:"all-users"
        },
        {
            name:"All-Orders",
            icon: "fluent-mdl2:reservation-orders",
            value:"all-orders"
        },
    ]
    
</script>

<div class="min-h-screen flex flex-col md:flex-row gap-2 p-3 md:p-5 ">
    <AdminNav {adminNavItems}  />
    <AdminBody/>
</div>

