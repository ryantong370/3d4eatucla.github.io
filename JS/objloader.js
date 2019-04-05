var container;
var camera, scene, renderer;
var mouseX = 0, mouseY = 0;
var counter = 1;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
var objsrc = ['./models/ukulele.obj', './models/chesspieces.obj', './models/windmill.obj', './models/chair.obj', './models/roboarm.obj'];
var objpos = [10, 100, 10, 10, 250];
var remover;

init();
animate();

function init() {
  container = document.getElementById('canvas');
  // document.body.appendChild(container);

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);

  // scene
  scene = new THREE.Scene();

  var ambient = new THREE.AmbientLight(0xbbbbbb);
  scene.add(ambient);

  var directionalLight = new THREE.DirectionalLight(0xdddddd, 0.5);
  directionalLight.position.set(0, 0, 1);
  scene.add(directionalLight);

  // texture
  var manager = new THREE.LoadingManager();
  manager.onProgress = function(item, loaded, total) {

    console.log(item, loaded, total);

  };

  var texture = new THREE.Texture();

  var onProgress = function(xhr) {
    if (xhr.lengthComputable) {
      var percentComplete = xhr.loaded / xhr.total * 100;
      console.log(Math.round(percentComplete, 2) + '% downloaded');
    }
  };

  var onError = function(xhr) {};

  // Initial obj
  // camera
  camera.position.z = objpos[0];

  // model
  var loader = new THREE.OBJLoader(manager);
  loader.load(objsrc[0], function(object) {
  scene.add(object);
  remover = object;

  }, onProgress, onError);

  var TimerVar = setInterval(TimerDisplay, 10000);

  function TimerDisplay() {
    scene.remove(remover);
    var index = counter%5;
    var campos = objpos[index];
    var src = objsrc[index];
    
    // camera
    camera.position.z = campos;

    // model
    var loader = new THREE.OBJLoader(manager);
    loader.load(src, function(object) {
    scene.add(object);
    remover = object;

    }, onProgress, onError);
  
    counter = counter + 1;

  }

  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  document.addEventListener('mousemove', onDocumentMouseMove, false);

  // window.addEventListener('resize', onWindowResize, false);

}

function onDocumentMouseMove(event) {

  mouseX = (event.clientX - windowHalfX) / 2;
  mouseY = (event.clientY - windowHalfY) / 2;

}

//

function animate() {

  requestAnimationFrame(animate);
  render();

}

function render() {

  camera.position.x += (mouseX - camera.position.x) * .05;
  camera.position.y += (-mouseY - camera.position.y) * .05;

  camera.lookAt(scene.position);
  camera.updateProjectionMatrix();

  renderer.render(scene, camera);
}