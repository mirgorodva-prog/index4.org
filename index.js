document.addEventListener('DOMContentLoaded', function() {
    
    const btn = document.getElementById('btnGenerate');
    const resultDiv = document.getElementById('result');

    btn.addEventListener('click', function() {
        let inputVal = document.getElementById('userNumber').value;

       
        if (inputVal === "") {
            resultDiv.innerText = "Будь ласка, введіть число!";
            return;
        }

        let n = Number(inputVal);
        let table = "";

       
        for (let i = 1; i <= 10; i++) {
            let res = n * i;
          
            table += `${n} x ${i} = ${res}\n`;
        }

       
        resultDiv.innerText = table;
    });
});
