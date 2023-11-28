<script>
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
</script>

<div>
    <h1 class="font-bold text-xl md:text-2xl ">All Category</h1>
    <div class="p-5 flex flex-col gap-5">
        {#each navItems as i}
        <div class="flex items-center justify-between w-full bg-white p-3  rounded">
            <div>
                {i.name}
            </div>
            <a href={i.url} class="hover:font-bold">
                {i.url}
            </a>
        </div>

        {/each}
    </div>
</div> 