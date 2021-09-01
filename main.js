console.log('It works')

var savedata = []

function success(value, index, array){
   
    var fname = document.getElementById('name').value;
    var email = document.getElementById('mail').value;
    var password = document.getElementById('pswd').value;
    var phone = document.getElementById('phone').value;
    
    if ( fname === ""){
        alert("Username is empty")
    }
    else if (email == ""){
        alert("Email is empty")
    }
   
    else if (password.length < 6 ){
        alert("Password must be up to 6 characters")
    }
    else if (phone.length < 11 || phone.length > 11){
        alert("Phone number is invalid")
    }
    else{
        const data = {
            name: fname,
            email: email,
            password: password,
            phone: phone
        }
        savedata.push(data);
        alert('Successfully registered!')
        $(document).ready(function(){
            $("#login").show();
               
            
        });
        var element = document.getElementById('login');
        element.classList.remove('hidden');


        
        
        localStorage.setItem('Form', JSON.stringify(savedata));
        
        document.getElementsByClassName('form')[0].reset();

       
        
        
    }
    
    console.log(savedata);
    
    
    

    


    

}


        

  
        
        
 

   
function loginBlock(){


    var fname2 = document.getElementById('login-name').value;
    var password2 = document.getElementById('login-pswd').value;
   
    const inArray = savedata.find(function (currentItem){
        if (fname2 == currentItem.name && password2 == currentItem.password){
            return true;
        
        }
      

    });

    if (inArray){
        alert("LOGIN SUCCESSFUL!")
        document.getElementsByClassName('form2')[0].reset();
        

    }
    else{
        alert("Invalid Entry") 
    }
    

    

  
    

    
}












