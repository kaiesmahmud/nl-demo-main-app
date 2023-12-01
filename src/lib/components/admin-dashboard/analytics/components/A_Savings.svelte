<script>
	import { savings } from './../dummy_data/A_data.js';
	import { iconsImgs, personsImgs } from './../utils/images.js';

</script>
<div class="subgrid-two-item grid-common grid-c6">
    <div class="grid-c-title">
        <h3 class="grid-c-title-text">Savings</h3>
        <button class="grid-c-title-icon">
            <img src={ iconsImgs.plus } alt="" />
        </button>
    </div>
    <div class="grid-c6-content">
        <div class="grid-items">
            {#each savings as saving}
                 <!-- content here -->
                 <div class="grid-item" key = { saving.id }>
                     <div class="grid-item-top">
                         <div class="grid-item-top-l">
                             <div class="avatar img-fit-cover">
                                 <img src={ personsImgs.person_one }    alt="" />
                             </div>
                             <p class="text text-silver-v1">{ saving.title }</p>
                         </div>
                         <div class="grid-item-top-r">
                             <span class="text-silver-v1">$ { saving.saving_amount }</span>
                         </div>
                     </div>
                     <div class="grid-item-bottom">
                         <div class="grid-item-badges">
                             <span class="grid-item-badge">Date taken { saving.date_taken }</span>
                             <span class="grid-item-badge">Amount left $ { saving.amount_left }</span>
                         </div>
                         <div class="grid-item-progress">
                             <div class="grid-item-fill"></div>
                         </div>
                     </div>
                 </div>
            {/each}
        </div>
    </div>
</div>

<style>
    /* grid c6 */
.grid-c6 .grid-item .avatar {
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 100%;
}
.grid-c6 .grid-item-top-l {
  display: flex;
  align-items: center;
  column-gap: 10px;
}
.grid-c6 .grid-item-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}
.grid-c6 .grid-item-top-r {
  font-weight: 600;
}
.grid-c6 .grid-item-badges {
  display: flex;
  flex-wrap: wrap;
}
.grid-c6 .grid-item-badge {
  color: #8a8587;
  background-color: var(--clr-jet);
  display: inline-block;
  border-radius: 16px;
  padding: 4px 6px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 14px;
  margin-right: 6px;
}
.grid-c6 .grid-item-progress {
  background-color: var(--clr-primar-light);
  height: 10px;
  border-radius: 100vh;
  margin-top: 8px;
}
.grid-c6 .grid-item-fill {
  width: 60%;
  height: 10px;
  background-color: var(--clr-pumpkin);
  border-radius: 100vh;
}

</style>