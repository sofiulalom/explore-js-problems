const name=['abul','babul','ratul','datul','ebleu',
 'abul','babul','ratul','datul','ebleu'];
 function remobovDuplicate(names){
    const unics=[]
    for(let i=0; i <names.length; i++){
        const name=names[i];
        console.log(name);
        if (unics.includes(name) === false ) {
           unics.push(name)
        }
    }
    return unics;
}
const unicNames=remobovDuplicate(name)
console.log(unicNames);

