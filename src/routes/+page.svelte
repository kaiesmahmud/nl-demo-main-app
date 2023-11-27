<script>
    import HeaderSliderCmpnt from '../lib/components/home-components/HeaderSliderCmpnt.svelte';
    import CelebritySlider from '../lib/components/home-components/CelebritySlider.svelte';

    let links = [
        {
            name: "Men's Collection",
            url:"men-collection"
        },
        {
            name: "Women's Collection",
            url:"women-collection"
        },
        {
            name: "Custom Jewelry",
            url:"custom-jewelry"
        },
        {
            name: "Special Offer",
            url:"special-offer"
        },
    ]
    let prdcts = [
        'Gold',
        'Diamond',
        'Gemstone',
        'Silver',
        'Miami Cuban',
        'Tennis',
        'Rope',
        'Custom Chain Builder',
        'Chains Catalog',
        'Multicolor Diamond & Gem',
        'Gold Investment Jewelry',
        'Miami Cuban Pieces',
        'Chain & Pendant Sets',
        'Black Diamonds',
        'Earrings',
        'Bracelets',
        'Necklaces',
        'Rings',

    ]
</script>
<HeaderSliderCmpnt/>
<div class="relative p-2">
    <div class=" absolute w-[100%] h-[100%] top-0 left-0 bg-black/20 flex items-center justify-center">
        <div class="   flex items-center justify-center gap-2 md:gap-5 flex-wrap md:flex-nowrap">
            {#each links as item}
                 <a href={item.url} class=" flex flex-col items-center justify-center ">
                    <div class="bg-slate-700 text-white p-2 py-3 md:p-5 rounded font-bold">
                        {item.name}
                    </div>
                 </a>
            {/each}
        </div>
    </div>
    <div class="text-sm  md:text-5xl font-bold text-black/20 flex flex-wrap items-center gap-5 text-justify justify-evenly">
        {#each prdcts as item,i}
             <h6 class={`${i%2 == 0 &&"text-yellow-900/10"}`}>{item}</h6>
        {/each}
    </div>

</div>
<div class="mt-10">
    <CelebritySlider/>
</div>