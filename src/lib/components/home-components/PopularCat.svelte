<script>
    let popularCategories = [
        {
            name:"Chains",
            url : "/men-collection",
            img:"https://d186vdbjetg11u.cloudfront.net/static/media/CUBAN-CURB.c2bf92a042d193227443.webp"
        }, 
        {
            name:"pendants",
            url : "/men-collection",

            img:"https://d20q60vkvwzi8p.cloudfront.net/files/img506091646491.jpeg"
        }, 
        {
            name:"Rings",
            url : "/men-collection",

            img:"https://d20q60vkvwzi8p.cloudfront.net/files/img522835665451.jpeg"
        }, 
        {
            name:"Earrings",
            url : "/men-collection",

            img:"https://d20q60vkvwzi8p.cloudfront.net/files/img534822680571.jpeg"
        }, 
        {
            name:"Bracelets",
            url : "/men-collection",

            img:"https://d20q60vkvwzi8p.cloudfront.net/files/img522129664431.jpeg"
        }, 
        {
            name:"Watches",
            url : "/men-collection",

            img:"https://d20q60vkvwzi8p.cloudfront.net/files/img520917662881.jpeg"
        }, 
        {
            name:"Collections",
            url : "/men-collection",

            img:"https://d20q60vkvwzi8p.cloudfront.net/files/img531538676641.jpeg"
        }, 
        {
            name:"Special Deals",
            url : "/men-collection",

            img:"https://d186vdbjetg11u.cloudfront.net/static/media/CUBAN-CURB.c2bf92a042d193227443.webp"
        }, 
    ]
</script>

<section class=" p-5 md:py-10">
    <h1 class={`text-2xl md:text-4xl capitalize  m-5 font-semibold `}>Popular Catagories:</h1>
    <div class="p-1 flex items-center justify-center">
        <div class="w-full md:w-[90%] lg:w-[80%] grid grid-cols-2 md:grid-cols-4 gap-3 ">
            {#each popularCategories as {name,img,url}}
            <a href={url} class="m-5 shadow-lg flex flex-col gap-3 items-center justify-between p-2 md:p-3 lg:p-5 rounded-xl border border-slate-200 hover:shadow-2xl select-none cursor-pointer bg-white">
                <div class="rounded-full overflow-hidden w-1/2">
                    <img src={img} alt={name} class="shadow-lg rounded-full hover:scale-110 transition-all ease-in">
                </div>
                <h1>{name}</h1>
            </a>
            {/each}
        </div>
    </div>
</section>