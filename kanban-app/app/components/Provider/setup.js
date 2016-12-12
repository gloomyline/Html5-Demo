/*
* @Author: gloomyline
* @Date:   2016-12-07 11:47:42
* @Last Modified by:   gloomyline
* @Last Modified time: 2016-12-12 13:53:21
*/
import storage from '../../libs/storage';
import persist from '../../libs/persist';
import NoteStore from '../../stores/NoteStore';
import LaneStore from '../../stores/LaneStore';

export default alt => {
	alt.addStore('NoteStore', NoteStore);
	alt.addStore('LaneStore', LaneStore);

	persist(alt, storage(localStorage), 'app');
}