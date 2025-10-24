<template>
  <div
    class="w-full"
    :style="{ height: height }">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, onBeforeUnmount } from "vue";
import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(...registerables, ChartDataLabels);

// Props do componente
interface Props {
  labels?: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string | string[];
    borderWidth?: number;
  }[];
  pointRadius?: number;

  height?: string;
  showLegend?: boolean;
  showGrid?: boolean;
  animate?: boolean;
  minValue?: number;
  maxValue?: number;
  title?: string;
  indexAxis?: "x" | "y"; // 'y' para horizontal
}

const props = withDefaults(defineProps<Props>(), {
  height: "450px",
  showLegend: true,
  showGrid: true,
  animate: true,

  indexAxis: "x", // Padrão horizontal
});

const chartCanvas = ref<HTMLCanvasElement | null>(null);
let chartInstance: Chart | null = null;

const createChart = () => {
  if (!chartCanvas.value) return;

  // Destroi a instância anterior se existir
  if (chartInstance) {
    chartInstance.destroy();
  }

  const ctx = chartCanvas.value.getContext("2d");
  if (!ctx) return;

  // Cores padrão caso não sejam fornecidas
  const defaultColors = [
    "#222021",
    "#00512a",
    "#3a0760",
    "#017267",
    "#bbaf05",
    "#85010f",
    "#bbaf05",
  ];

  // Prepara os datasets com cores padrão se necessário
  const preparedDatasets = props.datasets.map((dataset, index) => ({
    ...dataset,
    backgroundColor: dataset.backgroundColor || defaultColors[index % defaultColors.length],

    borderColor: dataset.borderColor || defaultColors[index % defaultColors.length],
    borderWidth: dataset.borderWidth || 3,
  }));

  chartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels: props.labels,
      datasets: preparedDatasets,
    },

    options: {
      elements: {
        point: {
          radius: props.pointRadius,
          hoverRadius: 20,
        },
      },
      indexAxis: props.indexAxis,
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 750,
      },
      plugins: {
        datalabels: {
          align: "center",
          anchor: "center",
          color: "white",
          font: {
            size: 18,
            family: "Cyber",
          },
          formatter: (value: number) => value || "",
        },
        legend: {
          display: false,
          position: "top",
          labels: {
            padding: 10,
            font: {
              size: 18,
              family: "Cyber",
            },
          },
        },
        title: {
          display: !!props.title,
          text: props.title || "",
          font: {
            size: 34,
            weight: "normal",
            family: "Cyber",
          },
          padding: {
            top: 10,
            bottom: 10,
          },
        },
        tooltip: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          padding: 12,
          titleFont: {
            size: 14,
          },
          bodyFont: {
            size: 13,
          },
          cornerRadius: 6,
        },
      },
      scales: {
        x: {
          // type: "linear",
          display: false,
          beginAtZero: true,
          min: 0,
          max: props.maxValue,
          grid: {
            display: props.showGrid,
            color: "rgba(0, 0, 0, 0.05)",
          },
          ticks: {
            font: {
              size: 18,
              family: "Cyber",
            },
          },
        },
        y: {
          grid: {
            display: true,
          },
          ticks: {
            font: {
              size: 16,
              family: "Cyber",
            },
          },
        },
      },
    },
  });
};

onMounted(() => {
  createChart();
});

// Reage a mudanças nas props
watch(
  () => [props.labels, props.datasets, props.showLegend, props.showGrid],
  () => {
    createChart();
  },
  { deep: true }
);

onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.destroy();
  }
});
</script>
