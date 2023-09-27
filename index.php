<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <title>EjercicioWeb3</title>
</head>
<body>
  <div class="container">
    <p class="text_class"><strong>Calculo de Factorial</strong> </p>
    <form method="post">
      <div class="form-group">
        <label class="text_class" id="etiqueta_1">Numero:</label>
        <input type="number" class="input_class" id="numero" name="numero" />
			</div>      
      <button id="guardar" name="guardar" value="Calcular" onclick="validar()" class="btn btn-primary">Validar</button>
    </form>
    <script src="js/respuesta.js"></script>
  </div>
</body>
</html>