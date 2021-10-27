let flag = true;
let n = 14;
if (n < 2) {
    flag = false;
} else if (n === 2) {
    flag = true;
} else if (n % 2 === 0) {
    flag = false;

}else{
    for (let index = 3 ; index <= n /2 ; index += 2) {
        console.log('index',index);
        if(n % index === 0 ){
            flag = false;
            break;
        }
    }
}
if (flag == true) {
    console.log("N la so nguyen to");
} else {
    console.log("N ko phai la so nguyen to")
}

