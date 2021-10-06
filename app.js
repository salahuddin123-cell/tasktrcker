
showItem()
if (localStorage.getItem("savedItem")==null){   
    localStorage.setItem("savedItem",'[]')
    
  }

let todoItems=JSON.parse(localStorage.getItem("savedItem"))
document.getElementById("form").addEventListener("submit",function(){
    let val=document.getElementById("inp").value;
    let paraId="s"+val
    let parid="p"+val
    let htmlval=`<p id=${paraId}><span id=${parid}>${val}</span><span><button id=${val} onclick="editItem(this)" class="btn btn-primary btn-sm mx-2">Edit</button><span><button id=${val} onclick="deleteItem(this)" class="btn btn-danger  btn-sm s">Delete</button></span></p>`
    todoItems.push(htmlval)
 
    localStorage.setItem("savedItem",JSON.stringify(todoItems))
    showItem()
    document.getElementById("inp").value=""

});
function showItem(){
    if (localStorage.getItem("savedItem")==null){
        document.getElementsByClassName("low")[0].innerHTML=""
    }else{
        let todo=JSON.parse(localStorage.getItem("savedItem")).reverse()
 
        let todolist=todo.join("")
        document.getElementsByClassName("low")[0].innerHTML=todolist
    }


}
function deleteItem(e){
    btnid=e.id
    let paraid="s"+btnid
    let ind=todoItems.findIndex(
        item =>item.indexOf(paraid)>-1
      )
      todoItems.splice(ind,1)
      localStorage.setItem("savedItem",JSON.stringify(todoItems))
      showItem()
}
function editItem(e){
    btnid=e.id;
    
    let parid="p"+btnid;
    let paraid="s"+btnid;
    
    let ind=todoItems.findIndex(
        item =>item.indexOf(paraid)>-1
      )
    
    let currentPara=document.getElementById(parid).innerHTML
    document.getElementById("inp").value=currentPara
    document.getElementById("btn1").innerText="update"
  

document.getElementById("btn1").addEventListener("click",(e)=>{
    document.getElementById("btn1").innerText="Add"
  document.getElementById(parid).innerHTML=document.getElementById("inp").value
  let newval=document.getElementById("inp").value
  todoItems.splice(ind,1)
  localStorage.setItem("savedItem",JSON.stringify(todoItems))
 todoItems[ind]=`<p id=${paraid}><span id=${parid}>${newval}</span><span><button id=${val} onclick="editItem(this)" class="btn btn-primary btn-sm mx-2">Edit</button><span><button id=${val} onclick="deleteItem(this)" class="btn btn-danger  btn-sm s">Delete</button></span></p>`
    localStorage.setItem("savedItem",JSON.stringify(todoItems))
      showItem()
})

}
document.getElementById("btn2").addEventListener("click",()=>{
    localStorage.removeItem('savedItem');
showItem()
})
