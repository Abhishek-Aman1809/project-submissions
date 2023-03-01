// var header = document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';
// var input=document.querySelector('input');
// input.value='User Name'

// var item=document.querySelector('.list-group-item');
// item.style.color='red';

var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[2].style.backgroundColor ='green';

for(var i=0; i<items.length; i++){
    items[i].style.fontWeight='bold';
}
