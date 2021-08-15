// Import Component
import Landing from "../pages/Landing/Landing"
import Weekly from "../pages/Weekly/Weekly"
import Category from "../pages/Category/Category"

// buat return {label,path,component} yang bakal di ambil di App.js
const route = (label, path, component) => ({
    label,
    path,
    component
})

// Bikin route
export const LANDING_PAGE = route('Landing', '/', Landing)
export const WEEKLY_PAGE = route('Weekly Top', '/weekly', Weekly)
export const CATEGORY_PAGE = route('Category', '/category', Category)
//Misal nanti ada page ini:

// yang gak bisa diakses tanpa authentication
export const AllPrivateRoutes = [

]

export const AllOpenRoutes = [
    LANDING_PAGE,
    WEEKLY_PAGE,
    CATEGORY_PAGE,
]

