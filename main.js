<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $grade1 = floatval($_POST['grade1']);
    $grade2 = floatval($_POST['grade2']);
    $grade3 = floatval($_POST['grade3']);
    $average = ($grade1 + $grade2 + $grade3) / 3;

    $message = $average <= 3.9 ? "Study" : "Scholarship";
    echo '<h2>Result:</h2>';
    echo '<p>' . $message . '</p>';
}
?>
