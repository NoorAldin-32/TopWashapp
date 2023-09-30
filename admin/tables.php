<?php

include '../components/connect.php';


session_start();

$admin_id = $_SESSION['admin_id'];

if (!isset($admin_id)) {
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
    .btn, .delete-btn, .option-btn {
    display: block;
    width: 80px !important;
    margin: 10px !important;
    margin-top: 7rem !important;
    border-radius: 0.5rem !important;
    padding: 1rem 3rem !important;
    font-size: 1.2rem !important;
    text-transform: capitalize;
    color: var(--white);
    cursor: pointer;
    text-align: center;
}

</style>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Report</title>



    <link rel="stylesheet" href="../css/admin_style.css">
    <?php include '../datatable.php' ?>
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

        <h1 class="heading">Orders</h1>

        <?php
        $select_orders = $conn->prepare("SELECT * FROM `orders`");

        $select_orders->execute();

        ?>
        <div class="box-container">
            <div class="table-reponsive box">
                <table id="example" class="table table-striped table-bordered example">
                    <thead>
                        <tr>
                            
                            <th>Id</th>
                            <th>Username</th>
                            <th>Phone number</th>
                            <th>Address and schedule</th>
                            <th>Total price</th>
                            <th>Payment method</th>
                            
                           
                            <th>Areas</th>
                           
                            <!-- <th>employee</th> -->

                        </tr>
                    </thead>
                    <tbody>
                        <?php

                        if ($select_orders->rowCount() > 0) {
                            while ($value = $select_orders->fetch(PDO::FETCH_ASSOC)) {
                                $select_employee = $conn->prepare("SELECT * FROM `employee` Where is_online = ? AND is_trip =?");
                                $select_employee->execute([1, 0]); ?>
                                <tr>
                                 <td><?= $value['id']; ?></td>
                                    <td><?= $value['name']; ?></td>
                                    <td><?= $value['number']; ?></td>
                                    <td><?= $value['address']; ?></td>
                                    <td><?= $value['total_price']; ?></td>
                                    <td><?= $value['method']; ?></td>
                                   
                                    
                                    <td><?= $value['city_name']; ?></td>
                                    
                                    <!-- <td> <?php
                                            while ($fetch_employee = $select_employee->fetch(PDO::FETCH_ASSOC)) {
                                                echo $fetch_employee['name'];
                                                echo '<br>';
                                            }
                                            ?></td> -->

                                </tr>
                        <?php
                            }
                        } else {
                            echo '<p class="empty">no orders placed yet!</p>';
                        }
                        ?>

                    </tbody>
                </table>
            </div>




        </div>

    </section>

    <section class="dashboard">

        <h1 class="heading">All Products</h1>

        <?php
        $select_products = $conn->prepare("SELECT * FROM `products`");
        $select_products->execute();

        ?>
        <div class="box-container">
            <div class="table-reponsive box">
                <table id="example" class="table table-striped table-bordered example">
                    <thead>
                        <tr>
                            <th class="not-exported">image</th>

                            <th>Name</th>
                            <th>Price</th>
                            <th>Details</th>
                            <th>Quantity</th>


                        </tr>
                    </thead>
                    <tbody>
                        <?php

                        if ($select_products->rowCount() > 0) {
                            while ($fetch_products = $select_products->fetch(PDO::FETCH_ASSOC)) {
                        ?>
                                <tr>
                                    <td><img width="70" src="../uploaded_img/<?= $fetch_products['image_01']; ?>" alt=""></td>
                                    <td><?= $fetch_products['name']; ?></td>
                                    <td><?= $fetch_products['price']; ?></td>
                                    <td><?= $fetch_products['details']; ?></td>
                                    <td><?= $fetch_products['qty']; ?></td>


                                </tr>
                        <?php
                            }
                        } else {
                            echo '<p class="empty">no orders placed yet!</p>';
                        }
                        ?>

                    </tbody>
                </table>
            </div>




        </div>

    </section>
    <section class="dashboard">

<h1 class="heading">Products Out Of stock</h1>

<?php
$select_Outproducts = $conn->prepare("SELECT * FROM `products` Where qty = ?");
$select_Outproducts->execute([0]);


?>
<div class="box-container">
    <div class="table-reponsive box">
        <table id="example" class="table table-striped table-bordered example">
            <thead>
                <tr>
                    <th class="not-exported">image</th>

                    <th>Name</th>
                    <th>Price</th>
                    <th>Details</th>
                   


                </tr>
            </thead>
            <tbody>
                <?php

                if ($select_Outproducts->rowCount() > 0) {
                    while ($fetch_products = $select_Outproducts->fetch(PDO::FETCH_ASSOC)) {
                ?>
                        <tr>
                            <td><img width="70" src="../uploaded_img/<?= $fetch_products['image_01']; ?>" alt=""></td>
                            <td><?= $fetch_products['name']; ?></td>
                            <td><?= $fetch_products['price']; ?></td>
                            <td><?= $fetch_products['details']; ?></td>
                         


                        </tr>
                <?php
                    }
                } else {
                    echo '<p class="empty">no orders placed yet!</p>';
                }
                ?>

            </tbody>
        </table>
    </div>




</div>

</section>
    <section class="dashboard">

        <h1 class="heading">Customers</h1>

        <?php
        $User = $conn->prepare("SELECT * FROM `users`");
        $User->execute();

        ?>
        <div class="box-container">
            <div class="table-reponsive box">
                <table id="example" class="table table-striped table-bordered example">
                    <thead>
                        <tr>
                        
                            <th>Id</th>
                            <th>Username</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php

                        if ($User->rowCount() > 0) {
                            while ($Users = $User->fetch(PDO::FETCH_ASSOC)) {
                        ?>
                                <tr>
                                    <td><?= $Users['id']; ?></td>
                                    <td><?= $Users['name']; ?></td>
                                    <td><?= $Users['email']; ?></td>
                               


                                </tr>
                        <?php
                            }
                        } else {
                            echo '<p class="empty">no orders placed yet!</p>';
                        }
                        ?>

                    </tbody>
                </table>
            </div>
        </div>

    </section>
    <section class="dashboard">

        <h1 class="heading">Available Employees</h1>

        <?php
       $select_admins = $conn->prepare("SELECT * FROM `employee`  WHERE is_trip= ?");
       $select_admins->execute([0]);

        ?>
        <div class="box-container">
            <div class="table-reponsive box">
                <table id="example" class="table table-striped table-bordered example">
                    <thead>
                        <tr>
                        
                            <th>Id</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php

                        if ($User->rowCount() > 0) {
                            while ($select_adminss = $select_admins->fetch(PDO::FETCH_ASSOC)) {
                        ?>
                                <tr>
                                    <td><?= $select_adminss['id']; ?></td>
                                    <td><?= $select_adminss['name']; ?></td>
                               


                                </tr>
                        <?php
                            }
                        } else {
                            echo '<p class="empty">no orders placed yet!</p>';
                        }
                        ?>

                    </tbody>
                </table>
            </div>
        </div>

    </section>
    
    <section class="dashboard">

<h1 class="heading">Areas</h1>

<?php
include '../components/connect.php';
$City = $conn->prepare("SELECT * FROM `cities`");
$City->execute();

?>
<div class="box-container">
    <div class="table-reponsive box">
        <table id="example" class="table table-striped table-bordered example">
            <thead>
                <tr>
                
                    <th>Id</th>
                    <th>Name</th>
                    <th>COUNT</th>
                </tr>
            </thead>
            <tbody>
            
<?php
                 
               
                if ($City->rowCount() > 0) {
                    while ($Citys = $City->fetch(PDO::FETCH_ASSOC)) {
                        $select_cities = $conn->prepare("SELECT * FROM cities");
                        $select_cities->execute();
                        
                         
                              $count = $conn->prepare("SELECT * FROM orders  WHERE city_name = ?");
                             // $count->execute([$fetch_cities['city']]); 
                ?>
                        <tr>
                            <td><?= $Citys['id']; ?></td>
                            <td><?= $Citys['city']; ?></td>
                            <td><?= $count->rowCount(); ?></td>
                      
                       


                        </tr>
                <?php
                    
                    }
                } else {
                    echo '<p class="empty">no orders placed yet!</p>';
                }
           
                ?>

            </tbody>
        </table>
    </div>
</div>

</section>
    <section class="dashboard">

<h1 class="heading">employee </h1>

<?php
$employee = $conn->prepare("SELECT * FROM `employee`");
$employee->execute();

?>
<div class="box-container">
    <div class="table-reponsive box">
        <table id="example" class="table table-striped table-bordered example">
            <thead>
                <tr>
                
                    <th>Id</th>
                    <th>Username</th>
                   
                   
                </tr>
            </thead>
            <tbody>
                <?php

                if ($employee->rowCount() > 0) {
                    while ($employees = $employee->fetch(PDO::FETCH_ASSOC)) {
                ?>
                        <tr>
                            <td><?= $employees['id']; ?></td>
                            <td><?= $employees['name']; ?></td>
                            
                      
                       


                        </tr>
                <?php
                    }
                } else {
                    echo '<p class="empty">no orders placed yet!</p>';
                }
                ?>

            </tbody>
        </table>
    </div>
</div>

</section>
    <section class="dashboard">

<h1 class="heading">Admin </h1>

<?php
      $select_accounts = $conn->prepare("SELECT * FROM `admins`");
      $select_accounts->execute();
   

?>
<div class="box-container">
    <div class="table-reponsive box">
        <table id="example" class="table table-striped table-bordered example">
            <thead>
                <tr>
                
                    <th>Id</th>
                    <th>Username</th>
                   
                </tr>
            </thead>
            <tbody>
                <?php

if($select_accounts->rowCount() > 0){
    while($fetch_accounts = $select_accounts->fetch(PDO::FETCH_ASSOC)){ 
                ?>
                        <tr>
                            <td><?= $fetch_accounts['id']; ?></td>
                            <td><?= $fetch_accounts['name']; ?></td>
                      
                       


                        </tr>
                <?php
                    }
                } else {
                    echo '<p class="empty">no orders placed yet!</p>';
                }
                ?>

            </tbody>
        </table>
    </div>
</div>

</section>









    <script src="../js/admin_script.js"></script>


    <script>
        $(document).ready(function() {
            $('.example').DataTable({
            dom: 'Bfrtip',
            language: {
			searchPlaceholder: 'search...',
			sSearch: '',
			lengthMenu: '_MENU_',
		} ,exportOptions: {
            columns: ':visible:not(.not-exported)',
            rows: ':visible',
            stripHtml: false
        },
        buttons: [
            {
                extend: 'pdf',
                text: 'pdf',
                columns: ':gt(0)'
            },
        ],
        });
            


        })
    </script>
    <script>

    </script>
</body>

</html>