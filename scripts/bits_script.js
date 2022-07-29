function teste(radio){
    //alert(radio.value)
    //alert(radio.type)
    if(radio.type == "radio"){
        document.getElementById(radio.name).innerHTML = radio.value
    } else{
        var bits = '';
        var marcados = document.querySelectorAll('input[name=' + radio.name + ']');
        
       console.log(marcados[1].checked)
       for(i = 0; i < marcados.length; i++){
            if(marcados[i].checked){
                bits += '1';
            }
            else{
                bits += '0';
            }
        }
        console.log(bits)
        document.getElementById(radio.name).innerHTML = bits;
    }
    atualizar_instrucao();
    
}

function c_reg(){
    var select = document.getElementById('c_reg_select')
    var bits = '';
    if(document.getElementById('enc').checked){
        bits += '1';
    } else{
        bits += '0';
    }
    bits += select.options[select.selectedIndex].value;
    document.getElementById('c_reg').innerHTML = bits;
    atualizar_instrucao();
}

function reg_select(select){
    document.getElementById(select.name).innerHTML = select.options[select.selectedIndex].value;

}

function endereco(input){
    var value = input.value;
    if(value > 127){
        value = 127;
        input.value = value
    } else if(value > 127){
        value = 0;
        input.value = value
    }

    document.getElementById('addr').innerHTML = (value >>> 0).toString(2)
    atualizar_instrucao()
    
}

function atualizar_instrucao(){
    var bits = '';
    bits += document.getElementById('amux').innerHTML
    bits += document.getElementById('cond').innerHTML
    bits += document.getElementById('alu').innerHTML
    bits += document.getElementById('sh').innerHTML
    bits += document.getElementById('memoria').innerHTML
    bits += document.getElementById('c_reg').innerHTML
    bits += document.getElementById('a_reg').innerHTML
    bits += document.getElementById('b_reg').innerHTML
    bits += document.getElementById('addr').innerHTML

    document.getElementById('instrucao').innerHTML = bits;
}

function menu_height(){
    var height = document.getElementById("head").offsetHeight;
    document.getElementById("main").style.marginTop = height + 'px';
    atualizar_instrucao();
}

window.onload = menu_height;