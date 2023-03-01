// var header = document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';
// var input=document.querySelector('input');
// input.value='User Name'

// var item=document.querySelector('.list-group-item');
// item.style.color='red';

// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[2].style.backgroundColor ='green';

// for(var i=0; i<items.length; i++){
//     items[i].style.fontWeight='bold';
// }

// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[2].style.backgroundColor ='green';

// for(var i=0; i<li.length; i++){
//     li[i].style.fontWeight='bold';
// }

var item=document.querySelector('.list-group-item');
var secondItem = document.querySelector('.list-group-item:nth-child(3)');
secondItem.style.color='green';
var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color='white';

//query Selector Alll

var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor='green';
}

