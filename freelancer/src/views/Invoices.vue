<template>
  <div class="invoices">
    <q-option-group
        v-model="panel"
        inline
        :options="[
          { label: 'Create Invoice', value: 'invoice' },
          { label: 'Create Receipt', value: 'receipt' },
          { label: 'Manage Invoices', value: 'manage' },
          { label: 'View Receipts', value: 'receipt_view' }
        ]"
      />

       <div class="create-pd">
      <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders">

      <q-tab-panel name="invoice">
          <div class="text-h6">Create Invoice
          </div>
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">

      		<q-select filled v-model="model" :options="options" label="Select Project for Invoice *" />

      		<q-select filled v-model="model" :options="options" label="Select Client for Invoice *" />

      		<q-input filled v-model="price" label="Invoice Price *" mask="#.##" fill-mask="0" reverse-fill-mask input-class="text-right" />

      		<q-input v-model="desciption" label="Invoice Description *" filled type="textarea" />

      <div>
        <q-btn label="Preview" class="receipt-buttons" @click="medium = true" type="submit" glossy color="primary"/>
        <q-btn label="Create"  @click="rec = true" glossy color="secondary"/>
        <q-btn label="Clear" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
        </q-tab-panel>

        <q-tab-panel name="receipt">

        	<div class="text-h6">Create Receipt
          </div>
	          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">

		      		<q-select filled v-model="model" :options="options" label="Select Client for Receipt *" />

		      		<q-input filled v-model="price" label="Amount Paid *" mask="#.##" fill-mask="0" reverse-fill-mask input-class="text-right" />

		      		<q-input v-model="desciption" label="Receipt Description *" filled type="textarea" />

		      <div>
		        <q-btn label="Preview" class="receipt-buttons" @click="rec = true" glossy color="primary"/>
            <q-btn label="Create"  @click="rec = true" glossy color="secondary"/>
		        <q-btn label="Clear" type="reset" color="primary" flat class="q-ml-sm" />
		      </div>
	   		 </q-form>


        </q-tab-panel>

        <q-tab-panel name="manage">

        	<q-table :data="data2" title="Pending Invoice Payments" row-key="project_invoiced" :columns="columns2" selection="single" :selected.sync="selected"/>

        	<div :disabled="!selected.length > 0" class="tb-btn">
		        <q-btn label="Paid" type="submit" color="blue"/>
		        <q-btn label="Delete" type="reset" color="red" class="q-ml-sm" />
		      </div>

		      <q-table :data="data2" title="Paid Invoices" :columns="columns2" />


        </q-tab-panel>

        <q-tab-panel name="receipt_view">

        	<q-table :data="data" title="Receipts Issued" row-key="member_name" :columns="columns" />


        </q-tab-panel>

    </q-tab-panels>
</div>

<q-dialog
          v-model="medium"
          full-width
          class="preview"
        >
          <q-card style="width: 700px; max-width: 80vw;">
            <q-card-section>
              <div class="text-h6 text-center">Invoice Preview</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <page size="A4">

                <div class="text-center">
                <q-avatar size="190px">
                  <img src="../assets/logo.png">
                </q-avatar>
              </div>

              <div class="proposal-header">
                <div class="pay"><strong>Q Solutions</strong></div>
                <div class="pay"><strong>Mimosa Ridge, Runda.</strong></div>
                <div class="pay"><strong>Nairobi, Kenya.</strong></div>
                <div class="pay"><strong>2/2/2020</strong></div>
              </div>

              <div class="text-h6 text-center  invoice-header">INVOICE</div>

              <div class="q-pa-md">

                <div class="row">
                  <div class="col table-pd">

                <div class="pay">Bill To:<br/><strong>German Point</strong><br/><strong>Rosslyn Riviera, Limuru Road</strong><br/><strong>Nairobi, Kenya.</strong></div>

                </div>
                <div class="col table-pd">

                <div class="pay text-right">Pay To:<br/><strong>Equity Bank</strong><br/>Account Name:<br/><strong>Q SOLUTIONS LTD.</strong><br/>Account Number:<br/><strong>12443323432</strong></div>

                </div>
                  </div>


              </div>

              <div class="q-pa-md">

                <div class="text-h5 invoice-det">Invoice Description</div>

                 <q-markup-table>
                    <thead>
                      <tr>
                        <th class="text-left">Quantity</th>
                        <th class="text-left">Service Description</th>
                        <th class="text-left">Invoice Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-left">1</td>
                        <td class="text-left">Server Set Up</td>
                        <td class="text-left">3000</td>
                      </tr>
                      <tr>
                        <td class="text-left">1</td>
                        <td class="text-left">Front End Design</td>
                        <td class="text-left">4000</td>
                      </tr>
                    </tbody>
                  </q-markup-table>

              </div>


            </page>
            </q-card-section>

          </q-card>
        </q-dialog>

        <q-dialog
          v-model="rec"
          full-width
          class="preview"
        >
          <q-card style="width: 700px; max-width: 80vw;">
            <q-card-section>
              <div class="text-h6 text-center">Receipt Preview</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <page size="receipt">
                <div class="text-center">
                <q-avatar size="100px">
                  <img src="../assets/logo.png">
                </q-avatar>
              </div>

              <div class="text-h6 text-center  invoice-header">RECEIPT OF PAYMENT</div>

              <div class="proposal-body">
              <div class="text-h6 text-left">Paid By: German Point LTD</div>
              <div class="text-h6 text-left">Paid To: Q Solutions LTD</div>
              <div class="text-h6 text-left">Amount Paid: Ksh3000</div>
              <div class="text-h6 text-left">Payment Description: Web Development</div>
            </div>
            </page>
            </q-card-section>

          </q-card>
        </q-dialog>

  </div>
</template>

<script>

export default {
	data(){
		return {
			panel: 'invoice',
			isPwd: true,
      rec:false,
			editor: 'Use text editor below to write Description',
      project_invoice:'',
      medium:false,
      client_invoice:'',
      price_invoice:'',
      description_invoice:'',
			model:null,
			options:['Jenga-Docs','Rony-Quail'],
			members:["member 1", "member 2"],
			selected: [],
         columns2:[
	        { name: 'project', align: 'left', label: 'Project Invoiced', field: 'project_invoiced', sortable: true },
	        { name: 'amount', align: 'left', label: 'Amount', field: 'amount', sortable: true },
	        { name: 'client', align: 'left', label: 'Client invoiced', field: 'client', sortable: true }
         ],
         data2:[{
         	project_invoiced:'Jenga-Docs',
         	amount:'Ksh 4000',
         	client:'Jane Quail'
         },
         {
         	project_invoiced:'German Point ORM',
         	amount:'Ksh 15000',
         	client:'German Point'
         }],
         columns:[
	        { name: 'project', align: 'left', label: 'Client', field: 'client', sortable: true },
	        { name: 'amount', align: 'left', label: 'Amount', field: 'amount', sortable: true },
	        { name: 'date', align: 'left', label: 'Date Issued', field: 'date', sortable: true }
         ],
         data:[{
         	client:'Jane Quail',
         	amount:'Ksh 4000',
         	date:'12/1/20'
         }]
		}
	},
	methods: {
    getSelectedString () {
      return this.selected.length === 0 ? '' : `${this.selected.length} record${this.selected.length > 1 ? 's' : ''} selected of ${this.data.length}`
    }
  }
}

</script>

<style scoped>

.create-pd{
	padding:15px;
}


.invoice-det{
  margin-bottom:15px;
  background-color:#042C71;
  color:white;
  padding-left:10px;
  font-weight:bold;
  font-size:25px;
}

.tb-btn{
	padding-top:15px;
	padding-bottom:15px;
}

.preview{
  background-color:grey;
}

page {
  background: white;
  display: block;
  margin: 0 auto;
  margin-bottom: 0.5cm;
  box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);
}

page[size="A4"] {  
  width: 21cm;
  height: 29.7cm; 
}
page[size="A4"][layout="landscape"] {
  width: 29.7cm;
  height: 21cm;  
}
page[size="receipt"]{
  width: 19.7cm;
  height: 11cm;  
}
page[size="A3"] {
  width: 29.7cm;
  height: 42cm;
}
page[size="A3"][layout="landscape"] {
  width: 42cm;
  height: 29.7cm;  
}
page[size="A5"] {
  width: 14.8cm;
  height: 21cm;
}
page[size="A5"][layout="landscape"] {
  width: 21cm;
  height: 14.8cm;  
}
@media print {
  page {
    margin: 0;
    box-shadow: 0;
  }
}

.proposal-header{

  padding-left:20px;
  padding-bottom:15px;
  font-weight:light;
  line-height:17px;

}

.proposal-body{

  padding:10px;

}

.receipt-buttons{
  margin-right:15px;
}

.preview{
  background-color:grey;
}

.table-pd{
  padding:5px;
}

.invoice-header{
  background-color:#042C71;
  color:white;
  font-weight:bold;
  padding:5px;
  font-size:25px;
}

.proposal-body{
  padding:30px;

}

.pay{
  font-weight:light
}

.proposal-pd{
  padding:10px;
  line-spacing:0.5px;
}

@media only screen 
and (min-width : 320px) 
and (max-width : 480px) {
/* Here you should set what size you want your div to be 
when viewed on smartphone */
/* Styles */
  page[size="A4"]{
    width:100%;
  }

  page[size="receipt"]{
    width:100%;
  }
  
}

</style>