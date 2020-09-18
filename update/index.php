<!DOCTYPE html>
<html lang="en">
<head>
  <title>File Update</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<link rel="stylesheet" type="text/css" href="../css/style.css">
<div>
  <H3 style='text-shadow: -1px 0 red, 0 1px red, 1px 0 red, 0 -1px red;color: white;'>UPDATEME</H3>
</div>
<div style="display:none"></div>
  <?php

    $url = "http://api.gameoftesla.com/v1/text/";
    $json = file_get_contents($url);
    $obj = json_decode($json);
    var_dump($json);

    $file = fopen("../json/Content.json", "w");
    fwrite($file, $json . PHP_EOL);
    fclose($file);

  ?>
</div>
</body>
</html>
