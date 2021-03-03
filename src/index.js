import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as THREE from 'three';
import { Triangle } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from '@react-three/drei';

// Scene
var scene = new THREE.Scene();  
scene.background = new THREE.Color( 0xadd8e6 );

// Camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 ); 
// camera.position.set(0,0,5);
camera.position.z = 15;


// Renderer
var renderer = new THREE.WebGLRenderer(); 
renderer.setSize( window.innerWidth, window.innerHeight ); 
document.body.appendChild( renderer.domElement );

// Controls
// window.addEventListener('resize',function(){
//     var width = window.innerWidth;
//     var height = window.innerHeight;
//     renderer.setSize(width,height);
//     camera.aspect=width/height;
//     camera.updateProjectionMatrix;
// });


// Cube 1
// var geometry = new THREE.BoxGeometry( 2, 4, 2 );
// var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// var cube = new THREE.Mesh( geometry, material );
// var color = 0xad9b80; // Your color
// cube.material.color = new THREE.Color( color );
// scene.add( cube );


// Cube 2
var geometry2 = new THREE.BoxGeometry( 10, 10, 2 );
var material2 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube2 = new THREE.Mesh( geometry2, material2 );
cube2.rotation.x = 2;
var color = 0x9B7653; // Your color
cube2.material.color = new THREE.Color( color );
scene.add( cube2 );


// Pyramid
var geometry3 = new THREE.ConeGeometry(3,1,3);
var material3 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var pyramid = new THREE.Mesh( geometry3, material3 );
pyramid.rotation.x = 5;
pyramid.position.y = 2;
var color = 0xad9b80; // Your color
pyramid.material.color = new THREE.Color( color );
scene.add( pyramid );

// Loader

var loader = new GLTFLoader();

loader.load( './public/pyramidScene.gltf', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );


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