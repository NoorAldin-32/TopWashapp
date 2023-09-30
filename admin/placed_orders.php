<?php

include '../components/connect.php';

session_start();

$admin_id = $_SESSION['admin_id'];

if(!isset($admin_id)){
   header('location:admin_login.php');
}

if(isset($_POST['update_payment'])){
   
   $order_id = $_POST['order_id'];
   
   $payment_status = $_POST['payment_status'];
   $payment_status = filter_var($payment_status, FILTER_SANITIZE_STRING);

   $update_payment = $conn->prepare("UPDATE `orders` SET payment_status = ? WHERE id = ?");
 
   $update_payment->execute([$payment_status,$order_id]);
   $message[] = 'payment status updated!';
}


if(isset($_POST['employee_id'])){
   $order_id = $_POST['order_id'];
   $employee_id = $_POST['employee_id_employee'];

   $update_payment = $conn->prepare("UPDATE `orders` SET employee_id = ? WHERE id = ?");
   $update_payment->execute([$employee_id,$order_id]);
   $update_payment = $conn->prepare("UPDATE `employee` SET is_trip = ? WHERE id = ?");
     $update_payment->execute([1,$employee_id]);
  $insert_products = $conn->prepare("INSERT INTO notfcations(order_id,employee_id,userid,note) VALUES(?,?,?,?)");
     $note='لديكم طلب جديد ';
   $insert_products->execute([$order_id,$employee_id,0,$note]);
     $message[] = 'The order has been successfully sent';
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
<style>
      
      .wrapper span {
         position: fixed;
         bottom: -180px;
         height: 50px;
         width: 50px;
         z-index: -1;
         background-color: #d9d9d9;
         box-shadow: 0 0 50px #080808, 0 0 100px #080808, 0 0 150px #0072ff, 0 0 200px #0072ff;
         animation: animate 10s linear infinite;
      }
      .wrapper span:nth-child(1) {
         left: 60px;
         animation-delay: 0.6s;
      }
      .wrapper span:nth-child(2) {
         left: 10%;
         animation-delay: 3s;
         width: 60px;
         height: 60px;
      }
      .wrapper span:nth-child(3) {
         left: 20%;
         animation-delay: 2s;
      }
      .wrapper span:nth-child(4) {
         left: 30%;
         animation-delay: 5s;
         width: 80px;
         height: 80px;
      }
      .wrapper span:nth-child(5) {
         left: 40%;
         animation-delay: 1s;
      }
      .wrapper span:nth-child(6) {
         left: 50%;
         animation-delay: 7s;
      }
      .wrapper span:nth-child(7) {
         left: 60%;
         animation-delay: 6s;
         width: 100px;
         height: 100px;
      }
      .wrapper span:nth-child(8) {
         left: 70%;
         animation-delay: 8s;
      }
      .wrapper span:nth-child(9) {
         left: 80%;
         animation-delay: 6s;
         width: 90px;
         height: 90px;
      }
      .wrapper span:nth-child(10) {
         left: 90%;
         animation-delay: 4s;
      }
      .banner {
         display: flex;
         justify-content: center;
         align-items: center;
         height: 100vh;
      }
      .content h2 b {
         -webkit-text-fill-color: transparent;
         -webkit-text-stroke-width: 3px;
         -webkit-text-stroke-color: #fff;
         font-family: montserrat;
         font-size: 80px;
         text-transform: uppercase;
         letter-spacing: 12px;
      }
      @keyframes animate {
         0% {
            transform: translateY(0);
            opacity: 1;
         }
         80% {
            opacity: .7;
         }
         100% {
            transform: translateY(-800px) rotate(360deg);
            opacity: 0;
         }
      }
            </style>
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>placed orders</title>

   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">

   <link rel="stylesheet" href="../css/admin_style.css">

</head>
<body style="background: #ffffff;
	height: 100vh;">
   <div class="wrapper">
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
</div>

<?php include '../components/admin_header.php'; ?>

<section class="orders">

<h1 class="heading">placed orders</h1>

<div class="box-container">

   <?php
      $select_orders = $conn->prepare("SELECT * FROM `orders`");
     
      $select_orders->execute();
      
     
      
      if($select_orders->rowCount() > 0){
         while($fetch_orders = $select_orders->fetch(PDO::FETCH_ASSOC)){
            $select_employee = $conn->prepare("SELECT * FROM `employee` Where is_online = ? AND is_trip =?");
            $select_employee->execute([1,0]);
   ?>
   <div class="box">
      <p> placed on : <span><?= $fetch_orders['placed_on']; ?></span> </p>
      <p> username : <span><?= $fetch_orders['name']; ?></span> </p>
      <p> phone number : <span><?= $fetch_orders['number']; ?></span> </p>
      <p> address and schedule :  <span><?= $fetch_orders['address']; ?></span> </p>
      <p> total products/services : <span><?= $fetch_orders['total_products']; ?></span> </p>
      
    
      <p> car Type : <span><?= $fetch_orders['car_type']; ?></span> </p>
      <p> license plate number : <span><?= $fetch_orders['car_size']; ?></span> </p><!--  هون حطينا النمرة مكان الكار سايز-->
      <p> color : <span><?= $fetch_orders['wash_type']; ?></span> </p><!-- حبي هون اللون مكان ووش تايب -->
      <p> payment method : <span><?= $fetch_orders['method']; ?></span> </p>
      <p> total price : <span>JD<?= $fetch_orders['total_price']; ?></span> </p>
      <?php
    
      ?>
      <form action="" method="post">
         <input type="hidden" name="order_id" value="<?= $fetch_orders['id']; ?>">
         <select name="payment_status" class="select">
            <option  disabled><?= $fetch_orders['payment_status']; ?></option>
            <option <?php if($fetch_orders['payment_status']=='pending') echo 'selected' ?> value="pending">pending</option>
            <option <?php if($fetch_orders['payment_status']=='completed') echo 'selected' ?> value="completed">completed</option>
            <option <?php if($fetch_orders['payment_status']=='canceled') echo 'selected' ?> value="canceled">canceled</option>
            <option <?php if($fetch_orders['payment_status']=='nocancel') echo 'selected' ?> value="nocancel">nocancel</option>
         </select>
        <div class="flex-btn">
         <input type="submit" value="update" class="option-btn" name="update_payment">
        <!-- <a href="placed_orders.php?delete=<?//= $fetch_orders['id']; ?>" class="delete-btn" onclick="return confirm('delete this order?');">delete</a>-->
        </div>
      </form>
      
      <form action="" method="post">
         <input type="hidden" name="order_id" value="<?= $fetch_orders['id']; ?>">
         <select name="employee_id_employee" class="select">
            <option selected disabled>Selected Employee</option>
            <?php 
           while($fetch_employee = $select_employee->fetch(PDO::FETCH_ASSOC)){
            echo "<option value='".$fetch_employee['id']."'>".$fetch_employee['name']."</option>";
         }

            ?>
         </select>
        <div class="flex-btn">
         <input type="submit"  class="option-btn" name="employee_id">
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