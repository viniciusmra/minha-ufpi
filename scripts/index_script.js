function myFunction(){
    let x = document.getElementById("input1").value;
    if(x != ""){

        fHorario = formatarHorario(x.toUpperCase());
        if(fHorario == null){
            alert("Horário inválido")
        }
        document.getElementById("result").innerHTML  = fHorario;
        //alert(x.charAt(0));
    }
}

function formatarHorario(rHorario) {
    splitHorario = rHorario.split(" ");
    var msg = "";
    for(var i = 0; i < splitHorario.length; i++) {
        if(splitHorario[i].indexOf("M") > 0){
            var horarioZero = 5;
            var indiceTurno = splitHorario[i].indexOf("M");
        } else if(splitHorario[i].indexOf("T") > 0){
            var horarioZero = 11;
            var indiceTurno = splitHorario[i].indexOf("T");
        } else if(splitHorario[i].indexOf("N") > 0){
            var horarioZero = 17;
            var indiceTurno = splitHorario[i].indexOf("N");
        }else{
            return null; // A entrada é inválida
        }
        
        for(var j = 0; j < indiceTurno; j++) {
            switch (splitHorario[i].charAt(j)) {
            case '1':
                msg += "domingo";
                break;
            case '2':
                msg += "segunda";
                break;
            case '3':
                msg += "terça";
                break;
            case '4':
                msg += "quarta";
                break;
            case '5':
                msg += "quinta";
                break;
            case '6':
                msg += "sexta";
                break;
            case '7':
                msg += "sábado";
                break;
            }
            if((j+2 < indiceTurno) || (j+1 == indiceTurno)) {
                msg += ", ";
            } else if(j+1 < indiceTurno) {
                msg += " e ";
            }
        }

            // horarios
        if(splitHorario[i].length > indiceTurno + 1) {
            var nHorario; 
            msg += "das ";
            for(var j = indiceTurno + 1; j < splitHorario[i].length; j++) {
                if(j == indiceTurno+1) {
                    nHorario = horarioZero + parseInt(splitHorario[i].charAt(j));
                    msg += nHorario;
                    msg += ":00 às ";
                } else if(j == splitHorario[i].length-1) {
                    nHorario = horarioZero + 1 + parseInt(splitHorario[i].charAt(j));
                    msg+= nHorario;
                    msg += ":00";
                }
                //msg += splitHorario[i].charAt(j);
            }
        }
        msg  = msg.charAt(0).toUpperCase() + msg.slice(1);
        msg += " horas. "


        //return "teste";
        //alert(splitHorario[i]);
    }
    return msg;
    
}