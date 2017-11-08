//main.js

//HTTP fetch source
//    const url="https://griffis.edumedia.ca/mad9014/lotto/nums.php";

//Get elements and add event listeners

    let bt1 = document.getElementById('btnSend');
    bt1.addEventListener('click', btn1);
//    let bt2 = document.getElementById('btnBack');
//    bt2.addEventListener('click', btn2);

    function btn1(ev){
    let dig = document.getElementById('digits').value;
        console.log(dig);
    let range = document.getElementById('max').value;
        console.log(range);
    let link = "https://griffis.edumedia.ca/mad9014/lotto/nums.php";
    
    let form = new FormData();
    form.append("digits", dig);
    form.append("max", range);
    
    let options = {
    method:"POST",
    mode: "cors",
    body:"form"
    }
    
   
    fetch(link, options)
        .then((response)=>{
        console.log(response.status);
        return response.json();
        })
        .then((data)=>{
            console.log("THis is working");
                
        })
        
        .catch((err)=>{
        console.log("Error: ", err.message)
    })
    
};
