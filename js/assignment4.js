$(document).ready(function() {
    $('#action').click(function() {

        var letterGrade = $('#letter-grade').val().toUpperCase();
        var myFavoriteThings = [];
            myFavoriteThings.push("Family");   
            myFavoriteThings.push("Kansas City Chiefs"); 
            myFavoriteThings.push("Kansas State Wildcats"); 
            myFavoriteThings.push("Karaoke"); 

        //Write your decision structure between this comment...
        if (letterGrade == 'A') { 
        	$("#decision-holder").append ("Grade range for A: 90% to 100%")  
       	}
        else if (letterGrade == 'B') { 
    		$("#decision-holder").append("Grade range for B is 80% to 89%") 
	    } 
        else if (letterGrade == 'C') {
    		$("#decision-holder").append("Grade range for C is 70% to 79%") 
	    }
        else if (letterGrade == 'D') {
    		$("#decision-holder").append("Grade range for D is 60% to 69%") 
		}
	    else if (letterGrade == 'F') { 
    		$("#decision-holder").append ("Grade range for F is less than 60%")
    	}
	    else { 
    		$("#decision-holder").append ("Error! Invalid vaule entered.")
		}
        //...and this comment

        //Now, write a for, while, OR do-while loop between this comment...
        var i = 0;
	    while (i < myFavoriteThings.length) {
	        $("#loop-output").append(myFavoriteThings[i] + "<br>");
	        i++;
	    }
        //...and this comment


        //Use the jQuery .each() method to loop through
        //the myFavoriteThings array between this comment...
        $.each(myFavoriteThings, function(index) {
            $("#each-output").append(myFavoriteThings[index] + "<br>");

        });
        //...and this comment

    });
});



// Array - Length property