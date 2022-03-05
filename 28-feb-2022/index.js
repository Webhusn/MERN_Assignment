function clickme() {

    var n= prompt('enter the number');
    n = parseInt(n);

    for ( n = 0 ; n <100; n++){

        
        if(n % 15 == 0){
            document.write('Fizz-Buzz')
        }

        else if (n % 3 == 0){
            document.write('Fizz')
        }

        else if (n % 5 == 0){
            document.write('Buzz')
        }

        else{
            document.write(n)
        }
    }


    

}

