function upDate(previewPic)
    {
    document.getElementById('image').innerHTML=previewPic.alt; //previewPic will get "this" variable and so previewPic.alt will point towards the content in alt.
    document.querySelector('#image').style.backgroundImage = "url('" + previewPic.src +"')"; //this url will point towards the src url of this id.
    }
function unDo()
    {
    document.querySelector('#image').style.backgroundImage = "url('')"; //this will again change the url to the original blank.
    document.querySelector('#image').innerHTML="Hover over an image below to display here."; //again change the content to the original data.
    }