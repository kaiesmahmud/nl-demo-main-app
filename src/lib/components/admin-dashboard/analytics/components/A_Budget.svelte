<script>
	import { iconsImgs } from './../utils/images.js';
	import { budget } from './../dummy_data/A_data.js';

</script>

<div class="grid-two-item grid-common grid-c4">
    <div class="grid-c-title">
        <h3 class="grid-c-title-text">Budget</h3>
        <button class="grid-c-title-icon">
            <img src={ iconsImgs.plus } alt="" />
        </button>
    </div>
    <div class="grid-c-top text-silver-v1">
        <h2 class="lg-value">Cash</h2>
        <span class="lg-value">$ 100,000</span>
    </div>
    <div class="grid-c4-content bg-jet">
        <div class="grid-items">
            {#each budget as budget}
                 <!-- content here -->
                 <div class="grid-item" key = { budget.id }>
                     <div class="grid-item-l">
                         <div class="icon">
                             <img src={ iconsImgs.check } alt="" />
                         </div>
                         <p class="text text-silver-v1">{ budget.title } <span>{ budget.type }</span></p>
                     </div>
                     <div class="grid-item-r">
                         <span class="text-silver-v1">$ { budget.amount }</span>
                     </div>
                 </div>
            {/each}
        </div>
    </div>
</div>

<style>
    /* grid c4 */
.grid-c4 .grid-c-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.grid-c4-content {
  margin-top: 20px;
  border-radius: 16px;
}
.grid-c4 .grid-c4-content {
  padding: 12px;
}
.grid-c4 .grid-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
}
.grid-c4 .grid-item-l {
  display: flex;
  align-items: flex-start;
  column-gap: 16px;
}
.grid-c4 .grid-item-l .icon {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.grid-c4 .grid-item-l .icon img {
  width: 20px;
}
.grid-c4 .grid-item-l .text {
  font-weight: 600;
}
.grid-c4 .grid-item-l .text span {
  font-weight: 300;
  font-size: 15px;
  display: block;
  margin-top: 5px;
  opacity: 0.9;
}

</style>