// function add(x,y)
// {
//     return x+y
// }

// let prompt = require ("prompt-sync")()
// while(true)
// {
// let input=prompt("Enter value#1 (or type 'exit' to stop): ")
// if(isNaN(input) || input=="exit")
// {
//     console.log("Programe stopped.")
//     break;
// }
// else
// {
// let a=parseInt(input)
// let b=parseInt(prompt("Enter value#2: "))
// console.log("Addition Result is = ",add(a,b))
// }

// }

//coding for performing math functions


// function add(x,y)
// {
//     return (x+y)
// }
// function subt(x,y)
// {
//     return (x-y)
// }
// function mult(x,y)
// {
//     return (x*y)
// }
// function div(x,y)
// {
//     return (x/y)
// }
// let prompt = require ("prompt-sync")()
// while(true)
// {
    
//     let operation=prompt("Which function you want to perform (add/subt/mult/div) or type 'exit' to stop: ")
//     if (operation=="exit" )
//   {
//     console.log("Programe stopped.")
//     break;
//   }
//   let validoperations= ["add","subt","mult","div"]
//   if(!validoperations.includes(operation))
//   {
//     console.log("Invalid Function")
//     continue;
//   }
//   let a=parseInt(prompt("Enter value#1: "))
//   let b=parseInt(prompt("Enter value#2: "))
  
//   if (operation=="add")
//     {
//      console.log("Addition of x+y= ",add(a,b))
//     } 
//     else if(operation=="subt")
//         {
//      console.log("Subtraction of x-y= ",subt(a,b))
//         } 
//         else if(operation=="mult")
//         {
//             console.log("Multiplication of x*y= ",mult(a,b))
//         }
//         else if(operation=="div")
//         {
//             console.log("Division of x/y= ",div(a,b))
//         }
        
// }


// code for checking eligibilty of age

function checkeligibility(age)
{
    if(age>=18)
    {
        console.log("You are Eligible..")
    }
    else
    {
        console.log("Not Eligible.")
    }
}

let prompt=require ("prompt-sync")()
    while(true)
    {
      let userage=prompt("Enter Your Age or type 'exit' to stop: ")
      if(userage=="exit")
        {
            console.log("Programe Stopped..")
            break;
        } 
        userage=parseInt(userage) 
       if(isNaN(userage))
        {
            console.log("Invalid Age !")
        }
        else
            {
checkeligibility(userage)
        }
        
    }