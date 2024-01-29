let outputvalue = document.getElementById("output");
function btn(num) {
  outputvalue.value += num;
}

function clearnumber() {
  outputvalue.value = "";
}
function delet() {
  outputvalue.value = outputvalue.value.slice(0, -1);
}
function calculate() {
  try {
    outputvalue.value = eval(outputvalue.value);
  } catch (error) {
    alert("invalid");
  }
}
