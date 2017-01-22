console.log("conditionals added");
conditionizr.add('firefox', function () {
  return 'InstallTrigger' in window;
});
var basepath = window.location;
var pathToAssets = basepath.host;
console.log(pathToAssets);
conditionizr.config({
    assets: basepath.host+'/nemoy/wp-content/themes/Dobby/js/conditionals/',
    tests: {
        safari: ['script']

    }
});
