
                                    //  qestion number 41 
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


let magician_name:string[] = ["Ahtisham" , "Kashan" , "Shayyan" ]
function show_magicians(magician_name:string[]){
      for(let i = 0 ; i < magician_name.length ; i++){
        console.log(magician_name[i])
      }
}

show_magicians(magician_name)