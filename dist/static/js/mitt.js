function o(i){return{all:i=i||new Map,on:function(e,c){var t=i.get(e);t?t.push(c):i.set(e,[c])},off:function(e,c){var t=i.get(e);t&&(c?t.splice(t.indexOf(c)>>>0,1):i.set(e,[]))},emit:function(e,c){var t=i.get(e);t&&t.slice().map(function(n){n(c)}),(t=i.get("*"))&&t.slice().map(function(n){n(e,c)})}}}const f=o();export{f as e};
//# sourceMappingURL=mitt.js.map
