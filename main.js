function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/CGkeMHgyJ/model.json", model_ready)
}

function model_ready() {
    classifier.classify(gotResults)
}

function gotResults(error, results) {
    console.log("gotResult")
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        random_r = Math.floor(Math.random() * 255) + 1
        random_g = Math.floor(Math.random() * 255) + 1
        random_b = Math.floor(Math.random() * 255) + 1
        document.getElementById("result_label").innerHTML = "I can hear-" + results[0].label;
        document.getElementById("result_count").innerHTML = "Detected voice is of-" + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + random_r + "," + random_g + "," + random_b + ")"
    document.getElementById("result_count").style.color = "rgb(" + random_r + "," + random_g + "," + random_b + ")"
        img = document.getElementById("kitty")
        img1 = document.getElementById("husky")
        
        if (results[0].label == "Bark") {
            img1.src = "husky.jpeg"
            
        } else  {
           img.src= "kitty'.png" 
        }
    }
}