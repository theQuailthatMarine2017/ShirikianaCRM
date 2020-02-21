<template>
  <div class="projects">
    <div class="row">
	      <div class="col table-pd"><q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Create Proposal</div>
      </q-card-section>
      <q-card-section>
      	<q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">

      		<q-input filled v-model="proposal_title" label="Proposal Title *" lazy-rules />

		     <q-card-section v-html="proposal_body" />

      		<q-editor
		      v-model="proposal_body" 
		      :toolbar="[
        [
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            options: ['left', 'center', 'right', 'justify']
          }
        ],
        ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
        ['token', 'hr', 'link', 'custom_btn'],
        [
          {
            label: $q.lang.editor.formatting,
            icon: $q.iconSet.editor.formatting,
            list: 'no-icons',
            options: [
              'p',
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'code'
            ]
          },
          {
            label: $q.lang.editor.fontSize,
            icon: $q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7'
            ]
          },
          {
            label: $q.lang.editor.defaultFont,
            icon: $q.iconSet.editor.font,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'default_font',
              'arial',
              'arial_black',
              'comic_sans',
              'courier_new',
              'impact',
              'lucida_grande',
              'times_new_roman',
              'verdana'
            ]
          },
          'removeFormat'
        ],
        ['quote', 'unordered', 'ordered'],

        ['undo', 'redo'],['viewsource']]" :fonts="{
        arial: 'Arial',arial_black: 'Arial Black',comic_sans: 'Comic Sans MS',courier_new: 'Courier New', impact: 'Impact', lucida_grande: 'Lucida Grande', times_new_roman: 'Times New Roman', verdana: 'Verdana' }"
		    />

      	</q-form>

      	 <div class="proposal-pd">
        <q-btn label="Preview" @click="medium = true" type="submit" color="primary"/>
        <q-btn label="Clear All" type="reset" color="red" class="q-ml-sm" />
      </div>
      </q-card-section>


    </q-card>
</div>
</div>

    <q-dialog
          v-model="medium"
          full-width
          class="preview"
        >
          <q-card style="width: 700px; max-width: 80vw;">
            <q-card-section>
              <q-card-actions align="left" class="bg-white text-center">
              <q-btn color="green" label="Send Proposal" v-close-popup />
            </q-card-actions>
              <div class="text-h6 text-center">Proposal Preview</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <page size="A4">

                <div class="proposal-header text-center">
                <q-avatar size="100px">
                  <img src="../assets/flooop.png">
                </q-avatar>
              </div>

              <div class="proposal-header">
                <div>{{ businessname }}.</div>
                <div>{{ businesslocation }}.</div>
                <div>Nairobi, Kenya.</div>
              </div>

              <div class="text-h6 text-center">{{proposal_title}}</div>
              <div class="proposal-body" v-html="editor">{{editor}}</div>
            </page>
            </q-card-section>

          </q-card>
        </q-dialog>


  </div>
</template>

<script>
import moment from 'moment'
export default{
	data(){
		return {
			proposal_body: '<p style="font-size:20px;font-weight:bold;text-decoration:underline;">OVERVIEW</p><p>Type Proposal Overview Here.</p><br/><p style="font-size:20px;font-weight:bold;text-decoration:underline;">GOALS & OBJECTIVES</p><p>Type Proposal Goals Here;<ol><li>Goal 1</li><li>Goal 2</li></ol></p><br/><p style="font-size:20px;font-weight:bold;text-decoration:underline;">BUDGET</p><p>Type Proposal Budget Here</p><br/><p style="font-size:20px;font-weight:bold;text-decoration:underline;">SUMMARY</p><p>Type Proposal Summary Here</p>',
      businessname:'',
      businesslocation:'',
      options:['German Point', 'Hair Palace'],
      medium:false,
      proposal_title:'',
      proposal_date:moment(new Date(), 'DD/MM/YYYY').format('DD/MM/YYYY')
		}
	}
}

</script>
<style scoped>

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

  padding-left:30px;
  font-size:18px;
  font-weight:light;
  font-family:Times New Roman;
  line-height:17px;

}

.proposal-body{

  padding:10px;

}

.table-pd{
	padding:5px;
}

.proposal-body{
  padding:30px;

}

.proposal-pd{
	padding:10px;
  line-spacing:0.5px;
}

</style>