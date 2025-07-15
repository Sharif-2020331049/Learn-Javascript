const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body');
// console.log(body);
buttons.forEach(
    (button)=>
        {
            // console.log(button);
            button.addEventListener('click', 
              function(e){
                /* check whether listen or not when button cliked */
                    // console.log(e);

                    /* check which button clicked */
                    // console.log(e.target);
                         

                    //one way
                    // body.style.backgroundColor = e.target.id;

                /* another way*/
                if(e.target.id === 'grey')
                    {
                        body.style.backgroundColor = e.target.id;
                    }

               if(e.target.id === 'white')
                        {
                            body.style.backgroundColor = e.target.id;
                        } 
                        
               if(e.target.id === 'blue')
                {
                    body.style.backgroundColor = e.target.id;
                }    
                
               if(e.target.id === 'yellow')
                {
                    body.style.backgroundColor = e.target.id;
                }  

                    }
            )
        }
)