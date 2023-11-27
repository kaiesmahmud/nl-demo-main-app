<script>
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    // Default theme
    import '@splidejs/svelte-splide/css';

    // or other themes
    import '@splidejs/svelte-splide/css/skyblue';
    import '@splidejs/svelte-splide/css/sea-green';

    // or only core styles
    import '@splidejs/svelte-splide/css/core';
    let slides = [
        "https://d20q60vkvwzi8p.cloudfront.net/gallery/Custom-Diamond-New-York-Skyline-Key-Charm-Pendant-64105-Stone-6.jpg",
        "https://d20q60vkvwzi8p.cloudfront.net/gallery/Custom-Diamond-New-York-Skyline-Key-Charm-Pendant-64105-Stone-6.jpg",
        "https://d20q60vkvwzi8p.cloudfront.net/gallery/Custom-Diamond-New-York-Skyline-Key-Charm-Pendant-64105-Stone-6.jpg"
    ]

    let options={
    type : 'loop',
    autoplay: true,
    perPage : 2,
    interval: 3000,
    // arrows: false
  }
</script>
<Splide  options={options}
  aria-label="My Favorite Images" class=" cursor-pointer">
    {#each slides as item}
        <SplideSlide>
        <img src={item} alt="Imsage 1"/>
        </SplideSlide>
         <!-- content here -->
    {/each}
    <SplideSlide>
      <img src="https://d20q60vkvwzi8p.cloudfront.net/gallery/Custom-Diamond-New-York-Skyline-Key-Charm-Pendant-64105-Stone-2.jpg" alt="s 2"/>
    </SplideSlide>
  </Splide>