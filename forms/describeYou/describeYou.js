rdPersonality.onchange=function(){
    let userChoice = $("input[name=rdPersonality]:checked").prop("value")
   console.log(`I would agree that you are a ${userChoice} person too!`)
}

btnNewForm2.onclick=function(){
  ChangeForm(favExercises)
}