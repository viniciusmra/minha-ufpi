var preColors = ["#e9476f","#ea7194"];
var finishedSubjects = [];
var availableSubjects = [];
var semesters = []
var optatives = []
var availableSubjectsSchedule = [];

window.onload = load;

function load() {
    var maxSemester = 0;
    for (var i = 0; i < subjects.length; i++) {
        if(subjects[i].semester > maxSemester) {
            maxSemester = subjects[i].semester
        }
    }
    var content = document.getElementById("content");
    for (var i = 1; i <= maxSemester; i++) {
        semesters.push([])
        //Crio uma linha
        createRow(i)
    }
    createRow("OPTATIVAS")
    document.querySelector('.dialog-button').addEventListener('click', function() {
        
        document.querySelector('.dialog').close();
    });
    setDragAndDrop();
    checkAvailables();
    console.log(semesters)
}

function createRow(semester){
    var row = document.createElement('div');  // Create new row
    row.classList.add("content-row")

    // Crio a div que vai receber o cartão referente ao período
    let divRowSemester = document.createElement('div');
    divRowSemester.classList.add("content-row-divSemester")
    row.appendChild(divRowSemester);

    // crio o cartão do período
    var card = document.createElement('div'); // Create a new cell
    if(semester == "OPTATIVAS"){
        card.innerHTML = `<span>${semester}</span>`; //Set some thing
    } else{
        card.innerHTML = `<span>${semester}º período</span>`; //Set some thing
    }
    card.className = "card semester";
    card.id = semester;
    card.draggable = true
    divRowSemester.appendChild(card)
    
    // crio a div que vai receber os cartões das disciplinas
    let divSubjects = document.createElement('div');
    divSubjects.classList.add("content-row-divSubject")
    divSubjects.dataset.semester = semester
    row.appendChild(divSubjects)

    if(semester == "OPTATIVAS"){
        subjects.forEach(function(subject){
            if(subject.type == "OPTATIVA"){
                const card = createCard(subject, semester)
                divSubjects.appendChild(card);
            }

        })
    }else{
        for (var j = 0; j < subjects.length; j++) {
            if(subjects[j].semester == semester && subjects[j].type == "OBRIGATÓRIA"){
                const card = createCard(subjects[j], semester)
                divSubjects.appendChild(card);
            }
        }
    }
    

    content.appendChild(row); //Add it to row
}

function createCard(subject, semester){
    if(semester == "OPTATIVAS"){
        optatives.push(subject.code)
    } else{
        semesters[semester-1].push(subject.code)
    }
    
    const template = document.querySelector(".subject.template")

    let card = template.cloneNode(true)

    card.querySelector(".card-subject-code").innerHTML = subject.code
    card.querySelector(".card-subject-type").innerHTML = subject.type
    card.querySelector(".card-subject-name").innerHTML = subject.name
    card.querySelector(".card-subject-schedule").innerHTML = subject.schedule


    card.classList.add("card")
    card.classList.add("subject")
    card.classList.add("unfinished")
    card.classList.add("locked")
    card.classList.remove("template");
    card.dataset.semester = semester
    
    card.draggable = true;
    card.id = subject.code;

    card.addEventListener("mouseover", function() {
        const subject = getSubject(this.id)
        subject.prerequisites.forEach(function(prerequisite){
            const prerequisiteCard = document.getElementById(prerequisite)
            prerequisiteCard.classList.add("prerequisite")
        })
    })
    card.addEventListener("mouseout", function(event) {
        const subject = getSubject(this.id)
        subject.prerequisites.forEach(function(prerequisite){
            const prerequisiteCard = document.getElementById(prerequisite)
            prerequisiteCard.classList.remove("prerequisite")
        })
    })
    card.setAttribute("onclick","cellClick(this)");


    card.querySelector(".threedotsButton").classList.add("subject")
    card.querySelector(".threedotsButton").setAttribute("onclick","openDialog(event, this)")

    return card
    
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
            if(finishedSubjects.indexOf(getSubject(subject.prerequisites[i])) < 0){
                document.getElementById(subject.prerequisites[i]).style.background="";
            } else{
                document.getElementById(subject.prerequisites[i]).style.background="#06d6a0";
            }
        }
    }
}

function cellClick(element){
    const code = element.id
    if(finishedSubjects.includes(code)){
        element.classList.add('unfinished')
        element.classList.remove('finished')
        finishedSubjects.splice(finishedSubjects.indexOf(code),1);
    }else{
        element.classList.remove('unfinished')
        element.classList.add('finished')
        finishedSubjects.push(code);
    }
    checkAvailables();
}

// Percorre a lista de disciplinas desbloqueadas e muda a cor das disciplinas disponíveis
function checkAvailables() {
    availableSubjects = [];
    subjects.forEach(function(subject){
        let flag = true
        if(!finishedSubjects.includes(subject.code)){
            subject.prerequisites.forEach(function(prerequisite){
                if(!finishedSubjects.includes(prerequisite)){
                    flag = false
                }
            })
            const card = document.getElementById(`${subject.code}`)
            //se a flag == true, a disciplina está desbloqueado
            if(flag){  
                card.classList.remove("locked")
                card.classList.add("unlocked")
                availableSubjects.push(subject.code);
            } else{
                card.classList.add("locked")
                card.classList.remove("unlocked")
            }
        }
    })
    console.log(availableSubjects)   
}



// Essa funÃ§Ã£o recebe um cÃ³digo de disciplina e retorna a disciplina
function getSubject(code){
    for(var i = 0; i < subjects.length; i++){
        if(subjects[i].code == code){
            return subjects[i];
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
        if(subject.prerequisites.length > 0){
            for(var i = 0; i < subject.prerequisites.length; i++){
                if(i == 0){
                    formatted = subject.preRequisitos[i];
                } else{
                    formatted = formatted + "; " + subject.prerequisites[i];
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
    for(var i = 0; i < finishedSubjects.length; i++){
        document.getElementById(finishedSubjects[i].codigo + "schedule").style.background = "";
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
    const containers = document.querySelectorAll(".content-row-divSubject")
    
    draggables.forEach(draggable =>{
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging')
            const semesterNumber = draggable.dataset.semester
            console.log(semesters[semesterNumber-1])
            semesters[semesterNumber-1].splice(semesters[draggable.dataset.semester-1].indexOf(draggable.id),1)
        })

        draggable.addEventListener('dragend', () =>{
            draggable.classList.remove('dragging')
            const semesterNumber = draggable.dataset.semester
            semesters[semesterNumber-1].push(draggable.id)
            console.log(semesters)
        })
    })

    containers.forEach(container =>{
        container.addEventListener('dragover', e =>{
            e.preventDefault()
            const draggable = document.querySelector('.dragging')
            //
            container.appendChild(draggable)
            draggable.dataset.semester = container.dataset.semester
            //console.log()

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

 function openDialog(event, object){
    event.stopPropagation()
    if(object.classList.contains('subject')){
        const subject = getSubject(object.parentNode.parentNode.id)

        const dialog = document.querySelector(".subjectDialog")//document.createElement('dialog');
        dialog.querySelector('#title').innerHTML = subject.name

        dialog.querySelector('.subjectDialog-code').innerHTML = subject.code
        dialog.querySelector('.subjectDialog-type').innerHTML = subject.type
        dialog.querySelector('.subjectDialog-semester').innerHTML = subject.semester
        dialog.querySelector('.subjectDialog-prerequisites').innerHTML = subject.prerequisites
        dialog.querySelector('.subjectDialog-workload').innerHTML = subject.workload
        dialog.querySelector('.subjectDialog-schedule').innerHTML = subject.schedule
    


        dialog.showModal()

    } else{

    }


    
 }