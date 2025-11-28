<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projeto site Treinaki</title>
    <link rel="stylesheet" href="styles.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Viaoda+Libre&display=swap" rel="stylesheet">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&family=Karla:ital,wght@0,200..800;1,200..800&family=Viaoda+Libre&display=swap" rel="stylesheet">





</head>
<body>
    <div class="barra">
        <p class="logo">Treinaki</p>
        <div id="teste"></div>
        <p class="procure_academias_barra">Procure Academias</p>
        <p class="listas_de_treinos">Listas de Treinos</p>
        <p class="produtos">Produtos</p>
        <p class="suporte">Suporte</p>
        <div class="login">
            <p>Login/Cadastrar</p>
        </div>

    </div>

    
<main>
</main>
    <script src="script.js"></script>
</body>
</html>


CSS

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.barra{
  background-color: #06090C;
  display: flex;
  align-items: center;
  

}

#teste {
  width: 50px;
  height: 50px;
  background-color: red;
  position: absolute;
  right: 100px;
  top: 300px  ;
}

p {
  margin-right: 28px;
}

P:hover {
  border-bottom: 2px solid white;
}

.logo{
font-family: "Viaoda Libre", serif;
font-weight: 400;
font-style: normal;
color: white;
padding: 2%;
font-size: 32px;
border-radius: 2px 5px #f1f1f1;

}
.procure_academias_barra{
color: white;
font-family: "Arvo", serif;
font-size: 16px;
}
.listas_de_treinos{
color: white;
font-family: "Arvo", serif;
font-size: 16px;
position: absolute;
left: 370px

}

.produtos{
  color: white;
  font-family: "Arvo", serif;
  font-size: 16px;
  position: absolute;
  left: 540px;
}

.suporte{
  color: white;
  font-family: "Arvo", serif;
  font-size: 16px;
  position: absolute;
  left: 650px;
}

.login {
  width: 200px;
  height: 30px;
  background-color: #8FC84B;
  border-radius: 15px;
  position: absolute;
  right: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login > p {
  margin: 0;
}


body{
  background-color: #090C11;
}
