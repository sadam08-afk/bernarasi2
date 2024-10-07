function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5Y3xTEJTBgl":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementByld('bgSong');
audio.src="backsound.mp3";
audio.load();
adio.play();
audio.volume=0.5;
}

