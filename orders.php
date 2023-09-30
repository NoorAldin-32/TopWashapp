<?php

include 'components/connect.php';

session_start();

if (isset($_SESSION['user_id'])) {
   $user_id = $_SESSION['user_id'];
} else {
   $user_id = '';
};
if (isset($_POST['cancel_order'])) {
   $order_id = $_POST['order_id'];
   $employee_id = $_POST['employee_id'];

   $payment_status = 'canceled';

   $payment_status = filter_var($payment_status, FILTER_SANITIZE_STRING);

   $update_payment = $conn->prepare("UPDATE `orders` SET payment_status = ? WHERE id = ?");

   $update_payment->execute([$payment_status, $order_id]);
   $insert_products = $conn->prepare("INSERT INTO notfcations(order_id,employee_id,userid,note) VALUES(?,?,?,?)");
   $note='تم الغاء الطلب';
   $insert_products->execute([$order_id,$employee_id,0,$note]);
 $message[] = 'payment status updated!';


}
?>

<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>orders</title>

   <!-- font awesome cdn link  -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">

   <!-- custom css file link  -->
   <link rel="stylesheet" href="css/style.css">

</head>

<body>

   <?php include 'components/user_header.php'; ?>

   <section class="orders">

      <h1 class="heading">placed orders</h1>

      <div class="box-container">

         <?php
         if ($user_id == '') {
            echo '<p class="empty">please login to see your orders</p>';
         } else {
            $select_orders = $conn->prepare("SELECT * FROM orders WHERE user_id = ?");
            $select_orders->execute([$user_id]);
            if ($select_orders->rowCount() > 0) {
               while ($fetch_orders = $select_orders->fetch(PDO::FETCH_ASSOC)) {
              
         ?>
                  <div class="box">
                    
                     <p>placed on : <span><?= $fetch_orders['placed_on']; ?></span></p>
                     <p>username : <span><?= $fetch_orders['name']; ?></span></p>
                     <p>email : <span><?= $fetch_orders['email']; ?></span></p>
                     <p>phone number : <span><?= $fetch_orders['number']; ?></span></p>
                     <p>address and schedule : <span><?= $fetch_orders['address']; ?></span></p>
                     <p>payment method : <span><?= $fetch_orders['method']; ?></span></p>
                     <p>your orders : <span><?= $fetch_orders['total_products']; ?></span></p>
                     <p>total price : <span>JD<?= $fetch_orders['total_price']; ?></span></p>
                     <p>car type : <span><?= $fetch_orders['car_type']; ?></span></p>
                     <p>license plate number : <span><?= $fetch_orders['car_size']; ?></span> </p><!--  هون حطينا النمرة مكان الكار سايز-->
                     <p>color : <span><?= $fetch_orders['wash_type']; ?></span> </p><!-- حبي هون اللون مكان ووش تايب -->
                     <p>payment status : <span style="color:<?php if ($fetch_orders['payment_status'] == 'pending') {
                         echo 'orange';
                      } elseif ($fetch_orders['payment_status'] == 'canceled') {
                         echo 'red';
                      } else {
                         echo 'green';
                      }; ?>"><?= $fetch_orders['payment_status']; ?></span> </p>
                     <?php if ($fetch_orders['payment_status'] == 'pending') {
                      
                     
                     ?>
                     <form action="" method="post">
                        <input type="hidden" name="order_id" value="<?= $fetch_orders['id']; ?>">
                        <input type="hidden" name="order_id" value="<?= $fetch_orders['id']; ?>">
                        <input type="hidden" name="employee_id" value="<?= $fetch_orders['employee_id']; ?>">

                        <div class="col-md-6">
                           <input type="submit" value="Cancel Order" class="delete-btn" name="cancel_order">
                        </div>
                     </form>
                     <?php }?>
                  </div>
         <?php
               }
            } else {
               echo '<p class="empty">no orders placed yet!</p>';
            }
         }
         ?>

      </div>

   </section>













   <?php include 'components/footer.php'; ?>

   <script src="js/script.js"></script>

</body>

</html>