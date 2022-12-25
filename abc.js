function job1(callback) {
    setTimeout(function() {
        callback('test 1');
    }, 6000);
}

function job2(callback) {
    setTimeout(function() {
        callback('test 2');
    }, 4000);
}

job1(function(data) {
    console.log(data);
    console.log("hiiiii");

    job2(function(data) {
        console.log(data);
    });
});