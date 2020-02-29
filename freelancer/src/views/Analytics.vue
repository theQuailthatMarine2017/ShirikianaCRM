<template>
<div class="analytics">
    <div class="q-pa-md">
<div class="text-h6 text-left">Project Analytics</div>
		<div class="row justified">
			
      <div class="col-12 col-md">
        <apexchart width="100%" type="bar" :options="barChartOptions" :series="barChartseries"></apexchart>
      </div>
	  <div class="col-12 col-md">
        <apexchart width="100%" type="donut" :options="donutProjectsChartOptions" :series="donutProjectsChartseries"></apexchart>
      </div>
      <div class="col-12 col-md">
        <apexchart width="100%" type="line" :options="lineChartOptions" :series="lineChartseries"></apexchart>
      </div>

    </div>

	<div class="row justified">

	  <div class="col-12 col-md">
        <apexchart width="100%" type="donut" :options="donutChartOptions" :series="donutChartseries"></apexchart>
      </div>

	  <div class="col-12 col-md">
        <apexchart width="100%" type="bar" :options="barChartTasksOptions" :series="barChartTasksseries"></apexchart>
      </div>

	  <div class="col-12 col-md">
        <apexchart width="100%" type="bar" :options="barChartMemberOptions" :series="barChartMemberseries"></apexchart>
      </div>
	  
	  
    </div>

    </div>


</div>
</template>

<script>
export default{

	data() {
      return {
        barChartOptions: {
          chart: {
            id: 'vuechart-example',
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          },
        },
        barChartseries: [{
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 81]
        }],
		barChartTasksseries: [{
          name: 'series-1',
          data: [80, 24,]
        }],
		barChartMemberseries: [{
          name: 'Task Completion per Project Member',
          data: [30, 11, 21, 5, 11, 14]
        }],
		barChartMemberOptions: {
          chart: {
            id: 'vuechart-example',
          },
          xaxis: {
            categories: ["Member 1","Member 2","Member 3", "Member 4", "Member 5", "Member 6"],
          },
		  title: {
			text: "Tasks Completion (Project Members)",
			align: 'left'
		  }
        },
		barChartTasksOptions: {
          chart: {
            id: 'vuechart-example',
          },
          xaxis: {
            categories: ["On Time","Not On Time"],
		  },
		  title: {
			text: "Tasks Completion Timing",
			align: 'left'
		  }
        },
		lineChartOptions: {
          chart: {
            id: 'vuechart-example',
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          },
		  markers: {
			size: 3,
		  }
        },
        lineChartseries: [{
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 81]
        }],
		donutChartOptions: {
          title: {
			text: "Tasks Completion Rate",
			align: 'left'
		  },
		  labels: ['Not Completed', 'Completed']
        },
		donutChartseries: [3,8],
		donutProjectsChartOptions: {
          title: {
			text: "Projects Completion Rate",
			align: 'left'
		  },
		  labels: ['Completed', 'Not Completed']
        },
		donutProjectsChartseries: [8,3],
		
      }
      }
}
</script>

<style scoped>

.section{
	padding:15px;
}

.chart-wrapper {
  width: 100%;
  height: 100%;
}

.justified{
	text-align:center;
}


</style>