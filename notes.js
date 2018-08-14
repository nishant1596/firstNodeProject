const fs=require('fs');



// dealing with functions ()

function fetchDetails() {
  try {
    var fetchData=fs.readFileSync('notes-data.json');
    return JSON.parse(fetchData);
  } catch (e){
    return [];
  }
}

function saveNotes(notes){

  fs.writeFileSync('notes-data.json',JSON.stringify(notes).toLowerCase());
}

var addNote=(movie,cast)=>{
  var notes=[];
  var note={
    movie:movie,
    cast:cast
  };
  notes=fetchDetails();
var duplicate=notes.filter((note)=>note.movie===movie);
  if (duplicate.length===0) {
    notes.push(note);
    saveNotes(notes);
  }
};

//removing function
var removeNote = (movie) => {
  var notes=fetchDetails();
  var filteredData=notes.filter((note)=>note.movie!==movie);
  saveNotes(filteredData);
};
var listall=()=>{
  var notes=fetchDetails();
  for (var i = 0; i < notes.length; i++) {
    console.log(`Movie=> ${notes[i].movie} | Movie-Cast => ${notes[i].cast}`);
  }
}
var deleteall=()=>{
  fs.unlinkSync('./notes-data.json',()=>{
    console.log('deleted file');
  });
}
var getmoviecast=(movie)=>{
  var notes=fetchDetails();
  var filteredData=notes.filter((note)=>note.movie===movie);
  if(filteredData.length>0){
  console.log(`The cast for movie  ${filteredData[0].movie} is : ${filteredData[0].cast}`);
}
else{
  console.log('sorry, please try for another movie name');
}
}
module.exports={
  addNote,
  removeNote,
  listall,
  deleteall,
  getmoviecast
}
