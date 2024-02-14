function calCualteEllipse() {
  const a = inputValue("ellipse-a");
  const b = inputValue("ellipse-b");
  const area = 3.1416 * a * b;
  setArea("ellipse-area", area);
}

function calCualtePantagon() {
  const p = inputValue("pantagon-p");
  const b = inputValue("pantagon-b");
  const area = 0.5 * p * b;
  setArea("pantagon-area", area);
}

function inputValue(inputId) {
  const inputText = document.getElementById(inputId);
  const inputValue = inputText.value;
  const value = parseFloat(inputValue);
  return value;
}

function setArea(setAreaId, area) {
  const setArea = document.getElementById(setAreaId);
  setArea.innerText = area;
  return setArea;
}
