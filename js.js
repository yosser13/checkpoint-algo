a=prompt("donner une phrase")
v=0
w=1
a="c"
var longch=a.length
for (let i=0; i<longch;i++){
    if (a[i].toUpperCase()=="A" ||a[i].toUpperCase()=="E"|| a[i].toUpperCase()=="Y"||a[i].toUpperCase()=="U"||a[i].toUpperCase()=="I"||a[i].toUpperCase()=="E"||){
        v=v+1
    }
    if (a[i].charCodeAt()==32){
        w++
    }
}
console.log("word",w)
console.log("voy",v)
console.log("long",longch)
