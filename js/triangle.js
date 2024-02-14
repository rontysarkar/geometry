function calCulateTriangle() {
  const base = parseFloat(document.getElementById("triangle-base").value);

  const hight = parseFloat(document.getElementById("taiangle-hight").value);

  const Area = 0.5 * base * hight;
  const triangleArea = document.getElementById("triangle-area");
  triangleArea.innerText = Area;
}

function calCulateRectangle() {
  const width = parseFloat(document.getElementById("ractangle-width").value);

  const langth = parseFloat(document.getElementById("rectangle-langth").value);

  const Area = width * langth;

  const rectangleArea = document.getElementById("rectangle-area");
  rectangleArea.innerText = Area;
}

function calculateParallelogram() {
  const base = parseFloat(document.getElementById("parallelogram-base").value);
  const hight = parseFloat(
    document.getElementById("parallelogram-hight").value
  );
  const Area = base * hight;

  const parallelogramArea = document.getElementById("parallelogram-area");
  parallelogramArea.innerText = Area;
}

function calCulateRhombus() {
  const d1 = parseFloat(document.getElementById("rhombus-d1").value);
  const d2 = parseFloat(document.getElementById("rhombus-d2").value);
  const Area = 0.5 * d1 * d2;
  document.getElementById('rhombus-area').innerText = Area;

  
}
