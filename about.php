<?php

include 'components/connect.php';

session_start();

if(isset($_SESSION['user_id'])){
   $user_id = $_SESSION['user_id'];
}else{
   $user_id = '';
};

?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>about</title>

   <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />
   
   <!-- font awesome cdn link  -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">

   <!-- custom css file link  -->
   <link rel="stylesheet" href="css/style.css">

</head>
<body>
   
<?php include 'components/user_header.php'; ?>

<section class="about">

   <div class="row">

      <div class="image">
      <iframe width="600" height="315" src="https://www.youtube.com/embed/JPVGUQXJzYs"></iframe>
</iframe>

      </div>

      <div class="content">

         <h3>Why choose us?</h3>
         <p>Because TOP wash is a digital platform designed to provide car owners with a convenient and efficient way to schedule and pay for car wash services. Users can access the web application via a web browser on their computer or mobile device, and select the type of car wash service they need, as well as the date and time they prefer.Additional features may include instant service and discount codes for car wash stations, whether an oil change or a wash, the winch owner chat, and a service evaluation.By utilizing a car wash web application, car owners can save time and hassle, and enjoy a clean and shiny car without the need to leave their home or office.</p>
         <a href="contact.php" class="btn">contact us</a>
      </div>

   </div>

</section>

<section class="reviews">
   
   <h1 class="heading">client's reviews</h1>

   <div class="swiper reviews-slider">

   <div class="swiper-wrapper">

   
<div class="swiper-slide slide">
       <!--  <img src="images/pic-1.png" alt="">-->
         <p>This service is amazing and very convenient, no need to go to the car wash station anymore.</p>
        <!--  <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
         </div>-->
         <h3>Ali</h3>
      </div>

      <div class="swiper-slide slide">
       <!--  <img src="images/pic-3.png" alt="">-->
         <p>I'm really impressed with this service, it saves a lot of time and effort.</p>
        <!--  <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
         </div>-->
         <h3>Ahmad</h3>
      </div>

      <div class="swiper-slide slide">
        <!-- <img src="images/pic-5.png" alt="">-->
         <p>Washing the car from home is the best thing that has happened to me.</p>
         <!--  <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
         </div>-->
         <h3>Osama</h3>
      </div>

      <div class="swiper-slide slide">
        <!-- <img src="images/pic-2.png" alt="">-->
         <p>I loved this service because it is fast, efficient and very convenient.</p>
          <!-- <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
         </div>-->
         <h3>Selma</h3>
      </div>

      <div class="swiper-slide slide">
        <!-- <img src="images/pic-4.png" alt="">-->
         <p>This service helped me a lot at the time I had to spend waiting at the car wash station</p>
        <!--  <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
         </div>-->
         <h3>Layla</h3>
      </div>

      <div class="swiper-slide slide">
         <!--  <img src="images/pic-6.png" alt="">-->
         <p>Quick and secure, I will recommend it to all my friends..</p>
       <!--  <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
         </div>-->
         <h3>Ghada</h3>
      </div>

   </div>

   <div class="swiper-pagination"></div>

   </div>

</section>









<?php include 'components/footer.php'; ?>

<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>

<script src="js/script.js"></script>

<script>

var swiper = new Swiper(".reviews-slider", {
   loop:true,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable:true,
   },
   breakpoints: {
      0: {
        slidesPerView:1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

</script>

</body>
</html>