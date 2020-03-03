<template>
  <div class="home">
    <div class="q-pa-md">
      
      <!-- If User Logged In is Regular Member Account -->



      <!-- If User Logged In is Regular Member Account -->
    <div class="row">
      <div class="col-12 col-md-6 section">
        <q-card class="my-card">
      <q-card-section>
        <div class="text-h5 text-weight-bolder">2 Active Projects</div>
        
      </q-card-section>
    </q-card>
      </div>
      <div class="col-12 col-md-6 section">
        <q-card class="my-card">
      <q-card-section>
          <div class="text-h5 text-weight-bolder">3 Pending Tasks</div>
      </q-card-section>
    </q-card>
      </div>
      <div class="col-12 col-md-12 section">
        <q-card class="my-card">

      <q-card-section>
        <div class="text-h5 text-weight-bolder">Upcoming Calendar Events</div>
      </q-card-section>
    </q-card>
      </div>
    </div>

    <!-- if User Logged in is Team Leader -->


    <!-- if User Logged in is Accounts -->
    	

    </div>


  </div>
</template>

<script>

export default {
  name: 'home',

  data(){
  	return {

      ongoing_projects_count:null,
      ongoing_tasks_count:null,
      pending_invoices_count:null,
      pending_proposals_count:null,
      completed_projects_count:null,
      completed_task_count:null,
      ongoing_projects:[],
      ongoing_tasks:[],
      pending_invoices:[],
      pending_proposals:[],
      completed_projects:[],
      completed_tasks:[]

  	}
  }

}
</script>

<style scoped>

.table-pd{
	padding:5px;
}

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
