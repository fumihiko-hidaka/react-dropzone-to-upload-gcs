import React from 'react';
import ReactDOM from 'react-dom';
import Dropzone from 'react-dropzone';


ReactDOM.render(
  <div>
    <h1>hello world</h1>
    <Dropzone
      accept="image/jpeg"
      onDrop={(files) => {
        if (files.length === 0) {
          return;
        }

        const formData = new FormData();
        formData.append('file', files[0]);

        fetch('/upload', {
          method: 'post',
          body: formData,
          headers: {}
        })
          .then(res => res.text())
          .then(text => console.log(text));

      }}
    />
  </div>,
  document.getElementById('app'),
);


/**
 fetch('/upload', {
        method: 'post',
        body: JSON.stringify({ foo: 'bar' }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
 .then(body => body.text())
 .then(body => console.log(body));
 */
