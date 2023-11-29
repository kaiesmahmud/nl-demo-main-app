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
    let myLinks = [
        {
            name:"My Account",
            icon: "octicon:person-24",
            url:"/dashboard"
        },
        {
            name:"My Cart",
            icon: "mdi-light:cart",
            url:"/cart"
        },
    ]
    let navItemStyle = "border-b-2 border-slate-800   px-5 py-3  font-semibold text-sm lg:text-lg transition-all ease-in"
    let myLinksStyle = "flex gap-3 md:gap-0 items-center md:justify-center px-3 py-1 font-semibold transition-all ease-in  "

    let showNav = false ;
    const handleNav = ()=> showNav=!showNav
    const handleGoto = ()=>{

    }
</script>

<div class="bg-white">
    <div class="flex items-center justify-between px-3 md:px-5 py-2 md:py-3">
        <div class="flex items-center gap-3">
            <div class="text-xl">
                <Icon icon="carbon:location" />
            </div>
            21ST, City name here
        </div>
        <div class="flex items-center gap-3">
            <div class="flex items-center gap-3">
                <p>
                    English
                </p>
                <div class="text-sm">
                    <Icon icon="teenyicons:down-outline" />
                </div>
            </div>
            <div class="flex items-center gap-3">
                USA
                <div class="text-sm">
                    <Icon icon="teenyicons:down-outline" />
                </div>
            </div>
            <div class="flex gap-1 ">
                <div >
                    Sign in /
                </div>
                <div>
                    Sign up
                </div>
            </div>
        </div>

    </div>
    <div class=" p-2 md:p-4 flex items-center justify-between md:justify-around">
        <a href="/" class="flex items-center gap-1 md:gap-5">
            <div class="w-10">
                <img src="https://d186vdbjetg11u.cloudfront.net/static/media/logo.d6d00ab41593f9e46540095c8affeac4.svg" alt="TRAXNYC">
            </div>
            <h1 class=" font-light text-lg md:text-xl lg:text-3xl">TRAXNYC</h1>
        </a>
        <div class="flex w-[25%]">
            <input type="text" class="bg-slate-200 w-full">
            <button class="text-xl md:text-2xl lg:text-3xl bg-slate-100 rounded p-2">
                <Icon icon="material-symbols-light:search" />
            </button>
        </div>
        <!-- <div class=" hidden md:flex items-center gap-1">
            {#each navItems as item(item.name)}
            <a href={item.url} class={navItemStyle}>{item.name}</a>
            {/each}
        </div> -->
        <div class="hidden md:flex items-center gap-2 md:gap-4">
            {#each myLinks as item(item.name)}
                 <a href={item.url} class={myLinksStyle}>
                     <div class="text-xl md:text-3xl">
                         <Icon icon={item.icon} />
                     </div>
                     <p class=" hidden lg:inline-block">{item.name}</p>
                 </a>
            {/each}
        </div>
        <div class=" md:hidden">
            {#if !showNav}
                <button on:click={handleNav} class="text-4xl md:hidden">
                    <Icon icon="jam:menu" />
                </button>            
            {/if}
        </div>
    </div>
    {#if showNav}
         <div class=" md:hidden min-h-screen fixed top-0 w-screen transition-all ease-in flex flex-col  z-[1000]">
            <div class="w-full  flex justify-between p-5">
                <a on:click={handleNav} href="/" class="flex items-center gap-2">
                    <div class="w-10">
                        <img src="https://d186vdbjetg11u.cloudfront.net/static/media/logo.d6d00ab41593f9e46540095c8affeac4.svg" alt="TRAXNYC">
                    </div>
                    <h1 class=" font-light text-lg md:text-xl lg:text-3xl">TRAXNYC</h1>
                </a>
                    <button on:click={handleNav} class="text-3xl md:hidden">
                    <Icon icon="radix-icons:cross-1" />
                </button>
            </div>
            <div class="flex flex-col my-10">
                {#each navItems as item(item.name)}
                <a href={item.url} class={navItemStyle} on:click={handleNav}>{item.name}</a>
                {/each}
            </div>
            <div class=" mt-20 flex items-center justify-around">
                {#each myLinks as item(item.name)}
                 <a href={item.url} class={myLinksStyle} on:click={handleNav}>
                     <div class="text-xl md:text-3xl">
                         <Icon icon={item.icon} />
                     </div>
                     <p >{item.name}</p>
                 </a>
                {/each}
            </div>
         </div>
    {/if}
</div>