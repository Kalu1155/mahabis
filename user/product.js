$(document).ready(function(){
    $("#account").click(function(){
        var name = document.getElementById("name");
        var price = document.getElementById("price");
        var description = document.getElementById("notes");
        var quantity = document.getElementById("number");

        document.getElementById("productName").textContent = "";
        document.getElementById("priceTag").textContent = "";
        document.getElementById("description").textContent = "";
        document.getElementById("quantity").textContent = "";

        if(name.value.length < 3){
            var fullname = document.getElementById("productName");
            fullname.textContent = "The product name you entered does not exist"
        }
        if(price.value.length < 1){
            var number = document.getElementById("priceTag");
            number.textContent = "Input field is required"
        }
        if(description.value.length < 5){
            var notes = document.getElementById("description");
            notes.textContent = "Input field is required"
        }
        if(quantity.value.length < 1){
            var number = document.getElementById("quantity");
            number.textContent = 'must be at least 1'
        }


        $('form').on('submit', function(event){

            event.preventDefault();
            
            var productData = new FormData();
            productData.append('name', $('#name').val());
            productData.append('price', $('#price').val());
            productData.append('description', $('#notes').val());
            productData.append('quantity', $('#number').val());
            productData.append('image', $('#image')[0].files[0]);
            productData.append('category', $('#category').val());


            $.ajax({
                url: "http://159.65.21.42:9000/create/product",
                type: "POST",
                data: productData,
                processData: false,
                contentType: false,
                success: function(response){
                    console.log(response);
                    alert('Your product has been created successfully!');
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

                        $(".product-details").append(Productitem)
                       
                    }
                });
            }
        });
    });
        
});