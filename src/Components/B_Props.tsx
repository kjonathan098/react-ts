import React, {FC} from 'react'

/*

Lets see how to properly work with props 

A - Just like VJS when writing a func and passing arguments you need to declare what the value type is for those arg 

    const sayHello( name: string, age: number)=> {
        log('hello ${name})
    }

B - A better way is to use interface which is common in react 

    1 - Very similar to writing a model in mongoose 
    2 - Basically youre declaring the skeleton of the props 
    3 - Now the function knows what each value in props should be 

C - Lets write an interface. Start by decalring at the top 

    interface Props {}

D - Define the skeleton. What youre expecting inside 

    interface Props {
        name : string 
        age : number 
        sayGoodbye: (name : string) => string 

    }

E - You can also make the props optional by adding ? 

    interface Props {
        name?: string
        age: number
        sayGoodbye: () => void
    }

G - Another syntax youll use for FC (If you want to use FC you need to write this syntax)

    export const SyntaxChange : FC<Props> = ({age, name, sayGoodbye}) => {
	    return <div></div>
    }





*/
interface Props {
	name?: string
	age: number
	sayGoodbye: () => void
}

export const Props = ({name, age, sayGoodbye}: Props) => {
	return (
		<div>
			// B_Props
			<>{name}</>
			<>{age}</>
			<button onClick={sayGoodbye}>Say Goodby</button>
		</div>
	)
}

export const SyntaxChange: FC<Props> = ({age, name, sayGoodbye}) => {
	return (
		<div>
			// SyntaxChange B_Props
			<>{name}</>
			<>{age}</>
			<button onClick={sayGoodbye}>Say Goodby</button>
		</div>
	)
}
