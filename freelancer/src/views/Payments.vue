<template>
    <div class="payments">
        <div class="q-gutter-y-md">
            <q-option-group
                v-model="panel"
                inline
                :options="[
                { label: 'Create Payments', value: 'member_payment' },
                { label: 'Confirm Payments', value: 'confirm_payments' }
                ]"
            />
            <div class="create-pd">
                <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders">
                    <q-tab-panel name="member_payment">
                        <div class="text-h6">Team Member Payment
                        </div>

                        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">

                           <q-select filled v-model="title_member" :options="members" label="Select Member To Pay *" />

                            <q-input filled v-model="price" label="Payment Amount *" mask="#.##" fill-mask="0" reverse-fill-mask input-class="text-right" />

                    <div>
                        <q-btn label="Submit" type="submit" color="primary"/>
                        <q-btn label="Clear" type="reset" color="primary" flat class="q-ml-sm" />
                    </div>
                    </q-form>

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
            members:['Member 1', 'Member 2', 'Member 3'],
            selected:[],
            panel:'member_payment'
        }
    },
}
</script>