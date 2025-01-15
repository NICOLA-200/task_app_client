import { createSlice } from "@reduxjs/toolkit";



interface controllers {
    showMenu: boolean

}

const initialState: controllers = {
     showMenu: true
}


const  controllerSlice = createSlice({
    name: "controller",
    initialState,
    reducers: {
        toggleMenu : (state) => {
            state.showMenu =  !state.showMenu
        }
    }


})

export  const {toggleMenu} = controllerSlice.actions;

export default controllerSlice.reducer;