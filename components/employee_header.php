<?php
   if(isset($message)){
      foreach($message as $message){
         echo '
         <div class="message">
            <span>'.$message.'</span>
            <i class="fas fa-times" onclick="this.parentElement.remove();"></i>
         </div>
         ';
      }
   }
?>

<header class="header">

   <section class="flex">

      <a href="../employee/dashboard.php" class="logo">Employee<span>Panel</span></a>

      <nav class="navbar">
         <a href="../employee/dashboard.php">home</a>
       
         <a href="../employee/placed_orders.php">orders</a>
       
      </nav>

      <div class="icons">
         <div id="menu-btn" class="fas fa-bars"></div>
         <div id="user-btn" class="fas fa-user"></div>
      </div>

      <div class="profile">
         <?php
            $select_profile = $conn->prepare("SELECT * FROM `admins` WHERE id = ?");
            $select_profile->execute([$admin_id]);
            $fetch_profile = $select_profile->fetch(PDO::FETCH_ASSOC);
         ?>
         <p><!--<?= $fetch_profile['name']; ?>-->Employee </p>
          <!-- <a href="../employee/update_profile.php" class="btn"></a>-->
         <div class="flex-btn">
            <!--<a href="../admin/register_admin.php" class="option-btn">register</a>
            <a href="../admin/employee_login.php" class="option-btn">login</a>-->
         </div>
         <a href="../components/employee_logout.php" class="delete-btn" onclick="return confirm('logout from the website?');">logout</a> 
      </div>

   </section>

</header>