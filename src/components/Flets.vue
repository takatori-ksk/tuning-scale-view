<template>
    <span >
        {{this.getName(thisNote)}}
        <!--<span style="font-size:small;color:purple;">{{ this.notes[(thisNote)%12].note }}</span>-->
    </span>
</template>
<script>
export default {
    props: {
        openNote: {
            note:Number,
            name:String,
        },
        index:Number,
        rootNote:Number,
        getClass:Function,
        notes:Array,
        getName:Function,
    },
    computed:{
        thisNote: function() {
            return this.openNote.note + this.index + 1;
        },
    },
    methods:{
        isC : function(note) {
            console.log("isC" + note);
            return note%12 === 0;
        },
    },
    mounted(){
        console.log(this.rootNote);
    },
    data(){
        return {
        }
    }
}
</script>
<style>
td {
 display: block;
 text-align: left;
}
</style>




