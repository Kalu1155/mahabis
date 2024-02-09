// megamenu
function toggleMenu() {
  var megaMenu = document.getElementById('megaMenu');
  megaMenu.style.display = (megaMenu.style.display === 'block') ? 'none' : 'block';
}
// slider
$('.single-item').slick();
$(document).ready(function(){
    $('.single-item').slick({
      autoplay: true,
      // dots: true,
      arrows: true,
    });
  });
// validtion of sign in page
function  checkFields(){
  let email = (document.getElementById("email"))
  let password = (document.getElementById("password"))
  if (email.trim() === "" || password.trim() === "") {
    alert("Please fill in all fields.");
}else{alert("signed in successfully")}
}
// show and hide search bar on navbar
var x=false;
function openSearchBar() {
  if (!x) {
    $('#searchForm').show();
    $("#close").css("visibility", "visible");
    x = true;
    } else {
      $('#searchForm').hide();
      $("#close").css("visibility", "hidden");
      x = false;
      }
      }
    function newAccount(){
      let name = document.getElementById("name").value;
      let num = document.getElementById("number").value;
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
      if(name ===''|| num ===''|| email ===''|| password ===''){
        alert("All fields are required pls")
        return;
      }
    }
    let usaerData = {
      name: name,
      number: num,
      email: email,
      pass: password
    };



      // add to cart functionality
      let productsInCart=[];
      function addToCart(product){
        productsInCart.push(product);
        console.log(productsInCart);
        updateCartCount();
        };
        function removeFromCart(index){
          productsInCart.splice(index,1);
          updateCartCount();
          };

            
