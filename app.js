
let daily = document.getElementById('daily')
let weekly = document.getElementById('weekly')
let monthly = document.getElementById('monthly')
let list = document.querySelectorAll('.list')

// grabbing current and previous dom nodes
let currentWork = document.getElementById('currentWork')
let prevWork = document.getElementById('prevWork')

let currentPlay = document.getElementById('currentPlay')
let prevPlay = document.getElementById('prevPlay')

let currentStudy = document.getElementById('currentStudy')
let prevStudy = document.getElementById('prevStudy')

let currentExercise = document.getElementById('currentExercise')
let prevExercise = document.getElementById('prevExercise')

let currentSocial = document.getElementById('currentSocial')
let prevSocial = document.getElementById('prevSocial')

let currentSelf = document.getElementById('currentSelf')
let prevSelf = document.getElementById('prevSelf')

list.forEach(item => {
    item.addEventListener('click', e => {
        // targeting each id
        if(e.target.id === 'daily') {
            daily.style.opacity = 1;
            weekly.style.opacity = 0.6;
            monthly.style.opacity = 0.6;

            currentWork.innerHTML = '5hrs'
            prevWork.innerHTML = 'Last Week-7hrs'

            currentPlay.innerHTML = '1hrs'
            prevPlay.innerHTML = 'Last Week-2hrs'

            currentStudy.innerHTML = '0hrs'
            prevStudy.innerHTML = 'Last Week-1hrs'
            
            currentExercise.innerHTML = '1hrs'
            prevExercise.innerHTML = 'Last Week-1hrs'
            
            currentSocial.innerHTML = '1hrs'
            prevSocial.innerHTML = 'Last Week-3hrs'

            currentSelf.innerHTML = '0hrs'
            prevSelf.innerHTML = 'Last Week-1hrs'
        } else if (e.target.id === 'weekly') {
            daily.style.opacity = 0.6;
            weekly.style.opacity = 1;
            monthly.style.opacity = 0.6;

            currentWork.innerHTML = '32hrs'
            prevWork.innerHTML = 'Last Week-36hrs'
            
            currentPlay.innerHTML = '10hrs'
            prevPlay.innerHTML = 'Last Week-8hrs'

            currentStudy.innerHTML = '4hrs'
            prevStudy.innerHTML = 'Last Week-7hrs'

            currentExercise.innerHTML = '4hrs'
            prevExercise.innerHTML = 'Last Week-5hrs'

            currentSocial.innerHTML = '5hrs'
            prevSocial.innerHTML = 'Last Week-10hrs'

            currentSelf.innerHTML = '2hrs'
            prevSelf.innerHTML = 'Last Week-2hrs'
        } else if (e.target.id === 'monthly') {
            daily.style.opacity = 0.6;
            weekly.style.opacity = 0.6;
            monthly.style.opacity = 1;

            currentWork.innerHTML = '103hrs'
            prevWork.innerHTML = 'Last Week-128hrs'

            currentPlay.innerHTML = '23hrs'
            prevPlay.innerHTML = 'Last Week-29hrs'

            currentStudy.innerHTML = '13hrs'
            prevStudy.innerHTML = 'Last Week-19hrs'

            currentExercise.innerHTML = '11hrs'
            prevExercise.innerHTML = 'Last Week-18hrs'

            currentSocial.innerHTML = '21hrs'
            prevSocial.innerHTML = 'Last Week-23hrs'

            currentSelf.innerHTML = '7hrs'
            prevSelf.innerHTML = 'Last Week-11hrs'
        }
    })
})

