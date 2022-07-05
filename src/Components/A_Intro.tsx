import React, {FC} from 'react'
import Props_Parent from './B.2_Props_Parent'
import States from './C_States'

/*

This is an expansion on the lectures of TS 

Here we are only gonna focuse on learning to TS regarding React 

The basics

A - Since were using mostly Functional Components we need to declare what type of function it is 

	const Intro : React.FC = () => {
		return <div></div>
	}	

	* You can also deconstruct FC at react import 

	import React, {FC} from 'react'

	const Intro : React.FC = () => {
		return <div></div>
	}	





*/

const Intro: FC = () => {
	return (
		<div>
			<Props_Parent />
			<States />
		</div>
	)
}

export default Intro
