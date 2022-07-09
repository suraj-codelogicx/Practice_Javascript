function validateform(){  
    var UserName=document.myform.name.value;  
      
    if (UserName==null || UserName==""){  
      alert("Name can't be blank");  
      return false;  
    }
      }  
  