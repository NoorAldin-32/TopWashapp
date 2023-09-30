<?php

include 'components/connect.php';

session_start();

if(isset($_SESSION['user_id'])){
   $user_id = $_SESSION['user_id'];
}else{
   $user_id = '';
};
if(isset($_SESSION['user_id'])){
    $user_id = $_SESSION['user_id'];
 }else{
    $user_id = '';
    header('location:user_login.php');
 };

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
   <link rel="stylesheet" href="stylebook.css">

</head>
<body>
   
<?php include 'components/user_header.php'; ?>

<section class = "booking">
<h1 class="heading-title"style=" margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 150px;
  margin-left: 450px; text-shadow: 0 0 3px #00a8f6, 0 0 5px #00a8f6;
  font-size: 40px;">book your wash!</h1>
<from action="book_form.php" method="post" class="book-form">

<div class="flex">
<div class="inputBox">
    <span>name :</span>
<input type="text" placholder="enter your name" name="name">
</div>

<div class="inputBox">
    <span>email :</span>
<input type="email" placholder="enter your email" name="email">
</div>

<div class="inputBox">
    <span>phone :</span>
<input type="number" placholder="enter your number" name="phone">
</div>

<div class="inputBox">
    <span>address :</span>
<input type="text" placholder="enter your address" name="address">
</div>

<div class="inputBox">
    <span>where to :</span>
<input type="text" placholder="place you want to visit" name="location">
</div>

<div class="inputBox">
    <span>how many :</span>
<input type="number" placholder=" number of guests" name="guests">
</div>

<div class="inputBox">
    <span> arrivals :</span>
<input type="date" name="arrivals">
</div>

<div class="inputBox">
    <span> leaving :</span>
<input type="date" name="leaving">
</div>

<input type="submit" name="submit" class="btn" name="send">


<?php include 'components/footer.php'; ?>

<script src="js/script.js"></script>

</body>
</html>