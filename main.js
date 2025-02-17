document.getElementById('agecalculator').addEventListener('click',function(){
    let dobinput=document.getElementById('birthdate').value;
    if(!dobinput){
        alert("Please Select your Date of Birth");
        return;
    }
    let dob=new Date(dobinput);
    let today=new Date();
    let age=today.getFullYear() - dob.getFullYear();
    let monthdiff=today.getMonth() -dob.getMonth();
    let daydiff=today.getDate() - dob.getDate();
    if(monthdiff < 0 ||(monthdiff===0 && daydiff<0 )){
        age--;
    }
    document.getElementById('result').innerText= `Your Age is ${age} years`;
})