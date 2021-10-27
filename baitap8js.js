function getBaiTap1() {
    document.getElementById("cake1").value = "";
    let number = Number(document.getElementById('bt1').value);

    for (i = 1 ; i <= number; i++) {
        let counter = 0;
        for (j = 2 ; j <= i / 2 ; j++) {
            if (i % j == 0 ){
                counter++;
                break;
            
            }
        }
        if ( counter == 0 && i != 1){
            document.getElementById("cake1").value += i + ",";
        }
    }

}

function getBaiTap2() {
    document.getElementById("cake2").value = "";
    let number = Number(document.getElementById('bt2').value);
    document.getElementById("cake2").value = (number * (number + 1)) / 2;
}

function getBaiTap3() { 
    document.getElementById("cake3").value = "";
    let number = Number(document.getElementById('bt3').value);
    let Total = 0;
    for (i = 1 ; i<= number;i++){
        Total += i * i;
    }
    document.getElementById("cake3").value = Total;
}

function getBaiTap4() { 
    document.getElementById("cake4").value = "";
    let number = Number(document.getElementById('bt4').value);
    let Total = 0;
    for (i = 1 ; i<= number;i+=2){
        Total += i;
    }
    document.getElementById("cake4").value = Total;
}

function getBaiTap5() { 
    document.getElementById("cake5").value = "";
    let number = Number(document.getElementById('bt5').value);
    
    for (i = 0 ;i< number.length;i++){
        if (number[i] % 2 == 0){
            document.getElementById("cake5") = "No";
            return;
        };
    }
    document.getElementById("cake5").value = "yes";
}