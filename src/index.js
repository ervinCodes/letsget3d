import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as THREE from 'three';


var scene = new THREE.Scene();  
scene.background = new THREE.Color( 0xadd8e6 );
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 ); 

var renderer = new THREE.WebGLRenderer(); 
renderer.setSize( window.innerWidth, window.innerHeight ); 
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 2, 4, 2 );
var geometry2 = new THREE.BoxGeometry( 10, 10, 2 );
var material = new THREE.MeshNormalMaterial( { color: 0x00ff00 } );
// Cube 1
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.color = new THREE.Color( 0xadd8e6 );

// Cube 2
var cube2 = new THREE.Mesh( geometry2, material );
scene.add( cube2 );
// cube2.translateX(3);
cube2.rotation.x = 2;



camera.position.z = 7;

//Create an render loop to allow animation
var render = function () {
    requestAnimationFrame( render );

    // cube.rotation.x += 0.1;
    // cube.rotation.y += 0.1;

    // cube2.rotation.x += 0.1;
    // cube2.rotation.y += 0.1;

    renderer.render(scene, camera);
};

render();