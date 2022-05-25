import React from 'react';
import { CSSUtils } from '@utils';

class Badge extends React.Component {
	render() {
		const { state, text } = this.props;
		const badgeClass = CSSUtils.mergeModifiers('badge', {
			[state]: true,
		});

		return (
			<div className={badgeClass}>{text}</div>
		);
	}
}

export default Badge;
