// Väntar för att DOM ska ladda
document.addEventListener("DOMContentLoaded", function(){ 
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) { // Förfrågan klar.
           if (xmlhttp.status == 200) { // Alles OK, => 200 "vi fortsätter"
                var data = JSON.parse( xmlhttp.responseText );
                var reg = data[0].z;
                for(var i=0; i < reg.length; i++){       
                   document.getElementById("regVal").innerHTML +="<option value='"+reg[i]+"'>"+         
                    reg[i]+"</option>";      
                
                }
           }
           else if (xmlhttp.status == 400) { // Något fel uppstod => 400 Bad request.
              alert("There was an error 400");
           }
           else { // Mer fel.. => "vi är för oss själva"
               alert("something else other than 200 was returned: "+xmlhttp.status);
           }
        }
    };

    xmlhttp.open("GET", "getSbeta.php" , true);
    xmlhttp.send();



    document.getElementById('searchbtn').addEventListener("click", function(e){
        var reg = document.getElementById("regVal").value;
        var xmlhttp = new XMLHttpRequest();   
        
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == XMLHttpRequest.DONE ) { // Förfrågan klar
                if (xmlhttp.status == 200) {  // Alles OK, => 200 "vi fortsätter"
                    var data = JSON.parse( xmlhttp.responseText );
                    document.getElementById("centrum").innerHTML = "<h1>"+reg+"</h1>";
                    var x_stat = data[0].x;
                    var y_stat = data[0].y[reg];
                    console.log(x_stat);
                    
                    var dat = [
                        {
                          x: x_stat,
                          y: y_stat,
                          type: 'bar'
                        }
                      ];
                    
                     Plotly.newPlot('leftStat', dat );

                }
                else if (xmlhttp.status == 400) { // Något fel uppstod => 400 Bad request.
                    alert("There was an error 400");
                }
                else { // Mer fel.. => "vi är för oss själva"
                    alert("something else other than 200 was returned: "+xmlhttp.status);
                }
            }
        };
   
        xmlhttp.open("GET", "getSbeta.php", true);
        xmlhttp.send();    
    
    })
})