<?php

include '../components/connect.php';

session_start();

$admin_id = $_SESSION['admin_id'];

if(!isset($admin_id)){
   header('location:admin_login.php');
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>City</title>

   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">

   <link rel="stylesheet" href="../css/admin_style.css">

</head>
<body>

<?php include '../components/admin_header.php'; ?>

<section class="accounts">

   <h1 class="heading">City</h1>

   <div class="box-container">



   <?php
      $select_cities = $conn->prepare("SELECT * FROM `cities`");
      $select_cities->execute();
      if($select_cities->rowCount() > 0){
         while($fetch_cities = $select_cities->fetch(PDO::FETCH_ASSOC)){  
            $count = $conn->prepare("SELECT * FROM `orders`  WHERE city_name = ?");
            $count->execute([$fetch_cities['city']]); 
   ?>
   <div class="box">
      <p> City Name: <span><?= $fetch_cities['city']; ?></span> </p>
      <p> Count Order: <span><?= $count->rowCount(); ?></span> </p>
 
   </div>
   <?php
         }
      }else{
         echo '<p class="empty">no City!</p>';
      }
   ?>

   </div>

</section>












<script src="../js/admin_script.js"></script>
   
</body>
</html>