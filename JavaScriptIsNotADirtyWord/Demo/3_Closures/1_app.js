var value = 100;

(function init() {
    var myObject = {
        value: 0,
        increment: function(inc){
            this.value += inc; 
        }
    };

    //methodInvocation(myObject);
    functionInvocation(myObject);
})();

function methodInvocation(myObject) {
     myObject.increment(0);
     document.writeln("First increment: " + myObject.value + '<br\>');
     myObject.increment(3);
     document.writeln("Second increment: " + myObject.value + '<br\>');
};

function functionInvocation(myObject) {
    myObject.double = function() {
    
        var that = this;
        var helper = function() {
            that.value =  that.value + that.value;
            return that.value;
        };

        document.writeln('Value of "this" from function: ' + helper() + '<br/>');
    };

    myObject.value = 1;
    myObject.double();
    document.writeln("Doubling: " + myObject.value);
};