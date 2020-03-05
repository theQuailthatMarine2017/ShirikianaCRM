<template>
  <div class="home">
    <div class="q-pa-md">

      <!-- If User Logged In is as Super Admin Account (Owner/CEO /Director /Manager) -->
      <div>super admin</div>
<div class="row">
      <div class="col-12 col-md-6 section">
        <q-card 
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)" flat bordered class="my-card text-white">
          <q-card-section>
          <div class="text-h6">Your Recent Projects</div>
          </q-card-section>
            <q-separator color="white" inset />

      <q-card-section>
        <q-list>
          <q-item>
            <q-item-section avatar>
          <q-avatar>
            <q-icon color="white" name="fas fa-project-diagram" />
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
            <q-icon color="white" name="fas fa-project-diagram" />
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
        <q-card style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)" flat bordered class="my-card text-white">
          <q-card-section>
          <div class="text-h6">Recent Tasks Pending</div>
          </q-card-section>
            <q-separator color="white" inset />

      <q-card-section>
        <q-list>
          <q-item>
            <q-item-section avatar>
          <q-avatar>
            <q-icon color="white" name="fas fa-project-diagram" />
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
            <q-icon color="white" name="fas fa-project-diagram" />
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
      <div class="col-12 col-md-12 section">
        <q-card flat bordered class="my-card text-white" style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
          <q-card-section>
          <div class="text-h6">Online Staff</div>
          </q-card-section>
          <q-separator color="white" inset />
          <q-card-section>
            <q-chip class="text-white" color="green">
              <q-avatar size="32px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
              Supervisor 1
            </q-chip>
            <q-chip class="text-white" color="green">
              <q-avatar size="32px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
              Team Leader 2
            </q-chip>
            <q-chip class="text-white" color="green">
              <q-avatar size="32px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
              Team Leader 3
            </q-chip>
            <q-chip class="text-white" color="green">
              <q-avatar size="32px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
              Team Leader 4
            </q-chip>
            <q-chip class="text-white" color="green">
              <q-avatar size="32px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
              Staff 1
            </q-chip>
            <q-chip class="text-white" color="green">
              <q-avatar size="32px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
              Staff 2
            </q-chip>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-6 section">
        <q-card flat bordered class="my-card text-white" style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
          <q-card-section>
          <div class="text-h6">Pending Payments</div>
          </q-card-section>
          <q-seperator color="white" inset />

          
        </q-card>
      </div>
<div class="col-12 col-md-6 section">
        <q-card flat bordered class="my-card text-white" style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
          <q-card-section>
          <div class="text-h6">Business Leads</div>
          </q-card-section>

          <q-seperator color="white" inset />
        </q-card>
      </div>

      <div class="col-12 col-md-12 section">
        <q-card flat bordered class="my-card text-white" style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
      <q-card-section>
        <div class="text-h6">Your Messages</div>
      </q-card-section>

      <q-separator color="white" inset />

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
          <q-item-label class="text-white" caption lines="2">
            <span class="text-weight-bold text-white">Janet</span>
            -- I'll be in your neighborhood doing errands this
            weekend. Do you want to grab brunch?
          </q-item-label>
        </q-item-section>

        <q-item-section class="text-white" side top>
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
          <q-item-label class="text-white" caption lines="2">
            <span class="text-weight-bold text-white">John</span>
            -- Can we schedule a call for tomorrow?
          </q-item-label>
        </q-item-section>

        <q-item-section class="text-white" side top>
          1 min ago
        </q-item-section>
      </q-item>


    </q-list>
      </q-card-section>
    </q-card>
      </div>

      <div class="col-12 col-md-12 section">
        <q-card flat bordered class=" my-card text-white" style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
      <q-card-section>
        <div class="text-h6">Upcoming Calendar Events</div>
      </q-card-section>
      <q-separator color="white" inset />
      <q-card-section>
        <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <q-icon color="white" name="fas fa-calendar-day" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Meeting with Business Lead</q-item-label>
          <q-item-label caption lines="2">
            <span class="text-weight-bold text-white">Starts on 12 Feb 2020</span>
          </q-item-label>
        </q-item-section>
        <q-item-section class="text-white" side top>
          Very Urgent
        </q-item-section>
      </q-item>

      </q-card-section>

        </q-card>
      </div>
      
      

</div>

<div>Regular Account</div>
      <!-- If User Logged In is Regular Member Account -->
    <div class="row">
      <div class="col-12 col-md-6 section">

        <q-card flat bordered class="my-card text-white" 
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
      <q-card-section>
        <div class="text-h6">Your Recent Projects</div>
      </q-card-section>

      <q-separator color="white" inset />

      <q-card-section>
        <q-list>
          <q-item>
            <q-item-section avatar>
          <q-avatar>
            <q-icon color="white" name="fas fa-project-diagram" />
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
            <q-icon color="white" name="fas fa-project-diagram" />
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
       
       <q-card flat bordered class="my-card text-white" 
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
      <q-card-section>
        <div class="text-h6">Your Recent Tasks</div>
      </q-card-section>

      <q-separator color="white" inset />

      <q-card-section>
        <q-list>
          <q-item>
            <q-item-section avatar>
          <q-avatar>
           <q-icon color="white" name="fas fa-tasks" />
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
            <q-icon color="white" name="fas fa-tasks" />
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
        <q-card flat bordered class="my-card text-white" 
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
      <q-card-section>
        <div class="text-h6">Your Messages</div>
      </q-card-section>

      <q-separator color="white" inset />

      <q-card-section>
        <q-list class="rounded-borders">

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-white" lines="1">Brunch this weekend?</q-item-label>
          <q-item-label class="text-white" caption lines="2">
            <span class="text-weight-bold text-white">Janet</span>
            -- I'll be in your neighborhood doing errands this
            weekend. Do you want to grab brunch?
          </q-item-label>
        </q-item-section>

        <q-item-section class="text-white" side top>
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
          <q-item-label class="text-white" lines="1">Linear Project</q-item-label>
          <q-item-label class="text-white" caption lines="2">
            <span class="text-weight-bold">John</span>
            -- Can we schedule a call for tomorrow?
          </q-item-label>
        </q-item-section>

        <q-item-section class="text-white" side top>
          1 min ago
        </q-item-section>
      </q-item>


    </q-list>
      </q-card-section>
    </q-card>
      </div>

      <div class="col-12 col-md-12 section">
        <q-card flat bordered class=" my-card text-white" 
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
      <q-card-section>
        <div class="text-h6">Upcoming Calendar Events</div>
      </q-card-section>
      <q-separator color="white" inset />
      <q-card-section>
        <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <q-icon color="white" name="fas fa-calendar-day" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-white" lines="1">Meeting with Business Lead</q-item-label>
          <q-item-label caption lines="2">
            <span class="text-weight-bold text-white">Starts on 12 Feb 2020</span>
          </q-item-label>
        </q-item-section>
        <q-item-section class="text-white" side top>
          Very Urgent
        </q-item-section>
      </q-item>

      </q-card-section>

        </q-card>
      </div>


    </div>

<div>Accounts Account</div>
    <!-- if User Logged in is Accounts -->
<div class="row">

      <div class="col-12 col-md-6 section">
        <q-card flat bordered class="my-card text-white" 
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
      <q-card-section>
        <div class="text-h6">Recent Payments</div>
      </q-card-section>

      <q-separator color="white" inset />

      <q-card-section>
        <q-list>
          <q-item>
            <q-item-section avatar>
          <q-avatar>
            <q-icon color="white" name="fas fa-file-invoice-dollar" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Client 1</q-item-label>
        </q-item-section>
      </q-item>
        </q-list>
        <q-list>
          <q-item>
            <q-item-section avatar>
          <q-avatar>
            <q-icon color="white" name="fas fa-file-invoice-dollar" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Client 1</q-item-label>
        </q-item-section>
      </q-item>
        </q-list>
      </q-card-section>
    </q-card>
      </div>

      <div class="col-12 col-md-6 section">
        <q-card style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)" flat bordered class="my-card text-white">
          <q-card-section>
          <div class="text-h6">Pending Payments</div>
          </q-card-section>
            <q-separator color="white" inset />

      <q-card-section>
        <q-list>
          <q-item>
            <q-item-section avatar>
          <q-avatar>
            <q-icon color="white" name="fas fa-file-invoice-dollar" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Client 3</q-item-label>
        </q-item-section>
      </q-item>
        </q-list>
        <q-list>
          <q-item>
            <q-item-section avatar>
          <q-avatar>
            <q-icon color="white" name="fas fa-file-invoice-dollar" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Client 2</q-item-label>
        </q-item-section>
      </q-item>
        </q-list>
      </q-card-section>
        </q-card>
      </div>


<div class="col-12 col-md-12 section">

  <q-card flat bordered class=" my-card text-white" 
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
      <q-card-section>
        <div class="text-h6">Payment Requests</div>
      </q-card-section>
      <q-separator color="white" inset />
      <q-card-section>

        <q-list>
          <q-item>
            <q-item-section avatar>
          <q-avatar>
            <q-icon color="white" name="fas fa-file-invoice-dollar" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-white" lines="1">Salary Payment</q-item-label>
        </q-item-section>
        <q-item-section class="text-white" side top>
          Bank Transfer - Salary
        </q-item-section>
      </q-item>
        </q-list>
        <q-list>
          <q-item>
            <q-item-section avatar>
          <q-avatar>
            <q-icon color="white" name="fas fa-file-invoice-dollar" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-white" lines="1">Float Request For Task</q-item-label>
        </q-item-section>
        <q-item-section class="text-white" side top>
          Mobile Money - Float
        </q-item-section>
      </q-item>
        </q-list>

      </q-card-section>

  </q-card>

</div>

<div class="col-12 col-md-12 section">
        <q-card flat bordered class="my-card text-white" 
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
      <q-card-section>
        <div class="text-h6">Your Messages</div>
      </q-card-section>

      <q-separator color="white" inset />

      <q-card-section>
        <q-list class="rounded-borders">

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-white" lines="1">Brunch this weekend?</q-item-label>
          <q-item-label class="text-white" caption lines="2">
            <span class="text-weight-bold text-white">Janet</span>
            -- I'll be in your neighborhood doing errands this
            weekend. Do you want to grab brunch?
          </q-item-label>
        </q-item-section>

        <q-item-section class="text-white" side top>
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
          <q-item-label class="text-white" lines="1">Linear Project</q-item-label>
          <q-item-label class="text-white" caption lines="2">
            <span class="text-weight-bold">John</span>
            -- Can we schedule a call for tomorrow?
          </q-item-label>
        </q-item-section>

        <q-item-section class="text-white" side top>
          1 min ago
        </q-item-section>
      </q-item>


    </q-list>
      </q-card-section>
    </q-card>
      </div>

      <div class="col-12 col-md-12 section">
        <q-card flat bordered class=" my-card text-white" 
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
      <q-card-section>
        <div class="text-h6">Upcoming Calendar Events</div>
      </q-card-section>
      <q-separator color="white" inset />
      <q-card-section>
        <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <q-icon color="white" name="fas fa-calendar-day" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-white" lines="1">Meeting with Business Lead</q-item-label>
          <q-item-label caption lines="2">
            <span class="text-weight-bold text-white">Starts on 12 Feb 2020</span>
          </q-item-label>
        </q-item-section>
        <q-item-section class="text-white" side top>
          Very Urgent
        </q-item-section>
        
      </q-item>

      </q-card-section>

        </q-card>
      </div>



</div>




    <!-- if User Logged in is Supervisor -->
    	<div>Supervisor Account</div>
      <div class="row">
        <div class="col-12 col-md-6 section">

        <q-card flat bordered class="my-card text-white" 
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
      <q-card-section>
        <div class="text-h6">Your Recent Projects</div>
      </q-card-section>

      <q-separator color="white" inset />

      <q-card-section>
        <q-list>
          <q-item>
            <q-item-section avatar>
          <q-avatar>
            <q-icon color="white" name="fas fa-project-diagram" />
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
            <q-icon color="white" name="fas fa-project-diagram" />
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
       
       <q-card flat bordered class="my-card text-white" 
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
      <q-card-section>
        <div class="text-h6">Recent Tasks</div>
      </q-card-section>

      <q-separator color="white" inset />

      <q-card-section>
        <q-list>
          <q-item>
            <q-item-section avatar>
          <q-avatar>
           <q-icon color="white" name="fas fa-tasks" />
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
            <q-icon color="white" name="fas fa-tasks" />
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
        <q-card flat bordered class="my-card text-white" style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
          <q-card-section>
          <div class="text-h6">Online Staff</div>
          </q-card-section>
          <q-separator color="white" inset />
          <q-card-section>
            <q-chip class="text-white" color="green">
              <q-avatar size="32px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
              Supervisor 1
            </q-chip>
            <q-chip class="text-white" color="green">
              <q-avatar size="32px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
              Team Leader 2
            </q-chip>
            <q-chip class="text-white" color="green">
              <q-avatar size="32px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
              Team Leader 3
            </q-chip>
            <q-chip class="text-white" color="green">
              <q-avatar size="32px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
              Team Leader 4
            </q-chip>
            <q-chip class="text-white" color="green">
              <q-avatar size="32px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
              Staff 1
            </q-chip>
            <q-chip class="text-white" color="green">
              <q-avatar size="32px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
              Staff 2
            </q-chip>
          </q-card-section>
        </q-card>
      </div>

      </div>

      <!-- If User Logged In is Human Resource Account -->
      <div>Human Resources Account</div>
      
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
