const LocationIcon = ({ size }) => {
    return(
        <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 10.1356C19 17.1356 10 23.1356 10 23.1356C10 23.1356 1 17.1356 1 10.1356C1 7.74864 1.94821 5.45946 3.63604 3.77163C5.32387 2.0838 7.61305 1.13559 10 1.13559C12.3869 1.13559 14.6761 2.0838 16.364 3.77163C18.0518 5.45946 19 7.74864 19 10.1356Z" stroke="#090A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 13.1356C11.6569 13.1356 13 11.7924 13 10.1356C13 8.47874 11.6569 7.13559 10 7.13559C8.34315 7.13559 7 8.47874 7 10.1356C7 11.7924 8.34315 13.1356 10 13.1356Z" stroke="#090A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

const SearchIcon = ({ size }) => {
    return(
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 18.8569L15.15 14.5069M17.5 8.8569C17.5 13.2752 13.9183 16.8569 9.5 16.8569C5.08172 16.8569 1.5 13.2752 1.5 8.8569C1.5 4.43862 5.08172 0.856903 9.5 0.856903C13.9183 0.856903 17.5 4.43862 17.5 8.8569Z" stroke="#090A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

const Icon = ({ name, size = 24 }) => {
    const icons = {
        search: SearchIcon,
        location: LocationIcon,
    }

    const Component = icons[name]
    return <Component size={size} />
}

export {
    Icon
}