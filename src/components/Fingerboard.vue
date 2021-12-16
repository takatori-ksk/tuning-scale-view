<template>
    <v-sheet
        color="white"
        elevation="4">
        <ScaleHeader
            @updateRoot="updateRoot"
            :value='root' 
            :notes='notes' 
            />
        
    <v-sheet
        color="#E4E4E4"
        elevation="4">
        <v-simple-table>
            <tr>
                <th class="horizontal-clm header">string</th>
                <td class="horizontal-clm header" style="font-weight:bold;">Open</td>
                <td class="horizontal-clm header" v-for="(e, index) in flets" :key="index">
                    {{index +1}}
                </td>
            </tr>
            <OneString 
                @updateValue="updateBaseNote"
                :value='first.note' 
                :rootNote='root.note'
                :stringId='first.name'
                :notes='notes' 
                :flets='flets' 
                :getName='getNoteName'
            />
            <OneString 
                @updateValue="updateBaseNote"
                :value='second.note' 
                :rootNote='root.note'
                :stringId='second.name'
                :notes='notes' 
                :flets='flets' 
                :getName='getNoteName'
            />
            <OneString 
                @updateValue="updateBaseNote"
                :value='third.note' 
                :rootNote='root.note'
                :stringId='third.name'
                :notes='notes' 
                :flets='flets' 
                :getName='getNoteName'
            />
            <OneString 
                @updateValue="updateBaseNote"
                :value='fourth.note' 
                :rootNote='root.note'
                :stringId='fourth.name'
                :notes='notes' 
                :flets='flets' 
                :getName='getNoteName'
            />
            <OneString 
                @updateValue="updateBaseNote"
                :value='fifth.note' 
                :rootNote='root.note'
                :stringId='fifth.name'
                :notes='notes' 
                :flets='flets' 
                :getName='getNoteName'
            />
            <OneString 
                @updateValue="updateBaseNote"
                :value='sixth.note' 
                :rootNote='root.note'
                :stringId='sixth.name'
                :notes='notes' 
                :flets='flets' 
                :getName='getNoteName'
            />
        </v-simple-table>
        </v-sheet>
        <div :v-if="isDebug"><span>Debug Mode.</span><span>{{this.root.note}}</span></div>
    </v-sheet>
</template>

<script>
import OneString from './OneString.vue'
import ScaleHeader from './ScaleHeader.vue'
import {NOTES} from './../CommonConsts.js'
export default {
    props:{
    },
    components: {
        OneString,
        ScaleHeader,
    },
    computed:{
        getNoteName(){
            return function(note){
                console.log(note);
                return this.notes[note%12].name;
            }
        }
    },
    methods:{
        updateRoot(value){
            console.log(value);
            this.$set(this, "root", value);
            console.log(this.root);
        },
        updateBaseNote(...args){
            console.log("args:" +args);
            const [value, stringId] = args;
            switch(stringId){
                case "first":
                    this.$set(this.first, "note", value);
                    console.log(this.first.note);
                    break;
                case "second":
                    this.$set(this.second, "note", value);
                    break;
                case "third":
                    this.$set(this.third, "note", value);
                    break;
                case "fourth":
                    this.$set(this.fourth, "note", value);
                    break;
                case "fifth":
                    this.$set(this.fifth, "note", value);
                    break;
                case "sixth":
                    this.$set(this.sixth, "note", value);
                    break;
                default:
                    break;
            }
            console.log(
                "first:"
                + this.first.note.name
                + " second:"
                + this.second.note.name
                + " third:"
                + this.third.note.name
                + " fourth:"
                + this.fourth.note.name
                + " fifth:"
                + this.fifth.note.name
                + " sixth"
                + this.sixth.note.name
            );
        }
    },
    data(){
        return {
            isDebug:false,
            title: "Header",
            text: "Hello Vue.js!",
            flets:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
            notes: NOTES,
            root: {
                note: 0,
                name: "C"
            },
            sixth: {
                name: "sixth",
                note: {
                    note: 4,
                    name: "E",
                },
            },
            fifth: {
                name: "fifth",
                note: {
                    note: 9,
                    name: "A",
                },
            },
            fourth: {
                name:"fourth",
                note: {
                    note: 2,
                    name: "D",
                },
            },
            third: {
                name:"third",
                note: {
                    note: 7,
                    name: "G",
                },
            },
            second: {
                name:"second",
                note: {
                    note:11,
                    name: "B",
                },
            },
            first: {
                name:"first",
                note: {
                    note: 4,
                    name: "E",
                },
            },
        }
    },
    mounted : function(){
        console.log("FingerBoard.mounted;")
        console.log(this.root.note);
    },
}
</script>

<style scoped>
h1{
    color: blue
}
p{
    color:blue
}
table {
    background-color: #E4E4E4;  /* 背景色指定 */
}
 
th {
    background-color: white;  /* 背景色指定 */
}


.horizontal-clm{
    float: left;
    width: 80px;
    text-align: left;
}

.header{
    border-style:hidden;
    text-align: right;
}
</style>