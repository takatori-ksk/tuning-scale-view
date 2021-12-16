<template>
    <div id="header-div">
        <span> Key Note is: </span>
        <select id="root-select" v-model="localParam">
            <option v-for="(element, index) in notes" 
            v-bind:value="element" 
            v-bind:key="`${index}`">
                {{ element.name }}
            </option>
        </select>
    </div>
</template>
<script>
export default {
    props:{
        value: {
            note:Number,
            name:String,
        },
        notes:Array,
    },
    computed:{
        localParam: {
            get: function() {
            return this.value
            },
            set: function(value) {
                console.log("ScaleHeader.updateValue; value=" + value)
                this.$emit('updateRoot', value);
            },
        },
    }
}
</script>

<style>
#header-div{
    margin: 2px;
}

#root-select{
    font-size: x-large;
    font-weight: bold;
    font-family:'Courier New';
    color: greenyellow;
    background-color: black;
    text-align: center;
    padding: 2px;
    border: 3px inset;
}
option{
    font-size:medium;
}
</style>
