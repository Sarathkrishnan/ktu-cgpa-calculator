var data=[
    cs=[

        [
            8,
            sub1={
                sub_name:"icps",
                sub_crdt:4

            },
            sub2={
                sub_name:"icps",
                sub_crdt:4

            },
            sub3={
                sub_name:"icps",
                sub_crdt:4

            },
            sub4={
                sub_name:"icps",
                sub_crdt:4

            },
            sub5={
                sub_name:"icps",
                sub_crdt:4

            },
            sub6={
                sub_name:"icps",
                sub_crdt:4

            },
            sub7={
                sub_name:"icps",
                sub_crdt:4

            },
            sub8={
                sub_name:"icps",
                sub_crdt:4

            },
            sub1={
                sub_name:"icps",
                sub_crdt:4

            },
            sub2={
                sub_name:"icps",
                sub_crdt:4

            },
            sub3={
                sub_name:"icps",
                sub_crdt:4

            },
            sub4={
                sub_name:"icps",
                sub_crdt:4

            },
            sub5={
                sub_name:"icps",
                sub_crdt:4

            },
            sub6={
                sub_name:"icps",
                sub_crdt:4

            },
            sub7={
                sub_name:"icps",
                sub_crdt:4

            },
            sub8={
                sub_name:"icps",
                sub_crdt:4

            },
        ]
    ],
    ce=[],
    ec=[],
    eee=[],
    me=[],
]


function sem_change(){
    var semester= document.getElementById("sem").value;
    if (semester<3){
        document.getElementById("gra_mech").style.display="block"
    }else{
        document.getElementById("gra_mech").style.display="none"
    }
}
function go(){
    var semester= document.getElementById("sem").value;
    var branch= document.getElementById("branch").value;
    console.log(semester);
    console.log(branch);
    var no_sub=data[branch][semester][0];

    for(i=0;i<no_sub;i++){
        document.write(data[branch][semester][i+1].sub_name);
        document.write("<br>")
        document.write(data[branch][semester][i+1].sub_crdt);

    }

    }

