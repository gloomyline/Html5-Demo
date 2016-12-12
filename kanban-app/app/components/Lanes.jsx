/*
* @Author: gloomyline
* @Date:   2016-12-12 13:53:59
* @Last Modified by:   gloomyline
* @Last Modified time: 2016-12-12 13:54:07
*/

import React from 'react';
import Lane from './Lane';

export default ({lanes}) => (
	<div className="lanes">{lanes.map(lane =>
		<Lane className="lane" key={lane.id} lane={lane} />
	)}</div>
)