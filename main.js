// Wait until A-Frame scene is fully loaded
window.addEventListener('DOMContentLoaded', () => {
  //#region  Remove Bubble 1
  setTimeout(() => {
    setTimeout(() => {
      const bubble1 = document.querySelector('#bubble1');
      if (bubble1) bubble1.parentNode.removeChild(bubble1);
    }, 7000);
  }, 2000);

  //#region Spawn Bubble 2 
  setTimeout(() => {
    const scene = document.querySelector('a-scene');

    const bubble2 = document.createElement('a-entity');
    bubble2.setAttribute('id', 'bubble2');
    bubble2.setAttribute('position', '0.25 0 -1.25');
    bubble2.setAttribute('animation', 'property: position; to: 0.25 1.3 -1.25; dur: 4500; easing: easeOutQuad; fill: forwards');

    bubble2.innerHTML = `
      <a-image src="#bubbleImage" width="0.6" height="0.6">
        <a-text value="My name is \n Rujuta" position="0 -0.1 0.01" align="center" color="black" side="double"
                shader="msdf" scale ="0.45 0.45 0.45"
                font="https://cdn.jsdelivr.net/gh/etiennepinchon/aframe-fonts/fonts/roboto/Roboto-Regular.json">
        </a-text>
      </a-image>
    `;

    scene.appendChild(bubble2);

    // Remove Bubble 2 
    setTimeout(() => {
      if (bubble2) bubble2.parentNode.removeChild(bubble2);
    }, 7000);
  }, 4000);


  //#region Spawn Bubble 3 
  setTimeout(() => {
    const scene = document.querySelector('a-scene');

    const bubble3 = document.createElement('a-entity');
    bubble3.setAttribute('id', 'bubble3');
    bubble3.setAttribute('position', '-0.2 0 -1.25');
    bubble3.setAttribute('animation', 'property: position; to: -0.2 2 -1.25; dur: 5500; easing: easeOutQuad; fill: forwards');

    bubble3.innerHTML = `
      <a-image src="#bubbleImage" width="0.7" height="0.7">
        <a-text value="I am \n currently doing \n my Masters in \n Computer Sci." position="0 -0.05 0.01" align="center" color="black" side="double"
                shader="msdf" scale ="0.35 0.35 0.35"
                font="https://cdn.jsdelivr.net/gh/etiennepinchon/aframe-fonts/fonts/roboto/Roboto-Regular.json">
        </a-text>
      </a-image>
    `;

    scene.appendChild(bubble3);

    // Remove Bubble 3 
    setTimeout(() => {
      if (bubble3) bubble3.parentNode.removeChild(bubble3);
    }, 9000);
  }, 10000);


  //#region Spawn Bubble 4  
  setTimeout(() => {
    const scene = document.querySelector('a-scene');

    const bubble4 = document.createElement('a-entity');
    bubble4.setAttribute('id', 'bubble4');
    bubble4.setAttribute('position', '0.2 0 -1.25');
    bubble4.setAttribute('animation', 'property: position; to: 0.2 1.1 -1.25; dur: 4500; easing: easeOutQuad; fill: forwards');

    bubble4.innerHTML = `
      <a-image src="#bubbleImage" width="0.85" height="0.85">
        <a-text value="I aim to \n create real \n time, multimodal \n interfaces that \n support human \n creativity, well \n being & \n autonomy." 
                position="0 -0.05 0.01" align="center" color="black" side="double" shader="msdf" scale ="0.37 0.37 0.37"
                font="https://cdn.jsdelivr.net/gh/etiennepinchon/aframe-fonts/fonts/roboto/Roboto-Regular.json">
        </a-text>
      </a-image>
    `;

    scene.appendChild(bubble4);

    // Remove Bubble 4 
    setTimeout(() => {
      if (bubble4) bubble4.parentNode.removeChild(bubble4);
    }, 7000);
  }, 12000);

  //#region Spawn Bubble 5 
  setTimeout(() => {
    const scene = document.querySelector('a-scene');

    const bubble5 = document.createElement('a-entity');
    bubble5.setAttribute('id', 'bubble5');
    bubble5.setAttribute('position', '0 0 -1.25');
    bubble5.setAttribute('animation', 'property: position; to: 0 2.36 -1.25; dur: 6000; easing: easeOutQuad; fill: forwards');

    bubble5.innerHTML = `
      <a-image src="#bubbleImage" width="0.6" height="0.6">
        <a-text value="My research \n focuses on " position="0 -0.05 0.01" align="center" color="black" side="double"
                shader="msdf" scale ="0.4 0.4 0.4"
                font="https://cdn.jsdelivr.net/gh/etiennepinchon/aframe-fonts/fonts/roboto/Roboto-Regular.json">
        </a-text>
      </a-image>
    `;

    scene.appendChild(bubble5);

    // Remove Bubble 5
    setTimeout(() => {
      if (bubble5) bubble5.parentNode.removeChild(bubble5);
    }, 13000);
  }, 19000);

  //#region Spawn Bubble 5a
  setTimeout(() => {
    const scene = document.querySelector('a-scene');

    const bubble5a = document.createElement('a-entity');
    bubble5a.setAttribute('id', 'bubble5a');
    bubble5a.setAttribute('position', '-0.3 0 -1.25');
    bubble5a.setAttribute('animation', 'property: position; to: -0.3 1.7 -1.25; dur: 5000; easing: easeOutQuad; fill: forwards');

    bubble5a.innerHTML = `
      <a-image src="#bubbleImage" width="0.65" height="0.65">
        <a-text value="developing \n intelligent, context \n aware AI systems  " position="0 -0.05 0.01" align="center" color="black" side="double"
                shader="msdf" scale ="0.3 0.3 0.3"
                font="https://cdn.jsdelivr.net/gh/etiennepinchon/aframe-fonts/fonts/roboto/Roboto-Regular.json">
        </a-text>
      </a-image>
    `;

    scene.appendChild(bubble5a);

  // Remove Bubble 5a
    setTimeout(() => {
      if (bubble5a) bubble5a.parentNode.removeChild(bubble5a);
    }, 11000);
  }, 21000);

  //#region Spawn Bubble 5b
  setTimeout(() => {
    const scene = document.querySelector('a-scene');

    const bubble5b = document.createElement('a-entity');
    bubble5b.setAttribute('id', 'bubble5b');
    bubble5b.setAttribute('position', '0.3 0 -1.25');
    bubble5b.setAttribute('animation', 'property: position; to: 0.3 1.3 -1.25; dur: 5000; easing: easeOutQuad; fill: forwards');

    bubble5b.innerHTML = `
      <a-image src="#bubbleImage" width="0.6" height="0.6">
        <a-text value="that enable \n natural & intuitive \n human machine \n interaction " position="0 -0.05 0.01" align="center" color="black" side="double"
                shader="msdf" scale ="0.3 0.3 0.3"
                font="https://cdn.jsdelivr.net/gh/etiennepinchon/aframe-fonts/fonts/roboto/Roboto-Regular.json">
        </a-text>
      </a-image>
    `;

    scene.appendChild(bubble5b);

    // Remove Bubble 5b
    setTimeout(() => {
      if (bubble5b) bubble5b.parentNode.removeChild(bubble5b);
    }, 9000);
  }, 23000);

  //#region Spawn Bubble 5c
  setTimeout(() => {
    const scene = document.querySelector('a-scene');

    const bubble5c = document.createElement('a-entity');
    bubble5c.setAttribute('id', 'bubble5c');
    bubble5c.setAttribute('position', '-0.11 0 -1.25');
    bubble5c.setAttribute('animation', 'property: position; to: -0.11 0.8 -1.25; dur: 4000; easing: easeOutQuad; fill: forwards');

    bubble5c.innerHTML = `
      <a-image src="#bubbleImage" width="0.65" height="0.65">
        <a-text value="using \n Computer Vision, \n Augmented Reality,\n & Deep Learning. " position="0 -0.05 0.01" align="center" color="black" side="double"
                shader="msdf" scale ="0.3 0.3 0.3"
                font="https://cdn.jsdelivr.net/gh/etiennepinchon/aframe-fonts/fonts/roboto/Roboto-Regular.json">
        </a-text>
      </a-image>
    `;

    scene.appendChild(bubble5c);

    // Remove bubble 5c
    setTimeout(() => {
      if (bubble5c) bubble5c.parentNode.removeChild(bubble5c);
    }, 7000);
  }, 25000);

  //#region Spawn Bubble 6
  setTimeout(() => {
    const scene = document.querySelector('a-scene');

    const bubble6 = document.createElement('a-entity');
    bubble6.setAttribute('id', 'bubble6');
    bubble6.setAttribute('position', '0 0 -1.25');
    bubble6.setAttribute('animation', 'property: position; to: 0 2.3 -1.25; dur: 7000; easing: easeOutQuad; fill: forwards');

    bubble6.innerHTML = `
      <a-image src="#bubbleImage" width="0.5" height="0.5">
        <a-text value="I enjoy \n working in" position="0 -0.05 0.01" align="center" color="black" side="double"
                shader="msdf" scale = " 0.4 0.4 0.4"
                font="https://cdn.jsdelivr.net/gh/etiennepinchon/aframe-fonts/fonts/roboto/Roboto-Regular.json">
        </a-text>
      </a-image>
    `;

    scene.appendChild(bubble6);

    // Remove Bubble 6
    setTimeout(() => {
      if (bubble6) bubble6.parentNode.removeChild(bubble6);
    }, 19000);
  }, 32000);

  //#region Spawn Bubble 6a
  setTimeout(() => {
    const scene = document.querySelector('a-scene');

    const bubble6a = document.createElement('a-entity');
    bubble6a.setAttribute('id', 'bubble6a');
    bubble6a.setAttribute('position', '-0.2 0 -1.25');
    bubble6a.setAttribute('animation', 'property: position; to: -0.2 1.8 -1.25; dur: 6000; easing: easeOutQuad; fill: forwards');

    bubble6a.innerHTML = `
      <a-image src="#bubbleImage" width="0.3" height="0.3">
        <a-text value="3D" position="0 -0.06 0.01" align="center" color="black" side="double"
                shader="msdf" scale = " 0.4 0.4 0.4"
                font="https://cdn.jsdelivr.net/gh/etiennepinchon/aframe-fonts/fonts/roboto/Roboto-Regular.json">
        </a-text>
      </a-image>
    `;

    scene.appendChild(bubble6a);

    // Remove Bubble 6a
    setTimeout(() => {
      if (bubble6a) bubble6a.parentNode.removeChild(bubble6a);
    }, 17000);
  }, 34000);

  //#region Spawn Bubble 6b
  setTimeout(() => {
    const scene = document.querySelector('a-scene');

    const bubble6b = document.createElement('a-entity');
    bubble6b.setAttribute('id', 'bubble6b');
    bubble6b.setAttribute('position', '0.4 0 -1.25');
    bubble6b.setAttribute('animation', 'property: position; to: 0.4 1.7 -1.25; dur: 6000; easing: easeOutQuad; fill: forwards');

    bubble6b.innerHTML = `
      <a-image src="#bubbleImage" width="0.45" height="0.45">
        <a-text value="Augmented \n Reality" position="0 -0.05 0.01" align="center" color="black" side="double"
                shader="msdf" scale = " 0.3 0.3 0.3"
                font="https://cdn.jsdelivr.net/gh/etiennepinchon/aframe-fonts/fonts/roboto/Roboto-Regular.json">
        </a-text>
      </a-image>
    `;

    scene.appendChild(bubble6b);

    // Remove Bubble 6b
    setTimeout(() => {
      if (bubble6b) bubble6b.parentNode.removeChild(bubble6b);
    }, 15000);
  }, 36000);

  //#region Spawn Bubble 6c
  setTimeout(() => {
    const scene = document.querySelector('a-scene');

    const bubble6c = document.createElement('a-entity');
    bubble6c.setAttribute('id', 'bubble6c');
    bubble6c.setAttribute('position', '-0.4 0 -1.25');
    bubble6c.setAttribute('animation', 'property: position; to: -0.4 1.4 -1.25; dur: 5000; easing: easeOutQuad; fill: forwards');

    bubble6c.innerHTML = `
      <a-image src="#bubbleImage" width="0.4" height="0.4">
        <a-text value="Neural \n Networks" position="0 -0.05 0.01" align="center" color="black" side="double"
                shader="msdf" scale = " 0.3 0.3 0.3"
                font="https://cdn.jsdelivr.net/gh/etiennepinchon/aframe-fonts/fonts/roboto/Roboto-Regular.json">
        </a-text>
      </a-image>
    `;

    scene.appendChild(bubble6c);

    // Remove Bubble 6c
    setTimeout(() => {
      if (bubble6c) bubble6c.parentNode.removeChild(bubble6c);
    }, 13000);
  }, 38000);

  //#region Spawn Bubble 6d
  setTimeout(() => {
    const scene = document.querySelector('a-scene');

    const bubble6d = document.createElement('a-entity');
    bubble6d.setAttribute('id', 'bubble6d');
    bubble6d.setAttribute('position', '0.2 0 -1.25');
    bubble6d.setAttribute('animation', 'property: position; to: 0.2 1.2 -1.25; dur: 5000; easing: easeOutQuad; fill: forwards');

    bubble6d.innerHTML = `
      <a-image src="#bubbleImage" width="0.4" height="0.4">
        <a-text value="Computer \n Vision" position="0 -0.05 0.01" align="center" color="black" side="double"
                shader="msdf" scale = " 0.3 0.3 0.3"
                font="https://cdn.jsdelivr.net/gh/etiennepinchon/aframe-fonts/fonts/roboto/Roboto-Regular.json">
        </a-text>
      </a-image>
    `;

    scene.appendChild(bubble6d);

    // Remove Bubble 6d
    setTimeout(() => {
      if (bubble6d) bubble6d.parentNode.removeChild(bubble6d);
    }, 11000);
  }, 40000);


  //#region Spawn Bubble 6e
  setTimeout(() => {
    const scene = document.querySelector('a-scene');

    const bubble6e = document.createElement('a-entity');
    bubble6e.setAttribute('id', 'bubble6e');
    bubble6e.setAttribute('position', '-0.2 0 -1.25');
    bubble6e.setAttribute('animation', 'property: position; to: -0.2 0.9 -1.25; dur: 5000; easing: easeOutQuad; fill: forwards');

    bubble6e.innerHTML = `
      <a-image src="#bubbleImage" width="0.4" height="0.4">
        <a-text value="Machine \n Learning" position="0 -0.05 0.01" align="center" color="black" side="double"
                shader="msdf" scale = " 0.3 0.3 0.3"
                font="https://cdn.jsdelivr.net/gh/etiennepinchon/aframe-fonts/fonts/roboto/Roboto-Regular.json">
        </a-text>
      </a-image>
    `;

    scene.appendChild(bubble6e);

    // Remove Bubble 6e
    setTimeout(() => {
      if (bubble6e) bubble6e.parentNode.removeChild(bubble6e);
    }, 9000);
  }, 42000);

  //#region Spawn Bubble 6f
  setTimeout(() => {
    const scene = document.querySelector('a-scene');

    const bubble6f = document.createElement('a-entity');
    bubble6f.setAttribute('id', 'bubble6f');
    bubble6f.setAttribute('position', '0.4 0 -1.25');
    bubble6f.setAttribute('animation', 'property: position; to: 0.4 0.74 -1.25; dur: 5000; easing: easeOutQuad; fill: forwards');

    bubble6f.innerHTML = `
      <a-image src="#bubbleImage" width="0.5" height="0.5">
        <a-text value="Natural\n Language\n Processing" position="0 -0.05 0.01" align="center" color="black" side="double"
                shader="msdf" scale = " 0.3 0.3 0.3"
                font="https://cdn.jsdelivr.net/gh/etiennepinchon/aframe-fonts/fonts/roboto/Roboto-Regular.json">
        </a-text>
      </a-image>
    `;

    scene.appendChild(bubble6f);

    // Remove Bubble 6f
    setTimeout(() => {
      if (bubble6f) bubble6f.parentNode.removeChild(bubble6f);
    }, 7000);
  }, 44000);


  //#region Spawn Bubble 7
  setTimeout(() => {
    const scene = document.querySelector('a-scene');

    const bubble7 = document.createElement('a-entity');
    bubble7.setAttribute('id', 'bubble7');
    bubble7.setAttribute('position', '0 0 -1.25');
    bubble7.setAttribute('animation', 'property: position; to: 0 2.4 -1.25; dur: 6000; easing: easeOutQuad; fill: forwards');

    bubble7.innerHTML = `
      <a-image src="#bubbleImage" width="0.5" height="0.5">
        <a-text value="I enjoy \n creating \n using" position="0 -0.05 0.01" align="center" color="black" side="double"
                shader="msdf" scale = " 0.4 0.4 0.4"
                font="https://cdn.jsdelivr.net/gh/etiennepinchon/aframe-fonts/fonts/roboto/Roboto-Regular.json">
        </a-text>
      </a-image>
    `;

    scene.appendChild(bubble7);

    // Remove Bubble 7
    setTimeout(() => {
      if (bubble7) bubble7.parentNode.removeChild(bubble7);
    }, 19000);
  }, 52000);

  //#region Spawn Bubble 7a
  setTimeout(() => {
    const scene = document.querySelector('a-scene');

    const bubble7a = document.createElement('a-entity');
    bubble7a.setAttribute('id', 'bubble7a');
    bubble7a.setAttribute('position', '-0.2 0 -1.25');
    bubble7a.setAttribute('animation', 'property: position; to: -0.2 1.9 -1.25; dur: 6000; easing: easeOutQuad; fill: forwards');

    bubble7a.innerHTML = `
      <a-image src="#bubbleImage" width="0.35" height="0.35">
        <a-text value="Unity" position="0 -0.05 0.01" align="center" color="black" side="double"
                shader="msdf" scale = " 0.35 0.35 0.35"
                font="https://cdn.jsdelivr.net/gh/etiennepinchon/aframe-fonts/fonts/roboto/Roboto-Regular.json">
        </a-text>
      </a-image>
    `;

    scene.appendChild(bubble7a);

    // Remove Bubble 7a
    setTimeout(() => {
      if (bubble7a) bubble7a.parentNode.removeChild(bubble7a);
    }, 17000);
  }, 54000);

  //#region Spawn Bubble 7b
  setTimeout(() => {
    const scene = document.querySelector('a-scene');

    const bubble7b = document.createElement('a-entity');
    bubble7b.setAttribute('id', 'bubble7b');
    bubble7b.setAttribute('position', '0.4 0 -1.25');
    bubble7b.setAttribute('animation', 'property: position; to: 0.4 1.7 -1.25; dur: 6000; easing: easeOutQuad; fill: forwards');

    bubble7b.innerHTML = `
      <a-image src="#bubbleImage" width="0.4" height="0.4">
        <a-text value="Babylon.js" position="0 -0.05 0.01" align="center" color="black" side="double"
                shader="msdf" scale = " 0.3 0.3 0.3"
                font="https://cdn.jsdelivr.net/gh/etiennepinchon/aframe-fonts/fonts/roboto/Roboto-Regular.json">
        </a-text>
      </a-image>
    `;

    scene.appendChild(bubble7b);

    // Remove Bubble 7b
    setTimeout(() => {
      if (bubble7b) bubble7b.parentNode.removeChild(bubble7b);
    }, 15000);
  }, 56000);

  //#region Spawn Bubble 7c
  setTimeout(() => {
    const scene = document.querySelector('a-scene');

    const bubble7c = document.createElement('a-entity');
    bubble7c.setAttribute('id', 'bubble7c');
    bubble7c.setAttribute('position', '-0.4 0 -1.25');
    bubble7c.setAttribute('animation', 'property: position; to: -0.4 1.5 -1.25; dur: 5000; easing: easeOutQuad; fill: forwards');

    bubble7c.innerHTML = `
      <a-image src="#bubbleImage" width="0.4" height="0.4">
        <a-text value="Blender" position="0 -0.05 0.01" align="center" color="black" side="double"
                shader="msdf" scale = " 0.3 0.3 0.3"
                font="https://cdn.jsdelivr.net/gh/etiennepinchon/aframe-fonts/fonts/roboto/Roboto-Regular.json">
        </a-text>
      </a-image>
    `;

    scene.appendChild(bubble7c);

    // Remove Bubble 7c
    setTimeout(() => {
      if (bubble7c) bubble7c.parentNode.removeChild(bubble7c);
    }, 13000);
  }, 58000);

  //#region Spawn Bubble 7d
  setTimeout(() => {
    const scene = document.querySelector('a-scene');

    const bubble7d = document.createElement('a-entity');
    bubble7d.setAttribute('id', 'bubble7d');
    bubble7d.setAttribute('position', '0.2 0 -1.25');
    bubble7d.setAttribute('animation', 'property: position; to: 0.2 1.3 -1.25; dur: 5000; easing: easeOutQuad; fill: forwards');

    bubble7d.innerHTML = `
      <a-image src="#bubbleImage" width="0.4" height="0.4">
        <a-text value="WASM" position="0 -0.05 0.01" align="center" color="black" side="double"
                shader="msdf" scale = " 0.3 0.3 0.3"
                font="https://cdn.jsdelivr.net/gh/etiennepinchon/aframe-fonts/fonts/roboto/Roboto-Regular.json">
        </a-text>
      </a-image>
    `;

    scene.appendChild(bubble7d);

    // Remove Bubble 7d
    setTimeout(() => {
      if (bubble7d) bubble7d.parentNode.removeChild(bubble7d);
    }, 11000);
  }, 60000);


  //#region Spawn Bubble 7e
  setTimeout(() => {
    const scene = document.querySelector('a-scene');

    const bubble7e = document.createElement('a-entity');
    bubble7e.setAttribute('id', 'bubble7e');
    bubble7e.setAttribute('position', '-0.2 0 -1.25');
    bubble7e.setAttribute('animation', 'property: position; to: -0.2 1 -1.25; dur: 5000; easing: easeOutQuad; fill: forwards');

    bubble7e.innerHTML = `
      <a-image src="#bubbleImage" width="0.4" height="0.4">
        <a-text value="Jupyter\n Notebook" position="0 -0.05 0.01" align="center" color="black" side="double"
                shader="msdf" scale = " 0.3 0.3 0.3"
                font="https://cdn.jsdelivr.net/gh/etiennepinchon/aframe-fonts/fonts/roboto/Roboto-Regular.json">
        </a-text>
      </a-image>
    `;

    scene.appendChild(bubble7e);

    // Remove Bubble 7e
    setTimeout(() => {
      if (bubble7e) bubble7e.parentNode.removeChild(bubble7e);
    }, 9000);
  }, 62000);

  //#region Spawn Bubble 7f
  setTimeout(() => {
    const scene = document.querySelector('a-scene');

    const bubble7f = document.createElement('a-entity');
    bubble7f.setAttribute('id', 'bubble7f');
    bubble7f.setAttribute('position', '0.35 0 -1.25');
    bubble7f.setAttribute('animation', 'property: position; to: 0.3 0.75 -1.25; dur: 5000; easing: easeOutQuad; fill: forwards');

    bubble7f.innerHTML = `
      <a-image src="#bubbleImage" width="0.4" height="0.4">
        <a-text value="The \n terminal \n :P" position="0 -0.05 0.01" align="center" color="black" side="double"
                shader="msdf" scale = " 0.3 0.3 0.3"
                font="https://cdn.jsdelivr.net/gh/etiennepinchon/aframe-fonts/fonts/roboto/Roboto-Regular.json">
        </a-text>
      </a-image>
    `;

    scene.appendChild(bubble7f);

    // Remove Bubble 6f
    setTimeout(() => {
      if (bubble7f) bubble7f.parentNode.removeChild(bubble7f);
    }, 7000);
  }, 64000);

  //#region Spawn Bubble 8
  setTimeout(() => {
    const scene = document.querySelector('a-scene');

    const bubble8 = document.createElement('a-entity');
    bubble8.setAttribute('id', 'bubble8');
    bubble8.setAttribute('position', '0 0 -1.25');
    bubble8.setAttribute('animation', 'property: position; to: 0 1.5 -1.25; dur: 3000; easing: easeOutQuad; fill: forwards');

    bubble8.innerHTML = `
      <a-image src="#bubbleImage" width="0.8" height="0.8">
        <a-text value="Thanks for \n stopping by!" position="0 -0.05 0.01" align="center" color="black" side="double"
                shader="msdf" scale = " 0.55 0.55 0.55"
                font="https://cdn.jsdelivr.net/gh/etiennepinchon/aframe-fonts/fonts/roboto/Roboto-Regular.json">
        </a-text>
      </a-image>
    `;

    scene.appendChild(bubble8);

    // Remove Bubble 8 
    setTimeout(() => {
      if (bubble8) bubble8.parentNode.removeChild(bubble8);
    }, 7000);
  }, 71000);

});
