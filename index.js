const yargs=require('yargs');
const _ =require('lodash');
var notes=require('./notes.js');

const argv=yargs
.command('add','Adds a Movie name',{
movie:{
  description:'movie of Movie',
  demand:true,
  alias:'t'
},
cast:{
  description:'Cast of Movie',
  demand:true,
  alias:'b'
}
})
.command('getmoviecast','Prints who are acting in movie movie',{
  movie:{
    description:'Give movie of movie to fetch cast',
    demand:true
  }
})
.command('listall','List all the movies in record',{
})
.command('remove','Removes a movie from record by its movie name',{
  movie:{
    description:'give --movie="moviename" to remove that movie from record',
    demand:true
  }
})
.command('deleteall','It will delete your file record permanently')
.help()
.argv;

var command=argv._[0];

if (command==='add') {
  notes.addNote(argv.movie,argv.cast);
}
else if (command==='getmoviecast') {
  notes.getmoviecast(argv.movie);
}
else if (command==='listall') {
  notes.listall();
}
else if (command==='remove') {
  notes.removeNote(argv.movie);
}
else if(command==='deleteall'){
  notes.deleteall();
}
else{
  console.log('command not found');
}
