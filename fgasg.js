<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css" />
    <link rel="stylesheet" href="style.css">
    <title>todolist</title>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>    
</head>
<body>
  <div class="container">
    <div class="row justify-content-center">
      <a href="todolist.html">
        <h1 id="todolistHeader">To do list</h1>
      </a>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <hr>
        <p id="enter">Write and Press Enter!</p>
        <p class="inputarea text-center">
          <input type="text" id="inputText" placeholder="what to do">
          <ul id="todolist" class="list-unstyled"></ul>
        </p>
      </div>
      <div class="col-sm-6">
        <hr>
        <p id="enter">Done</p>
        <ul id="donelist"></ul>
      </div>
    </div>
  </div>

  <script src="assets/main.js"></script>
</body>
</html>

--css--

a{
  color: #000;
}
a:hover{
  color:000;
  text-decoration: none;
}
#todolistHeader{
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-weight: 100;
}

#enter{
  text-align: center;
  font-size: 2rem;
  font-weight: 100
}
#inputText{
  width: 100%;
  height: 2.5rem
}
#todolist, #donelist{
  width: 100%;
  height: 2.5rem;
}
#todolist li{
  border-left: 5px solid #25c797;
  border-bottom: 1px dashed #ccc;
  margin-bottom: 4px;
  width: 100%;
  height: 2.5rem;
  padding: 5px 10px;
  cursor:pointer;
  transition: all 0.5s;
  transition-timing-function: ease;
  color: #696969;
  background-color: #f1f1f1;
}
#todolist li:hover{
  transition: all 0.5s;
  transition-timing-function: ease;
  color: #696969;
  background-color: #f1f1f1;
}
#donelist li{
  border-bottom: 1px dashed #ccc;
  margin-bottom: 4px;
  width: 100px;
  width: 100%;
  height: 2.5rem;
  padding: 5px 10px;
  cursor:pointer;
  transition-timing-function: ease;
  color: #e7007b;
  background-color: #fff;
}
#donelist li:hover{
  transition: all 0.5s;
  transition-timing-function: ease;
  color: #e7007b;
  background-color: #fff;
}
#todolist li span{
  font-size: 1.3rem;
  font-weight: 200;
  padding-left: 10px;
  vertical-align: middle;
}
#donelist li span{
  font-size: 1.3rem;
  font-weight: 200;
  padding-left: 10px;
  vertical-align: middle;
  text-decoration: line-through;
  color: #e7007b;
}
.fa-minus{
  float: right;
  padding: 5px;
  visibility: hidden;
  color: #f2143f;
}




--js--

let totalOfItems = 0;

function updateItemStatus(){
  const chId = this.id.replace('cb_', '');
  const itemText = document.getElementById('item_' + chId);

  if(this.checked){
    itemText.className = 'checked';
  }else{
    itemText.className = '';
  }
}

function renameItem(){
  //this === span
  const newText = prompt("what should this item be rename to?");
  if(!newText || newText === "" || newText === " ") return false; //blank 방지
  const spanId = this.id.replace('pencilIcon_', '');
  const span = document.getElementById('item_' + spanId);

  span.innerText = newText;
}

const donelist = document.getElementById('donelist');
function moveItem(){
  //this === span
  const listItemId = this.id.replace('li_', '');
  const listItem = document.getElementById('li_' + listItemId);
  const listItemParentId = listItem.parentElement;
  //conole.log(listItemParentId)
  if(listItemParentId == donelist){
    todolist.appendChild(listItem);
  }else{
    donelist.appendChild(listItem);
  }
}

function deleteItem(donelist){
  //this === minusIcon
  const listItemId = this.id.replace('minusIcon_', '');
  document.getElementById('li_' + listItemId).style.display = "none";
}

function mouseover(){
  //this === li
  const pencilIconId = this.id.replace('li_','');
  const pencilIcon = document.getElementById('pencilIcon_' + pencilIconId);
  const minusIcon = document.getElementById('minusIcon_' + pencilIconId);

  pencilIcon.style.visibility = 'visible';
  minusIcon.style.visibility = 'visible';
}

function mouseout(){
  //this === li
  const pencilIconId = this.id.replace('li_','');
  const pencilIcon = document.getElementById('pencilIcon_' + pencilIconId);
  const minusIcon = document.getElementById('minusIcon_' + pencilIconId);

  pencilIcon.style.visibility = 'hidden';
  minusIcon.style.visibility = 'hidden';
}

function addNewItem(list, itemText){
  totalOfItems++;

  let date = new Date();
  const id = "" + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();

  const listItem = document.createElement('li');
  listItem.id = 'id_' + id;
  listItem.ondblclick = moveItem;
  listItem.addEventListener('mouseover', mouseover);
  listItem.addEventListener('mouseout', mouseout);

  const span = document.createElement('span');
  span.id = 'item_' + id;
  span.innerText = itemText;

  const pencilIcon = document.createElement("i");
  pencilIcon.className = 'fa fa-pencil';
  pencilIcon.id = 'pencilIcon_' + id;
  pencilIcon.onclick = renameItem;

  const minusIcon = document.createElement("i");
  pencilIcon.className = 'fa fa-minus';
  pencilIcon.id = 'minusIcon_' + id;
  pencilIcon.onclick = deleteItem;

  listItem.appendChild(span);
  listItem.appendChild(minusIcon);
  listItem.appendChild(pencilIcon);
  list.appendChild(listItem);
}

const inputText = document.getElementById('inputText');
inputText.focus();

inputText.onkeyup = function(event){
  //Event.which (13) === ENTER key!!
  if(event.which === 13){
    const itemText = inputText.value;
    if(itemText === "" || itemText === " ") return false; //blank 방지
    addNewItem(document.getElementById('todolist'), itemText);
    inputText.focus();
    inputText.select();
  }
};