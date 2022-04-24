<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Online Grocery Store</title>
</head>

<frameset id="leftFrame" cols="25%, 50%" frameborder="0">
    <!-- Link to products menu -->
    <frame src="resources/view-products.php" name="frame-view-products">
    <frameset rows="*, *">
        <!-- Link to product details when clicked -->
        <frameset id="topRightFrame" rows="*">
            <frame src="resources/get-products.php" name="frame-get-products">
        </frameset>
        <!-- Link to when users add items to cart -->
        <frameset id="bottomRightFrame" rows="*">
            <frame src="resources/view-cart.php" name="frame-view-cart">              
        </frameset>
    </frameset>
</frameset>
</html>