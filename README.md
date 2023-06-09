# Ecommerce
Frontend HTML CSS JS
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        @keyframes opacity-1 {
            0%   {opacity: 1;}
            25%  {opacity: 0.75;}
            50%  {opacity: 0.55;}
            75%  {opacity: 0.25;}
            100% {opacity: 0;}
        }

        @keyframes position-1 {
            0%   {right: 0; bottom: 0;}
            25%  {right: 140px; bottom: 120px;}
            50%  {right: 160px; bottom: 230px;}
            75%  {right: 280px; bottom: 340px;}
            100% {right: 390px; bottom: 445px;}
        }

        @keyframes position-2 {
            0%   {right: 0; bottom: 0;}
            25%  {right: -40px; bottom: 120px;}
            50%  {right: -60px; bottom: 200px;}
            75%  {right: -80px; bottom: 240px;}
            100% {right: -90px; bottom: 345px;}
        }

        @keyframes position-3 {
            0%   {right: 0; bottom: 0;}
            25%  {right: 70px; bottom: 120px;}
            50%  {right: 140px; bottom: 200px;}
            75%  {right: 240px; bottom: 300px;}
            100% {right: 290px; bottom: 405px;}
        }

        @keyframes position-4 {
            0%   {right: 0; bottom: 0;}
            25%  {right: 50px; bottom: 120px;}
            50%  {right: 100px; bottom: 200px;}
            75%  {right: 150px; bottom: 300px;}
            100% {right: 290px; bottom: 405px;}
        }

        @keyframes position-5 {
            0%   {right: 0; bottom: 0;}
            25%  {right: -50px; bottom: 120px;}
            50%  {right: -70px; bottom: 200px;}
            75%  {right: -80px; bottom: 300px;}
            100% {right: -100px; bottom: 355px;}
        }

        @keyframes position-6 {
            0%   {right: 0; bottom: 0;}
            25%  {right: 50px; bottom: 120px;}
            50%  {right: 170px; bottom: 200px;}
            75%  {right: 380px; bottom: 300px;}
            100% {right: 500px; bottom: 355px;}
        }

        .reactions{
            display: flex;
            position: absolute;
            bottom: 40px;
            right: 200px;
            gap:10px;
            overflow: visible;
        }

        .reactions .reaction{
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            cursor: pointer;
        }

        .reactions .reaction .inner{
            position: absolute;
            right: 16px;
            bottom: 32px;
        }

        .reactions .reaction .inner.hihi1{
            animation: opacity-1 4s linear 0s 1 normal forwards, position-1 5s linear;
        }
        .reactions .reaction .inner.hihi2{
            animation: opacity-1 4s linear 0s 1 normal forwards, position-2 5s linear;
        }

        .reactions .reaction .inner.hihi3{
            animation: opacity-1 4s linear 0s 1 normal forwards, position-3 5s linear;
        }
        .reactions .reaction .inner.hihi4{
            animation: opacity-1 4s linear 0s 1 normal forwards, position-4 5s linear;
        }

        .reactions .reaction .inner.hihi5{
            animation: opacity-1 4s linear 0s 1 normal forwards, position-5 5s linear;
        }

        .reactions .reaction .inner.hihi6{
            animation: opacity-1 4s linear 0s 1 normal forwards, position-6 5s linear;
        }


    </style>
</head>
<body>
    <div style="position: absolute; inset: 0;background-color: wheat;">
        <div class="reactions">
            <div class="reaction" style="height: 32px; width: 32px;" onclick="handleClick(event, 'L')" id="reaction-l">
                <div class="hihi">L</div>
                <!-- <div class="hihi inner" style="position: absolute;">L</div> -->
            </div>
            <div class="reaction" style="height: 32px; width: 32px;" onclick="handleClick(event, 'H')">
                <div>H</div>
            </div>
            <div class="reaction" style="height: 32px; width: 32px;" onclick="handleClick(event, 'A')">
                <div>A</div>
            </div>
            <div class="reaction" style="height: 32px; width: 32px;" onclick="handleClick(event, 'LO')">
                <div>LO</div>
            </div>
            <div class="reaction" style="height: 32px; width: 32px;" onclick="handleClick(event, 'C')">
                <div>C</div>
            </div>
        </div>
    </div>
    <script>
        function handleClick(event, digit){
            const para = document.createElement("div");
            var a = Math.floor(Math.random() * 6) + 1;
            para.classList.add(`hihi${a}`, "inner");
            para.innerText = digit;
            event.target.closest('.reaction').appendChild(para);
            setTimeout(() => {
                para.remove();
            }, 5000)
        }
    </script>
</body>
</html>
```
