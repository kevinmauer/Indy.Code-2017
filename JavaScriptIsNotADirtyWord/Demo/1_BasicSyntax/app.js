(function blahblahblah() {
   //weirdDateStuff();
   //hoistingValues();
   //hoistingFunctions();
   blockVsFunctionScope();
})();

function weirdDateStuff() {
    myDate = new Date(2015, 11, 25);

    document.writeln('My date - ' + myDate);
};

function hoistingValues() {
    //hoisting
    
    var a = 'peas';
     b = 'carrots';
    document.writeln(a + ' and ' + b + '<br/>');

    var b;

};





function hoistingFunctions() {   
    
    document.writeln(x());
    
    //function declaration
    function x() {
        return "Hello X";
    }

    //function expression
    //DO NOT USE!!!
    var y = function() {
        return "Hello Y";
    }
    document.writeln(y());

};



function blockVsFunctionScope() {
    //var
   var value = 100;
    function varUsage () {
        var value = 5;

        if (true) {
            var value = 10;
            document.writeln("inside block, value is " + value + "<br/>");
        }

        document.writeln("outside block, value is " + value + "<br/>");
    };
    
    //varUsage();

    document.writeln('<br/>');
    //let
    function letUsage () {
        let value = 5;
        
        if (true) {
            let value = 10;
            document.writeln("inside block, value is " + value + "<br/>");
        }

        document.writeln("outside look, value is " + value + "<br/>");
    };

   letUsage();
   document.writeln("outside the function, value is " + value + "<br/>");
};














