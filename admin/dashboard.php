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
   <title>dashboard</title>

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

<section class="dashboard">

   <h1 class="heading">dashboard</h1>

   <div class="box-container">

      <div class="box">
         <h3>welcome!</h3>
    
         <a href="update_profile.php" class="btn">update profile</a>
      </div>

      <div class="box">
         <?php
            $total_pendings = 0;
            $select_pendings = $conn->prepare("SELECT * FROM `orders` WHERE payment_status = ?");
            $select_pendings->execute(['pending']);
            if($select_pendings->rowCount() > 0){
               while($fetch_pendings = $select_pendings->fetch(PDO::FETCH_ASSOC)){
                  $total_pendings += $fetch_pendings['total_price'];
               }
            }
         ?>
         <h3><span></span><?= $total_pendings; ?><span></span></h3>
         <p>Total pending</p>
         <a href="placed_orders.php" class="btn">see orders</a>
      </div>
      <div class="box">
         <?php
            $totalcanceled = 0;
            $select_canceled = $conn->prepare("SELECT * FROM `orders` WHERE payment_status = ?");
            $select_canceled->execute(['canceled']);
            if($select_canceled->rowCount() > 0){
               while($fetch_canceled = $select_canceled->fetch(PDO::FETCH_ASSOC)){
                  $totalcanceled += $fetch_canceled['total_price'];
               }
            }
         ?>
         <h3><span></span><?= $totalcanceled; ?><span></span></h3>
         <p>Total canceled</p>
         <a href="placed_orders.php" class="btn">see orders</a>
      </div>
      <div class="box">
         <?php
            $total_completes = 0;
            $select_completes = $conn->prepare("SELECT * FROM `orders` WHERE payment_status = ?");
            $select_completes->execute(['completed']);
            if($select_completes->rowCount() > 0){
               while($fetch_completes = $select_completes->fetch(PDO::FETCH_ASSOC)){
                  $total_completes += $fetch_completes['total_price'];
               }
            }
         ?>
         <h3><span></span><?= $total_completes; ?><span></span></h3>
         <p>Completed orders</p>
         <a href="placed_orders.php" class="btn">See orders</a>
      </div>

      <div class="box">
         <?php
            $select_orders = $conn->prepare("SELECT * FROM `orders`");
            $select_orders->execute();
            $number_of_orders = $select_orders->rowCount()
         ?>
         <h3><?= $number_of_orders; ?></h3>
         <p>Orders placed</p>
         <a href="placed_orders.php" class="btn">See orders</a>
      </div>

      <div class="box">
         <?php
            $select_products = $conn->prepare("SELECT * FROM `products`");
            $select_products->execute();
            $number_of_products = $select_products->rowCount()
         ?>
         <h3><?= $number_of_products; ?></h3>
         <p>All products added</p>
         <a href="products.php" class="btn">See products</a>
      </div>


      <div class="box">
         <?php
            $select_products = $conn->prepare("SELECT * FROM `products` Where qty = ? ");
            $select_products->execute(['0']);
            $number_of_products = $select_products->rowCount()
         ?>
         <h3><?= $number_of_products; ?></h3>
         <p>Items out of stock</p>
         <a href="product_end_qty.php" class="btn">See products</a>
      </div>

      <div class="box">
         <?php
            $select_users = $conn->prepare("SELECT * FROM `users`");
            $select_users->execute();
            $number_of_users = $select_users->rowCount()
         ?>
         <h3><?= $number_of_users; ?></h3>
         <p>Users</p>
         <a href="users_accounts.php" class="btn">See Users</a>
      </div>

    


     
      <div class="box">


                    
       
       <?php
       // Setting up connection with database Geeks
       $connection = mysqli_connect("localhost", "root", "","livechat");
       
       // Check connection
       if (mysqli_connect_errno())
       {
          echo "Database connection failed.";
       }
       
       // query to fetch Username and Password from
       // the table geek
       $query = "SELECT 'firstName', 'Password' FROM users";
       
       // Execute the query and store the result set
       $result = mysqli_query($connection, $query);
       
       if ($result)
       {
          // it return number of rows in the table.
          $row = mysqli_num_rows($result);
          
          if ($row)
             {
                //printf("Number of row in the table : " . $row);
             }
          // close the result.
          mysqli_free_result($result);
       }
    
       // Connection close
       mysqli_close($connection);
    ?>
    
        
         <h3><?= $row ?></h3>
         <p>Online winchchat users</p>
       <!--  <a href="users_accounts.php" class="btn"></a>-->
      </div>

      <div class="box">
         <?php
            $select_admins = $conn->prepare("SELECT * FROM `admins`");
            $select_admins->execute();
            $number_of_admins = $select_admins->rowCount()
         ?>
         <h3><?= $number_of_admins; ?></h3>
         <p>Admin accounts</p>
         <a href="admin_accounts.php" class="btn">See admins</a>
      </div>

      <div class="box">
         <?php
            $select_admins = $conn->prepare("SELECT * FROM `employee`");
            $select_admins->execute();
            $number_of_admins = $select_admins->rowCount();
         ?>
         <h3><?= $number_of_admins; ?></h3>
         <p>Employee Accounts</p>
         <a href="employee_accounts.php" class="btn">see employees</a>
      </div>


      <div class="box">
         <?php
            $select_admins = $conn->prepare("SELECT * FROM `employee`  WHERE is_trip= ?");
            $select_admins->execute([0]);
            $number_of_admins = $select_admins->rowCount();
          echo "<h3>$number_of_admins</h3>";
         ?>

        
         <p>Available Employees</p>
         <a href="employee_accounts.php" class="btn">Available Employees</a>
      </div>


      <div class="box">
         <?php
            $select_admins = $conn->prepare("SELECT * FROM `employee`  WHERE is_trip= ?");
            $select_admins->execute([1]);
            $number_of_admins = $select_admins->rowCount();
            echo "<h3>$number_of_admins</h3>";
         ?>
       
         <p>Busy Employees</p>
         <a href="employee_accounts.php" class="btn">Busy Employees</a>
      </div>
      
      <div class="box">
         <?php
            $select_admins = $conn->prepare("SELECT * FROM `cities`");
            $select_admins->execute();
            $number_of_admins = $select_admins->rowCount();
            echo "<h3>$number_of_admins</h3>";
         ?>
       
         <p>See all areas </p>
         <a href="city.php" class="btn">See all areas in Amman</a>
      </div>


   </div>

</section>












<script src="../js/admin_script.js"></script>
   
</body>
</html>