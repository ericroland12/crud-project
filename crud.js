console.log('Eric')

const formData = [];
  

  
        

function update(value, index, array){
    var row = 1;
    var cell1, cell2, cell3, cell4;
    var fname = document.getElementById('name').value;
    var email = document.getElementById('mail').value;
    var phone = document.getElementById('phone').value;

     if(fname === ""){
    alert("Name is empty")
    }
    else if(email === ""){
        alert("Email is empty")
    }
    else if(phone === "" || phone.length < 11 || phone.length > 11){
        alert("Phone number is invalid")
    }
    else{
      
         const saveData = {
            name: fname,
            email: email,
            phone: phone
          };
      formData.push(saveData);
          
          console.log(saveData)
          
      
            
            document.getElementsByClassName('form')[0].reset();

            var table = document.getElementById('tb');
            var rowDat = document.getElementById('rowData');
                var row = table.insertRow();

                
                

                 cell1 = row.insertCell(0),
                 cell2 = row.insertCell(1),
                 cell3 = row.insertCell(2),
                 cell4 = row.insertCell(3)
                

                cell1.innerHTML = fname;
                cell2.innerHTML = email;
                cell3.innerHTML = phone;

                

                var edit = document.createElement('button');
                edit.className = 'btn btn-info';
                edit.style.border = 'none';
                edit.innerHTML = 'Edit';
                edit.addEventListener("click", function(){
                  edit.style.display = 'none';
                  
                  cell1.setAttribute('contentEditable', true); 
                   cell1.addEventListener("keyup", function(event){
                     console.log(event.target.innerHTML)
                     
                     
                     
                   })

                     var save = document.createElement('button');
                    save.className = 'btn btn-success';
                    save.innerHTML = "Save";
                    save.style.marginLeft = '20px';
                    cell4.appendChild(save);
                    save.addEventListener("click", function(e){
                      cell1.setAttribute('contentEditable', false); 
                      
                      save.style.display = 'none';
                        edit.style.display = '';
                        saveData.name = cell1.innerHTML;
                        
                    })
                    
                    console.log(save);

                     
                     

                   
                    cell2.setAttribute('contentEditable', true); 
                    cell2.addEventListener("keyup", function(event){
                      
                      console.log(event.target.innerHTML)
                     
                     
                     
                    })
                    save.addEventListener("click", function(e){
                       cell2.setAttribute('contentEditable', false); 
                       cell2.addEventListener("keyup", function(event){
                         console.log(event.target.innerHTML)
                        
                        })
                       save.style.display = 'none';
                         edit.style.display = '';
                         saveData.email = cell2.innerHTML;
                         

                    })
                    cell3.setAttribute('contentEditable', true);
                    cell3.addEventListener("keyup", function(event){
                      console.log(event.target.innerHTML)
                     
                     
                     
                    })
 
                      
                     save.addEventListener("click", function(e){
                       cell3.setAttribute('contentEditable', false); 
                       
                       save.style.display = 'none';
                         edit.style.display = '';
                         saveData.phone = cell3.innerHTML;
                         console.log(saveData)
                        
                    })
                    
                    

                })
                cell4.appendChild(edit);
                
              var del = document.createElement('button');
              del.className = 'btn btn-danger';
              del.style.border = 'none';
              del.style.marginLeft = '20px';
              del.innerHTML = 'Delete';
              del.addEventListener("click", function(){
                if(confirm("Are you sure you want to delete?")){
               
             
              row.remove(row);
              delete saveData.name;
              delete saveData.email;
              delete saveData.phone;
              console.log(formData)
              
              

                };
                
              });
              cell4.appendChild(del);
              
              
  }
    
}




--go