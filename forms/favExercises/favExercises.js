var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercises.onshow=function(){
    selExercises.clear()   
 for (i = 0; i < exercises.length; i++) 
        selExercises.addItem(exercises[i])
}



btnDone.onclick=function(){
let message = ""
  for (i = 0; i < selExercises.text.length; i++)
     message = message + selExercises.text[i] + ", "
  if(message == "situps, plank, ")
    console.log("You chose situps and planks - those are the two core exercises.")
  else
    console.log(`You did not pick the two core exercises.`)
    }


btnNewForm3.onclick=function(){
  ChangeForm(mobileNav)
}

    

