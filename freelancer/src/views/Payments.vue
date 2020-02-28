<template>
    <div class="payments">
        <div class="q-gutter-y-md">
            <q-option-group
                v-model="panel"
                inline
                :options="[
                { label: 'Create Payment Request', value: 'member_payment' },
                { label: 'Manage Payment Requests', value: 'manage_payments' }
                ]"
            />
            <div class="create-pd">
                <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders">

                    <q-tab-panel name="member_payment">
                        <div class="text-h6">Request Payment
                        </div>

                        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">

                           <q-select filled v-model="payment_type" :options="methods" label="Select Payment Method *" />

                            <q-input filled v-model="price" label="Payment Amount *" mask="#.##" fill-mask="0" reverse-fill-mask input-class="text-right" />

                            <q-input filled v-model="payment_description" label="Payment Description *"  />

                            


                    <div>
                        <q-btn label="Submit" type="submit" color="primary"/>
                        <q-btn label="Clear" type="reset" color="primary" flat class="q-ml-sm" />
                    </div>
                    </q-form>

                    </q-tab-panel>

                    <q-tab-panel name="manage_payments">
                        <q-table :data="data2" title="Requested Payments" row-key="member_name" :columns="columns2" selection="single" :selected.sync="selected"/>

                            <div :disabled="!selected.length > 0" class="tb-btn">
                                <q-btn label="Approve" type="submit" color="blue"/>
                                <q-btn label="Reject" type="reset" color="red" class="q-ml-sm" />
                            </div>

                        <q-table :data="data" title="Completed Payments" :columns="columns" />

                    </q-tab-panel>
                    
                </q-tab-panels>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    data() {
        return {
            methods:['Salary - Bank Transfer', 'Salary - Mobile Money','Float - Bank Transfer', 'Float - Mobile Money'],
            payment_type:'',
            selected:[],
            panel:'member_payment',
            columns2:[
	        { name: 'name', align: 'left', label: 'Member Name', field: 'member_name', sortable: true },
            { name: 'project', align: 'left', label: 'Payment Amount', field: 'payment_amount', sortable: true },
            { name: 'type', align: 'left', label: 'Payment Type', field: 'payment_type', sortable: true },
            { name: 'description', align: 'left', label: 'Payment Description', field: 'payment_description', sortable: true }
            ],
            data2:[{
                member_name:'Member1',
                payment_amount: 3000,
                payment_type:'Float - Mobile Money',
                payment_description:'Budgeted Task'
            }],
            data:[{
         	member_name:'Member1',
                payment_amount: 30000,
                payment_description:'Salary',
                payment_type:'Salary - Bank Transfer',
                payment_status: "Approved",
                date_created:'12/12/20'
         },
         {
         	member_name:'Member2',
                payment_amount: 6000,
                payment_type:'Float - Mobile Money',
                payment_status: "Approved",
                date_created:'13/12/20',
                payment_description:'Budgeted Task'
         }],
         columns:[
	       { name: 'name', align: 'left', label: 'Member Name', field: 'member_name', sortable: true },
            { name: 'amount', align: 'left', label: 'Payment Amount', field: 'payment_amount', sortable: true },
            { name: 'amount', align: 'left', label: 'Payment Status', field: 'payment_status', sortable: true },
            { name: 'date', align: 'left', label: 'Payment Type', field: 'payment_type', sortable: true },
            { name: 'date', align: 'left', label: 'Payment Description', field: 'payment_description', sortable: true },
            { name: 'date', align: 'left', label: 'Payment Date', field: 'date_created', sortable: true }
         ]
        }
    },
}
</script>

<style scoped>
.create-pd{
	padding:15px;
}

.tb-btn{
	padding-top:15px;
	padding-bottom:15px;
}

</style>