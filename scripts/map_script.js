var preColors = ["#e9476f","#ea7194"];
var concludedSubjects = [];
var availableSubjects = [];
var availableSubjectsSchedule = [];


function load() {
    var maxSemester = 0;
    for (var i = 0; i < cursos[0].disciplinas.length; i++) {
        if (cursos[0].disciplinas[i].periodo > maxSemester) {
            maxSemester = cursos[0].disciplinas[i].periodo;
        };
    }
    var divCurriculum = document.getElementById("content-divCurriculum");
    for (var i = 1; i <= maxSemester; i++) {
        //Crio uma linha
        var row = document.createElement('div');  // Create new row
        row.classList.add("content-divCurriculum-row")

        
        // Crio a div que vai receber o cartão referente ao período
        let divRowSemester = document.createElement('div');
        divRowSemester.classList.add("content-divCurriculum-row-divSemester")
        row.appendChild(divRowSemester);

        // crio o cartão do período
        var card = document.createElement('div'); // Create a new cell
        card.innerHTML = `<span>${i}º período</span>`; //Set some thing
        card.className = "card semester";
        card.id = i;
        card.draggable = true
        divRowSemester.appendChild(card)
        
        // crio a div que vai receber os cartões das disciplinas
        let divSubjects = document.createElement('div');
        divSubjects.classList.add("content-divCurriculum-row-divSubject")
        row.appendChild(divSubjects)

        for (var j = 0; j < cursos[0].disciplinas.length; j++) {
            if(cursos[0].disciplinas[j].periodo == i){
                let card = document.createElement('div');
                let subjectTitle = cursos[0].disciplinas[j].nome;
                let subjectCode = cursos[0].disciplinas[j].codigo;
                let schedule = cursos[0].disciplinas[j].schedule;
                let ch = cursos[0].disciplinas[j].cargaHoraria;
                //let pR = formatPrerequisites(code);
                card.innerHTML = 
                `<div class="subject-container">
                    <div class="subject-container-top">${subjectCode} - OBRIGATÓRIA</div>
                    <div class="subject-container-center">${subjectTitle}</div>
                    <div class="subject-container-bottom"></div>  
                </div>`
                card.draggable = true
                
                    /*"<div class=\"container\">" +
                    "<div class=\"top\"><span>" + code + "</span><span class=\"schedule\" id=\""+ code +"schedule\">" + schedule + "</span><span>"+ ch + "h</span></div>" +
                    "<div class=\"center\">"+ nome + "</div>" +
                    "<div class=\"bottom\">"+ pR +"</div></div>"
                    */
                card.className = "card subject";
                card.id = subjectCode;
                card.setAttribute("onmouseover","cellMouseHover(this)");
                card.setAttribute("onmouseout","cellMouseOut(this)");
                card.setAttribute("onclick","cellClick(this)");
                divSubjects.appendChild(card);
            }
        }

        divCurriculum.appendChild(row); //Add it to row
    }
    setDragAndDrop();
    checkAvailables();
}

function cellMouseHover(element){
    var code = element.id;
    showPrerequisites(code);
}
function showPrerequisites(code){
    var subject = getSubject(code);
    if(subject != null){
        for(var i = 0; i < subject.preRequisitos.length; i++){
            cell = document.getElementById(subject.preRequisitos[i]);
            if(cell != null){
                if(concludedSubjects.indexOf(getSubject(subject.preRequisitos[i])) < 0){
                    cell.style.background = "#e9476f";
                }else{
                    cell.style.background = "#1eaf7b";
                }
                
            }
            //document.getElementById(subject.preRequisitos[i]).style.background = "#e9476f";
            //showPrerequisites(subject.preRequisitos[i]);
        }
    }
}

function cellMouseOut(element){
    var code = element.id;
    hidePrerequisites(code);
    checkAvailables();
}
function hidePrerequisites(code){
    var subject = getSubject(code);
    if(subject != null){
        for(var i = 0; i < subject.preRequisitos.length; i++){
            if(concludedSubjects.indexOf(getSubject(subject.preRequisitos[i])) < 0){
                document.getElementById(subject.preRequisitos[i]).style.background="";
            } else{
                document.getElementById(subject.preRequisitos[i]).style.background="#06d6a0";
            }
        }
    }
}

function cellClick(element){
    if(concludedSubjects.indexOf(getSubject(element.id)) < 0){
        //alert(element.style.background)
        element.style.background = "#06d6a0";
        //uncheckSchedule(getSubject(element.id));
        concludedSubjects.push(getSubject(element.id));
    } else{
        //alert("out")
        element.style.background = "#457b9d";
        concludedSubjects.splice(concludedSubjects.indexOf(getSubject(element.id)),1);
    }
    //alert(concludedSubjects.length);
    checkAvailables();
}

// Percorre a lista de disciplinas desbloqueadas e muda a cor das disciplinas disponíveis
function checkAvailables() {
    availableSubjects = [];
    for (var i = 0; i < cursos[0].disciplinas.length; i++) {
        var subject = cursos[0].disciplinas[i];
        if (concludedSubjects.indexOf(subject) < 0) {
            var flag = true;
            for (var j = 0; j < subject.preRequisitos.length; j++) {
                if (concludedSubjects.indexOf(getSubject(subject.preRequisitos[j])) < 0) {
                    flag = false;
                }
            }
            // Se todos os pre-requisitos ja foram concluidos
            if (flag) {
                document.getElementById(subject.codigo).style.background = "#118ab2"
                //checkSchedule(subject);
                availableSubjects.push(subject);
            
            // Se falta algum dos prre-requisitos não tiver sido concluido
            } else {
                document.getElementById(subject.codigo).style.background = "#457b9d"
                //uncheckSchedule(subject);
            }
        }
    }
    //checkSchedule();
    
}

window.onload = load;

// Essa funÃ§Ã£o recebe um cÃ³digo de disciplina e retorna a disciplina
function getSubject(code){
    for(var i = 0; i < cursos[0].disciplinas.length; i++){
        if(cursos[0].disciplinas[i].codigo == code){
            return cursos[0].disciplinas[i];
        }
    }
    return null;
}

// Essa funÃ§Ã£o recebe o cÃ³digo de uma disciplina e retorna uma string
// com seus prerequisitos formatados
function formatPrerequisites(code){
    var subject = getSubject(code);
    var formatted = "";
    if(subject != null){
        if(subject.preRequisitos.length > 0){
            for(var i = 0; i < subject.preRequisitos.length; i++){
                if(i == 0){
                    formatted = subject.preRequisitos[i];
                } else{
                    formatted = formatted + "; " + subject.preRequisitos[i];
                }
            }
        }
        return formatted;
    } else{
        return null
    }
}

function showPosrequisites(code){
    var pos = [];
    for(var i = 0; i < cursos[0].disciplinas.length; i++){
        for(var j = 0; j < cursos[0].disciplinas[i].preRequisitos.length; j++){
            if(cursos[0].disciplinas[i].preRequisitos[j] == code){
                //console.log(cursos[0].disciplinas[i].codigo)
                pos.push(cursos[0].disciplinas[i].codigo);
            }
        }
    }
    //pos
    for(var i = 0; i < pos.length; i++){
        document.getElementById(pos[i]).style.background="#329F5B";
        showPosrequisites(pos[i]);
    }
}

function preRequisitesClick(element){
    element.style.background="red";
    document.getElementById(unblockedButon).style.background = "";
}
function AvailableClick(element){
    element.style.background="blue";
    document.getElementById(preRequisiteButton).style.background = "";
}
function checkSchedule(){
    for(var i = 0; i < concludedSubjects.length; i++){
        document.getElementById(concludedSubjects[i].codigo + "schedule").style.background = "";
    }
    
    var flag;
    console.log(availableSubjects);
    for (var i = 0; i < cursos[0].disciplinas.length; i++) {
        flag = true;
        for (var j = 0; j < availableSubjects.length; j++) {
            //if (availableSubjects[j].schedule != "" && cursos[0].disciplinas[i].schedule != "") {
                if (cursos[0].disciplinas[i].codigo == availableSubjects[j].codigo) {
                    flag = false
                }
            //}
        }
        if(flag){
            document.getElementById(cursos[0].disciplinas[i].codigo + "schedule").style.background = "";
        }
    }
    var flag;
    for(var i = 0; i < availableSubjects.length; i++){
        flag = true;
        for(var j = 0; j < availableSubjects.length; j++){
            if(availableSubjects[i].schedule != "" && availableSubjects[j].schedule != "" && i != j){
                if(availableSubjects[i].schedule == availableSubjects[j].schedule){
                    flag = false;
                    document.getElementById(availableSubjects[i].codigo + "schedule").style.background = "#fca311";
                    document.getElementById(availableSubjects[j].codigo + "schedule").style.background = "#fca311";
                }
            }
        }
        if(flag){
            document.getElementById(availableSubjects[i].codigo + "schedule").style.background = "";
        }
    }
}

function uncheckSchedule(subject){
    var flag;
    for(var i = 0; i < availableSubjects.length; i++){
        
        if(availableSubjects[i].schedule != "" && subject.schedule != ""){
            if(availableSubjects[i].schedule == subject.schedule){

                document.getElementById(subject.codigo + "schedule").style.background = ""
                document.getElementById(availableSubjects[i].codigo + "schedule").style.background = ""
            }
        }
    }

}
function setDragAndDrop(){
    const draggables = document.querySelectorAll(".subject")
    const containers = document.querySelectorAll(".content-divCurriculum-row-divSubject")
    
    draggables.forEach(draggable =>{
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging')
            console.log("start") 
        })

        draggable.addEventListener('dragend', () =>{
            draggable.classList.remove('dragging')
        })
    })

    containers.forEach(container =>{
        container.addEventListener('dragover', e =>{
            const draggable = document.querySelector('.dragging')
            container.appendChild(draggable)
        })
    })
}


/*
let cars = [
    {
        "color": "purple",
        "type": "minivan",
        "registration": new Date('2017-01-03'),
        "capacity": 7
    },
    {
        "color": "red",
        "type": "station wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 5
    }];
//let teste = cursos.computacao.disciplinas;
let car = cars.find(car => car.color === "red");
console.log(cursos[0].disciplinas[0].nome); // output 'testing'

window.onload = load;
function trclick() {
    alert('tr clicked')

    var text = "40 horas";
    var table = document.getElementById("classTable");
    var row = document.createElement('tr'); //Create new cell
    var cell = document.createElement('td');
    cell.innerHTML = 'This is a new cell added' + text; //Set some thing
    row.appendChild(cell);
    table.appendChild(row); //Add it to row
    var row = document.createElement('tr'); //Create new cell
    var cell = document.createElement('td');
    cell.innerHTML = 'sdfdsfdf is a new cell added' + text; //Set some thing
    row.appendChild(cell);
    table.appendChild(row); //Add it to row
}*/
 //118ab2