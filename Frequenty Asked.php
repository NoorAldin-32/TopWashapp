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
<style>
         @import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');


.box{
   width: 820px;
   height: 520px;
   margin: 240px auto;
   background: #fff;
   border-radius: 9px;
   box-shadow: 1px 2px 4px rgba(0,0,0,.3);
}

.box .heading{
   background: #00bfff;
   border-radius: 7px 7px 0px 0px;
   padding: 10px;
   color: #fff;
   text-align: center;
   font-family: "Rubik";
}

.faqs{
   padding: 0px 20px 20px;
}

::-webkit-details-marker{
   float: right;
   margin-top: 3px;
}

details{
   background: #f6f6f6;
   padding: 10px 20px;
   border-radius: 7px;
   margin-top: 20px;
   font-family: "Rubik";
   font-size: 16px;
   letter-spacing: 1px;
   cursor: pointer;
}

details summary{
   outline: none;
}

    </style>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Chatbot in PHP | CodingNepal</title>
    <link rel="stylesheet" href="css/stylechatbot.css">
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
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

   

<div class="box">
   <p class="heading">Frequently Asked Questions</p>
   <div class="faqs">
      <details>
      <br>  <summary> How can I make a laundry request?</summary>
         <p class="text"><mark>Step One:</mark>Select the desired type of car wash from the icons available on the homepage.<br><br>

<mark>Step Two: </mark>If you require any additional services, click on the icon for "other services".<br><br>

<mark>Step Three:</mark>If you wish to purchase car-related items, navigate to the shop located in the Navigation Bar.<br><br>

<mark>Step Four: </mark>Click on the cart icon located at the right corner of the page.<br><br>

<mark> Step Five:</mark>Proceed to Checkout by clicking on the appropriate option.</p></p>
      </details>
      <details>
         <summary>How can I communicate with the winch owner?</summary>
         <p class="text"><br><mark>Step One:</mark> Navigate to the "winch ChatBot" option in the Navigation Bar.<br><br>
                        <mark>Step Two: </mark> Enter" I want winch" and proceed with the provided instructions.<br><br>
                        <mark>Step Three:</mark> Click on the winch chat and create an account.<br><br>
                        <mark>Step Four: </mark> write this name in the search field on the<br> winch chat page.<br><br>
                        
      </details>
    <!--  <details>
         <summary>What is Lorem ipsum?</summary>
         <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </details>-->
      
   </div>
</div>

    </section>















<script src="js/script.js"></script>
</body>
</html>