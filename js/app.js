$(document).ready(function() {
    //each number button is in a span tag with no id or class
    //each operator is in a span tag with a class of operator
    //all buttons are in a div container with a class of buttons
    //the screen is a div with an id of screen
    //the screen is wrapped in a div with an id of screen-container
    //the entire body is wrapped in a container with an id of calculator

    var $screen = $('#screen');
    var $equals = $('#equals');
    var $buttons = $('.buttons');

    $(document).on('click', '#clear', function() {
        $screen.text("")
    })

    $buttons.on('click', 'span', function() {
        var $buttonPress = $(this).text();
        if ($buttonPress === "÷") {
            $screen.text($screen.text() + '/')
        } else if ($buttonPress === "+") {
            $screen.text($screen.text() + '+')
        } else if ($buttonPress === "-") {
            $screen.text($screen.text() + "-")
        } else if ($buttonPress === "x") {
            $screen.text($screen.text() + "*")
        } else if ($buttonPress === "=") {
            return;
        } else {
            $screen.text($screen.text() + $buttonPress)
        }
    })
    $equals.on('click', function() {
        var problem = $screen.text();
        $screen.text(eval(problem))


    })



})
