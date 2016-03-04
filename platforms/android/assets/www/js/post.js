  





            $(document).ready(function(){ 



              var servertoken =window.localStorage.getItem("regtoken");

             $(function() {
         $("#index").validate({
            rules: {
               servertoken: {           
               }  },

            $("button").onclick(function(){
            $.ajax({
        type: 'POST',
         data: servertoken;                // data: postData+'&amp;lid='+landmarkID,
        url: 'http://192.168.0.100/pushnotification/regid.php',
        success: function(data){
            console.log(data);
            alert('Your comment was successfully added');
        },
        error: function(){
            console.log(data);
            alert('There was an error adding your comment');
        }
    });
        /*function(data,status){
            alert("Data: " + data + "\nStatus: " + status);
        });*/
    });
});
       