import React from 'react'
import Sidebar from './Sidebar'
import CategoryBrand from './CategoryBrand'
import CategoryBook from './CategoryBook'
import BrowseStyle from './BrowseStyle'

export default function LandingPage() {
    return (
        <main>
            <Sidebar />
            <CategoryBrand />
            <CategoryBook />
            <BrowseStyle />
        </main>
    )
}
