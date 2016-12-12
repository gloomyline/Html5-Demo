/*
* @Author: gloomyline
* @Date:   2016-12-12 13:34:22
* @Last Modified by:   gloomyline
* @Last Modified time: 2016-12-12 13:36:48
*/

export default function (alt, storage, storageName) {
	try {
		alt.bootstrap(storage.get(storageName));
	}
	catch(e) {
		console.error('Failed to bootstrap data', e);
	}

	alt.FinalStore.listen(() => {
		if (!storage.get('debug')) {
			storage.set(storageName, alt.takeSnapshot());
		}
	});
}