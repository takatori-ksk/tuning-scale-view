<template>
    <td :id="`tuning-${stringId}`" class="horizontal-clm" 
         v-bind:class="getClass(value.note, rootNote)">
        <select :id="`tuning-select-${stringId}`" 
         v-model="localParam"
         >
            <option v-for="(element, index) in notes" 
            v-bind:value="element" 
            v-bind:key="`${stringId}-${index}`">
                {{ element.name }}
            </option>
        </select>
        <!--<span> {{ value.name }} </span>-->
        <!--<<span style="font-size:small;color:purple;">{{ this.notes[(value.note)%12].note }}</span>-->
    </td>
</template>

<script>
export default {
    props:{
        value: {
            note:Number,
            name:String,
        },
        stringId:String,
        notes:Array,
        rootNote:Number,
        getClass:Function,
        getName:Function,
    },
    methods:{
        updateValue: function(value){
            console.log("Tuning.updateValue; value=" + value)
            this.$emit('updateValue', value);
        }
    },
    computed: {
        localParam: {
            get: function() {
            return this.value
            },
            set: function(value) {
                console.log("Tuning.updateValue; value=" + value)
                this.$emit('updateValue', value);
            },
        },
    },
    created : function(){
        console.log('created');
    },
    mounted : function(){
        console.log('mounted'); 
        console.log(this.value.note);
        //this.notes[this.value]
        console.log(this.$el);
    },
    data(){
        return {
        }
    }
}
</script>
<style>
select{
    font-size: inherit;
    color: inherit;
    align-content: center;
    text-align: center;
}
</style>

