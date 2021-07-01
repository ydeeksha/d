function setup()
{
    canvas=createCanvas(250,250);
    canvas.center();
    video - createCapture(VIDEO);
  video.hide();
    ml5.imageClassifier('',modelLoaded);
}

function modelLoaded() {
console.log("Model Loaded !")
}

function draw() {
    video(0 , 0, 300, 300);
    classifier.classify(video, gotResult);
  }
  
  function gotResult(error , results) {
    if (error) {
  console.error(error);
    }
    
    else {
      console.log(results);
      document.getElementOfId("result_face_name").innerHTML= results[0].label;
      
       document.getElementOfId("result_face_accuracy").innerHTML= results[0].confidence.toFixed(3);
    }
  }