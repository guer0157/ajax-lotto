//main.js

//HTTP fetch source
    const root= 'https://griffis.edumedia.ca/mad9014/lotto/nums.php'

//Get elements and add event listeners
    let bt1, bt2;
    bt1 = document.getElementById('btnSend');
    bt1.addEventListener('click', btn1);
    bt2 = document.getElementById('btnBack');
    bt2.addEventListener('click', btn2);

//Create btn1 function
    function btn1(ev){
//Get values
    let unl, dig, maxx, qstring;
    unl = document.querySelector('.main ul');
    dig = document.getElementById('digits').value;     
    maxx = document.getElementById('max').value;
    qstring=root+"?digits="+dig+"&max="+maxx;
    
//Fetch Req
    fetch(qstring)
        .then((response)=>{
        console.log(response.status);
        return response.json();
        })
        .then((data)=>{
            console.log("Data parsed:",data);
//create list items with "forEach()"
        data.numbers.forEach((item)=>{
        let li, p, div1, div2;
        li = document.createElement('li');
        p = document.createTextNode(item);  
        li.appendChild(p);
        unl.appendChild(li);
        div1 = document.getElementById('list').classList.toggle('active');
        div2 = document.getElementById('home').classList.toggle('active');
        });
    })
        
        .catch((err)=>{
        console.log("Error: ", err.message)
    })
    
};
//btn2 function
function btn2(ev){
//Create refresh
    let refresh, active1, active2;
    refresh=document.querySelector('.num_list').innerHTML=" ";
//Toggle class acrive for elements
    active1=document.getElementById('list').classList.toggle('active');
    active2=document.getElementById('home').classList.toggle('active');
};