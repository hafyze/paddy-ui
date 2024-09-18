<script lang="ts">
    import { BarChart } from '@layercake/charts';
    
    // Example data for crop growth metrics
    const data = [
      { week: 1, height: 5 },
      { week: 2, height: 10 },
      { week: 3, height: 15 },
      { week: 4, height: 20 },
      { week: 5, height: 25 }
    ];
  
    const options = {
      x: d => d.week,  // X-axis for weeks
      y: d => d.height,  // Y-axis for crop height
      margin: { top: 10, right: 10, bottom: 30, left: 40 },  // Chart margins
      color: 'steelblue'  // Bar color
    };
  </script>
  
  <BarChart {data} {options} width={300} height={200} />
  