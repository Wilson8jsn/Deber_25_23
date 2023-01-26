let world = ['a', 'o','l', 'h'];
let aux = 0;
for (let i = 0 ; i < world.length; i++){
    if(world[0]=world[3]){
        world[3]=aux
    }
    if(world[1]=world[1]){
        world[1]=aux
    } 
    if(world[2]=world[2]){
        world[2]=aux
    }
    if(world[3]=world[0]){
        world[0]=aux
    }
}
    console.log("ordenada :")