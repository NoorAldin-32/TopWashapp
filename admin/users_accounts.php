<?php

include '../components/connect.php';

session_start();

$admin_id = $_SESSION['admin_id'];

if(!isset($admin_id)){
   header('location:admin_login.php');
}

if(isset($_GET['delete'])){
   $delete_id = $_GET['delete'];
   $delete_user = $conn->prepare("DELETE FROM `users` WHERE id = ?");
   $delete_user->execute([$delete_id]);
   $delete_orders = $conn->prepare("DELETE FROM `orders` WHERE user_id = ?");
   $delete_orders->execute([$delete_id]);
   $delete_messages = $conn->prepare("DELETE FROM `messages` WHERE user_id = ?");
   $delete_messages->execute([$delete_id]);
   $delete_cart = $conn->prepare("DELETE FROM `cart` WHERE user_id = ?");
   $delete_cart->execute([$delete_id]);
   $delete_wishlist = $conn->prepare("DELETE FROM `wishlist` WHERE user_id = ?");
   $delete_wishlist->execute([$delete_id]);
   header('location:users_accounts.php');
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
   <title>users accounts</title>

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

<section class="accounts">

   <h1 class="heading">user accounts</h1>

   <div class="box-container">

   <?php
      $select_accounts = $conn->prepare("SELECT * FROM `users`");
      $select_accounts->execute();
      if($select_accounts->rowCount() > 0){
         while($fetch_accounts = $select_accounts->fetch(PDO::FETCH_ASSOC)){   
   ?>
   <div class="box">
      <p> user id : <span><?= $fetch_accounts['id']; ?></span> </p>
      <p> username : <span><?= $fetch_accounts['name']; ?></span> </p>
      <p> email : <span><?= $fetch_accounts['email']; ?></span> </p>
      <a href="users_accounts.php?delete=<?= $fetch_accounts['id']; ?>" onclick="return confirm('delete this account? the user related information will also be delete!')" class="delete-btn">delete</a>
   </div>
   <?php
         }
      }else{
         echo '<p class="empty">no accounts available!</p>';
      }
   ?>

   </div>

</section>












<script src="../js/admin_script.js"></script>
   
</body>
</html>