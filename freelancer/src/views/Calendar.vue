<template>
	<div class='demo-app'>
		<q-option-group
        v-model="panel"
        inline
        :options="[
          { label: 'Create Single-Day Event', value: 'single-day' },
          { label: 'Create Multi-Day Event', value: 'multi-day' },
          { label: 'View Calendar', value: 'calendar' }
        ]"
      />

      <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders">


      	<q-tab-panel name="single-day">

  		 <div class='demo-app-top'>
	    	<div class="btn-pad">
	    		<q-input color="purple-12" v-model="event_title" label="Event Description">
		        <template v-slot:prepend>
		          <q-icon name="fas fa-calendar-week" />
		        </template>
		      </q-input>
		      <q-select bottom-slots v-model="category" :options="options" label="Select Category" counter :dense="dense" :options-dense="denseOpts">
		        <template v-slot:prepend>
		          <q-icon name="fas fa-align-justify" @click.stop />
		        </template>
		      </q-select>
		       <div class="q-pa-md">

		    <div class="q-gutter-md row items-start">
		      <q-date v-model="start_date" today-btn mask="YYYY-MM-DD HH:mm" color="primary" glossy />
		      <q-time v-model="start_time" mask="HH:mm" color="primary" glossy />
		      <div class="btn-pad">
		        <q-btn label="Create Event" @click="clickTestAddItem(category)" glossy color="primary"/>
			  </div>
			    </div>
			  </div>
		  </div>
	    </div>

      	</q-tab-panel>

      	<q-tab-panel name="multi-day">

	      		<div class='demo-app-top'>
		    	<div class="btn-pad">
		    		<q-input color="purple-12" v-model="event_title" label="Event Description">
			        <template v-slot:prepend>
			          <q-icon name="fas fa-calendar-week" />
			        </template>
			      </q-input>
			      <q-select bottom-slots v-model="category" :options="options" label="Select Category" counter :dense="dense" :options-dense="denseOpts">
			        <template v-slot:prepend>
			          <q-icon name="fas fa-align-justify" @click.stop />
			        </template>
			      </q-select>
			       <div class="q-pa-md">

			    <div class="q-gutter-md row items-start">
			      <q-date v-model="start_date" today-btn mask="YYYY-MM-DD HH:mm" color="primary" glossy />
			      <q-date v-model="start_end" today-btn mask="YYYY-MM-DD HH:mm" color="primary" glossy />
			      <div class="btn-pad">
			        <q-btn label="Create Event" @click="clickTestAddItem(category)" glossy color="primary"/>
				  </div>
				    </div>
				  </div>
			  </div>
		    </div>


      	</q-tab-panel>

      	<q-tab-panel name="calendar">
      		<div class="calendar-parent">
      		<calendar-view
				:events="items"
				:show-date="showDate"
				:time-format-options="{ hour: 'numeric', minute: '2-digit' }"
				:enable-drag-drop="true"
				:disable-past="disablePast"
				:disable-future="disableFuture"
				:show-event-times="showEventTimes"
				:display-period-uom="displayPeriodUom"
				:display-period-count="displayPeriodCount"
				:starting-day-of-week="startingDayOfWeek"
				class="theme-default"
				:period-changed-callback="periodChanged"
				:current-period-label="useTodayIcons ? 'icons' : ''"
				@drop-on-date="onDrop"
				@click-date="onClickDay"
				@click-event="onClickItem"
			>
				<calendar-view-header
					slot="header"
					slot-scope="{ headerProps }"
					:header-props="headerProps"
					@input="setShowDate"
				/>
			</calendar-view>
		</div>


      	</q-tab-panel>

      </q-tab-panels>

      <q-dialog v-model="small">
      <q-card style="width: 300px">
        <q-card-section>
        	<div class="text-overline">Event Title</div>
          <div class="text-h6">{{ message }}</div>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>


  </div>
	
</template>

<script>
import moment from 'moment'
require("vue-simple-calendar/static/css/default.css")
require("vue-simple-calendar/static/css/holidays-us.css")
//import FullCalendar from '@fullcalendar/vue'
//import dayGridPlugin from '@fullcalendar/daygrid'
//import timeGridPlugin from '@fullcalendar/timegrid'
//import interactionPlugin from '@fullcalendar/interaction'

import {
	CalendarView,
	CalendarViewHeader,
	CalendarMathMixin,
} from "vue-simple-calendar"

export default{
	components: {
		CalendarView,
		CalendarViewHeader,
	},
	mixins: [CalendarMathMixin],
	data(){
		return {
	      calendarWeekends: true,
	      event_title:'',
	      category:null,
	      start_end:null,
	      start_date:null,
	      start_time:null,
	      showDate: this.thisMonth(1),
		  message: "",
		  dayclicked: "",
		  startingDayOfWeek: 0,
		  disablePast: false,
		  disableFuture: false,
	      displayPeriodUom: "month",
	      very_urgentClass:"background-color:red;color:white;",
	      urgentClass:'background-color:red;color:white;',
		  displayPeriodCount: 1,
		  showEventTimes: true,
		  newItemTitle: "",
		  newItemStartDate: "",
		  newItemEndDate: "",
		  useDefaultTheme: false,
		  useHolidayTheme: true,
		  useTodayIcons: false,
		  options: [
	        'Very Urgent', 'Urgent'
	      ],
		  items:[
			  {
			  	id: "e3",
				startDate: this.thisMonth(7, 9, 25),
				endDate: this.thisMonth(10, 16, 30),
				title: "Multi-day item with a long title and times",
				style: 'background-color:red;color:white;'
			  },
			  {
				id: "e0",
				startDate: moment(new Date(), 'YYYY-MM-DD').format('YYYY-MM-DD'),
				title: "long title and times",
				style: 'background-color:green;color:white;'
			  },
		  ],
	      panel: 'calendar',
	      model: moment(new Date(), 'YYYY-MM-DD').format('YYYY-MM-DD HH:mm'),
	      small: false,
	      event: [{
	      	title:'',
	      	datetime:null
	      }],
	      calendarEvents: [ // initial event data
	        { title: 'Event Now', start: new Date() }
	      ]
		}
	},
	methods: {
		periodChanged() {
			// range, eventSource) {
			// Demo does nothing with this information, just including the method to demonstrate how
			// you can listen for changes to the displayed range and react to them (by loading items, etc.)
			//console.log(eventSource)
			//console.log(range)
		},
		thisMonth(d, h, m) {
			const t = new Date()
			return new Date(t.getFullYear(), t.getMonth(), d, h || 0, m || 0)
		},
		onClickDay(d) {

			this.small = true
			this.message = `No Event Today`

			this.dayclicked = moment(new Date(d), 'YYYY-MM-DD').format('YYYY-MM-DD')

		},
		onClickItem(e) {

			this.small=true

			this.message = `${e.title}`


		},
		setShowDate(d) {
			this.message = `Changing calendar view to ${d.toLocaleDateString()}`
			this.showDate = d
		},
		onDrop(item, date) {
			this.message = `You dropped ${item.id} on ${date.toLocaleDateString()}`
			// Determine the delta between the old start date and the date chosen,
			// and apply that delta to both the start and end date to move the item.
			const eLength = this.dayDiff(item.startDate, date)
			item.originalEvent.startDate = this.addDays(item.startDate, eLength)
			item.originalEvent.endDate = this.addDays(item.endDate, eLength)
		},
		clickTestAddItem(category) {

			console.log(category)

			if (category === 'Very Urgent'){

				if (this.start_time === null){

					this.items.push({
					startDate: this.start_date,
					endDate: this.start_end,
					title: this.event_title,
					style: 'background-color:red;color:white;',
					id:
						"e" +
						Math.random()
							.toString(36)
							.substr(2, 10),
					})

					this.panel = "calendar"

				} else {

					this.items.push({
					startDate: this.start_date,
					endDate: this.start_end,
					title: this.event_title + ' ' + this.start_time,
					style: 'background-color:red;color:white;',
					id:
						"e" +
						Math.random()
							.toString(36)
							.substr(2, 10),
					})

					this.panel = "calendar"

				}

			}

			if (category === 'Urgent'){

				if (this.start_time === null){

					this.items.push({
					startDate: this.start_date,
					endDate: this.start_end,
					title: this.event_title,
					style: 'background-color:green;color:white;',
					id:
						"e" +
						Math.random()
							.toString(36)
							.substr(2, 10),
				})

				this.panel = "calendar"

				} else {

					this.items.push({
					startDate: this.start_date,
					endDate: this.start_end,
					title: this.event_title + ' ' + this.start_time,
					style: 'background-color:green;color:white;',
					id:
						"e" +
						Math.random()
							.toString(36)
							.substr(2, 10),
				})

				this.panel = "calendar"

				}

			}

			console.log(this.items)
			this.message = "You added a calendar item!"
		},
  },
  computed: {
		userLocale() {
			return this.getDefaultBrowserLocale
		},
		dayNames() {
			return this.getFormattedWeekdayNames(this.userLocale, "long", 0)
		},
		themeClasses() {
			return {
				"theme-default": this.useDefaultTheme,
				"holiday-us-traditional": this.useHolidayTheme,
				"holiday-us-official": this.useHolidayTheme,
			}
		},
	},

}
</script>

<style>
.calendar-controls {
	margin-right: 1rem;
	min-width: 14rem;
	max-width: 14rem;
}
.calendar-parent {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	overflow-x: hidden;
	overflow-y: hidden;
	max-height: 80vh;
	background-color: white;
}
.cv-wrapper.period-month.periodCount-2 .cv-week,
.cv-wrapper.period-month.periodCount-3 .cv-week,
.cv-wrapper.period-year .cv-week {
	min-height: 6rem;
}

.theme-default .cv-event.birthday {
	background-color: #e0f0e0;
	border-color: #d7e7d7;
}
.theme-default .cv-event.birthday::before {
	content: "\1F382";
	margin-right: 0.5em;
}

.very-urgent-item{
	background-color:red;
	color:white;
}

.urgent-item{
	background-color:green;
	color:white;
}

</style>