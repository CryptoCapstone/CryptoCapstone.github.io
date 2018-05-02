Skip to content
This repository
Search
Pull requests
Issues
Marketplace
Explore
 @CryptoCapstone
Sign out
 Watch 1
 Star 1  Fork 1 ColeTheGuy/coletheguy.github.io
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights
Branch: master Find file Copy path coletheguy.github.io/projects/cps.js
37034c4  on Jan 9
@ColeTheGuy ColeTheGuy Rename cps.js to projects/cps.js
1 contributor
RawBlameHistory    
50 lines (38 sloc)  1002 Bytes
var centiseconds = 0;
var clicks = 0;
var cps = 0;
var deciseconds = 0;
var isDone = false;
var seconds = 0;
var stopwatch = 0;

function display(){

    if (seconds>=10) {
        isDone = true
    }
    if (isDone) {
        cps = clicks / 10
	document.getElementById("button").remove();
        document.getElementById("status").remove();
        document.getElementById("result").innerHTML = "Your average CPS is " + cps + ". <a href='cps.html'>Retry?</a>";
    }

    if (deciseconds >= 9) {
        deciseconds = 0
        seconds += 1
    } else if (centiseconds >= 9){
        centiseconds = 0
        deciseconds += 1
    } else
        centiseconds+=1
        document.getElementById("stopwatch").innerHTML = seconds + "." + deciseconds + centiseconds;
        stopwatch = setTimeout("display()",10);

}

function onClick() {
	
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;

}

function onStart() {

    if (stopwatch > 0) {
        return;
	}

    display();

}
© 2018 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
API
Training
Shop
Blog
About
Press h to open a hovercard with more details.
