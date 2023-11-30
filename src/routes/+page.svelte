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
<div class="relative flex  flex-col">
    <img src="https://d186vdbjetg11u.cloudfront.net/static/media/holiday-deals-desktop.4ae49edb320218167a71.webp" alt="">
    <div class="hidden absolute top-0 w-full h-full md:flex items-center justify-center flex-col">
        <div class="flex items-center justify-center flex-col bg-white/60 p-2  lg:p-5 rounded-xl shadow">
            <h1 class={`md:text-md lg:text-2xl capitalize`}>Shop Multicolor</h1>
            <h1 class={`text-md  lg:text-4xl capitalize  m-5 font-semibold `} >Saphire Collection</h1>
            <p class=" cursor-pointer border border-red-500 text-white font-bold p-1 md:px-3 md:py-1 px-5 py-3 rounded-[35px] text-xs md:text-sm lg:text-lg bg-red-500 hover:text-red-500 hover:bg-white">Best Deal</p>

        </div>
    </div>
    <div class="md:hidden flex items-center justify-center flex-col w-full bg-white/60">
        <div class="flex items-center justify-center flex-col  p-2  shadow">
            <h2 class="capitalize">Shop Multicolor</h2>
            <h2 class={`text-md  capitalize font-semibold `} >Saphire Collection</h2>
            <p class=" cursor-pointer border border-blue-500 text-white font-bold px-3 py-1   rounded-[35px] text-xs md:text-sm lg:text-lg bg-blue-500 hover:text-blue-500 hover:bg-white">Best Deal</p>

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

<HotDeals/>

<YoutubeVideo/>
<Support/>

