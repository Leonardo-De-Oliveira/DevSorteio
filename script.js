function draw() {
    let min = Math.ceil(document.getElementById("value_1").value)
    let max = Math.floor(document.getElementById("value_2").value)

    let result = Math.floor(Math.random() * (max - min) + min)

    document.querySelector(".result").innerHTML = result

}