<script>
    import ProductCardLandScape from "./ProductCardLandScape.svelte";

    let hotDealsProducts = [
        {
            "p_id": "63618",
            "p_name": "10K Gold Diamond Pendant 63618",
            "p_url": "gold-diamond-pendant-63618",
            "cat_id": "/men-collection",
            "cat_name": "men-collection",
            "p_price": "2155",
            "p_img": "https://d20q60vkvwzi8p.cloudfront.net/gallery/10K-Yellow-Gold-Micro-Pave-Diamond-Hamsa-Hand-Charm-Pendant-63618-Metal-1.jpg",
            "p_type": "10K Yellow GOLD",
            "p_reg_price": "2200",
            "p_stock": "200"
        },
        {
            "p_id": "65810",
            "p_name": "Diamond Lion Pendant 65810",
            "p_url": "diamond-lion-pendant-65810",
            "cat_id": "/men-collection",
            "cat_name": "men-collection",
            "p_price": "550",
            "p_img": "https://d20q60vkvwzi8p.cloudfront.net/gallery/TraxNYC--Diamond-Lion-Pendant-65810-Metal-1.jpg",
            "p_type": "10K Yellow GOLD",
            "p_reg_price": "600",
            "p_stock": "150"
        },
        {
            "p_id": "66620",
            "p_name": "10K Gold Micro Pave Diamond Egyptian Bedouin Evil Eye Charm Pendant Set 66620",
            "p_url": "egyptian-bedouin-pendant-set-66620",
            "cat_id": "/men-collection",
            "cat_name": "men-collection",
            "p_price": "865",
            "p_img": "https://d20q60vkvwzi8p.cloudfront.net/gallery/10K-Gold--Micro-Pave-Diamond-Egyptian-Bedouin-Evil-Eye-Charm-Pendant-Set-66620-Metal-1.jpg",
            "p_type": "10K Yellow GOLD",
            "p_reg_price": "900",
            "p_stock": "30"
        }
    ]
</script>

<div class="flex flex-col items-center justify-center">
    <h1 class="text-center text-2xl font-bold py-5 capitalize">Shimmering offers</h1>
    <section class=" w-full lg:w-[80%] lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-2 items-center justify-center content-center cursor-pointer">
        <div class="rounded overflow-hidden p-10 lg:p-2">
            <img class="rounded" src="/luxury-1.png" alt="">
        </div>
        <div class="flex flex-col gap-5 p-10 lg:p-2">
            <div class="flex rounded overflow-hidden shadow">
                <img class="w-1/2 " src="/lux-1.png" alt="">
                <p class="bg-yellow-100 text-xl md:text-3xl flex items-center justify-center text-center w-full">Best Golden Rings</p>
            </div>
            <div class=" flex rounded overflow-hidden shadow">
                <img class="w-1/2" src="/lux-2.png" alt="">
                <p class="bg-gray-100 text-xl md:text-3xl flex items-center justify-center text-center w-full">Best Silver Rings</p>
            </div>
            <div class="flex rounded overflow-hidden shadow">
                <img class="w-1/2" src="/lux-3.png" alt="">
                <p class="bg-gray-100 text-xl md:text-3xl flex items-center justify-center text-center w-full">Best Diamond Rings</p>
            </div>
        </div>
        <!-- <div>
            <h1 class={`text-xl md:text-2xl capitalize  m-5 mb-0 font-semibold `}>Hot Deals</h1>
            <div class="flex p-5 flex-col gap-3">
                {#each hotDealsProducts as product}
                    <ProductCardLandScape {product}/>
                {/each}
            </div>
        </div>
        <div>
            <h1 class={`text-xl md:text-2xl capitalize  m-5 mb-0 font-semibold `}>Top Rated</h1>
            <div class="flex p-5 flex-col gap-3 md:border-l-2 md:border-slate-900/50 mb-5">
                {#each hotDealsProducts as product(product.p_id)}
                    <ProductCardLandScape {product}/>
                {/each}
            </div>
        </div>
        <div class="h-full overflow-hidden">
            <h1 class={`text-xl md:text-2xl capitalize  m-5 font-semibold `}>Summer Sale</h1>
            <div class="flex p-5  gap-3  mb-5  ">
                <img class="rounded-lg shadow-xl border border-black/10" src="https://www.juwelo.nl/amg/62c70e7fda444677dd3c7d61d9ff5a20/1200/media/banner/nl/common/mteaser/e8ca1ec4_2020-10-05_2020_sale-1060x1254-desktop-nl.webp" alt="">
            </div>
        </div> -->
    </section>
</div>