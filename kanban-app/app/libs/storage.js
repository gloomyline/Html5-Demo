/*
* @Author: gloomyline
* @Date:   2016-12-12 13:31:45
* @Last Modified by:   gloomyline
* @Last Modified time: 2016-12-12 13:34:03
*/

export default storage => ({
	get(k) {
		try {
			return JSON.parse(storage.getItem(k));
		}
		catch(e) {
			return null;
		}
	},

	set(k, v) {
		storage.setItem(k, JSON.stringify(v));
	}
})