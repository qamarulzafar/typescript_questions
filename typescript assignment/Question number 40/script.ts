 //   question number 40 

// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.



interface albem{
    artist_name : string
    albem : string
    tracks? : number
}

function make_albem(artist_name: string , albem: string , tracks?:number): albem{
  const album : albem = {artist_name , albem}
  if (tracks !== undefined){
    album.tracks = tracks
  }
  return album;
}


const album1: albem = make_albem("Atif Aslam", "Jal Pari");
console.log(album1);

const album2: albem = make_albem("Atif Aslam", "doorie" , 44);
console.log(album2);

const album3: albem = make_albem("Atif Aslam", "mari_kahani" , 23);
console.log(album3);