$(document).ready(function (){
    $.ajax({
        method: "GET",
        url: "https://fakestoreapi.com/products",
        success: function(data) {
            $.each(data, function (i, ele){
                $(".box_container").append(
                    `
                    
                    <div class="box" id=${ele.id}>
                    <img src=${ele.image}/>
                    <h3 class='title'>${ele.title}</h3>
                    <h5>${ele.price}</h5>
                    <button class="delbtn">Delete</buttion>
                    </div>`
                );
            });
            //Delete function
            let btns = $(".delBtn");
            $.each(btns, function ())
        }
    })
})