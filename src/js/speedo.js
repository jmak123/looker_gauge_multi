import * as d3 from "d3"
import {make_gauge} from './make_gauge.js'
require('../style/style.css');

looker.plugins.visualizations.add({

	create: function(element, config){

    },

	updateAsync: function(data, element, config, queryResponse, details, doneRendering){

        var numerator = data[0]['var1'].value
        var denominator = data[0]['var2'].value

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
        make_gauge(element, numerator, denominator)

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

		doneRendering()
	}
});
