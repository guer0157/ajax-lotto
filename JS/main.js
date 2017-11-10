//main.js

//HTTP fetch source
    const root= 'https://griffis.edumedia.ca/mad9014/lotto/nums.php'

//Get elements and add event listeners
    let bt1, bt2, upt;
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
//add fun alert
          if(data.code==0){
            alert("Winner! Winner! Chicken Dinner!")
        }else{
            alert("You must select a value for Numbers and Range")
        }
        
//create list items with "forEach()"
        data.numbers.forEach((item)=>{
        let li, p, div2,ret, upp;
        li = document.createElement('li');
        li.className ="lis";
        p = document.createTextNode(item);  
        li.appendChild(p);
        unl.appendChild(li);
        div2 = document.getElementById('home');
        div2.className ="transition"
        ret=document.getElementById('list');
        ret.classList.remove("tran");
        
    })
})
 //catch       
        .catch((err)=>{
        console.log("Error: ", err.message)
    })
    
};
//btn2 function
    function btn2(ev){
//Create refresh
        let refresh, tran2, ret2;
        refresh=document.querySelector('.num_list').innerHTML=" ";
//Toggle class active for elements
        tran2 = document.getElementById('home');
        tran2.classList.remove("transition");
        ret2=document.getElementById('list');
        ret2.classList.toggle('tran');
              
};