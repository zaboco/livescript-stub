import$(global, require('prelude-ls'));
module.exports = {
  dummyMethod: function(){
    return true;
  }
};
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}