<script>
    import Icon from '@iconify/svelte';
    let data = [
        {
            title: "Popular Collections",
            list : [
                {name:"chain",url: "/"},
                {name:"pendants",url: "/"},
                {name:"rings",url: "/"},
                {name:"custom products",url: "/"},
                {name:"saphire collection",url: "/"},
            ]
        },
        {
            title: "The company",
            list : [
                {name:"About us",url: "/"},
                {name:"Contact us",url: "/"},
                {name:"Reviews",url: "/"},
                {name:"Blog",url: "/"},
                {name:"Policy",url: "/"},
            ]
        },
        {
            title: "Find us on",
            list : [
                {name:"instagram",url: "/" ,icon: "mdi:instagram" },
                {name:"facebook",url: "/",icon: "ic:baseline-facebook"},
                {name:"YouTube",url: "/", icon:"mingcute:youtube-fill"},
                {name:"Reddit",url: "/", icon: "ic:baseline-reddit" },
                {name:"Twitter",url: "/", icon: "mdi:twitter" },
            ]
        },
    ]
</script>

<div class="flex flex-col items-center justify-center bg-black text-white ">
    <section class=" w-full md:w-[90%] lg:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {#each data as item(item.title)}
             <div class="p-5 py-10 capitalize">
                <h5 class="text-lg md:text-xl lg:text-2xl text-fuchsia-500">{item.title}</h5>
                <div class="p-5 flex flex-col gap-5">
                    {#each item.list as i}
                         <a href={i.url} class="hover:text-fuchsia-400 border-b border-black hover:border-fuchsia-400 transition-all ease-in-out px-2 pb-2 flex items-center gap-3">
                            {#if i?.icon}
                                <div class="text-xl">
                                    <Icon icon={i.icon} />
                                </div>
                            {/if}
                            {i.name}
                        </a>
                    {/each}
                </div>
             </div>
        {/each}
        <div class="p-5 py-10 capitalize">
            subscribe to NewsLetter SEction
        </div>
    </section>
    <footer class="text-xs md:text-sm text-center p-5 italic">Demo Project, 2023 | November. All Rights Reserved | <a href="/admin" class="font-bold hover:text-fuchsia-500 p-3 ">Admin Panel</a></footer>
</div>