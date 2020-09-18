<?php
$init ="FALSE";
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>File Update url</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<link rel="stylesheet" type="text/css" href="../css/style.css">
<div>
  <H3 style='text-shadow: -1px 0 red, 0 1px red, 1px 0 red, 0 -1px red;color: white;'>UPDATE CONTENT URL</H3>
  <form id="formulario" action="index.php" method="post">
  url: <input type="text" name="url"><br>
  json list: <input type="text" name="jsonList"><br>
  <input type="submit">
  </form>
</div>

<div>
  <?php


    $url = $_POST["url"];
    $filename = $_POST["jsonList"];
    $json = file_get_contents($url);
    $obj = json_decode($json);

    //var_dump($json);

  if ($json == "") {
      echo "<p>Url sin contenido</p>";
  } else {
    $file = fopen("../json/".$filename.".json", "w");
    fwrite($file, $json . PHP_EOL);
    fclose($file);
    $files  = scandir("../json/");
     echo "<p>archivo ".$filename.".json almacenado en devla</p>";
  }
    $max = count($files);
    echo "<div name='ficheros' sytle='display:none'>\n";
    echo "<table>";
      for ($i = 0; $i < $max; $i++)
        {
          echo "<tr><td>{$files[$i]}</td></tr>";
        }
    echo "</table>";
    echo "</div>";

    echo "<div name='contenido' style='display:none'>\n";
    echo htmlspecialchars($json)."\n";
    echo "</div>";

  ?>
</div>

</body>
</html>
