$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbwU7_NJDE3O3Az_ZIww3NbQ55aonYTrbc0Ymyj7Nse4iqegItmdv6GAYkM49Yd9SijA/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")
  
        }
    })
  })