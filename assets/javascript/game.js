$( document ).ready(function(){
    // Selects a random number to be shown at the start of the game
    // Number between between 17 - 120
    var random = Math.floor(Math.random()*103+17)
       console.log(random);


    // Appending random number to the randomNumber id in the html doc
  $("#randomNumber").text(random);


    // Setting up random numbers for each jewel
    // Random numbers between 1 - 12

    var num1 = Math.floor(Math.random()*11+1)
    var num2 = Math.floor(Math.random()*11+1)
    var num3 = Math.floor(Math.random()*11+1)
    var num4 = Math.floor(Math.random()*11+1)

    //  Decaring variables for tallies
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;


    // Appending wins-losses to the numberWins-numberLosses id in the html doc
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);
 
 
  //resets the game
  function reset(){
        random=Math.floor(Math.random()*103+17);
        console.log(random);
        $('#randomNumber').text(random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
        } 
 
        
    //adds the wins to the userTotal
  function winner(){
    alert("You Won!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }
  alert("Winner!")

  //adds the losses to the userTotal
  function loser(){
    alert("Try Again");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }

  //sets up click for jewels
    $('#one').on ('click', function(){
      userTotal = userTotal + num1;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 

      //sets win/lose conditions
          if (userTotal == random){
            winner();
          }
          else if ( userTotal > random){
            loser();
          }   
    })  


    $('#two').on ('click', function(){
      userTotal = userTotal + num2;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
          if (userTotal == random){
            winner();
          }
          else if ( userTotal > random){
            loser();
          } 
    })  
    $('#three').on ('click', function(){
      userTotal = userTotal + num3;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);
 
     //sets win/lose conditions
            if (userTotal == random){
            winner();
          }
          else if ( userTotal > random){
            loser();
          } 
    })  
    $('#four').on ('click', function(){
      userTotal = userTotal + num4;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        
            if (userTotal == random){
            winner();
          }
          else if ( userTotal > random){
            loser();
          }
    });   
  }); 