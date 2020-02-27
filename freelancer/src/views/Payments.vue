<template>
    <div class="payments">
        <div class="q-gutter-y-md">
            <q-option-group
                v-model="panel"
                inline
                :options="[
                { label: 'Create Payments', value: 'member_payment' },
                { label: 'Manage Payments', value: 'manage_payments' }
                ]"
            />
            <div class="create-pd">
                <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders">

                    <q-tab-panel name="member_payment">
                        <div class="text-h6">Team Member Payment
                        </div>

                        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">

                           <q-select filled v-model="payment_type" :options="methods" label="Select Payment Method *" />

                            <q-input filled v-model="price" label="Payment Amount *" mask="#.##" fill-mask="0" reverse-fill-mask input-class="text-right" />

                            <q-input filled v-model="payment_description" label="Payment Description *"  />

                            <q-input filled v-model="member_to_pay" label="Select Member For Payment *"  />

                            


                    <div>
                        <q-btn label="Submit" type="submit" color="primary"/>
                        <q-btn label="Clear" type="reset" color="primary" flat class="q-ml-sm" />
                    </div>
                    </q-form>

                    </q-tab-panel>

                    <q-tab-panel name="manage_payments">
                        <q-table :data="data2" title="Payments Pending" row-key="member_name" :columns="columns2" selection="single" :selected.sync="selected"/>

                            <div :disabled="!selected.length > 0" class="tb-btn">
                                <q-btn label="Confirm Payment" type="submit" color="blue"/>
                                <q-btn label="Reject Payment" type="reset" color="red" class="q-ml-sm" />
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
            methods:['Bank Transfer', 'Mobile Money'],
            payment_type:'',
            selected:[],
            panel:'member_payment',
            columns2:[
	        { name: 'name', align: 'left', label: 'Member Name', field: 'member_name', sortable: true },
	        { name: 'project', align: 'left', label: 'Payment Amount', field: 'payment_amount', sortable: true }
            ],
            data2:[{
                member_name:'Member1',
                payment_amount: 3000
            }],
            data:[{
         	member_name:'Member1',
                payment_amount: 3000,
                date_created:'12/12/20'
         },
         {
         	member_name:'Member2',
                payment_amount: 6000,
                date_created:'13/12/20'
         }],
         columns:[
	       { name: 'name', align: 'left', label: 'Member Name', field: 'member_name', sortable: true },
            { name: 'amount', align: 'left', label: 'Payment Amount', field: 'payment_amount', sortable: true },
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