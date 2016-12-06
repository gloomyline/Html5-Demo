import React from 'react';
import classnames from 'classnames';

export default ({editing, value, onEdit, className, ...props}) => {
	if (editing) {
		return <Edit 
			className={className}
			value={value} 
			onEdit={onEdit} 
			{...props} />;
	}

	return <span className={classnames('value', className)} {...props}>{value}</span>	
}

// const Edit = ({onEdit=() => {}, value, ...props}) => (
// 	<div onClick={onEdit} {...props}>
// 		<span>edit: {value}</span>
// 	</div>
// );

// const Editable = ({editing, value, onEdit}) => {
// 	if (editing) {
// 		return <Editable.Edit value={value} onEdit={onEdit} />;
// 	}

// 	return <Editable.Value value={value} />;
// }

// Editable.Value = ({value, ...props}) => <span {...props}>{value}</span> 

class Edit extends React.Component {
	render() {
		const {className, value, ...props} = this.props;

		return <input
			type="text"
			className={classnames('edit', className)}
			autoFocus={true}
			defaultValue={value}
			onBlur={this.finishEdit}
			onKeyPress={this.checkEnter}
			{...props} />;
	}

	checkEnter = (e) => {
		if (e.key === 'Enter') {
			this.finishEdit(e);
		}
	}

	finishEdit = (e) => {
		const value = e.target.value;

		if (this.props.onEdit) {
			this.props.onEdit(value);
		}
	}	
}
// Editable.Edit = Edit;