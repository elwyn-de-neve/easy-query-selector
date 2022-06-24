const $ = (q) => {
    const el = document.querySelectorAll(q)
    if (el.length > 1) {
        return el
    } else if (el.length === 1){
        return el[0]
    }
}

$("#btn").innerText = "Submit"
$(".test").innerText = "Submit"