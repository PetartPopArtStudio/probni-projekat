<!DOCTYPE html>
<?php include 'connection.php';
?>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.scss">
    <title>Document</title>
</head>

<body>

    <div class="loader"></div>

    <form name="forma" class="forma" action="unos.php" method="post">
        <label class="forma__label"> Unos novog Studenta:</label>
        <input class="field forma__input" type="text" id="fime" name="fime" placeholder="Ime"><br><br>
        <input class="field forma__input" type="text" id="fprezime" name="fprezime" placeholder="Prezime"> <br><br>
        <input class="field forma__input" type="text" id="fprosek" name="fprosek" placeholder="Prosek"><br><br>
        <input type="submit" class="forma__btnsubmit" value="Submit">
    </form>
    <ul class="parent studenti">
        <?php
        $students = $result->fetchAll();
        foreach ($students as $student) { ?>
            <li class="studenti__list">
                <ul class="studenti__list-student">
                    <li>Broj Indeksa: <span class="studentId"><?php echo $student['broj_indeksa']; ?> </span></li>
                    <li>Ime: <?php echo $student['ime']; ?></li>
                    <li>Prezime: <?php echo $student['prezime']; ?> </li>
                    <li>Prosek: <?php echo $student['prosek']; ?></li>
                    <input type="button" class="deleteButton studenti__list-student--btn" name="brisanje" value="Delete" onsubmit="deleteEntity()"></input>
                </ul>
            </li>
        <?php }
        ?>

    </ul>

    <br>


    <?php $conn = null; ?>

</body>
<script src="CRUD.js"></script>
<script src="delete.js"></script>

</html>