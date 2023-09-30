<?php

include '../components/connect.php';

session_start();

$admin_id = $_SESSION['admin_id'];

if(!isset($admin_id)){
   header('location:employee_login.php');
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

<h1 class="heading">Notifications</h1>

<div class="box-container">

   <?php
   // var_dump($admin_id = $_SESSION['admin_id']);
   // die;
      $select_orders = $conn->prepare("SELECT * FROM `notfcations` Where employee_id = ?");
      $select_orders->execute([$admin_id = $_SESSION['admin_id']]);
      if($select_orders->rowCount() > 0){
         while($fetch_orders = $select_orders->fetch(PDO::FETCH_ASSOC)){            
   ?>
   <div class="box">
      <p> OrderId : <span><?= $fetch_orders['order_id']; ?></span> </p>
      <p> Note : <span><?= $fetch_orders['note']; ?> </span> </p>
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