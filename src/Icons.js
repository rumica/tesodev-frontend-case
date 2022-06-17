const ArrowIcon = () => {
    return (
        <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.939453 10.9392C0.353604 11.5249 0.353503 12.4747 0.939228 13.0605L10.4842 22.6075C11.0699 23.1933 12.0196 23.1934 12.6055 22.6077C13.1913 22.022 13.1914 21.0722 12.6057 20.4864L4.12132 12.0002L12.6075 3.51583C13.1934 2.93011 13.1935 1.98036 12.6077 1.39451C12.022 0.808661 11.0723 0.80856 10.4864 1.39428L0.939453 10.9392ZM28.0002 10.5027L2.00016 10.5L1.99984 13.5L27.9998 13.5027L28.0002 10.5027Z" fill="#484848"/>
        </svg>
    )
}

const LocationIcon = ({ size }) => {
    return(
        <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 10.1356C19 17.1356 10 23.1356 10 23.1356C10 23.1356 1 17.1356 1 10.1356C1 7.74864 1.94821 5.45946 3.63604 3.77163C5.32387 2.0838 7.61305 1.13559 10 1.13559C12.3869 1.13559 14.6761 2.0838 16.364 3.77163C18.0518 5.45946 19 7.74864 19 10.1356Z" stroke="#090A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 13.1356C11.6569 13.1356 13 11.7924 13 10.1356C13 8.47874 11.6569 7.13559 10 7.13559C8.34315 7.13559 7 8.47874 7 10.1356C7 11.7924 8.34315 13.1356 10 13.1356Z" stroke="#090A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

const SearchIcon = ({ size }) => {
    return(
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 18.8569L15.15 14.5069M17.5 8.8569C17.5 13.2752 13.9183 16.8569 9.5 16.8569C5.08172 16.8569 1.5 13.2752 1.5 8.8569C1.5 4.43862 5.08172 0.856903 9.5 0.856903C13.9183 0.856903 17.5 4.43862 17.5 8.8569Z" stroke="#090A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}


const Icon = ({ name, size = 24 }) => {
    const icons = {
        arrow: ArrowIcon,
        search: SearchIcon,
        location: LocationIcon,
    }

    const Component = icons[name]
    return <Component size={size} />
}

export {
    Icon
}