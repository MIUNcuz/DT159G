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

    xmlhttp.open("GET", "getRent.php" , true);
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
                    var dat = [
                        {
                          x: x_stat,
                          y: y_stat,
                          type: 'bar'
                        }
                      ];
                      var layout = {
                        title: {
                          text:'Årshyra per kvm',
                          font: {
                            family: 'Courier New, monospace',
                            size: 24
                          },
                          xref: 'paper',
                          x: 0.05,
                        },
                        xaxis: {
                          title: {
                            text: 'År',
                            font: {
                              family: 'Courier New, monospace',
                              size: 18,
                              color: '#7f7f7f'
                            }
                          },
                        },
                        yaxis: {
                          title: {
                            text: 'kostnad i kr',
                            font: {
                              family: 'Courier New, monospace',
                              size: 18,
                              color: '#7f7f7f'
                            }
                          }
                        }
                      };
                    
                     Plotly.newPlot('leftStat', dat, layout );

                }
                else if (xmlhttp.status == 400) { // Något fel uppstod => 400 Bad request.
                    alert("There was an error 400");
                }
                else { // Mer fel.. => "vi är för oss själva"
                    alert("something else other than 200 was returned: "+xmlhttp.status);
                }
            }
        };
   
        xmlhttp.open("GET", "getRent.php", true);
        xmlhttp.send();    
    
    })

    document.getElementById('searchbtn').addEventListener("click", function(e){
        var reg = document.getElementById("regVal").value;
        reg = reg.toUpperCase();
        var xmlhttp = new XMLHttpRequest();   
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == XMLHttpRequest.DONE ) { // Förfrågan klar
                if (xmlhttp.status == 200) {  // Alles OK, => 200 "vi fortsätter"
                    var data = JSON.parse( xmlhttp.responseText );
                    var x_stat = data[0].x;
                    var y_stat = data[0].y[reg];
                    var dat = [
                        {
                          x: x_stat,
                          y: y_stat,
                          type: 'bar'
                        }
                      ];
                      var layout = {
                        title: {
                          text:'Medelskuld per person',
                          font: {
                            family: 'Courier New, monospace',
                            size: 24
                          },
                          xref: 'paper',
                          x: 0.05,
                        },
                        xaxis: {
                          title: {
                            text: 'År',
                            font: {
                              family: 'Courier New, monospace',
                              size: 18,
                              color: '#7f7f7f'
                            }
                          },
                        },
                        yaxis: {
                          title: {
                            text: 'Skuld i kr',
                            font: {
                              family: 'Courier New, monospace',
                              size: 18,
                              color: '#7f7f7f'
                            }
                          }
                        }
                      };
                    
                     Plotly.newPlot('rightStat', dat, layout );

                }
                else if (xmlhttp.status == 400) { // Något fel uppstod => 400 Bad request.
                    alert("There was an error 400");
                }
                else { // Mer fel.. => "vi är för oss själva"
                    alert("something else other than 200 was returned: "+xmlhttp.status);
                }
            }
        };
   
        xmlhttp.open("GET", "getDebt.php", true);
        xmlhttp.send();    
    
    })

    document.getElementById('searchbtn').addEventListener("click", function(e){
        var reg = document.getElementById("regVal").value;
        var regUp = reg.toUpperCase();
        var xmlhttp = new XMLHttpRequest();   
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == XMLHttpRequest.DONE ) { // Förfrågan klar
                if (xmlhttp.status == 200) {  // Alles OK, => 200 "vi fortsätter"
                    var data = JSON.parse( xmlhttp.responseText );
                    var x_rent = data[0]["r_year"]
                    var y_rent = data[0]["r_rent"][reg];

                    var x_debt = data[0]["d_year"];
                    var y_debt = data[0]["d_debt"][regUp];
                    var y_divide = [];

                    for (var i = 0; i < y_debt.length; i++) {
                        var j = (y_debt[i] / 100);
                        y_divide.push(Math.round(j));
                    }

                    var trace1 = {
                        x: x_rent,
                        y: y_rent,
                        type: 'scatter',
                        name:"Medelhyra"
                      };
                      
                      var trace2 = {
                        x: x_debt,
                        y: y_divide,
                        type: 'scatter',
                        name:"Medelskuld i tkr"
                      };
                      
                      var dat = [trace1, trace2];

                      var layout = {
                        title: {
                          text:'Korrelation skuld & hyra',
                          font: {
                            family: 'Courier New, monospace',
                            size: 24
                          },
                          xref: 'paper',
                          x: 0.05,
                        },
                        xaxis: {
                          title: {
                            text: 'År',
                            font: {
                              family: 'Courier New, monospace',
                              size: 18,
                              color: '#7f7f7f'
                            }
                          },
                        },
                        yaxis: {
                          title: {
                            text: 'Belopp',
                            font: {
                              family: 'Courier New, monospace',
                              size: 18,
                              color: '#7f7f7f'
                            }
                          }
                        }
                      };
                    
                    Plotly.newPlot('bottomStat', dat, layout );

                }
                else if (xmlhttp.status == 400) { // Något fel uppstod => 400 Bad request.
                    alert("There was an error 400");
                }
                else { // Mer fel.. => "vi är för oss själva"
                    alert("something else other than 200 was returned: "+xmlhttp.status);
                }
            }
        };
   
        xmlhttp.open("GET", "getComp.php", true);
        xmlhttp.send();    
    
    })

})