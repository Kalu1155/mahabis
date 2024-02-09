$(document).ready(function(){
    $("#account").click(function(){
        var name = document.getElementById("fullName");
        var phone = document.getElementById("phone");
        var email = document.getElementById("email").value;
        var password = document.getElementById("password");

        document.getElementById("name").textContent = "";
        document.getElementById("number").textContent = "";
        document.getElementById("mail").textContent = "";
        document.getElementById("code").textContent = "";

        if(name.value.length < 5){
            var fullname = document.getElementById("name");
            fullname.textContent = "Enter full name"
        }
        if(phone.value.length < 11){
            var number = document.getElementById("number");
            number.textContent = "Incomplete number"
        }
        if(email == ""){
            var mail = document.getElementById("mail");
            mail.textContent = "Invalid Email"
        }
        if(password.value.length < 8){
            var code = document.getElementById("code");
            code.textContent = '"Password must contain 8 characters"'
        }
        
        $('form').on('submit', function(event){

            event.preventDefault();
            
            var productData = new FormData();
            productData.append('name', $('#fullName').val());
            productData.append('phone', $('#phone').val());
            productData.append('email', $('#email').val());
            productData.append('password', $('#password').val());
            // function newAccount(){
            //     let name = document.getElementById("name").value;
            //     let num = document.getElementById("number").value;
            //     let email = document.getElementById("email").value;
            //     let password = document.getElementById("password").value;
            //     if(name ===''|| num ===''|| email ===''|| password ===''){
            //       alert("All fields are required pls")
            //       return;
            //     }
            //   }
            //   let usaerData = {
            //     name: name,
            //     number: num,
            //     email: email,
            //     pass: password
            //   };
          

         

           
            $.ajax({
                url: "http://159.65.21.42:9000/products",
                type: "POST",
                data: productData,
                processData: false,
                contentType: false,
                success: function(response){
                    console.log(response);
                    alert('Your product has been added successfully!');
                },
                error: function(error){
                    console.log(error);
                    alert('An error occurred');
                }
            });

            $('form')[0].reset();
        });
        $.ajax({
            url: "http://159.65.21.42:9000/products",
            type: "GET",
            success: function (data){
                $.each(data, function(index, product){
                    if(product.category ==="sassiHolford"){
                        var Productitem =`
                        <div class="product">
                        <img class="product-image" src="http://159.65.21.42:9000${product-image}" alt=""
                        <h3>${product.name}</h3>
                        <button class="edit-product" data-id="${product._id}">Edit</button>
                        <button class="delete-product" data-id="${product._id}">Delete</button>
                        </div>
                        `;

                        $("#name").append(Productitem)
                        $("#number").append(Productitem)
                        $("#mail").append(Productitem)
                        $("#code").append(Productitem)
                    }
                });
            }
        });

    });
});