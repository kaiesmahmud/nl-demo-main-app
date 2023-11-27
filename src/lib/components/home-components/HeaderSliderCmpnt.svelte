<script>
	import { HomePageData } from './../../store/dummydata.js';
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    // Default theme
    import '@splidejs/svelte-splide/css';

    // or other themes
    import '@splidejs/svelte-splide/css/skyblue';
    import '@splidejs/svelte-splide/css/sea-green';

    // or only core styles
    import '@splidejs/svelte-splide/css/core';

    let options={
    type : 'loop',
    autoplay: true,
    // perPage : 2,
    interval: 3000,
    arrows: false,
    pagination: false,
    // width: '100%',
  }
</script>
<Splide  options={options}
  aria-label="My Favorite Images" class="w-full cursor-pointer">
    {#each  HomePageData.headerSliders as item(item.id)}
        <SplideSlide >
          <div class=" rounded shadow-xl">
            <img src={item.url} alt={item.id}>
          </div>
        </SplideSlide>
    {/each}
  </Splide>

  <style>

  </style>