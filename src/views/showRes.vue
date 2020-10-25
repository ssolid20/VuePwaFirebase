<template>
     <div>
        <ul id="messages" ref="mess" v-for="x in datefromdb" :key="datefromdb.id">
                <li class="print">{{x.date}}</li>
                <li class="print">{{x.question}}</li>
                <li class="output">{{x.answer}}</li>
        </ul>
    </div>
</template>


<script>
import db from '@/firebase/init'
import moment from "moment"
export default {
    components:{

    },
    data(){
        return{
            datefromdb:[],

        }
    },
    created(){
        /*db.collection('collectofcalclus').get()
        .then(snapshot => {
        snapshot.forEach(doc => {
                let smoothie = {question:doc.data().question,answer:doc.data().answer,date:moment(doc.data().date).format('lll'),id:doc.id}
                this.datefromdb.push(smoothie)
                })
                console.log(this.datefromdb)
        })*/
        let ref = db.collection('collectofcalclus').orderBy('date');
    
    // subscribe to changes to the 'messages' collection
        ref.onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
                if(change.type == 'added'){
                let doc = change.doc
                this.datefromdb.push({
                id: doc.id,
                question: doc.data().question,
                answer: doc.data().answer,
                date: moment(doc.data().date).format('lll')
                })
                }
        })
        })
    }
}
</script>
<style >
#messages{
    display: inline;
    overflow-y: scroll;
    list-style: none;
    /*height: 250px;
    width: 720px;*/
    overflow: auto;
  
  }
.print1{
        text-align:right;
        padding-right: 20px;
        color:#adc1e2;
        background-color: #2D3748;
        margin-top : 5px;
        margin-bottom: 5px;
        border-radius: 5px;
}
.print{ 
        text-align:right;
        padding-right: 20px;
        margin-top : 5px;
        margin-bottom: 5px;
        background-color: #eee;
        border-radius: 5px;}
.output1{
        text-align:left; 
        color:#adc1e2;
        margin-top : 5px;
        margin-bottom: 5px;
        padding-left: 20px;
        border-radius: 5px;
}
.output{
        text-align:left; 
        margin-top : 5px;
        margin-bottom: 5px;
        padding-left: 20px;
        background-color: white;
        border-radius: 5px;
}
</style>