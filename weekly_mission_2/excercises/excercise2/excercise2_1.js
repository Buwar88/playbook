const { convertDescriptorToString } = require("jest-util")

const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

explorers.forEach(explorers => console.log(explorers.name))

explorers.forEach(explorers => console.log(explorers.name +"-"+ explorers.stack))

console.log(explorers.map(nueva_lista => nueva_lista.stack))

console.log(explorers.filter(stack => stack.stack.includes('js')))

console.log(explorers.find(explorerCdmx => explorerCdmx.city ==='CDMX'))

console.log(explorers.reduce((acc, sumaExcercises) => acc + sumaExcercises.exercises_completed, 0))

const finish = explorers.some(finished => finished.missions.frontend.exercisesFinished === true)
console.log("En efecto, alguno de los explorer tiene sus ejercicios en frontend como " + finish)

const yesFinished = explorers.every((is_finished) => typeof is_finished.missions.onboarding.isFinished === true)
if (yesFinished == true){
  itsTrue = 'En efecto, todos lo terminaron'
  console.log(itsTrue) }
else{
  itsFalse = 'No, no todos terminaron el onboarding, alguno obtuvo false'
  console.log(itsFalse) }

