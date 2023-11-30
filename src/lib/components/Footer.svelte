<script>
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
                {name:"instagram",url: "/" ,},
                {name:"facebook",url: "/"},
                {name:"YouTube",url: "/"},
                {name:"Reddit",url: "/"},
                {name:"Twitter",url: "/"},
            ]
        },
    ]
</script>

<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    {#each data as item(item.title)}
         <div>
            <h5>{item.title}</h5>
            <div>
                {#each item.list as i}
                     <p>{i.name}</p>
                {/each}
            </div>
         </div>
    {/each}
    <div>
        subscribe to NewsLetter SEction
    </div>
</section>
<footer class="text-xs md:text-sm text-black/50 text-center p-5 italic">Demo Project, 2023 | November. All Rights Reserved | <a href="/admin" class="font-bold hover:text-black p-3 hover:border hover:shadow">Admin Panel</a></footer>