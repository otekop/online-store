<?php include_once 'config.php' ?>
<?php include_once 'includes/header.php' ?>

<?php

$productId = (isset($_GET['productId']) ? $_GET['productId'] : null);
$query_string = 'SELECT * FROM products WHERE product_id='.$productId;
$result = mysqli_query($connection, $query_string);
$row = mysqli_fetch_assoc($result);

echo
"<form action='view-cart.php?action=add&code={$productId}' method='POST' target='frame-view-cart' onsubmit='return validateQuantity(".$row['in_stock'].")'>" .
    "<div class='shopping-cart'>".
        "<div class='item'>" .
            "<div class='description'>" . 
                "<span>" . $row['product_name'] . "</span>" .
                "<span>" . $row['unit_quantity'] . "</span>" .
                "<span>$" . $row['unit_price'] . "</span>" .
            "</div>" . 
            "<div class='quantity'>" .
                "<button onclick='minusQuantity()' class='minus-btn' type='button' name='button'>" .
                    "<img src='../assets/icons/minus.svg' />" .
                "</button>" .
                "<input type='text' name='quantity' id='quantity_box' value='1'>" .
                "<button onclick='plusQuantity()'class='plus-btn' type='button' name='button'>" .
                "<img src='../assets/icons/plus.svg' />" . 
                "</button>" .
            "</div>" .
            "<div><button id='addToCartButton' class='ui primary button'><i class='shop icon'></i>Add to Cart</button></div>" .
        "</div>" .
    "</div>".   
"</form>";

mysqli_close($connection);

?>

<?php include_once 'includes/footer.php' ?>