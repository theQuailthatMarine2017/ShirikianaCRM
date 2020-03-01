<template>
<div class="analytics">
    <div class="q-pa-md">
      <q-option-group
                v-model="panel"
                inline
                :options="[
                { label: 'Projects', value: 'projects_overview' },
                { label: 'Sales', value: 'sales_overview' },
                { label: 'Members', value: 'members_overview' }
                ]"
            />

            <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders">


<q-tab-panel name="projects_overview">
<div class="text-h6 text-left">Projects Report</div>
		<div class="row justified">
			
      <div class="col-12 col-md">
        <apexchart width="100%" type="bar" :options="barChartOptions" :series="barChartseries"></apexchart>
      </div>
	  <div class="col-12 col-md">
        <apexchart width="100%" type="pie" :options="donutProjectsChartOptions" :series="donutProjectsChartseries"></apexchart>
      </div>
      <div class="col-12 col-md">
        <apexchart width="100%" type="line" :options="lineChartOptions" :series="lineChartseries"></apexchart>
      </div>

    </div>

	<div class="row justified">

	  <div class="col-12 col-md">
        <apexchart width="100%" type="pie" :options="donutChartOptions" :series="donutChartseries"></apexchart>
      </div>

	  <div class="col-12 col-md">
        <apexchart width="100%" type="bar" :options="barChartTasksOptions" :series="barChartTasksseries"></apexchart>
      </div>

	  <div class="col-12 col-md">
        <apexchart width="100%" type="bar" :options="barChartMemberOptions" :series="barChartMemberseries"></apexchart>
      </div>
	  
	  
    </div>
</q-tab-panel>

<q-tab-panel name="sales_overview">
<div class="text-h6 text-left">Sales Report</div>
<div class="row justified">
			
      <div class="col-12 col-md">
        <apexchart width="100%" type="bar" :options="areaChartOptions" :series="areaChartseries"></apexchart>
      </div>

      <div class="col-12 col-md">
        <apexchart width="100%" type="area" :options="barSalesChartOptions" :series="barSalesChartseries"></apexchart>
      </div>

      <div class="col-12 col-md">
        <apexchart width="100%" type="bar" :options="areaChartOptions" :series="areaChartseries"></apexchart>
      </div>

    </div>

    <div class="row justified">
      <div class="col-12 col-md">
          <apexchart width="100%" type="bar" :options="barProjectsChartOptions" :series="barProjectsChartseries"></apexchart>
      </div>

      <div class="col-12 col-md">
          <apexchart width="100%" type="donut" :options="donutLeadsChartOptions" :series="donutLeadsChartseries"></apexchart>
      </div>

    </div>

    <div class="row justified">
      <div class="col-12 col-md">
          <apexchart width="100%" type="bar" :options="barPaymentsChartOptions" :series="barPaymentsChartseries"></apexchart>
      </div>

      <div class="col-12 col-md">
          <apexchart width="100%" type="bar" :options="barPayments2ChartOptions" :series="barPayments2Chartseries"></apexchart>
      </div>

    </div>

</q-tab-panel>



            </q-tab-panels>

    </div>
</div>
</template>

<script>
export default{

	data() {
      return {
        panel:'projects_overview',
        barPayments2ChartOptions: {
          chart: {
            id: 'vuechart-example',
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug','Sep','Oct','Nov','Dec'],
          },
          title: {
            text: "Payment Requests Monthly",
            align: 'left'
          },
          dataLabels: {
          enabled: false
        }
        },
        barPayments2Chartseries: [{
          name: 'Salary - Bank Transfer',
          data: [33000,19000, 20000, 45000,54000,23000,43000,34000,0,0,0,0]
        },
        {
          name: 'Salary - Mobile Money',
          data: [43000,29000, 26000, 49000,64000,33000,43900,38000,0,0,0,0]
        },
        {
          name: 'Float - Mobile Money',
          data: [23000,39000, 23000, 39000,74000,43000,73900,28000,0,0,0,0]
        },
        {
          name: 'Float - Bank Transfer',
          data: [29000,19000, 13000, 19000,14000,23000,13900,8000,0,0,0,0]
        }],
        barPaymentsChartOptions: {
          chart: {
            id: 'vuechart-example',
          },
          xaxis: {
            categories: ['Salary - Bank Transfer', 'Salary - Mobile Money', 'Float - Bank Transfer', 'Float - Mobile Money'],
          },
          title: {
            text: "Payment Requests by Amount",
            align: 'left'
          },
          colors: ['#00a700'
        ]
        },
        barPaymentsChartseries: [{
          name: 'Sum of Payment Requests',
          data: [33000,19000, 20000, 45000]
        }],
        
        barSalesChartOptions: {
          chart: {
            id: 'vuechart-example',
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug','Sep','Oct','Nov','Dec'],
          },
          title: {
            text: "Sum Invoices & Receipts",
            align: 'left'
          },
          colors: ['#FF0000', '#00e600'
        ]
        },
        barSalesChartseries: [{
          name: 'Sum of Invoices Amount Monthly',
          data: [6000, 5000, 3000, 5000, 4000, 4000, 2000,3000,0,0,0,0]
        },
        {
          name: 'Sum of Receipts Amount Monthly',
          data: [4000, 4000, 2000, 5000, 2000, 3000, 1000,3000,0,0,0,0]
        }],
        areaChartOptions: {
          chart: {
            id: 'vuechart-example',
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug','Sep','Oct','Nov','Dec'],
          },
          title: {
            text: "Invoices & Receipts Issued per Client",
            align: 'left'
          },
          colors: ['#FF0000', '#00e600'],
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
          dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        },
        areaChartseries: [{
          name: 'Total Invoices Issued Monthly',
          data: [16, 15, 13, 15, 14, 14, 12,13,0,0,0,0]
        },
        {
          name: 'Total Receipts Issued Monthly',
          data: [14, 14, 12, 15, 12, 13, 11,13,0,0,0,0]
        }
        ],
        barProjectsChartOptions: {
          chart: {
            id: 'vuechart-example',
          },
          xaxis: {
            categories: ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5', 'Project 6'],
          },
          title: {
            text: "Budget per Project",
            align: 'left'
          },
          colors: ['#00a700']
        },
        barProjectsChartseries: [{
          name: 'Total Projects Created',
          data: [30000,100000, 20000, 55000, 23000, 67000]
        }],
        barChartOptions: {
          chart: {
            id: 'vuechart-example',
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug','Sep','Oct','Nov','Dec'],
          },
          title: {
            text: "Projects Created Monthly " + new Date().getFullYear(),
            align: 'left'
          },
          colors: ['#00a700']
        },
        barChartseries: [{
          name: 'Total Projects Created',
          data: [2, 1, 0, 1, 1, 0, 2,0,2,0,1,3]
        }],
		barChartTasksseries: [{
          name: 'Completed On Time',
          data: [80]
        },
        {
          name: 'Not Completed On Time',
          data: [24]
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
			text: "Tasks Completion per Project Member",
			align: 'left'
      },
      colors: ['#00a700']
        },
		barChartTasksOptions: {
          chart: {
            id: 'vuechart-example',
          },
          xaxis: {
            categories: ["On Time","Not On Time"],
      },
       colors: ['#00e600','#FF0000'],
		  title: {
			text: "Tasks Completion Timing",
			align: 'left'
      },
        },
		lineChartOptions: {
          chart: {
            id: 'vuechart-example',
          },
          title: {
			text: "Tasks Completion Trend",
			align: 'left'
      },
      colors: ['#00e600'],
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Junw', 'Jul', 'Aug','Sep','Oct','Nov','Dec'],
          },
		  markers: {
			size: 3,
		  }
        },
        lineChartseries: [{
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 40, 33, 41]
        }],
		donutChartOptions: {
          title: {
			text: "Tasks Completion Rate",
			align: 'left'
      },
      colors: ['#FF0000', '#00e600'],
		  labels: ['Not Completed', 'Completed']
        },
		donutChartseries: [83,228],
		donutProjectsChartOptions: {
          title: {
			text: "Projects Completion Rate",
			align: 'left'
      },
      colors: ['#FF0000', '#00e600'],
		  labels: ['Not Completed', 'Completed']
        },
		donutProjectsChartseries: [3,8],
		donutLeadsChartOptions: {
          title: {
			text: "Business Leads Conversion Rate",
			align: 'left'
      },
      colors: ['#FF0000', '#00e600'],
		  labels: ['Pending', 'Converted']
        },
        donutLeadsChartseries: [3,8],
        donutPaymentsChartOptions: {
          title: {
			text: "Payment Request Share",
			align: 'left'
      },
      labels: ['Salary Bank Transfer', 'Salary Mobile Money', 'Float Bank Transfer', 'Float Mobile Money']
        },
        donutPaymentsChartseries: [33,19,20,45]
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