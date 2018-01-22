$(function(){
    setInterval(showCircle, 500);

    function showCircle(){
        $("li.visible").next().addClass('visible');

        if ($("li.visible").length === 4) {
            $("li.visible").removeClass('visible');
        } else if ($("li.visible").length === 0) {
            $("li#1").addClass('visible');
        }
    }
})