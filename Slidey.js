/*
 * Slidey 0.1
 *
 * Creator: Gautham Yerroju
 * Site: http://github.com/thegwiz/Slidey
 * Date: 2015-10-30
 */

 $(document).ready(function() {
    $(".slidey__toggle").click(function() {
        $(".slidey").toggleClass("slidey--open");
    });
    $(".slidey__close").click(function() {
        $(".slidey").removeClass("slidey--open")
    });
});
