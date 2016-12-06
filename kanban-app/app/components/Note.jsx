import React from 'react';

// export default ({task, onDelete}) => (
// 	<div>
// 		<span>{task}</span>
// 		<button onClick={onDelete}>Del</button>
// 	</div>
// )

export default ({children, ...props}) => (
	<div {...props}>
		{children}
	</div>
)