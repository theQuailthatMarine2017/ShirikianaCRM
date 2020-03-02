<template>
  <div class="home">
    <div class="q-pa-md">

      <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
    <div class="row">
      <div class="col-12 col-md-6 section">
        <q-card class="my-card">
      <q-parallax
        src="https://cdn.quasar.dev/img/parallax1.jpg"
        :height="150"
      />

      <q-card-section>
        <div class="text-h5 text-weight-bolder">2 Active Projects</div>
        
      </q-card-section>
    </q-card>
      </div>
      <div class="col-12 col-md-6 section">
        <q-card class="my-card">
      <q-parallax
        src="https://ak0.picdn.net/shutterstock/videos/18766430/thumb/1.jpg"
        :height="150"
      />

      <q-card-section>
          <div class="text-h5 text-weight-bolder">3 Pending Tasks</div>
      </q-card-section>
    </q-card>
      </div>
      <div class="col-12 col-md-12 section">
        <q-card class="my-card">
      <img height="150" src="https://ak0.picdn.net/shutterstock/videos/18766430/thumb/1.jpg">

      <q-card-section>
        <div class="text-h5 text-weight-bolder">Upcoming Calendar Events</div>
      </q-card-section>
    </q-card>
      </div>
    </div>

    <!-- Columns are always 50% wide, on mobile and desktop -->
    	

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
