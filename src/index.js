import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as THREE from 'three';
import { Triangle } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


// Scene
var scene = new THREE.Scene();  
scene.background = new THREE.Color( 0xadd8e6 );

// Camera
var camera = new THREE.PerspectiveCamera( 15, window.innerWidth/window.innerHeight, 0.1, 1000 ); 
camera.position.set(0,0,12);
// camera.rotation.z = 5;
camera.position.z = 100;


// Renderer
var renderer = new THREE.WebGLRenderer(); 
renderer.setSize( window.innerWidth, window.innerHeight ); 
document.body.appendChild( renderer.domElement );


// // Cube
// var geometry2 = new THREE.BoxGeometry( 10, 10, 2 );
// var material2 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// var cube2 = new THREE.Mesh( geometry2, material2 );
// cube2.rotation.x = 2;
// var color = 0x9B7653; // Your color
// cube2.material.color = new THREE.Color( color );
// scene.add( cube2 );


// // Pyramid
// var geometry3 = new THREE.ConeGeometry(3,1,3);
// var material3 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// var pyramid = new THREE.Mesh( geometry3, material3 );
// pyramid.rotation.x = 5;
// pyramid.position.y = 2;
// var color = 0xad9b80; // Your color
// pyramid.material.color = new THREE.Color( color );
// scene.add( pyramid );

// Loader

var loader = new GLTFLoader();

loader.load( './pyramidScene.gltf', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

// Orbit Controls

const controls = new OrbitControls( camera, renderer.domElement );

//controls.update() must be called after any manual changes to the camera's transform
camera.position.set( 0, 20, 100 );
controls.update();


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