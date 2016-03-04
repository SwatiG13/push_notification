/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */




/*var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElem/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        var push = PushNotification.init({
            "android": {
                "senderID": "765911313861"
            },
            "ios": {"alert": "true", "badge": "true", "sound": "true"}, 
            "windows": {} 
        });
        
        push.on('registration', function(data) {
            console.log("registration event");
            document.getElementById("regId").innerHTML = data.registrationId;
     var jsondata= JSON.stringify(data);
     alert("jsondata" + jsondata);

              console.error('regID' + data.registrationId);
                 

                  window.localStorage.setItem("regtoken",data.registrationId);


            alert("HEllo" + data.registrationId);
            // alert("HEllo" ,data.registrationId);
            console.log(JSON.stringify(data));


             /*<script type="text/javascript">
          
           $(document).ready(function(){ 

*/
/*
             $(function() {
         $("#index").validate({
            rules: {
               servertoken: {           
               }  }
           }); */

            //$("button").click(function(){

            var servertoken=window.localStorage.getItem("regtoken");

          //  submitHandler: function(regId) { 



               /*var regId = $("#regId").val();
                var servertoken = '&regId=' + regId ;*/

               // var servertoken = regId ;

            $.ajax({
        method: 'POST',
         data: 'servertoken='+data.registrationId,               // data: postData+'&amp;lid='+landmarkID,
        url: 'http://192.168.0.100/pushnotification/regid.php',
        success: function(data){
            console.log(data);
            alert('Your comment was successfully added...'+  servertoken);
        },
        error: function(){
            console.log(data);
            alert('There was an error adding your comment');
        }
    });
        /*function(data,status){
            alert("Data: " + data + "\nStatus: " + status);
        });*/
    /*});*/
       //  });

       
     /* </script>*/
       

        });


            /* var serverIp="http://54.68.91.47:3000"
        var servertoken =window.localStorage.getItem("regtoken");
      var registerdToken = $http({
        method: 'POST',
        url: serverIp+"/userID",
        data: {token:token,username:username}
      })*/

        push.on('notification', function(data) {
            console.log("notification event");
            console.log(JSON.stringify(data));
            var cards = document.getElementById("cards");
            /*var card = '<div class="row">' +
                  '<div class="col s12 m6">' +
                  '  <div >' +
                  '    <div >' +
                  '      <p>' + data.message + '</p>' +
                  '    </div>' +
                  '  </div>' +
                  ' </div>' +
                  '</div>';*/

                   var card = '<div class="row">' +
                  '<div class="col s12 m6">' +
                  '  <div class="card darken-1">' +
                  '    <div class="card-content black-text">' +
                  '      <span class="card-title black-text">' + data.title + '</span>' +
                  '      <p>' + data.message + '</p>' +
                  '    </div>' +
                  '  </div>' +
                  ' </div>' +
                  '</div>';


            cards.innerHTML += card;
            
            push.finish(function () {
                console.log('finish successfully called');
            });
        });

        push.on('error', function(e) {
            console.log("push error");
        });
    }
};

app.initialize();
