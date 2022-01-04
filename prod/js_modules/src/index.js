const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
  // note: this is an async call which returns a promise
  import('./image_viewer').then(module => {
    console.log(module);
  });
};

document.body.appendChild(button);
