"use strict";
//   question number 40 
function make_albem(artist_name, albem, tracks) {
    const album = { artist_name, albem };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_albem("Atif Aslam", "Jal Pari");
console.log(album1);
const album2 = make_albem("Atif Aslam", "doorie", 44);
console.log(album2);
const album3 = make_albem("Atif Aslam", "mari_kahani", 23);
console.log(album3);
