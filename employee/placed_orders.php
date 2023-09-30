<?php

include '../components/connect.php';

session_start();

$admin_id = $_SESSION['admin_id'];

if(!isset($admin_id)){
   header('location:employee_login.php');
}
 
if(isset($_POST['update_payment'])){
   $order_id = $_POST['order_id'];
   $user_Id = $_POST['user_Id'];
   $payment_status = $_POST['payment_status'];
   $payment_status = filter_var($payment_status, FILTER_SANITIZE_STRING);

   if($payment_status == 'completed'){
      $update_payment = $conn->prepare("UPDATE `employee` SET is_trip = ? WHERE id = ?");
      $update_payment->execute([0, $admin_id]);
      
   }
   if($payment_status == 'accept'){
     
      
      $note='لقد تم الموافقه على طلبكم';
      $insert_products = $conn->prepare("INSERT INTO `notfcations`(order_id, employee_id,userid,note) VALUES(?,?,?,?)");
      $insert_products->execute([$order_id,0,$user_Id,$note]);
   }
   if($payment_status == 'cancel'){
      $update_payment = $conn->prepare("UPDATE `employee` SET is_trip = ? WHERE id = ?");
      $update_payment->execute([0, $admin_id]);
     
   }
   $update_payment = $conn->prepare("UPDATE `orders` SET status = ? WHERE id = ?");
   $update_payment->execute([$payment_status, $order_id]);
  /* $note='لقد تم الموافقه على طلبكم';
   $insert_products = $conn->prepare("INSERT INTO `notfcations`(order_id, employee_id,userid,note) VALUES(?,?,?,?)");
   $insert_products->execute([$order_id,$admin_id,$user_Id,$note]);*/

   $message[] = 'Order status updated!';
}

if(isset($_GET['delete'])){
   $delete_id = $_GET['delete'];
   $delete_order = $conn->prepare("DELETE FROM `orders` WHERE id = ?");
   $delete_order->execute([$delete_id]);
   header('location:placed_orders.php');
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>placed orders</title>

   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">

   <link rel="stylesheet" href="../css/admin_style.css">

</head>
<body>

<?php include '../employee/components_e/employee_header.php'; ?>

<section class="orders">

<h1 class="heading">placed orders</h1>

<div class="box-container">

   <?php
   // var_dump($admin_id = $_SESSION['admin_id']);
   // die;
      $select_orders = $conn->prepare("SELECT * FROM `orders` Where employee_id = ?");
      $select_orders->execute([$admin_id = $_SESSION['admin_id']]);
      if($select_orders->rowCount() > 0){
         while($fetch_orders = $select_orders->fetch(PDO::FETCH_ASSOC)){
   ?>
   <div class="box">
      <p> placed on : <span><?= $fetch_orders['placed_on']; ?></span> </p>
      <p> username : <span><?= $fetch_orders['name']; ?></span> </p>
      <p> phone number : <span><?= $fetch_orders['number']; ?></span> </p>
      <p> address and schedule : <span><?= $fetch_orders['address']; ?></span> </p>
      <p> total products/services : <span><?= $fetch_orders['total_products']; ?></span> </p>
     
      <p> car Type : <span><?= $fetch_orders['car_type']; ?></span> </p>
      <p> license plate number : <span><?= $fetch_orders['car_size']; ?></span> </p><!--  هون حطينا النمرة مكان الكار سايز-->
      <p> color : <span><?= $fetch_orders['wash_type']; ?></span> </p><!-- حبي هون اللون مكان ووش تايب -->
      <p> payment method : <span><?= $fetch_orders['method']; ?></span> </p>
      <p> total price : <span>JD<?= $fetch_orders['total_price']; ?></span> </p>
      
      <form action="" method="post">
         <input type="hidden" name="order_id" value="<?= $fetch_orders['id']; ?>">
         <input type="hidden" name="user_Id" value="<?= $fetch_orders['user_id']; ?>">
         <select name="payment_status" class="select">
            <option selected disabled><?= $fetch_orders['status']; ?></option>
            <option value="pending">pending</option>
            <option value="completed">completed</option>
            <option value="accept">accept</option>
            <option value="cancel">reject</option>
         </select>
        <div class="flex-btn">
         <input type="submit" value="update" class="option-btn" name="update_payment">
         <a href="placed_orders.php?delete=<?= $fetch_orders['id']; ?>" class="delete-btn" onclick="return confirm('delete this order?');">delete</a>
        </div>
      </form>
   </div>
   <?php
         }
      }else{
         echo '<p class="empty">no orders placed yet!</p>';
      }
   ?>

</div>

</section>

</section>












<script src="../js/admin_script.js"></script>
   
</body>
</html>