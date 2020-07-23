function myFunc() {
	
	var heath = (89+120+103)/3;
    var zane =  (116+94+123)/3;
    
	if(heath>zane){
      
        console.log("winner is : heath,average= " + heath);
    }
    else{
        console.log("winner is : zane,average= " + zane);
    }
	
	
}
function myFunc1() {
	
	var heath = (89+120+103)/3;
    var zane =  (116+94+123)/3;
    var mariah = (97+134+105)/3;
    
	if(heath>zane && heath>mariah){
      
        console.log("winner is : heath,average= " + heath); 
    }
    else if(zane>mariah){
        console.log("winner is : zane,average= " + zane);
    }
    else{
        console.log("winner is : mariah,average= " + mariah);
    }
	
	
}