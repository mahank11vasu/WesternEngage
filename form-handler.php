<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $number = $_POST["phone"];

    // Sanitize form data
    $name = filter_var($name, FILTER_SANITIZE_STRING);
    $number = filter_var($number, FILTER_SANITIZE_NUMBER_INT);

    // Validate form data
    if (empty($name) || empty($number)) {
        header("Location: index.html?status=fill");
        exit;
    }
    
    // Validate name
    if (!preg_match("/^[a-zA-Z ]*$/", $name)) 
    {
        header("Location: index.html?status=fill");
        exit;
    }

    // Validate phone number
    if (!preg_match("/^[0-9]*$/", $number)) 
    {
        header("Location: index.html?status=fill");
        exit;
    }
    
    // Send email
    $to = "westernengage@gmail.com";
    $subject = "New form submission";
    $message = "Name: $name\nNumber: $number";
    $headers = "From: visit@westernengage.com";

    if (mail($to, $subject, $message, $headers)) 
    {
        header("Location: index.html?status=success");
        exit;
    } 
    else 
    {
        header("Location: index.html?status=error");
        exit;
    }
}
?>



<?php
    $errors = array(); // initialize an array to store validation errors

    if($_SERVER["REQUEST_METHOD"] == "POST")
    {
        // Validate name
        if(empty($_POST["name"])) 
        {
            $errors[] = "Name is required.";
        } 
        else 
        {
            $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
            if(!preg_match("/^[a-zA-Z ]*$/", $name)) 
            {
                $errors[] = "Only letters and white space allowed in name.";
            }
        }

        // Validate email
        if(empty($_POST["email"]))
        {
            $errors[] = "Email is required.";
        } 
        else 
        {
            $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
            if(!filter_var($email, FILTER_VALIDATE_EMAIL))
            {
                $errors[] = "Invalid email format.";
            }
        }

        // Validate phone
        if(empty($_POST["phone"]))
        {
            $errors[] = "Phone number is required.";
        } 
        else 
        {
            $phone = filter_var($_POST["phone"], FILTER_SANITIZE_NUMBER_INT);
            if(!preg_match("/^[0-9]*$/", $phone))
            {
                $errors[] = "Invalid phone number format.";
            }
        }

        // Validate service selection
        if(empty($_POST["selection"]))
        {
            $errors[] = "Please select a service.";
        } 
        else 
        {
            $service = filter_var($_POST["selection"], FILTER_SANITIZE_STRING);
        }

        // Validate check-in date
        if(empty($_POST["checkin"]))
        {
            $errors[] = "Check-in date is required.";
        } 
        else 
        {
            $checkin = filter_var($_POST["checkin"], FILTER_SANITIZE_STRING);
        }

        // Validate check-out date
        if(empty($_POST["checkout"]))
        {
            $errors[] = "Check-out date is required.";
        } 
        else 
        {
            $checkout = filter_var($_POST["checkout"], FILTER_SANITIZE_STRING);
        }

        // Validate number of adults
        if(empty($_POST["adults"]))
        {
            $errors[] = "Number of adults is required.";
        } 
        else 
        {
            $adults = filter_var($_POST["adults"], FILTER_VALIDATE_INT);
            if($adults <= 0)
            {
                $errors[] = "Number of adults must be greater than zero.";
            }
        }

        // Validate number of children
        if(!empty($_POST["childs"]))
        {
            $childs = filter_var($_POST["childs"], FILTER_VALIDATE_INT);
            if($childs < 0)
            {
                $errors[] = "Number of children must be greater than or equal to zero.";
            }
        }

        // Validate number of rooms
        if(empty($_POST["rooms"]))
        {
            $errors[] = "Number of rooms is required.";
        } 
        else 
        {
            $rooms = filter_var($_POST["rooms"], FILTER_VALIDATE_INT);
            if($rooms <= 0)
            {
                $errors[] = "Number of rooms must be greater than zero.";
            }
        }

        // Validate comments
        if(!empty($_POST["comments"]))
        {
            $comments = filter_var($_POST["comments"], FILTER_SANITIZE_STRING);
        }

        // If there are errors, set them in a session variable and redirect back to form page
        if(!empty($errors))
        {
            $_SESSION["errors"] = $errors;
            header("Location: form.html");
            exit();
        }
        
        // If there are no errors, send the form data to the email address
        else 
        {
            // Format the email message
            $to = "westernengage@gmail.com";
            $subject = "New Reservation Request";
            $message = "Name: $name\n"
                . "Email: $email\n"
                . "Phone: $phone\n"
                . "Service: $service\n"
                . "Check-in: $checkin\n"
                . "Check-out: $checkout\n"
                . "Adults: $adults\n"
                . "Children: $childs\n"
                . "Rooms: $rooms\n"
                . "Comments: $comments\n";
            $headers = "From: visit@westernengage.com";

            // Send the email
            if(mail($to, $subject, $message, $headers))
            {
                // Set a success message in a session variable and redirect back to form page
                $_SESSION["success"] = "Reservation request sent successfully!";
                header("Location: form.html");
                exit();
            } 
            else 
            {
                // Set an error message in a session variable and redirect back to form page
                $_SESSION["error"] = "There was an error sending the reservation request. Please try again later.";
                header("Location: form.html");
                exit();
            }
        }
    }
?>