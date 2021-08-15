// Import Component
import Landing from "../pages/Landing/Landing"

// buat return {label,path,component} yang bakal di ambil di App.js
const route = (label, path, component) => ({
    label,
    path,
    component
})

// Bikin route
export const LANDING_PAGE = route('Landing', '/', Landing)
//Misal nanti ada page ini:

// yang gak bisa diakses tanpa authentication
export const AllPrivateRoutes = [

]

export const AllOpenRoutes = [
    LANDING_PAGE,
]

