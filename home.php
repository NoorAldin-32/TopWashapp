<?php

include 'components/connect.php';

session_start();

if(isset($_SESSION['user_id'])){
   $user_id = $_SESSION['user_id'];
}else{
   $user_id = '';
};

include 'components/wishlist_cart.php';

?>

<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>home</title>

   <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />
   
   <!-- font awesome cdn link  -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">

   <!-- custom css file link  -->
   <link rel="stylesheet" href="css/style.css">

</head>
<body>

   
<?php include 'components/user_header.php'; ?>

<div class="home-bg">

<section class="home">

   <div class="swiper home-slider">
   
   <div class="swiper-wrapper">

      <div class="swiper-slide slide">
         <div class="image">
            <img src="images/car.jpg" alt="">
         </div>
         <div class="content">
            <span>To obtain 50% discount </span>
            <h3>Use the code "SPRINGSALE14"</h3>
            <!--<a href="shop.php" class="btn">shop now</a>-->
         </div>
      </div>

      <div class="swiper-slide slide">
         <div class="image">
            <img src="images/aa5.png" alt="">
         </div>
         <div class="content">
            <span>If you want to get the best oils for car engines</span>
            <h3> Go to the Konoha car wash station.</h3>
           <!-- <a href="shop.php" class="btn">shop now</a>-->
         </div>
      </div>

      <div class="swiper-slide slide">
         <div class="image">
            <img src="images/lop.png" alt="">
         </div>
         <div class="content">
            <span>To obtain 60% discount</span>
            <h3>Use the code "uchihaitachi696"</h3>
          <!--  <a href="shop.php" class="btn">shop now</a>-->
         </div>
      </div>

   </div>

      <div class="swiper-pagination"></div>

   </div>

</section>

</div>

<section class="category">


<h1 class="heading" style=" margin-top: 10px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 100px;  color: red;
  font-size: 25px;">Attention: The car washing service order is exclusively available in Amman.</h1>
  <h1 class="heading" style=" margin-top: 10px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 100px;  color: red;
  font-size: 25px;">if you wish to communicate with the winch owners, please refer to the instructions outlined in the Frequently Asked.</h1>

   <h1 class="heading">SELECT THE WASH OPTION OF YOUR PREFERENCE AND ACHIEVE A POLISHED CAR IN JUST A FEW MINUTES WITH OUR SERVICES</h1>

   <div class="swiper category-slider">

   <div class="swiper-wrapper">
  
   <a href="category.php?category=interior " class="swiper-slide slide" style=" margin-top: 10px;
  margin-bottom: 200px;
  margin-right: 300px;
  margin-left: 200px;">
      <img src="images/Interior.png" alt="">
      <h3>car interior wash</h3>
   </a>

   <a href="category.php?category=exterior" class="swiper-slide slide">
      <img src="images/Exterior.png" alt="">
      <h3>car exterior wash</h3>
   </a>

   <a href="category.php?category=both" class="swiper-slide slide">
      <img src="images/Both.png" alt="">
      <h3>both together</h3>
   </a>

   <!--<a href="category.php?category=Size" class="swiper-slide slide">
      <img src="images/Mitsubishi Logo.png" alt="">
      <h3>Mitsubishi</h3>
   </a>

   <a href="category.php?category=Size" class="swiper-slide slide">
      <img src="images/toyota logo.png" alt="">
      <h3>Toyota</h3>
   </a>

   <a href="category.php?category=Size" class="swiper-slide slide">
      <img src="images/Kia logo.png" alt="">
      <h3>Kia</h3>
   </a>
   Qusai Malkawi, [2023-05-15 5:36 PM]
<a href="category.php?category=Size" class="swiper-slide slide">
      <img src="images/Nissan logo.png" alt="">
      <h3>Nissan</h3>
   </a>

   <a href="category.php?category=Size" class="swiper-slide slide">
      <img src="images/lexus logo.png" alt="">
      <h3>Lexus</h3>
   </a>-->

  

   </div>

   <div class="swiper-pagination"></div>

   </div>

</section>

<section class="category">
<h1 class="heading">CHOOSE FROM A RANGE OF ADDITIONAL SERVICES TO COMPLEMENT YOUR WASHING EXPERIENCE</h1>

   <div class="swiper category-slider">

   <div class="swiper-wrapper">

   <a href="category2.php?category=add" class="swiper-slide slide" style=" margin-top: 10px;
  margin-bottom: 450px;
  margin-right: 400px;
  margin-left: 450px;">
      <img src="images/Addi.jpg" alt="">
      <h3>Additional Services</h3>
   </a>
   </section>

  <section class="category">

<h1 class="heading">Instant Order</h1>
     <span class="content" style=" margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 150px;
  margin-left: 10px; text-shadow: 0 0 3px #ff0000, 0 0 5px #ff0000;
  font-size: 25px;">If you'd like to request a car wash immediately, please reach out to us through our  <a style="color: #0000ff; margin-top: 10px; "target="_blank" href="contact.php" > live chat</a> or call us at (06) 3457657.
</span>

   <!-- <div class="swiper category-slider">

   <div class="swiper-wrapper">

   <a href="category2.php?category=@" class="swiper-slide slide">
      
      <img src="images/AA.jpg" alt="">
      <h3>Instant Order</h3>
   </a>
   </section>

<section class="home-products">

   <h1 class="heading">latest products</h1>

   <div class="swiper products-slider">

   <div class="swiper-wrapper">

   <?php
     $select_products = $conn->prepare("SELECT * FROM products LIMIT 6"); 
     $select_products->execute();
     if($select_products->rowCount() > 0){
      while($fetch_product = $select_products->fetch(PDO::FETCH_ASSOC)){
   ?>
   <form action="" method="post" class="swiper-slide slide">
      <input type="hidden" name="pid" value="<?//= $fetch_product['id']; ?>">
      <input type="hidden" name="name" value="<?///= $fetch_product['name']; ?>">
      <input type="hidden" name="price" value="<?//= $fetch_product['price']; ?>">
      <input type="hidden" name="image" value="<?//= $fetch_product['image_01']; ?>">
      <button class="fas fa-heart" type="submit" name="add_to_wishlist"></button>
      <a href="quick_view.php?pid=<?//= $fetch_product['id']; ?>" class="fas fa-eye"></a>
      <img src="uploaded_img/<?//= $fetch_product['image_01']; ?>" alt="">
      <div class="name"><?//= $fetch_product['name']; ?></div>
      <div class="flex">
         <div class="price"><span>JD</span><?//= $fetch_product['price']; ?><span>/-</span></div>
         <input type="number" name="qty" class="qty" min="1" max="99" onkeypress="if(this.value.length == 2) return false;" value="1">
      </div>
      <input type="submit" value="add to cart" class="btn" name="add_to_cart">
   </form>
   <?php
      }
   }else{
      echo '<p class="empty">no products added yet!</p>';
   }
   ?>

   </div>-->

   <div class="swiper-pagination"></div>

   </div>

</section>



<?php include 'components/footer.php'; ?>

<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>

<script src="js/script.js"></script>

<script>

var swiper = new Swiper(".home-slider", {
   //loop:true,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable:true,
      //position:"center",
    },
});

 var swiper = new Swiper(".category-slider", {
  // loop:true,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable:true,
      //position:"center",
   },
   breakpoints: {
      0: {
         slidesPerView: 2,
       },
      650: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
   },
});

var swiper = new Swiper(".products-slider", {
   //loop:true,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable:true,
      
   },
   breakpoints: {
      550: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
   },
});

</script>

</body>
</html>