<template>
  <q-layout view="lHh Lpr lFf">
    <q-header v-if="$route.name != 'Sign In'" elevated class="glossy">
      <q-toolbar>
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu" icon="menu"/>

        <q-toolbar-title>
          {{ $route.name }}
        </q-toolbar-title>

        <div class="q-gutter-sm row items-center no-wrap">
          <router-link  to="/account">
          <q-btn round flat>
            <q-avatar size="36px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-tooltip>Manage Account</q-tooltip>
          </q-btn>
        </router-link>

       
          <q-btn @click="logout" round dense flat color="white" icon="fas fa-sign-out-alt">
            <q-tooltip>Sign Out</q-tooltip>
          </q-btn>
        
        </div>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      v-if="$route.name != 'Sign In'"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >

    <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
      <q-list>

      <router-link to="/dashboard">
        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="fas fa-tachometer-alt" />
          </q-item-section>
          <q-item-section>         
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>
      </router-link>

      <router-link to="/projects">
        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="fas fa-project-diagram" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Projects</q-item-label>
          </q-item-section>
        </q-item>
      </router-link>


      <router-link to="/tasks">
        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="fas fa-tasks" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Tasks</q-item-label>
          </q-item-section>
        </q-item>
      </router-link>

      <router-link to="/members">
        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="fas fa-users" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Clients / Project Members</q-item-label>
          </q-item-section>
        </q-item>
      </router-link>


      <router-link to="/calendar">
        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="fas fa-calendar-alt" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Calendar</q-item-label>
          </q-item-section>
        </q-item>
      </router-link>

      <router-link to="/leads">
        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="fas fa-address-card" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Business Leads</q-item-label>
          </q-item-section>
        </q-item>
      </router-link>

      <router-link to="/proposals">
        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="fas fa-file-word" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Business Proposals</q-item-label>
          </q-item-section>
        </q-item>
      </router-link>

      <router-link to="/invoices">
        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="fas fa-file-invoice-dollar" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Invoices / Receipts</q-item-label>
          </q-item-section>
        </q-item>
      </router-link>

      <router-link to="/payments">
        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="fas fa-money-check-alt" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Payments</q-item-label>
          </q-item-section>
        </q-item>
      </router-link>

      <router-link to="/analytics">
        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="fas fa-chart-bar" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Business Analytics</q-item-label>
          </q-item-section>
        </q-item>
      </router-link>

      <router-link  to="/settings">
        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="fas fa-cogs" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Setting</q-item-label>
          </q-item-section>
        </q-item>
      </router-link>

      
      </q-list>
</q-scroll-area>

      <q-img class="absolute-top" src="https://thumbs.dreamstime.com/t/material-design-background-modern-creative-horisontal-colorful-65738690.jpg" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="76px" class="q-mb-sm">
              <img src="https://i.ya-webdesign.com/images/avatar-png-1.png">
            </q-avatar>
            <div class="text-weight-bold">Manage Better. Grow Faster</div>
          </div>
        </q-img>
    </q-drawer>


    <q-page-container>
      <router-view></router-view>
    </q-page-container>


  </q-layout>
</template>

<script>

export default {
  name: 'LayoutDefault',
  created(){


  },
  data () {
    return {
      leftDrawerOpen: false,
      fullWidth:false,
      welcome:''
    }
  },
  methods:{
    logout(){

      localStorage.clear();
      this.$router.push({ name: 'Sign In' });

    }
  }
}
</script>

<style>
a {  text-decoration: none; color:black;}
</style>
