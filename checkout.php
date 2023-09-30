
<?php

include 'components/connect.php';

session_start();

if(isset($_SESSION['user_id'])){
   $user_id = $_SESSION['user_id'];
}else{
   $user_id = '';
   header('location:user_login.php');
};

if(isset($_POST['order'])){

   $name = $_POST['name'];
   $name = filter_var($name, FILTER_SANITIZE_STRING);
   $number = $_POST['number'];
   $number = filter_var($number, FILTER_SANITIZE_STRING);
   $email = $_POST['email'];
   $email = filter_var($email, FILTER_SANITIZE_STRING);
   $method = $_POST['method'];
   $method = filter_var($method, FILTER_SANITIZE_STRING);
   $address = 'flat no. '. $_POST['flat'] .', '. $_POST['street'] .', '. $_POST['color'] .',';//. $_POST['state'] .', '. $_POST['country'] .' - '//. $_POST['pin_code']
   $address = filter_var($address, FILTER_SANITIZE_STRING);
   $total_products = $_POST['total_products'];
   $total_price = $_POST['total_price'];
   $car_type = $_POST['car_type'];
   $car_size = $_POST['car_size'];
   $city_name = $_POST['city_name'];
   $wash_type = $_POST['wash_type']; //شيل هضول من الداتا
   //$additional_services = $_POST['additional_services'];
   
   

   $check_cart = $conn->prepare("SELECT * FROM cart WHERE user_id = ?");
   $check_cart->execute([$user_id]);

   if($check_cart->rowCount() > 0){
                                                                                                                                                                             
      $insert_order = $conn->prepare("INSERT INTO orders(user_id, name, number, email, method, address, total_products, total_price, car_type, car_size,   wash_type,city_name) 
      VALUES(?,?,?,?,?,?,?,?,?,?,?,?)");
   $insert_order->execute([$user_id, $name, $number, $email, $method,
    $address, $total_products, $total_price , $car_type, $car_size,$wash_type ,$city_name /*$additional_services*/ ] );//انا شلت ال اديشنال سيرفس من فواق اذا بدك اياه ارجع ضيفو مع علامة السوال 

      $delete_cart = $conn->prepare("DELETE FROM cart WHERE user_id = ?");
      $delete_cart->execute([$user_id]);

      $message[] = 'order placed successfully!';
   }else{
      $message[] = '';
   }

}

?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>checkout</title>
   
   <!-- font awesome cdn link  -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">

   <!-- custom css file link  -->
   <link rel="stylesheet" href="css/style.css">

</head>
<body>
   
<?php include 'components/user_header.php'; ?>

<section class="checkout-orders">

   <form action="" method="POST">

   <h3>your orders</h3>

      <div class="display-orders">
      <?php
         $grand_total = 0;
         $cart_items[] = '';
         $select_cart = $conn->prepare("SELECT * FROM cart WHERE user_id = ?");
         $select_cart->execute([$user_id]);
         if($select_cart->rowCount() > 0){
            while($fetch_cart = $select_cart->fetch(PDO::FETCH_ASSOC)){
               $cart_items[] = $fetch_cart['name'].' ('.$fetch_cart['price'].' x '. $fetch_cart['quantity'].') - ';
               $total_products = implode($cart_items);
               $grand_total += ($fetch_cart['price'] * $fetch_cart['quantity']);
      ?>
         <p> <?= $fetch_cart['name']; ?> <span><?= 'JD'.$fetch_cart['price'].' x '. $fetch_cart['quantity']; ?></span> </p>
      <?php
            }
         }else{
            echo '<p ></p>';
         }
      ?>
         <input type="hidden" name="total_products" value="<?= $total_products; ?>">
         <input type="hidden" name="total_price" value="<?= $grand_total; ?>" value="">
         <div class="grand-total">grand total : <span>JD<?= $grand_total; ?></span></div>
      </div>

      <h3>place your orders</h3>

<div class="flex">
<div class="inputBox">
            <span><span style="color: red;">&#x2605;</span> Username :</span>
            <input type="text" name="name" placeholder="enter your username" class="box" maxlength="20" required>
         </div>
         <div class="inputBox">
            <span> <span style="color: red;">&#x2605;</span>Phone number :</span>
            <input type="number" name="number" placeholder="enter your phone number" class="box" min="0" max="9999999999" onkeypress="if(this.value.length == 10) return false;" required>
         </div>
         <div class="inputBox">
            <span> <span style="color: red;">&#x2605;</span> Email :</span>
            <input type="email" name="email" placeholder="enter your email" class="box" maxlength="50" required>
         </div>
         <div class="inputBox">
            <span><span style="color: red;">&#x2605;</span>Payment method :Prior payment is required for services when opting to pay via electronic wallet.</span>
            <select name="method" class="box" required>
               <option value="cash on delivery">cash on delivery</option>
               <option value="Click:0000000000">Click:0787685400</option>
               <option value="ZainCash:0000000000">ZainCash:0793454562</option>
               <!--<option value="paypal">paypal</option>-->
            </select>
         </div>

         <div class="inputBox">
            <span><span style="color: red;">&#x2605;</span>Areas:</span>
            <select name="city_name" class="box" required>
               <?php 
                $select_city = $conn->prepare("SELECT * FROM cities");
               $select_city->execute();
               while($fetch_city = $select_city->fetch(PDO::FETCH_ASSOC)){
                  echo "<option value='".$fetch_city['city']."'>".$fetch_city['city']."</option>";
               }
               ?>
              
               <!--<option value="paypal">paypal</option>-->
            </select>
         </div>
         <div class="inputBox">
            <span><span style="color: red;">&#x2605;</span>Address line 01 :</span>
            <input type="text" name="flat" placeholder="e.g. address line 01" class="box" maxlength="50" required>
         </div>
         <div class="inputBox">
            <span>address line 02 :</span>
            <input type="text" name="street" placeholder="e.g. address line 02" class="box" maxlength="50" >
         </div>
         <div class="inputBox">
            <span><span style="color: red;">&#x2605;</span>Schedule :</span>
            <input type="datetime-local" name="color" placeholder="e.g. date-time" class="box" maxlength="50" required>
         </div>
         <!--<div class="inputBox">
            <span>state :</span>
            <input type="text" name="state" placeholder="e.g. maharashtra" class="box" maxlength="50" required>
         </div>
         <div class="inputBox">
            <span>country :</span>
            <input type="text" name="country" placeholder="e.g. India" class="box" maxlength="50" required>
         </div>
         <div class="inputBox">
            <span>pin code :</span>
            <input type="number" min="0" name="pin_code" placeholder="e.g. 123456" min="0" max="999999" onkeypress="if(this.value.length == 6) return false;" class="box" required>
         </div>-->
     
      <div class="inputBox">
            <span>Car type :</span>
            <input type="text" name="car_type" placeholder="e.g. car type"  class="box" maxlength="50">
         </div>
         <div class="inputBox">
            <span><span style="color: red;">&#x2605;</span>License plate number :</span> <!--  هون حطينا النمرة مكان الكار سايز-->
            <input type="text" name="car_size" placeholder="xx-xxxxx" onkeypress="if(this.value.length == 8) return false;" class="box" maxlength="50" required >
         </div>
        <div class="inputBox">
            <span>Color :</span> <!-- حبي هون اللون مكان ووش تايب -->
            <input type="text" name="wash_type" placeholder="e.g. Red , Blue ... " class="box" maxlength="50" >
         </div>
         

      <input type="submit" name="order" class="btn <?= ($grand_total > 1)?'':'disabled'; ?>" value="place order">

   </form>

</section>













<?php include 'components/footer.php'; ?>

<script src="js/script.js"></script>

</body>
</html>