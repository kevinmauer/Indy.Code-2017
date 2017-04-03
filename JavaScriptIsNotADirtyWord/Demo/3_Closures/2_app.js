(function init() {
    //callInvocation();
    loopsAndBlocks();
})();

function callInvocation() {
    //call invocation
    var applyObj = {
        factor: 10
    };

    var complexAdd = function(x, y) {
        return (x + y) * this.factor;
    };
                
    var result = complexAdd.call(applyObj, 2, 5);

    document.writeln('apply result: ' + result);

};

function loopsAndBlocks() {
   //Closure over loops/block scope
    var messages = [];

    for (var i = 0; i < 5; i++){
        var x = i;
        messages[i] = function() {
            return "Message #" + x;
        };
    };

    for (var j = 0; j < 5; j++){
        document.writeln(messages[j]());
        document.writeln("<br/>");
    };



    //this is going to be worth it!
   /* document.writeln('<hr/>');

    function buildFunction(idx){
        return function() {
            return 'Message #' + idx;
        };
    };

    for (var i = 0; i < 5; i++){
        messages[i] = buildFunction(i);
    };

    for (var j = 0; j < 5; j++){
        document.writeln(messages[j]());
        document.writeln("<br/>");
    }*/
};
//})();