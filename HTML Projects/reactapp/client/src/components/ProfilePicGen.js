
const randomColorGenerator=()=>{
    const randomNum=(max)=>{
        return Math.floor(Math.random()*max)
    }
    return `rgb(${randomNum(255)},${randomNum(255)},${randomNum(255)})`
}
const nameInitials=(name)=>{
  if (name){
    return name.slice(0,1)
  }
}
const ProfilePicGen = (username) => {
  const canvas=document.createElement("canvas")
  const context=canvas.getContext("2d")
  let size="400"
  let initial=nameInitials(username)
  canvas.width=canvas.height=size

  context.fillStyle="#ffffff"
  context.fillRect(0,0,size,size)

  context.fillStyle=randomColorGenerator()
  context.fillRect(0,0,size,size)

  context.fillStyle="white"
  context.textBaseline="middle"
  context.textAlign="center"
  context.font=`${size/2}px Roboto`
  context.fillText(initial,(size/2),(size/2))
  return canvas.toDataURL()
}

export default ProfilePicGen