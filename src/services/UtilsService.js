export const onOffEffect = (div) => {
    let target = document.getElementById(div);
    if(this.bool){
        target.style.borderColor = 'transparent'
    }else{
        target.style.borderColor = 'red'
    }
    this.bool = !this.bool
}