<script>
	  import { HomePageData, menCollectionData } from '../../store/dummydata.js';
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    // Default theme
    import '@splidejs/svelte-splide/css';

    // or other themes
    import '@splidejs/svelte-splide/css/skyblue';
    import '@splidejs/svelte-splide/css/sea-green';

    // or only core styles
    import '@splidejs/svelte-splide/css/core';
    export let intervalTime , products , name ,subCategory ,titleCss ,productCardTypeCss

    let options={
        type   : 'loop',
        drag   : 'free',
        snap   : true,
        autoplay: true,
        interval: intervalTime,
        // perPage: 3,
        arrows: false,
        pagination: false,
        autoWidth: true,
        pauseOnHover: true,
        // paginationKeyboard: false
        breakpoints: {
          640: {
            autoplay: false              },
        // 4040: {
        // 	perPage: 4,
        //     },
        }

  }
</script>
<h1 class={`text-2xl md:text-4xl uppercase  m-5 font-bold ${titleCss}`}>{name}:</h1>
<div class="flex flex-wrap gap-2 px-4 md:px-8 select-none">
  {#each subCategory as c}
     <a href="/" class="px-2 py-1 md:px-5 md:py-3 rounded-[20px] text-xs md:text-sm font-semibold bg-white shadow-lg hover:bg-slate-800 hover:text-white transition-all ease-in">
      {c}
     </a>
  {/each}
</div>
<Splide  options={options}
  aria-label="My Favorite Images" class="w-full cursor-pointer">
    {#each  products as item}
        <SplideSlide  class="w-[55%] md:w-[40%] lg:w-[20%] flex items-center justify-center m-1">
          <a href={item.url} class=" overflow-visiblerounded shadow-lg bg-white m-3 md:m-5 py-3 md:py-5 rounded">
            <p class={`font-light text-sm md:text-xl uppercase py-2 px-3 ${productCardTypeCss}`}>{item.type}</p>
            <div class="relative w-full">
                <div class=" object-center aspect-square overflow-hidden rounded flex items-center justify-center bg-white">
                    <img src={item.img} alt={item.name} class="rounded hover:scale-110 transition-all ease-in">
                </div>
            </div>
            <div class="text-sm p-2">
              {item.name.substring(0,35)}...  
            </div>
            <div class="p-1 md:p-2 flex items-center justify-between">
              <div class="rounded-[25px] hover:bg-green-500 border border-green-500 bg-slate-100 p-1 md:p-2 px-3 text-xs md:text-sm transition-all ease-in font-bold">${item.price}</div>
              <div class="rounded-[25px] hover:bg-red-500 border border-red-500 bg-slate-100 p-1 md:p-2 px-2 md:px-3 text-xs  md:text-sm transition-all ease-in">Make Offer</div>
            </div>
          </a>
        </SplideSlide>
    {/each}
  </Splide>

  <style>

  </style>