
function getFarenheit(temp)
{
    var temp= Math.round((9*temp/5)+32);
    return temp;
}
function NumofStates(states)
{
    return Object.keys(states).length;
}

$(document).ready(function() {
    var apiKey = "5bc82451636190abd9d7afe6fe9b20b5" // Enter the API key
    console.log(`state_info is: ${state_info}`) // Notice the templating here, use that when you form your url


    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop
    var numberofstates = NumofStates(state_info);
    var state_obj = state_info['CO']
    var state_name = Object.keys(state_info);


    for(var i =0; i < numberofstates;i++)
    {
      var state_obj = state_info[state_name[i]];
      var url =`https://api.weatherstack.com/forecast?access_key=${apiKey}&query=${state_obj.lat},${state_obj.lng}`;
    $.ajax({url:url, dataType:"jsonp", saveIndex:i}).then(function(data) {

                console.log(data)
                i= this.saveIndex;
                var states = "#" + state_name[i];
                // TODO
                // Fill in the RHS of the below line and uncomment it. Remember how we accessed the temperature in Lab 9. Remember to convert it into farenheit.
                 var temp =getFarenheit(data.current.temperature);
                 console.log(temp)
               if(temp<=10)
               {
                 $(states).css('fill', "#6495ED");
               }
              else if(temp>=11 && temp <=20)
               {
                 $(states).css('fill', "#7FFFD4");
               }
               else if(temp>=21 && temp <=30)
               {
                 $(states).css('fill', "#0000FF");
               }
              else if(temp >=31 && temp <=40)
               {
                 $(states).css('fill', "#008B8B");
               }
               else if(temp>=41 && temp <=50)
               {
                 $(states).css('fill', "#00BFFF");
               }
               else if(temp >=51 && temp <=60)
               {
                 $(states).css('fill', "#F08080");
               }
               else if(temp>=61 && temp<=70)
               {
                 $(states).css('fill', "#CD5C5C");
               }
               else if(temp>=71 && temp <=80)
               {
                 $(states).css('fill', "#8B0000");
               }
               else if(temp >= 81 && temp <=90)
               {
                 $(states).css('fill', "#B22222");
               }
               else if(temp >= 91)
               {
                 $(states).css('fill', "#FF0000");
               }
               else
               {
                 $(states).css('fill', "#808080");
               }
            });
         }
    });
