'use strict';

import { unserialize, print_r } from './library/helper';

var onRun = function(context) {
    // Get table in opening tab
    var value = context.clickedRowValue();
    if (value == null) {
        context.alert('Error', 'Data is null');
        return;
    }
    let output = unserialize(value);
    if (output == null) {
        context.alert('Error', 'Data is not serialized.');
        return;
    }
	SystemService.insertToClipboard(print_r(output));
    SystemService.notify(
      "Deserialize PHP",
      "Your data has been copied to your clipboard!"
    );
};

global.onRun = onRun;
