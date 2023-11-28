<script>
    import HeaderSliderCmpnt from '../lib/components/home-components/HeaderSliderCmpnt.svelte';
    import CelebritySlider from '../lib/components/home-components/CelebritySlider.svelte';
    import ServiceSection from '../lib/components/home-components/ServiceSection.svelte';
    import CollectionSlider from '../lib/components/home-components/CollectionSlider.svelte';
    import { menCollectionData, womenCollectionData } from '../lib/store/dummydata';

    
</script>
<HeaderSliderCmpnt/>
<ServiceSection/>
<div class="mt-10">
    <CelebritySlider/>
</div>
<CollectionSlider intervalTime={2000} subCategory={menCollectionData.subCategory} products={menCollectionData.products} name={menCollectionData.title} titleCss={menCollectionData.titleCss}/>
<CollectionSlider intervalTime={2500} subCategory={womenCollectionData.subCategory} products={womenCollectionData.products} name={womenCollectionData.title} titleCss={womenCollectionData.titleCss}/>
<!-- <CollectionSlider intervalTime={3000} subCategory={menCollectionData.subCategory} products={menCollectionData.products} name={menCollectionData.title}/> -->
<div class="bg-black text-white flex flex-col md:flex-row items-center justify-around ">
    <div class="w-full md:w-1/2 aspect-square overflow-hidden flex items-center justify-center">
        <img class="w-1/2" src="https://d186vdbjetg11u.cloudfront.net/static/media/lionMobile.21426256cdacc4be4e11.webp" alt="">
    </div>
    <div class="w-full md:w-1/2 flex items-center gap-3 flex-col uppercase p-5 text-center">
        <h1 class="text-2xl md:text-4xl lg:text-6xl font-bold">our merchandise is</h1>
        <h1 class="text-3xl md:text-5xl font-bold">100% guaranteed</h1>
        <h1 class="font-bold">As described or full money back</h1>
    </div>
</div>
