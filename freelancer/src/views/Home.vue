<template>
  <div class="home">
    <div class="q-pa-md">

      <!-- If User Logged In is as Super Admin(Owner/CEOirector/BusinessManagers) Account -->
      <div>super admin</div>
<div class="row">
      <div class="col-12 col-md-6 section">
        <q-card flat bordered class="my-card">
          <q-card-section>
          <div class="text-h6">Your Recent Projects</div>
          </q-card-section>
            <q-separator inset />

      <q-card-section>
        <q-list>
          <q-item>
            <q-item-section avatar>
          <q-avatar>
            <q-icon color="primary" name="fas fa-project-diagram" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Project 1</q-item-label>
        </q-item-section>
      </q-item>
        </q-list>
        <q-list>
          <q-item>
            <q-item-section avatar>
          <q-avatar>
            <q-icon color="primary" name="fas fa-project-diagram" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Project 2</q-item-label>
        </q-item-section>
      </q-item>
        </q-list>
        
      </q-card-section>
        </q-card>
      </div><div class="col-12 col-md-6 section">
        <q-card flat bordered class="my-card">
          <q-card-section>
          <div class="text-h6">Recent Tasks Pending</div>
          </q-card-section>
            <q-separator inset />

      <q-card-section>
        <q-list>
          <q-item>
            <q-item-section avatar>
          <q-avatar>
            <q-icon color="primary" name="fas fa-project-diagram" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Project 1</q-item-label>
        </q-item-section>
      </q-item>
        </q-list>
        <q-list>
          <q-item>
            <q-item-section avatar>
          <q-avatar>
            <q-icon color="primary" name="fas fa-project-diagram" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Project 2</q-item-label>
        </q-item-section>
      </q-item>
        </q-list>
      </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-6 section">
        <q-card flat bordered class="my-card">
          <q-card-section>
          <div class="text-h6">Online Team Leaders</div>
          </q-card-section>
          <q-separator inset />
          <q-card-section>
            <q-chip color="green">
              <q-avatar size="32px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
              Team Leader 1
            </q-chip>
            <q-chip color="green">
              <q-avatar size="32px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
              Team Leader 2
            </q-chip>
            <q-chip color="green">
              <q-avatar size="32px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
              Team Leader 3
            </q-chip>
            <q-chip color="green">
              <q-avatar size="32px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
              Team Leader 4
            </q-chip>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-6 section">
        <q-card flat bordered class="my-card">
          <q-card-section>
          <div class="text-h6">Online Team Members</div>
          </q-card-section>
          <q-separator inset />
        </q-card>
      </div>

      <div class="col-12 col-md-6 section">
        <q-card flat bordered class="my-card">
          <q-card-section>
          <div class="text-h6">Pending Payments</div>
          </q-card-section>
        </q-card>
      </div>
<div class="col-12 col-md-6 section">
        <q-card flat bordered class="my-card">
          <q-card-section>
          <div class="text-h6">Business Lead</div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-12 section">
        <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="text-h6">Your Messages</div>
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <q-list class="rounded-borders">

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Brunch this weekend?</q-item-label>
          <q-item-label caption lines="2">
            <span class="text-weight-bold">Janet</span>
            -- I'll be in your neighborhood doing errands this
            weekend. Do you want to grab brunch?
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          1 min ago
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar4.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Linear Project</q-item-label>
          <q-item-label caption lines="2">
            <span class="text-weight-bold">John</span>
            -- Can we schedule a call for tomorrow?
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          1 min ago
        </q-item-section>
      </q-item>


    </q-list>
      </q-card-section>
    </q-card>
      </div>

      <div class="col-12 col-md-12 section">
        <q-card flat bordered class=" my-card">
      <q-card-section>
        <div class="text-h6">Upcoming Calendar Events</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <q-icon color="primary" name="fas fa-calendar-day" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Meeting with Business Lead</q-item-label>
          <q-item-label caption lines="2">
            <span class="text-weight-bold">Starts on 12 Feb 2020</span>
          </q-item-label>
        </q-item-section>
        <q-item-section side top>
          Very Urgent
        </q-item-section>
      </q-item>

      </q-card-section>

        </q-card>
      </div>
      
      

</div>

<div>regular scetion</div>
      <!-- If User Logged In is Regular Member Account -->
    <div class="row">
      <div class="col-12 col-md-6 section">

        <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="text-h6">Your Recent Projects</div>
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <q-list>
          <q-item>
            <q-item-section avatar>
          <q-avatar>
            <q-icon color="primary" name="fas fa-project-diagram" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Project 1</q-item-label>
        </q-item-section>
      </q-item>
        </q-list>
        <q-list>
          <q-item>
            <q-item-section avatar>
          <q-avatar>
            <q-icon color="primary" name="fas fa-project-diagram" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Project 2</q-item-label>
        </q-item-section>
      </q-item>
        </q-list>
      </q-card-section>
    </q-card>

      </div>


      <div class="col-12 col-md-6 section">
       
       <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="text-h6">Your Recent Tasks</div>
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <q-list>
          <q-item>
            <q-item-section avatar>
          <q-avatar>
           <q-icon color="primary" name="fas fa-tasks" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Task 1</q-item-label>
        </q-item-section>
      </q-item>
        </q-list>
        <q-list>
          <q-item>
            <q-item-section avatar>
          <q-avatar>
            <q-icon color="primary" name="fas fa-tasks" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Task 2</q-item-label>
        </q-item-section>
      </q-item>
        </q-list>
      </q-card-section>
    </q-card>
      </div>


      <div class="col-12 col-md-12 section">
        <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="text-h6">Your Messages</div>
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <q-list class="rounded-borders">

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Brunch this weekend?</q-item-label>
          <q-item-label caption lines="2">
            <span class="text-weight-bold">Janet</span>
            -- I'll be in your neighborhood doing errands this
            weekend. Do you want to grab brunch?
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          1 min ago
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar4.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Linear Project</q-item-label>
          <q-item-label caption lines="2">
            <span class="text-weight-bold">John</span>
            -- Can we schedule a call for tomorrow?
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          1 min ago
        </q-item-section>
      </q-item>


    </q-list>
      </q-card-section>
    </q-card>
      </div>

      <div class="col-12 col-md-12 section">
        <q-card flat bordered class=" my-card">
      <q-card-section>
        <div class="text-h6">Upcoming Calendar Events</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <q-icon color="primary" name="fas fa-calendar-day" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Meeting with Business Lead</q-item-label>
          <q-item-label caption lines="2">
            <span class="text-weight-bold">Starts on 12 Feb 2020</span>
          </q-item-label>
        </q-item-section>
        <q-item-section side top>
          Very Urgent
        </q-item-section>
      </q-item>

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

.events{
  height:15px;
}

.chart-wrapper {
  width: 100%;
  height: 100%;
}

.justified{
	text-align:center;
}

</style>
