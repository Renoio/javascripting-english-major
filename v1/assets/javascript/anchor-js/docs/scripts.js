/*$(document).ready(function() {
  var preEls = $('pre');

  $('.example-code-link').click(function(e) {
    e.preventDefault();
    $(this).parent().next().slideToggle();
  });

  // Dynamically add PrismJS class for syntax highlight
  preEls.filter('[class*="js"]').find('code').addClass('language-javascript');
  preEls.filter('.css').find('code').addClass('language-css');
});*/

/*let arrayOfStrings, arrayOfNumbers, arrayMixed;
arrayOfStrings = ["a", "b", "c"];
arrayOfNumbers = [1, 2, 3];
arrayMixed = ["a", 1, null, true, arrayOfNumbers, [4.5, 5.6]];
$("#response").html(arrayOfStrings[4]);
*/

let myBurritoObject;
myBurritoObject = {
  tortilla: "wheat",
  guacamole: true,
  beans:"pinto",
  habaneroSauceSquirts: 3
};
// and let's access a property
$("#response").html(myBurritoObject["tortilla"]);
