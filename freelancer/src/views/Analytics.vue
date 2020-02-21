<template>
<div class="analytics">
    <div class="q-pa-md">

    	<div class="row">

	      <div class=".col-6 .col-sm-3">
	      	<q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Projects Overview</div>
      </q-card-section>
      <q-card-section>

  	<div class="row section">

      	<div class=".col-3 .col-sm-6">
      		<p><strong>Total Projects Created per Month</strong></p>
      	<apexchart type="bar" :options="chartOptionsProject" :series="seriesproject"></apexchart>
      </div>
      <div class=".col-3 .col-sm-6">
      	<p><strong>Project Completion Rate</strong></p>
      	<apexchart  type="pie" :options="chartPieProjectOptions" :series="seriesPieProject"></apexchart>
      </div>
      <div class=".col-3 .col-sm-6">
      	<p><strong>Project Completion Trend</strong></p>
      	<apexchart  type="line" :options="lineOptionsProject" :series="seriesproject"></apexchart>
      </div>

  </div>

      </q-card-section>

      
    </q-card>
	      </div>
	      </div>

	      <div class="row section">
    		
	      <div class=".col-6 .col-sm-3">
	      	<q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Tasks Overview</div>
      </q-card-section>
      <q-card-section>
  	<div class="row">

      	<div class=".col-3 .col-sm-6">
      		<p><strong>Total Tasks Created per Month</strong></p>
      	<apexchart type="bar" :options="chartOptionsProject" :series="seriestasks"></apexchart>
      </div>
      <div class=".col-3 .col-sm-6">
      	<p><strong>Task Completion Rate</strong></p>
      	<apexchart  type="pie" :options="chartPieProjectOptions" :series="seriesPieProject"></apexchart>
      </div>

      <div class=".col-3 .col-sm-6">
      	<p><strong>Tasks Completion Trend</strong></p>
      	<apexchart  type="line" :options="lineOptionsProject" :series="seriestasks"></apexchart>
      </div>

  </div>

      </q-card-section>

      
    </q-card>
	      </div>
	      </div>

	      <div class="row section">
    		
	      <div class=".col-6 .col-sm-3">
	      	<q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Leads Overview</div>
      </q-card-section>
      <q-card-section>
  	<div class="row">

      	<div class=".col-3 .col-sm-6">
      		<p><strong>Total Leads Added per Month</strong></p>
      	<apexchart type="bar" :options="chartOptionsProject" :series="seriesleads"></apexchart>
      </div>
      <div class=".col-3 .col-sm-6">
      	<p><strong>Lead Conversion Rate</strong></p>
      	<apexchart  type="pie" :options="chartPieLeadsOptions" :series="seriesPieLeads"></apexchart>
      </div>

      <div class=".col-3 .col-sm-6">
      	<p><strong>Leads Conversion Trend</strong></p>
      	<apexchart  type="line" :options="lineOptionsProject" :series="seriesleads"></apexchart>
      </div>

  </div>

      </q-card-section>

      
    </q-card>
	      </div>
	      </div>

	      <div class="row section">
    		
	      <div class=".col-6 .col-sm-3">
	      	<q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Sales Overview</div>
      </q-card-section>
      <q-card-section>
  	<div class="row">

      	<div class=".col-3 .col-sm-6">
      		<p><strong>Total Invoices/Receipts Issued per Month</strong></p>
      	<apexchart type="bar" :options="chartOptionsProject" :series="seriesInvoices"></apexchart>
      </div>
      <div class=".col-3 .col-sm-6">
      	<p><strong>Invoice Payment Rate</strong></p>
      	<apexchart  type="pie" :options="chartPieInvoiceOptions" :series="seriesPieInvoices"></apexchart>
      </div>

      <div class=".col-3 .col-sm-6">
      	<p><strong>Payments Trend</strong></p>
      	<apexchart  type="line" :options="lineOptionsProject" :series="seriesInvoices"></apexchart>
      </div>

  </div>

      </q-card-section>

      
    </q-card>
	      </div>
	      </div>

	      <div class="row section">
    		
	      <div class=".col-6 .col-sm-3">
	      	<q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Clients Overview</div>
      </q-card-section>
      <q-card-section>
  	<div class="row">

      	<div class=".col-3 .col-sm-6">
      		<p><strong>Total Clients Created per Month</strong></p>
      	<apexchart type="bar" :options="chartOptionsProject" :series="seriesInvoices"></apexchart>
      </div>
      <div class=".col-3 .col-sm-6">
      	<p><strong>Clients Payments Share</strong></p>
      	<apexchart  type="donut" :options="chartclientOptions" :series="seriesClientDonut"></apexchart>
      </div>

      <div class=".col-3 .col-sm-6">
      	<p><strong>Client Payment Trend</strong></p>
      	<apexchart  type="line" :options="lineOptionsProject" :series="seriesClients"></apexchart>
      </div>

  </div>

      </q-card-section>

      
    </q-card>
	      </div>
	      </div>


	      <div class="row section">
    		
	      <div class=".col-6 .col-sm-3">
	      	<q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Team Members Overview</div>
      </q-card-section>
      <q-card-section>
  	<div class="row">

      	<div class=".col-3 .col-sm-6">
      		<p><strong>Total Members Created per Month</strong></p>
      	<apexchart type="bar" :options="chartOptionsProject" :series="seriesInvoices"></apexchart>
      </div>
      <div class=".col-3 .col-sm-6">
      		<p><strong>Total Tasks Completed per Team Member</strong></p>
      	<apexchart type="bar" :options="chartOptionsProject" :series="seriesInvoices"></apexchart>
      </div>
      <div class=".col-3 .col-sm-6">
      	<p><strong>Team Members Activity</strong></p>
      	<apexchart  type="donut" :options="chartclientOptions" :series="seriesClientDonut"></apexchart>
      </div>

  </div>

      </q-card-section>

      
    </q-card>
	      </div>
	      </div>

	    



    </div>
</div>
</template>

<script>
export default{

	data() {
      return {
        chartOptionsProject: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'Jul', 'Aug','Sep','Oct','Nov','Dec']
          }
        },
        lineOptionsProject: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep','Oct','Nov','Dec']
          },
          stroke: {
			  curve: 'smooth',
			},
			markers: {
			    size: 3,
			}
        },
        seriesproject: [{
          name: 'series-1',
          data: [2, 1, 7, 0, 0, 0, 0, 0,0,0,0,0]
        }],
        seriestasks: [{
          name: 'series-1',
          data: [30, 20, 35, 10, 19, 10, 20, 11,10,25,23,11]
        }],
        seriesleads: [{
          name: 'series-1',
          data: [1, 2, 1, 0, 3, 0, 1, 0,0,0,0,0]
        }],
        seriesClientDonut: [400, 566, 499],
        seriesTeamDonut: [40, 56, 49],
        chartTeamOptions: {
			  labels: ['Tony', 'Robin', 'Jay']
			},
			chartclientOptions: {
			  labels: ['German Point', 'Apple', 'Coca Cola']
			},
        seriesInvoices: [{
          name: 'series-1',
          data: [2, 4, 5, 0, 3, 0, 1, 0,3,0,4,0]
        }],
        seriesClients: [{
		    type: 'line',
		    name:'German Point',
		    data: [20000, 4000, 5000, 1000, 3000, 0, 1500, 0,3000,0,4000,0]
		  }, {
		    type: 'line',
		    name:'Coca Cola',
		    data: [3000, 20000, 35000, 1000, 1900, 0, 0, 11000,1000,2500,2300,11000]
		  },
		  {
		    type: 'line',
		    name:'Apple',
		    data: [8900, 1200, 65000, 1500, 19500, 0, 20000, 1100,1000,1250,1230,1150]
		  }],
        seriesPieProject: [10, 5],
        seriesPieTasks: [50, 25],
        seriesPieLeads: [9, 3],
        seriesPieInvoices: [4, 20],
		chartPieProjectOptions: {
		  labels: ['Ongoing', 'Completed'],
		  colors: ['#ff2323', '#4BB543'],
		  fill: {
			  colors: ['#ff2323', '#4BB543']
			}
		},
		chartPieTasksOptions: {
		  labels: ['Ongoing', 'Completed'],
		  colors: ['#ff2323', '#4BB543'],
		  fill: {
			  colors: ['#ff2323', '#4BB543']
			}
		},
		chartPieLeadsOptions: {
		  labels: ['Pending', 'Converted'],
		  colors: ['#ff2323', '#4BB543'],
		  fill: {
			  colors: ['#ff2323', '#4BB543']
			}
		},
		chartPieInvoiceOptions: {
		  labels: ['Pending', 'Paid'],
		  colors: ['#ff2323', '#4BB543'],
		  fill: {
			  colors: ['#ff2323', '#4BB543']
			}
		}
      }

    }

}
</script>

<style scoped>

.section{
	padding-top:10px;
}

</style>