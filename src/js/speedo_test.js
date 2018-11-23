import * as d3 from "d3";
import {make_gauge} from './make_gauge.js';
require('../style/style.css');

var window_width = document.documentElement.scrollWidth
var window_height = document.documentElement.scrollHeight
// console.log(window_width)
// console.log(window_height)

var test_data = [{'val':50, 'tar':210}, {'val':100, 'tar':210}, {'val':50, 'tar':210}, {'val':100, 'tar':210}]

// var g1 = d3.select('body')
//     .append('g')
//     .attr('width', window_width/2)
//     .attr('height', window_height/2)
//     .attr('transform', 'translate(' + window_width/2 * 0 + ',0)')

// make_gauge(g1, 50, 210);

// var g2 = d3.select('body')
//     .append('g')
//     .attr('width', window_width/2)
//     .attr('height', window_height/2)
//     .attr('transform', 'translate(' + window_width/2 * 1 + ',0)')

// make_gauge(g2, 100, 210);
var i;
var j;
var w = Math.min(2, test_data.length) 
var h = Math.ceil(test_data.length / w)

for (j = 0; j < h; j++) {
    for (i = 0; i < w; i++) {   
        // console.log(j * 2 + i) 
        if (j * 2 + i < test_data.length) {

            var val = test_data[j * 2 + i]['val']
            var tar = test_data[j * 2 + i]['tar']    
            
            // console.log(test_data[i])

            var g1 = d3.select('body')
            .append('g')
            .attr('width', window_width/w)
            .attr('height', window_height/h)
            .attr('transform', 'translate(' + window_width / w * i + ',' + window_height / h * j + ')')
            
            console.log('translate(' + window_width / w * i + ',' + window_height / h * j + ')')

            make_gauge(g1, val, tar);
        }
    }
}

