<template>
  <form>
    <h3>Add new pizza:</h3>

<div class="form-group row">
  <label class="col-sm-3">Name</label>
  <div class="col-sm-9">
    <input type="text" class="form-control" v-model="newPizza.name">
  </div>
</div>

  <div class="form-group row">
    <label class="col-sm-3">Description:</label>
    <div class="col-sm-9">
      <textarea type="text" class="form-control" rows="4" v-model="newPizza.description"></textarea>
    </div>
  </div>

    <p><strong>Option 1:</strong></p>
    <div class="form-group row">
      <label class="col-sm-3">Size(")</label>
      <div class="col-sm-9">
        <textarea type="text" class="form-control" rows="1" v-model="newPizza.options[0].size"></textarea>
      </div>
    </div>


      <div class="form-group row">
        <label class="col-sm-3">Price</label>
        <div class="col-sm-9">
          <textarea type="text" class="form-control" rows="1" v-model="newPizza.options[0].price"></textarea>
        </div>
      </div>


      <p><strong>Option 2:</strong></p>
      <div class="form-group row">
        <label class="col-sm-3">Size(")</label>
        <div class="col-sm-9">
          <textarea type="text" class="form-control" rows="1" v-model="newPizza.options[1].size"></textarea>
        </div>
      </div>

        <div class="form-group row">
          <label class="col-sm-3">Price</label>
          <div class="col-sm-9">
            <textarea type="text" class="form-control" rows="1" v-model="newPizza.options[1].price"></textarea>
          </div>
        </div>


<div class="form-group row">
  <button type="button" class ="btn btn-success btn-block" @click ="addMenuItem()">Add</button>
</div>




  </form>



</template>

<script>
  import {dbMenuRef} from '../FireBaseConfig'


    export default {
        data(){
          return{
            newPizza:{

            'name': 'Eg.Margherita',
            'description': 'Eg.A delicious tomato based pizza topped with mozzarella',
            'options': [{
            'size': 9,
            'price': 6.95
          }, {
            'size': 12,
            'price': 10.95
          }]
          }

            }
          },
      methods:{
          addMenuItem(){
          dbMenuRef.push(this.newPizza)
          }
      }



    }
</script>

<style scoped>

</style>
