
const randomColorGenerator=()=>{
    const randomNum=(max)=>{
        return Math.floor(Math.random()*max)
    }
    return `rgb(${randomNum(255)},${randomNum(255)},${randomNum(255)})`
}
const ProfilePicGen = (size,name) => {
  const canvas=document.createElement("canvas")
  const context=canvas.getContext("2d")
  size="400"
  name="H"
  canvas.width=canvas.height=size

  context.fillStyle="#ffffff"
  context.fillRect(0,0,size,size)

  context.fillStyle=randomColorGenerator()
  context.fillRect(0,0,size,size)

  context.fillStyle="white"
  context.textBaseline="middle"
  context.textAlign="center"
  context.font=`${size/2}px Roboto`
  context.fillText(name,(size/2),(size/2))
  console.log(canvas);
  return canvas.toDataURL()
}

export default ProfilePicGen