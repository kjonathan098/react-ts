import {Agent} from 'http'
import React from 'react'
import {Props, SyntaxChange} from './B_Props'

const Props_Parent = () => {
	const sayGoobye = (): void => {
		console.log('goodbye')
	}
	return (
		<>
			<Props name={'pedro'} age={20} sayGoodbye={sayGoobye} />
			<SyntaxChange name={'pedro'} age={20} sayGoodbye={sayGoobye} />
		</>
	)
}

export default Props_Parent
