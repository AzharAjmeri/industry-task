$(document).ready(function(){
    $("#load-data").click(function(){
        $.ajax({
            url: "json_data/task.json",
            success: function(data){
                $.each(data['tasks'], function(i, task){
                    $('#' + task.status).append(`
                        <div id="${i}" class="card">
                            <button class="btn btn-danger" onClick="removeCard(${i})">X</button>
                            <div class="title">${task.title}</div>
                        </div>
                    `);
                });
            }
        });
    });
});
function removeCard(x){
    $('#' + x).remove();
}

function removeData(){
    $(".card").remove();
}

// ***************************************************
// Custom Slider => (classname, time)
// ***************************************************
customSlider("slider-container", 1000);
customSlider("slider-container-2", 2000);
customSlider("slider-container-3", 3000);

function customSlider(slideContainerString, timer){
    var slideContainer = document.getElementsByClassName(slideContainerString)[0];
    slideContainer.style.position = "relative";
    slideContainer.style.overflow = "hidden";

    var activeSlide = slideContainer.querySelector('.active');
    // Container width
    var elements = activeSlide.children;
    var totalHeight = 0;
    for (var j = 0; j < elements.length; j++) {
        totalHeight = totalHeight + elements[j].clientHeight;
    }
    activeSlide.parentElement.style.height = totalHeight+"px";

    setTimeout(function() {
        sliderController(slideContainer.children, 0, timer);
    }, timer);
}

// Recursive function for infinite sliding
function sliderController(slides, sliderIndex, timer){
    slides[sliderIndex].classList.remove("active");
    sliderIndex++;
    if(sliderIndex >= slides.length){
        sliderIndex = 0
    }
    // Container width
    var elements = slides[0].children, i;
    var totalHeight = 0;
    for (i = 0; i < elements.length; i++) {
        totalHeight = totalHeight + elements[i].clientHeight;
    }
    slides[i].parentElement.style.height = totalHeight+"px";
    slides[sliderIndex].classList.add("active");
    setTimeout(function() {
        sliderController(slides, sliderIndex, timer);
    }, timer);
}