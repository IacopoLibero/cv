$("#logout").on("click", function(){
    var token = $("#logout").attr("token");
    $.ajax({
        type: "POST",
        url: 'logout.php',
        dataType:"text",
        data:{
            token: token
        },
        success: function(response){
            if (response==1){
                window.location.href = '../../index.php';
            }
        }
    });
});



$("#blockedBar").on("click", function(){
    displayError();
});


function displayError(){
    $("#errorModal").modal("show");
}

function displayWithdrawError(){
    $("#errorModalWithdraw").modal("show");
}