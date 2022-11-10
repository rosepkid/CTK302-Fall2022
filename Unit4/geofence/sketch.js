// GEOLOCATION DATA
// This doesn't seem to work.

var locationData;

function preload(){
   locationData =  getCurrentPosition();
  // getCurrentPosition(doThisOnLocation, oops) ;
}

function setup() {
	createCanvas(displayWidth, displayHeight) ;
	textSize(24) ;
    text(("lat: "+locationData.latitude), 10, 40) ;
	 text(("lon: "+locationData.longitude), 10, 80) ;
 //   text(("lon: "+locationData.longitude).toFixed(6), 10, 40) ;
    text("accuracy = " + locationData.accuracy, 10, 120) ;
/*
    text(locationData.altitude, 10, 100) ;
    text(locationData.altitudeAccuracy, 10, 120);
    text(locationData.heading, 10, 150);
    text(locationData.speed), 10, 180;
	*/
	watchPosition(positionChanged) ;


	 fence = new geoFenceCircle(locationData.latitude, locationData.longitude, .05, insideTheFence, outsideTheFence, 'mi');
}

function draw() {
	background(255) ;
	  text(("lat: "+locationData.latitude), 10, 40) ;
	 text(("lon: "+locationData.longitude), 10, 80) ;
 //   text(("lon: "+locationData.longitude).toFixed(6), 10, 40) ;
    text("accuracy = " + locationData.accuracy, 10, 120) ;

	 if (fence.insideFence==true) {
		 text("inside fence", 10, 220); }
	 else {
		 text("outside fence", 10, 220) ;
	 }

}
function oops() {
	println("oops") ;
}


function positionChanged(position){
    text("Position changed! lat: " + position.latitude, 10, 250);
    text("long: " + position.longitude, 10, 280);
}

function doThisOnLocation(position){
	text("do this on location", 100, 40) ;
    text("lat: " + position.latitude, 100, 80);
    text("long: " + position.longitude, 100, 120);
}

function insideTheFence(position){
    print("INlat: " + position.latitude);
    print("INlong: " + position.longitude);
    text("user is inside of the fence", 100, 220) ;
}

function outsideTheFence(position){
    print("OUTlat: " + position.latitude);
    print("OUTlong: " + position.longitude);
    text("user is outside of the fence", 100, 220);
}
