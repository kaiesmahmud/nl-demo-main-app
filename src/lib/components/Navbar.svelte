<script>
    import Icon from '@iconify/svelte';
    let navItems = [
        {
            name:"Men's Collection", url:"/men-collection"
        },
        {
            name:"Women's Collection",url:"/women-collection"
        },
        {
            name:"Custom Jewelry",url:"/custom-jewelry"
        },
        {
            name:"Special Offer",url:"/special-offer"
        },
    ]
    let navItemStyle = "text-white/60  border-b-2 border-slate-800 hover:border-white hover:text-white  px-5 py-3  font-semibold text-sm lg:text-lg transition-all ease-in"
    let myLinksStyle = "flex  items-center justify-center px-3 py-1 font-semibold transition-all ease-in border-b-2 border-slate-800 hover:border-white text-white/70 hover:text-white"
    let myLinks = [
        {
            name:"My Account",
            icon: "octicon:person-24",
            url:"/dashboard"
        },
        // {
        //     name:"Wishlist",
        //     icon: "ph:heart-thin",
        //     url:"/wishlist"
        // },
        {
            name:"My Cart",
            icon: "mdi-light:cart",
            url:"/cart"
        },
    ]
</script>

<div class="bg-slate-800 text-white p-2 md:p-4 flex items-center justify-around">
    <a href="/" class="flex items-center gap-1 md:gap-5">
        <div class="w-10">
            <img src="https://d186vdbjetg11u.cloudfront.net/static/media/logo.d6d00ab41593f9e46540095c8affeac4.svg" alt="TRAXNYC">
        </div>
        <h1 class=" font-light text-lg md:text-xl lg:text-3xl">TRAXNYC</h1>
    </a>
    <div class="flex items-center gap-1">
        {#each navItems as item(item.name)}
        <a href={item.url} class={navItemStyle}>{item.name}</a>
        {/each}
    </div>
    <div class="flex items-center gap-2 md:gap-4">
        {#each myLinks as item(item.name)}
             <a href={item.url} class={myLinksStyle}>
                 <div class="text-xl md:text-3xl">
                     <Icon icon={item.icon} />
                 </div>
                 <p class=" hidden lg:inline-block">{item.name}</p>
             </a>
        {/each}
        
    </div>
</div>