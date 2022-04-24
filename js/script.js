function minusQuantity()
{
    var box = document.getElementById("quantity_box");

    var quantity = parseInt(box.value);

    if (quantity <= 1) {
        swal("Sorry!","You've reached the minimum amount to add!", "warning");
    } else {
        box.value = quantity - 1;
    }
}

function plusQuantity()
{
    var box = document.getElementById("quantity_box");

    var quantity = parseInt(box.value);

    if (quantity >= 20) {
        swal("Sorry!","You've reached the maximum amount to add!", "warning");
    } else {
        box.value = quantity + 1;
    }
}

function displayDetails(productId)
{
    var xhttp; 
    if (window.XMLHttpRequest) { 
        xhttp = new XMLHttpRequest(); 
    } else { 
        xhttp = new ActiveXObject("Microsoft.XMLHTTP"); 
    } 

    xhttp.onreadystatechange = function() { 
        if (this.readyState == 4 && this.status == 200) {
            var ajaxDisplay = parent.frames["frame-get-products"].document.getElementById("query-product-details"); 
            ajaxDisplay.innerHTML = xhttp.responseText; 
        } 
    }

    xhttp.open("GET", "query-product-details.php?productId=" + productId, true); 
    xhttp.send();
}

function validateQuantity(in_stock)
{
    var quantity = parseInt(document.getElementById("quantity_box").value);

    if (Number.isInteger(quantity)) {
        if (quantity < 0 || quantity == 0) {
            swal("Uh Oh!", "Quantity should not be less than 1!", "warning");
            return false;
        }
        if (quantity > 20) {
            swal("Error!", "Quantity should not be more than 20!", "warning");
            return false;
        }
        else {
            return true;
        }
    } else {
        swal("Uh Oh!", "Please input an integer!", "warning");
        return false;
    }
}

function displayWarning()
{
    swal("Your cart is empty", "Please add items to your cart to continue", "warning");
}

