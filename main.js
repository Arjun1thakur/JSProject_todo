let data=[];
let title_btn = document.querySelector('#add_title');
let title = document.querySelector('#add_task_title');
let add_taskInCard=document.querySelector('#add_taskInCard');
let container=document.querySelector('.container')
let sep_val=document.querySelector(".specific");
title_btn.addEventListener('click',()=>{
    let name = title.value
    let ids=Date.now()
    const tempObj={
        id:ids,
        title:name,
        content:new Set()
    }
    data.push(tempObj);
    addTask();
})
var val0=0;
function pop_up_task_card(val){
    let pop_window=document.querySelector('.blur2');
    pop_window.style.display='block'
    val0=val;
};

function main_list(){
    let pop_window=document.querySelector('.blur2');
    let item='';
    for(obj of data){
        if(obj.id==val0){
            if(obj.content.size<5){
                obj.content.add(add_taskInCard.value)
            }else{
                alert("Limit Over")
                }
        }
    }
    for(obj of data){
        for(main of obj.content){
            if(obj.id==val0){
                item+=`<tr>
                <td><h2 id="${main}" class="items" value="${main}">${main}</h2></td>
                <td><button class="done" id="check_btn_${main}" value="${main}" onclick='strike(this.value)'>Done</button></td>
            </tr>`
            }
        }
    }
    for(obj of data){
        let list0=document.getElementsByClassName(`${obj.id}`);
        if(list0[0].id==(Number(val0)+1)){
            list0[0].innerHTML=item; 
        }
    }
    pop_window.style.display='none'
    console.log(data)
}

function addTask(){
    let cards=document.querySelector('.cards');
    let card = '';

    data.forEach((value)=>{
    card += `<div class="card" id="${value.id}">
            <button id='title' value="${value.id}" onclick="specific(this.value)">${value.title}</button>
            <div class="content">
                <table class="${value.id}" id="${value.id+1}" class="table">

                </table>
            </div>
            <div class="option">
                <button class="delete" value=${value.id} onclick='deleteCard(this.value)'><i class="fa-solid fa-trash"></i></button>
                <button class="edit" value="${value.id}" onclick="pop_up_task_card(this.value)"><i class="fa-solid fa-pen-to-square"></i></button>
            </div>
        </div>`
    });
    cards.innerHTML=card;
    let pop_window=document.querySelector('.blur1');
    pop_window.style.display='none'
}

function check(){
    if(data.length==0){
        document.querySelector('.content_box').innerHTML = 'No Items in the todo list'
    }else{
        document.querySelector('.content_box').innerHTML = 'Card Items limit is 5.'
    }
}
setInterval(()=>{
    check();
},0)

function strike(value1){
    let strike=document.getElementById(`${value1}`)
    console.log(strike);
    // let done_str=document.getElementById(`check_btn_${value1}`)
    for(obj of data){
        for(main of obj.content){
            if(main==value1){
                strike.style.textDecoration= 'line-through';
                strike.style.color= 'red';
                break;
            }
        }
    }
    // let done=document.getElementById(`${value1}`)
}

function addTask_popup(){
    let pop_window=document.querySelector('.blur1');
    pop_window.style.display='block'
};

function close_popup(){
    let pop_window=document.querySelector('.blur1');
    pop_window.style.display='none'
};

function close_popup_card(){
    let pop_window=document.querySelector('.blur2');
    pop_window.style.display='none'
};

function deleteCard(main){
    var delete_div = document.getElementById(`${main}`);
    for(obj of data){
        if(obj.id==main){
            data.splice(data.findIndex(obj => obj.id == main) , 1)
        }
    }
delete_div.parentNode.removeChild(delete_div);
}
let title_specific = document.querySelector('#title');
function specific(val2){
    container.style.display="none"
    sep_val.style.display="block"
    let element=document.querySelector('.content_X');
    let item='';
    data.forEach((val1)=>{
        if(val1.id==val2){
            title_specific.innerHTML = `${val1.title}`
        }
    })
    // element.innerHTML=item
}

function hidden0(){
    sep_val.style.display="none"
    container.style.display="block"
}