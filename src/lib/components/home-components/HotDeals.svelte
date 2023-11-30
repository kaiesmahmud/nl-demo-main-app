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
<section class="grid grid-cols-1  lg:grid-cols-3">
    <div>
        <h1 class={`text-xl md:text-2xl capitalize  m-5 mb-0 font-semibold `}>Hot Deals</h1>
        <div class="flex p-5 flex-col gap-3">
            {#each hotDealsProducts as product}
                <ProductCardLandScape {product}/>
            {/each}
        </div>
    </div>
    <div>
        <h1 class={`text-xl md:text-2xl capitalize  m-5 mb-0 font-semibold `}>Top Rated</h1>
        <div class="flex p-5 flex-col gap-3 md:border-l-2 md:border-slate-900 mb-5">
            {#each hotDealsProducts as product(product.p_id)}
                <ProductCardLandScape {product}/>
            {/each}
        </div>
    </div>
    <div class="h-full overflow-hidden">
        <h1 class={`text-xl md:text-2xl capitalize  m-5 font-semibold `}>Summer Sale</h1>
        <div class="flex p-5  gap-3 md:border-l-2 md:border-slate-900 mb-5 bg-white ">

        </div>
    </div>
</section>