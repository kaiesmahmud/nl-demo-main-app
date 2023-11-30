<script>
    import Icon from '@iconify/svelte';
    import HeaderSliderCmpnt from '../lib/components/home-components/HeaderSliderCmpnt.svelte';
    import CelebritySlider from '../lib/components/home-components/CelebritySlider.svelte';
    import ServiceSection from '../lib/components/home-components/ServiceSection.svelte';
    import CollectionSlider from '../lib/components/home-components/CollectionSlider.svelte';
    import { menCollectionData, womenCollectionData } from '../lib/store/dummydata';
    import Support from '../lib/components/Support.svelte';
    import { allProductsData } from '../lib/store/store';
    import HeroSection from '../lib/components/home-components/HeroSection.svelte';
    import PopularCat from '../lib/components/home-components/PopularCat.svelte';
    import SaphireCollection from '../lib/components/home-components/SaphireCollection.svelte';
    import HotDeals from '../lib/components/home-components/HotDeals.svelte';
    import YoutubeVideo from '../lib/components/home-components/YoutubeVideo.svelte';

    let titleCssMen= "text-transparent capitalize bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600"
    let titleCssWomen= "text-transparent capitalize bg-clip-text bg-gradient-to-r from-purple-600 to-pink-400"
    let productCardTypeCssMen = "bg-gradient-to-r from-cyan-600 to-teal-500"

    let subCategory = [
        "Chains", "pendants", "Rings", "Earrings", "Bracelets", "Watches", "Collections", "Special Deals"
    ]
</script>
<HeroSection {titleCssMen} {titleCssWomen} />
<!-- <HeaderSliderCmpnt/> -->
<!-- <ServiceSection/> -->
<!-- <CelebritySlider/> -->
<div class="relative">
    <img src="https://d186vdbjetg11u.cloudfront.net/static/media/holiday-deals-desktop.4ae49edb320218167a71.webp" alt="">
    <div class=" absolute top-0 w-full h-full flex items-center justify-center flex-col">
        <div class="flex items-center justify-center flex-col bg-white/60 p-5 rounded-xl shadow">
            <h1 class={`text-xl md:text-2xl capitalize`}>Shop Multicolor</h1>
            <h1 class={`text-2xl md:text-4xl capitalize  m-5 font-semibold `} >Saphire Collection</h1>
            <p class=" cursor-pointer border border-red-500 text-white font-bold px-5 py-3 rounded-[35px] text-lg bg-red-500 hover:text-red-500 hover:bg-white">Best Deal</p>

        </div>
    </div>
</div>

<CollectionSlider 
    intervalTime={2000} 
    {subCategory} 
    products={$allProductsData} 
    name={"shop Popular Men's Deal"} 
    titleCss={titleCssMen}
    productCardTypeCss={productCardTypeCssMen}
    />

<CollectionSlider 
    intervalTime={2500} 
    subCategory={womenCollectionData.subCategory} 
    products={$allProductsData}
    name={womenCollectionData.title} 
    titleCss={womenCollectionData.titleCss} 
    productCardTypeCss={womenCollectionData.productCardTypeCss}
    />

<PopularCat/>
<SaphireCollection/>
<Support/>

<HotDeals/>
<div class="bg-black text-white flex flex-col md:flex-row items-center justify-around ">
    <div class="w-full md:w-1/3 aspect-square overflow-hidden flex items-center justify-center">
        <img class="w-1/2" src="https://d186vdbjetg11u.cloudfront.net/static/media/lionMobile.21426256cdacc4be4e11.webp" alt="">
    </div>
    <div class="w-full md:w-2/3 flex items-center gap-3 flex-col uppercase p-5 text-start">
        <section  class="w-full flex items-center justify-center py-10">
            <iframe class="w-[80%] h-auto aspect-[4/2] rounded " width="560" height="315" src="https://www.youtube.com/embed/nqGbaLGFCFo?si=QMBbmSrOH_rf_yL_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </section>
        <h1 class="text-lg md:text-2xl lg:text-6xl font-bold">our merchandise is</h1>
        <h1 class="text-xl md:text-3xl font-bold">100% guaranteed</h1>
        <h1 class="font-bold">As described or full money back</h1>
    </div>
</div>
<!-- <YoutubeVideo/> -->
