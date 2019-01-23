<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <link rel="shortcut icon" href="./img/favicon.ico" type="image/vnd.microsoft.icon">
    <title>HAL MS PROJECT</title>
    <script type="text/javascript" src="./js/jquery-2.0.3.min.js"></script>
    <style type="text/css">

html, body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: black;
}

#slider {
  position: relative;
}

#slider ul {
  position: relative;
  margin: 0;
  padding: 0;
}

#slider ul li {
  position: relative;
  display: block;
  float: left;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background:linear-gradient(#243949,#243949,#243949,#1e3c72);
  text-align: center;
  line-height: 100vh;
}

    </style>
</head>

<body>

<audio id="bgm" src="../sound/yuttari.mp3" autoplay=""></audio>

<?php

function getFileList($dir) {
    $files = scandir($dir);
    $files = array_filter($files, function ($file) {
        return !in_array($file, array('.', '..', 'sample.json', '.DS_Store'));
    });
    return $files;
}

$search_dir = __DIR__."/json";
$list = getFileList($search_dir);
// print_r($list);

$count = 0;
if(!empty($list)) { ?>
    <div id="slider">
        <a href="#" class="control_next"></a>
        <a href="#" class="control_prev"></a>
        <ul>
        <?php foreach ($list as $value) { $i = str_replace('.json', '', $value); $count++; ?>
            <li><a id=<?php echo "btn".$count ?> href="#"><img src="./capture/<?php echo $i; ?>.png" name="<?php echo $i; ?>"></a></li>
        <?php } ?>
        </ul>
    </div>
<?php } else {
?>
<p>存在しない</p>
<?php } ?>

<h1 style="position: relative; top: 0; left: 0"></h1>

<script type="text/javascript">

let count = 1;
const max_count = <?php echo $count ?>;
let target = document.getElementById('btn1');
 
$(document).ready(function ($) {

    setInterval(function () {
        moveRight();
        if ( max_count == count) {
            count = 0;
        }
        count++;
        target = document.getElementById('btn' + count);
    }, 2000);

    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider').css({ width: slideWidth, height: slideHeight });
    
    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});

// clickカウントによる発火
const delay = 300;
let clickCount = 0;
window.addEventListener("keydown", handleKeydown);
function handleKeydown(event){
    if (event["key"] == "Enter") {
        clickCount++;
        setTimeout(function () {
            if ( clickCount == 1 ) {
                document.location.href = "./htmls/title.html";
            } else {
                document.location.href = "http://localhost:8080/work/hal-ms-project/htmls/main.html?name=" + target.firstChild.name;
            }
            clickCount = 0;
        }, delay);
    }
}

</script>

</body>
</html>