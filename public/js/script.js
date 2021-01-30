// defining the varibles for the side bar
let isSideBarOpen = false;
let collapseBtn = document.querySelector('.btn-expand-collapse');
let sideBarElement = document.querySelector('.sidebar-primary');

// Adding event listner to collapse and expand the side bar
collapseBtn.addEventListener('click', ()=>{
  if(isSideBarOpen == false){
    sideBarElement.style.width = "200px";
    isSideBarOpen = true;
    console.log(isSideBarOpen);
  }
  else if(isSideBarOpen == true){
  sideBarElement.style.width = "60px";
  isSideBarOpen = false;
  }
})

