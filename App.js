EscribirMultiplos()

function EscribirMultiplos(){
    for (var i = 1; i <= 100; i++) {
       
        if (i%3 == 0 && i%5 == 0){
            console.log("mareigua")
        }else{
            if(i % 3 == 0){
                console.log("mare")
            }else{
                if(i % 5 == 0){
                    console.log("igua")
                }else{
                    console.log(i)
                }
            }
        }
    }
}