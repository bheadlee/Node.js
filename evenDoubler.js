var maxTime = 1000;

var evenDoubler = function(v,callback) {
    var waitTime = Math.floor(Math.random()*(maxTime+1));
    if (v%2) {
        setTimeout(function() {
            callback(new Error("Odd input"));  // This simple fxn embedded
        }, waitTime);
    } else {
        setTimeout(function() {
            callback(null, v*2, waitTime);
        }, waitTime);
    }
};

var handleResults = function(err, results, time) {
  if (err) {
    console.log("ERROR" + err.message);
  } else {
    console.log("The results are : " + results + " (" + time + " ms )");
  }
};

// evenDoubler(4, handleResults);

var count=0;
for (var i=0; i<= 10; i++) {
  console.log("Calling out for " + i );
  evenDoubler(i, handleResults);
}





