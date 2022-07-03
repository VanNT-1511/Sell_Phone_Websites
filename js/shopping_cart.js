function change_price(){
    var arrPrice = document.getElementsByName("price");
    var obj = document.getElementById("price_number");
    price_choose = obj.value;
    for(i = 0; i < arrPrice.length; i++){
        price = parseFloat(arrPrice[i].innerText);
        if (price < price_choose || price_choose == -1){
            arrPrice[i].parentNode.style.display = "";
        }else{
            arrPrice[i].parentNode.style.display = "none";
        }
    }
    all_money();
}
function checkbox_point(i){
    var arrNumber = document.getElementsByName("quantity");
    arrNumber[i].disabled = !arrNumber[i].disabled;
    if(arrNumber[i].disabled == true){
        arrNumber[i].value = 0;
        arrNumber[i].parentNode.nextElementSibling.innerText = "";
    }
    all_money();
}
function total_money(obj){
    var quantity = obj.value;
    var price = obj.parentNode.previousElementSibling.innerText;
    obj.parentNode.nextElementSibling.innerText = quantity * price;
    all_money();  
}
function all_money(){
    am = 0;
    var arrTotalPrice = document.getElementsByName("total_price");
    for(i = 0; i < arrTotalPrice.length; i++){
        if (arrTotalPrice[i].parentNode.style.display == ""){
            money = arrTotalPrice[i].innerText;
            am+=Number(money);
        }
    }
    document.getElementById("calculator").innerText = am;
}

let img_cart = document.querySelectorAll('td>img');
img_cart.forEach(function(item){
	item.onmouseover = function(){
		item.style.transform = "scale(2)";
	}
	item.onmouseout = function(){
		item.style = "";
	}
})