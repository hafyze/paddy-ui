<script lang="ts">
	import { Card } from 'flowbite-svelte';
	import { Chart, Svg, Axis, Bars } from 'layerchart';
	import { scaleBand } from 'd3-scale';

	// utils/formatDate.ts
	function formatDate(
		date: Date,
		periodType: PeriodType,
		options: { variant?: string } = {}
	): string {
		const dateOptions: Intl.DateTimeFormatOptions = {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
			...options
		};

		return new Intl.DateTimeFormat('en-US', dateOptions).format(date);
	}

	// Define a type for period types if needed
	type PeriodType = 'Day' | 'Month' | 'Year';

	// Sample data for the chart
	const data = [
		{ date: new Date(2024, 8, 1), value: 5 },
		{ date: new Date(2024, 8, 8), value: 10 },
		{ date: new Date(2024, 8, 15), value: 15 },
		{ date: new Date(2024, 8, 22), value: 20 },
		{ date: new Date(2024, 8, 29), value: 25 }
	];
</script>

<div class="text-dark m-3 text-center text-3xl dark:text-white">
	<p>DASHBOARD</p>
</div>

<!-- Dashboard Grid Layout using Flowbite Cards -->
<div class="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
	<!-- Harvest Schedule Card -->
	<Card href="/harvest-schedule">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			Upcoming Harvest
		</h5>
		<p class="font-normal leading-tight text-gray-700 dark:text-gray-400">
			Next Harvest Date: <strong>Sept 25, 2024</strong><br />
			Yield Estimate: <strong>10,000 kg</strong>
		</p>
		<progress value="70" max="100" class="w-full"></progress>
		<p class="text-sm text-gray-500 dark:text-gray-400">70% Ready</p>
	</Card>

	<!-- Field Conditions Card -->
	<Card href="/field-conditions">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			Field Conditions
		</h5>
		<p class="font-normal leading-tight text-gray-700 dark:text-gray-400">
			Soil Moisture: <strong>65%</strong><br />
			Weather: <strong>Sunny, 30°C</strong>
		</p>
	</Card>

	<!-- Planting Optimization Card -->
	<Card href="/planting-optimization">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			Planting Optimization
		</h5>
		<p class="font-normal leading-tight text-gray-700 dark:text-gray-400">
			Optimal Planting Time: <strong>Next 3 Days</strong><br />
			Suggested Rotation: <strong>Field A → Field B</strong>
		</p>
	</Card>

	<!-- Crop Growth Metrics Card with Chart Implementation -->
	<Card href="/crop-growth-metrics">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			Crop Growth Metrics
		</h5>
		<p class="font-normal leading-tight text-gray-700 dark:text-gray-400">
			Average Growth Rate: <strong>12 cm/week</strong>
		</p>

		<!-- Chart for Crop Growth Metrics -->
    <div class="h-[300px] rounded border p-4">
      <Chart
        {data}
        x="date"
        xScale={scaleBand().padding(0.4)}
        y="value"
        yDomain={[0, null]}
        yNice={4}
        padding={{ left: 16, bottom: 24 }}
      >
        <Svg>
          <Axis placement="left" grid rule 
                tickLabelProps={{
                  class:"fill-white"
                }}/>
          <Axis
            placement="bottom"
            format={(d) => formatDate(d, 'Day', { variant: 'short' })}
            rule
            tickLabelProps={{
              class:"fill-white"
            }}
          />
          <Bars radius={4} strokeWidth={1} style="fill: white; color: white;" />
        </Svg>
      </Chart>
    </div>
  </Card>

	<!-- Historical Yields Card -->
	<Card href="/historical-yields">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			Historical Yields
		</h5>
		<p class="font-normal leading-tight text-gray-700 dark:text-gray-400">
			Last Season Yield: <strong>50,000 kg</strong>
		</p>
		<div class="h-32 bg-gray-200 dark:bg-gray-700"></div>
		<!-- Placeholder for a graph -->
	</Card>

	<!-- Field Layout Map Card -->
	<Card href="/field-layout">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			Field Layout
		</h5>
		<div class="h-40 bg-gray-200 dark:bg-gray-700"></div>
		<!-- Placeholder for an interactive map -->
	</Card>
</div>
