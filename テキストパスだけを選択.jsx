/*
テキストパスだけを選択.jsx
Copyright (c) 2015 Toshiyuki Takahashi
Released under the MIT license
http://opensource.org/licenses/mit-license.php
http://www.graphicartsunit.com/
ver. 0.1.1
*/

(function() {

	// Get Elements
	var doc = app.activeDocument;
	var sel = doc.selection;
	// Run
	try {
		mainProcess();
	} catch(e) {
			alert(e);
	}

	// Main Process
	function mainProcess() {
		var targetItems = getTargetItems(sel);

		// Confirm data
		if(targetItems.length == 0) {
			throw('オブジェクトが選択されていないか、選択された中に対象オブジェクトがありません');
			return;
		}

		for (var tii = 0; tii < targetItems.length; tii++) {
			var pathPoints = targetItems[tii].textPath.pathPoints;
			targetItems[tii].selected = false;
			for (var ppi = 0; ppi < pathPoints.length; ppi++) {
				pathPoints[ppi].selected = PathPointSelection.ANCHORPOINT;
			};
		}
	}

	// Get Target items
	function getTargetItems(items) {
		var targetItems = [];
		for (var i = 0; i < items.length; i++) {
			if (items[i].typename == 'TextFrame' && items[i].kind != TextType.POINTTEXT) {
				targetItems.push(items[i]);
			} else if(items[i].typename == 'GroupItem') {
				// var tempItems = getTargetItems(items[i].pageItems);
				targetItems = targetItems.concat(getTargetItems(items[i].pageItems));
			} else {
				try { items[i].selected = false } catch(e) {};
			}
			// redraw();
		}
		return targetItems;
	}

}());