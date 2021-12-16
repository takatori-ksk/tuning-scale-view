<template>
    <tr id=':stringId'>
        <span class="horizontal-clm string-header">{{ stringId }}</span>
        <Tuning 
        @updateValue="updateValue" 
        :value='value' 
        :notes='notes' 
        :stringId='stringId'
        :rootNote='rootNote'
        :getClass='getClass'
        :getName='getName'
        />
        <!--<th class="horizontal-clm">{{this.getName(value)}}</th>-->
        <td class="horizontal-clm flet" 
        v-for="(e, index) in flets" 
        :key="index"
        :class="getClass((value.note + index + 1), rootNote)">
            <Flets 
                :openNote='value' 
                :index='index' 
                :notes='notes' 
                :rootNote='rootNote'
                :getClass='getClass'
                :getName='getName'/>
        </td>
    </tr>
</template>
<script>
import Flets from './Flets.vue'
import Tuning from './Tuning.vue'
export default {
    props:{
        stringId:String,
        value: {
            note:Number,
            name:String,
        },
        notes:Array,
        rootNote:Number,
        flets:Array,
        getName:Function,
    },
    components: {
        Flets,
        Tuning,
    },
    computed:{
    },
    methods:{
        updateValue: function(value){
            console.log("OneString.updateValue; value=" + value);
            console.log("stringId=" + this.stringId);
            this.$emit('updateValue', value, this.stringId);
        }
    },
    data(){
        return {
            getClass: function(note, rootNote){
                if(note%12 === rootNote%12){
                    return "root-note";
                } else if (note%12 === (rootNote + 7) %12){
                    return "fifth-note";
                } else if (note%12 === (rootNote + 4) %12){
                    return "major-third-note";
                } else if (note%12 === (rootNote + 11) %12){
                    return "major-seventh-note";
                } else if (note%12 === (rootNote + 2) %12){
                    return "second-note";
                } else if (note%12 === (rootNote + 9) %12){
                    return "sixth-note";
                } else if (note%12 === (rootNote + 5) %12){
                    return "fourth-note";
                } else if (note%12 === (rootNote + 10) %12){
                    return "minor-seventh-note";
                } else if (note%12 === (rootNote + 3) %12){
                    return "minor-third-note";
                } else {
                    return "other-note";
                }
            },
            funcFactory:{
                isRoot: function(note, rootNote){
                    console.log("isRoot args:" + note + ", root:" + rootNote);
                    return note%12 === rootNote;
                },
                isFifth: function(note, rootNote){
                    return note === (rootNote + 7) %12;
                },
                isMajorThird: function(note, rootNote){
                    return note === (rootNote + 4) %12;
                },
            }
        }
    }
}
</script>

<style>
.horizontal-clm{
    border-style:inset;
    float: left;
    width: 80px;
    text-align: center;
    padding: 2px;
    background-color: rgb(222, 192, 154);
    color: rgb(33, 71, 121);
}
.string-header {
    text-align: right;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    color: #1B1B1B;
    border-color:#E4E4E4;
    background-color: #E4E4E4;
}
.flet{
    margin-bottom: 5px;
}
.root-note{
    font-weight:900;
    border-color: #B4C894;
    background-color: #E4F8C4;
}
.fifth-note{
    background-color: #CAF8C4;
}
.major-third-note{
    background-color: #C4E4F8;
}
.sixth-note{
    background-color: #C4F8F3;
}
.second-note{
    background-color: #C4F8D9;
}
.major-seventh-note{
    background-color: #C4CaF8;
}
.fourth-note{
    background-color: #F8F3C4;
}
.minor-seventh-note{
    background-color: #F9D9C3;
}
.minor-third-note{
    background-color: #F8C4CA;
}
.other-note{
    background-color: whitesmoke;
}
</style>
