(function($)
{
    $.fn.log = function(message)
    {
        console.log(message|| 'jQuery log', this);
    };
})(jQuery);
