<template>
  <div class="absolute left-0 top-5 ps-2">
    <div class="flex items-center gap-[6px]">
      <span class="size-[13px] bg-lawnGreen rounded-full"></span>
      <p class="font-medium text-sm leading-[150%] text-lightGray font-plus-jakarta">
        Total Findings
      </p>
    </div>
    <p class="font-semibold text-2xl text-darkBrown font-plus-jakarta mt-2 leading-[150%]">
      17K
    </p>
  </div>
  <div class="absolute left-1/2 -translate-x-1/2 top-5">
    <div class="flex items-center gap-[6px]">
      <span class="size-[13px] bg-lightGreen rounded-full"></span>
      <p class="font-medium text-sm leading-[150%] text-lightGray font-plus-jakarta">
        Vulnerabilities Aggregated
      </p>
    </div>
    <p class="font-semibold text-2xl text-darkBrown font-plus-jakarta mt-2 leading-[150%]">
      13K
    </p>
  </div>
  <div class="absolute right-0 top-5">
    <div class="flex items-center gap-[6px]">
      <span class="size-[13px] bg-purple rounded-full"></span>
      <p class="font-medium text-sm leading-[150%] text-lightGray font-plus-jakarta">
        Vulnerabilities Priorizated
      </p>
    </div>
    <p class="font-semibold text-2xl text-darkBrown font-plus-jakarta mt-2 leading-[150%]">
      4.0K
    </p>
  </div>
  <p class="text-darkGray font-plus-jakarta font-medium text-sm leading-[150%] absolute top-[30%] left-[22%]">
    100%
  </p>
  <p class="text-darkGray font-plus-jakarta font-medium text-sm leading-[150%] absolute top-[38%] left-[50%]">
    35%
  </p>
  <p class="text-darkGray font-plus-jakarta font-medium text-sm leading-[150%] absolute top-[45%] right-[20%]">
    14%
  </p>
  <div class="w-full h-[400px]" ref="chartdiv"></div>

</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

const chartdiv = ref(null);
let root = null;
let chart = null;

onMounted(() => {
  root = am5.Root.new(chartdiv.value);
  root.setThemes([am5themes_Animated.new(root)]);

  chart = root.container.children.push(
    am5percent.SlicedChart.new(root, {
      layout: root.horizontalLayout
    })
  );

  // Define data
  let data = [{
    name: "Total Findings",
    sales: 17000
  }, {
    name: "Vulnerabilities Aggregated",
    sales: 13000
  }, {
    name: "Vulnerabilities Priorizated",
    sales: 4000
  }];


  // Create series
  let series = chart.series.push(
    am5percent.FunnelSeries.new(root, {
      name: "Series",
      valueField: "sales",
      orientation: "horizontal",
      categoryField: "name",
      bottomRatio: 1,
      alignLabels: false,
    })
  );

  series.labels.template.setAll({
    disabled: true,
    visible: false,
  });
  series.get("colors").set("colors", [
    am5.color('#FF9A3B'),
    am5.color('#1EC611'),
    am5.color('#8221FF')
  ]);

  series.links.template.setAll({
    width: 0
  });
  series.data.setAll(data);
  // make fills gradients
  series.slices.template.setAll({
    strokeOpacity: 0,
    fillGradient: am5.LinearGradient.new(root, {
      rotation: 0,
      stops: [{ brighten: -0.2 }, { brighten: 0.4 }, { brighten: 0.4 }]
    })
  });

  // // Add legend
  // let legend = chart.children.push(am5.Legend.new(root, {
  //     centerX: am5.percent(50),
  //     y: am5.percent(50),
  //     layout: root.verticalLayout
  // }));

  // legend.data.setAll(series.dataItems);

});

onBeforeUnmount(() => {
  if (root) {
    root.dispose();
  }
});
</script>
<style>
.am5-layer-0 {
  height: 270px !important;
  bottom: 0 !important;
  top: unset !important;
}

.am5-layer-30 {
  visibility: hidden !important;
}
</style>