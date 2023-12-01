<script>
	import { reportData } from './../dummy_data/A_data.js';
	import { iconsImgs } from './../utils/images.js';

</script>


<div class="grid-two-item grid-common grid-c3">
    <div class="grid-c-title">
        <h3 class="grid-c-title-text">Report</h3>
        <button class="grid-c-title-icon">
            <img src={ iconsImgs.plus } alt="no data" />
        </button>
    </div>
    <div class="grid-c3-content">
        <div class="grid-chart">
            <div class="chart-vert-value">
                <span>100</span>
                <span>75</span>
                <span>50</span>
                <span>25</span>
                <span>0</span>
            </div>
            {#each reportData as report}
                 <!-- content here -->
                 <div class="grid-chart-bar" >
                     <div class="bar-wrapper">
                         <div class={`bar-item1 ${report.value1 !== null && "h-[40%]"}`} ></div>
                         <div class={`bar-item2 ${report.value1 !== null && "h-[60%]"}`} ></div>
                         <!-- <div class="bar-item2" style={{ height: `${report.value2 !== null ? "60%" : ""}` }}></div> -->
                     </div>
                     <span class="grid-hortz-value">Jan</span>
                 </div>
            {/each}
            
        </div>
    </div>
</div>

<style>
    /* grid c3 */
.grid-c3 {
  display: flex;
  flex-direction: column;
}
.grid-c3-content {
  flex: 1;
}
.grid-chart {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: stretch;
  height: 100%;
}
.chart-vert-value {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 28px;
}
.grid-chart-bar {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.grid-chart-bar .bar-wrapper {
  flex: 1;
  width: 32px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 10px;
  background-color: var(--clr-primar-light);
  position: relative;
  overflow: hidden;
}
.grid-chart-bar .grid-hortz-value {
  margin-top: 12px;
}
.grid-chart-bar .bar-item1 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--clr-pumpkin);
  border-radius: 10px;
}
.grid-chart-bar .bar-item2 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: var(--clr-peach);
  border-radius: 10px;
}
.grid-chart-bar:nth-child(3) .bar-wrapper .bar-item1 {
  z-index: 1;
}

@media screen and (max-width: 992px) {
  .grid-c3 {
    grid-column-start: 1;
    grid-column-end: 3;
    height: 240px;
  }
}

</style>