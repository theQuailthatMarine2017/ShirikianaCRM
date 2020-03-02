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
    <div class="row">
      <div class="col-12 col-md">
        <div class="text-h6 text-left">Key Insights</div>

        <q-item>
      <q-item-section side>
        <q-avatar size="72px">
          <img src="https://image.flaticon.com/icons/png/512/1466/1466672.png" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-subtitle2 text-weight-bolder">Ksh 750,000</q-item-label>
        <q-item-label class="text-subtitle2 text-weight-bolder">Combined Projects Budget</q-item-label>
      </q-item-section>
    </q-item>

        <q-item>
      <q-item-section side>
        <q-avatar size="72px">
          <img src="https://i.ya-webdesign.com/images/vector-financial-budget-10.png" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-subtitle2 text-weight-bolder">Project 3</q-item-label>
        <q-item-label class="text-subtitle2 text-weight-bolder">Highest Budget</q-item-label>
      </q-item-section>
    </q-item>

    <q-item>
      <q-item-section side>
        <q-avatar size="72px">
          <img src="https://freeiconshop.com/wp-content/uploads/edd/task-done-flat.png" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-subtitle2 text-weight-bolder">Project 4</q-item-label>
        <q-item-label class="text-subtitle2 text-weight-bolder">Most Tasks Completed</q-item-label>
      </q-item-section>
    </q-item>

     <q-item>
      <q-item-section side>
        <q-avatar size="72px">
          <img src="https://lh3.googleusercontent.com/proxy/Mr3ilm5_hXALZ6cgLElrPCwGf-ohFRabRrmqsDgz4LF5DISnrbU2Pnaz30AFYKtJMMaj311zNaTSWCEKSuaKdrxoxEk0bX8FlgUCNgznL6LU" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-subtitle2 text-weight-bolder">Project 4</q-item-label>
        <q-item-label class="text-subtitle2 text-weight-bolder">Highest Task Completion Rate</q-item-label>
      </q-item-section>
    </q-item>

    <q-item>
      <q-item-section side>
        <q-avatar size="72px">
          <img src="https://image.flaticon.com/icons/png/512/189/189284.png" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-subtitle2 text-weight-bolder">Project 7</q-item-label>
        <q-item-label class="text-subtitle2 text-weight-bolder">Lowest Task Completion Rate</q-item-label>
      </q-item-section>
    </q-item>
        

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
        <apexchart width="100%" type="bar" :options="areaClientChartOptions" :series="areaClientChartseries"></apexchart>
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

    <div class="row">
      <div class="col-12 col-md">
        <div class="text-h6 text-left">Key Insights</div>

        <q-item>
      <q-item-section side>
        <q-avatar size="72px">
          <img src="http://getdrawings.com/free-icon/money-icon-free-55.png" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-subtitle2 text-weight-bolder">Client 4</q-item-label>
        <q-item-label class="text-subtitle2 text-weight-bolder">Highest Paying Client</q-item-label>
      </q-item-section>
    
    </q-item>

    <q-item>
      <q-item-section side>
        <q-avatar size="72px">
          <img src="http://getdrawings.com/free-icon/money-icon-free-55.png" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-subtitle2 text-weight-bolder">Client 5</q-item-label>
        <q-item-label class="text-subtitle2 text-weight-bolder">Lowest Paying Client</q-item-label>
      </q-item-section>
     
    </q-item>

    <q-item>
      <q-item-section side>
        <q-avatar size="72px">
          <img src="https://www.nicepng.com/png/detail/372-3720479_request-icon-png-yksek-ihtisas-niversitesi-kamps.png" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-subtitle2 text-weight-bolder">Float - Mobile Money</q-item-label>
        <q-item-label class="text-subtitle2 text-weight-bolder">Most Requested Payment</q-item-label>
      </q-item-section>
     
    </q-item>

    <q-item>
      <q-item-section side>
        <q-avatar size="72px">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFQgzvz5KhCH77UgfYC56hK9tATIF7oneXJK2FjMqG9d16bf2m" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-subtitle2 text-weight-bolder">Client 4</q-item-label>
        <q-item-label class="text-subtitle2 text-weight-bolder">Most Invoiced Client</q-item-label>
      </q-item-section>
      
    </q-item>

    <q-item>
      <q-item-section side>
        <q-avatar size="72px">
          <img src="http://getdrawings.com/free-icon/summary-icon-51.png" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-subtitle2 text-weight-bolder">Ksh 350,000</q-item-label>
        <q-item-label class="text-subtitle2 text-weight-bolder">Total Invoices Issued</q-item-label>
      </q-item-section>
     
    </q-item>

    <q-item>
      <q-item-section side>
        <q-avatar size="72px">
          <img src="http://getdrawings.com/free-icon/summary-icon-51.png" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-subtitle2 text-weight-bolder">Ksh 235,000</q-item-label>
        <q-item-label class="text-subtitle2 text-weight-bolder">Total Receipts Issued</q-item-label>
      </q-item-section>
     
    </q-item>

     <q-item>
      <q-item-section side>
        <q-avatar size="72px">
          <img src="data:image/png;base64,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" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-subtitle2 text-weight-bolder">Ksh 115,000</q-item-label>
        <q-item-label class="text-subtitle2 text-weight-bolder">Total Pending Payments</q-item-label>
      </q-item-section>
      
    </q-item>

    <q-item>
      <q-item-section side>
        <q-avatar size="72px">
          <img src="https://image.flaticon.com/icons/png/512/2386/2386697.png" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-subtitle2 text-weight-bolder">Ksh 45,560</q-item-label>
        <q-item-label class="text-subtitle2 text-weight-bolder">Average of Invoices Issued</q-item-label>
      </q-item-section>
      
    </q-item>

    <q-item>
      <q-item-section side>
        <q-avatar size="72px">
          <img src="https://image.flaticon.com/icons/png/512/2386/2386697.png" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-subtitle2 text-weight-bolder">Ksh 38,890</q-item-label>
        <q-item-label class="text-subtitle2 text-weight-bolder">Average of Receipts Issued</q-item-label>
      </q-item-section>
     
    </q-item>

      </div>
    </div>

</q-tab-panel>

<q-tab-panel name="members_overview">
  <div class="text-h6 text-left">Members Report</div>

  <div class="row justified">
     <div class="col-12 col-md">
    <apexchart width="100%" type="bar" :options="rangeBarChartOptions" :series="rangeBarChartseries"></apexchart>
     </div>
      <div class="col-12 col-md">
    <apexchart width="100%" type="donut" :options="donutMembersChartOptions" :series="donutMembersChartseries"></apexchart>
     </div>
     <div class="col-12 col-md">
    <apexchart width="100%" type="bar" :options="tasksMemberChartOptions" :series="tasksMemberChartseries"></apexchart>
     </div>
  </div>

  <div class="row">
      <div class="col-12 col-md">
        <div class="text-h6 text-left">Key Insights</div>


        <q-item>
      <q-item-section side>
        <q-avatar size="72px">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-subtitle2 text-weight-bolder">Member 3</q-item-label>
        <q-item-label class="text-subtitle2 text-weight-bolder">Most Hours Online</q-item-label>
      </q-item-section>
      
    </q-item>

    <q-item>
      <q-item-section side>
        <q-avatar size="72px">
          <img src="https://i.ya-webdesign.com/images/avatar-icon-png-3.png" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-subtitle2 text-weight-bolder">Member 2</q-item-label>
        <q-item-label class="text-subtitle2 text-weight-bolder">Least Hours Online</q-item-label>
      </q-item-section>
      
    </q-item>

    <q-item>
      <q-item-section side>
        <q-avatar size="72px">
          <img src="data:image/jpeg;base64,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" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-subtitle2 text-weight-bolder">Member 6</q-item-label>
        <q-item-label class="text-subtitle2 text-weight-bolder">Most Tasks Completed</q-item-label>
      </q-item-section>
     
    </q-item>

    <q-item>
      <q-item-section side>
        <q-avatar size="72px">
          <img src="data:image/jpeg;base64,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" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-subtitle2 text-weight-bolder">Member 6</q-item-label>
        <q-item-label class="text-subtitle2 text-weight-bolder">Most Tasks Completed On Time</q-item-label>
      </q-item-section>
     
    </q-item>

    <q-item>
      <q-item-section side>
        <q-avatar size="72px">
          <img src="https://thumbnail.imgbin.com/20/7/12/imgbin-computer-icons-icon-design-avatar-flat-face-icon-male-portrait-avatar-rwVFbA7ee4EphdwgYxCbqqgCt_t.jpg" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-subtitle2 text-weight-bolder">Member 4</q-item-label>
        <q-item-label class="text-subtitle2 text-weight-bolder">Most Tasks Pending</q-item-label>
      </q-item-section>
     
    </q-item>

    

    <q-item>
      <q-item-section side>
        <q-avatar size="72px">
          <img src="data:image/jpeg;base64,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"/>
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-subtitle2 text-weight-bolder">Member 8</q-item-label>
        <q-item-label class="text-subtitle2 text-weight-bolder">Most Tasks Not Completed On Time</q-item-label>
      </q-item-section>
      
    </q-item>


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
        tasksMemberChartOptions: {
          chart: {
            id: 'vuechart-example',
          },
          xaxis: {
            categories:['Member 1','Member 2','Member 3','Member 4','Member 5','Member 6','Member 7','Member 8']
          },
          title: {
            text: "Members Total Tasks Completed",
            align: 'left'
          },
          dataLabels: {
          enabled: false
        },
        colors: ['#00a700'
        ]
        },
        tasksMemberChartseries: [{
          name: 'Members Total Tasks Completed On Time',
          data: [33,19, 20, 45, 22,34,21,11]
        }],
        rangeBarChartOptions: {
          chart: {
            id: 'vuechart-example',
          },
          xaxis: {
            categories:['Member 1','Member 2','Member 3','Member 4','Member 5','Member 6','Member 7','Member 8']
          },
          title: {
            text: "Member Activity by Hours",
            align: 'left'
          },
          colors: ['#00a700'
        ],
          dataLabels: {
          enabled: false
        }
        },
        rangeBarChartseries: [{
          name: 'Member Activity by Hours Monthly',
          data: [33,19, 20, 45, 22,34,21,11]
        }],
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
        areaClientChartOptions: {
          chart: {
            id: 'vuechart-example',
          },
          xaxis: {
            categories: ['Client 1', 'Client 2', 'Client 3', 'Client 5','Client 6','Client 7'],
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
        areaClientChartseries: [{
          name: 'Total Invoices Issued Monthly',
          data: [16, 5, 8, 4, 6, 11, 12]
        },
        {
          name: 'Total Receipts Issued Monthly',
          data: [14, 4, 8, 4,4, 9, 11]
        }
        ],
        areaChartOptions: {
          chart: {
            id: 'vuechart-example',
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug','Sep','Oct','Nov','Dec'],
          },
          title: {
            text: "Invoices & Receipts Issued per Month",
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
        donutPaymentsChartseries: [33,19,20,45],
        donutMembersChartOptions: {
          title: {
			text: "Member Activity Hours",
			align: 'left'
      },
      labels: ['Member 1','Member 2','Member 3','Member 4','Member 5','Member 6','Member 7','Member 8']
        },
        donutMembersChartseries: [33,19, 20, 45, 22,34,21,11]
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