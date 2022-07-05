import React, {useEffect, useState} from 'react'

/*

Shouldnt be a major issue but need to do some extra steps 

A - Now when initializing a state you need to tell what type of value it is 

    const [name, setName] = useState("")

    * setting up and empty string, array, etc.. could work but if you want multiple values null or string you need unit 

     const [name, setName] = useState<string | null>("")

*/

const States = () => {
	const [name, setName] = useState<string | null>()

	return (
		<>
			// C_States
			<div>{name ? <>{name}</> : <>no name given</>}</div>
		</>
	)
}

export default States
