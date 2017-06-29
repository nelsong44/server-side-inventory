console.log('js sourced');

$(document).ready(function() {
  refreshProducts();
   $('#submitButton').on('click', function() {
     var productName = $('#productName').val();
     var productCost = $('#cost').val();
     console.log('productName: ', productName);
     console.log('productCost: ', productCost);
//    });//end click
// });//end onReady

    //send user input to server
    $.ajax ({
      type: 'POST',
      url: '/product',
      data: {
        productName: productName,
        productCost: productCost
      },
      success: function(response) {
        console.log('Product added to inventory!');
        refreshProducts();
      }
    });//end request
  });//end click
});//end onReady

function refreshProducts() {
  $.ajax ({
    type: 'GET',
    url: '/product',
    success: function(response) {
      var products = response; //response = products array
      //loop through array and append each product to DOM
      for (var i = 0; i < products.length; i++) {
        var product = products[i];
        $('#productList').append('<p>' + product.productName +
                                ': $' + product.productCost + '</p>');
      }//end for loop
    }//end success
  });//end request
}//end refreshProducts
