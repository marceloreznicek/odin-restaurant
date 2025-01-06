// Export compiled function
//get DOM elements

// Add new elements

//remove existing DOM elements
export {buildPage1}

function buildPage1() {
    addNewElements()
}

function addNewElements()    {
    const containerDiv = document.querySelector("#main-content")   
    
    const divSubContainer = document.createElement("div")
    divSubContainer.classList.add("sub-container")

    const titleSubC = document.createElement("h2")
    titleSubC.textContent = "Where tradition never dies"
    divSubContainer.appendChild(titleSubC)

    containerDiv.appendChild(divSubContainer)

    const contentSubC = document.createElement("p")
    contentSubC.textContent = `Here at our establishment, we take pride in our strict hiring policy: if you haven't lived through at least three wars and can't tell stories about "the old country" that make absolutely no historical sense, you're not touching our dough. Our pasta artisans must present both a birth certificate and at least seven grandchildren's photos before they're allowed near our kitchen. Our head chef, Nonna Maria (aged 92), leads our elite team of octogenarian pasta-makers, each one carefully selected based on their ability to criticize everyone else's cooking while simultaneously claiming their own recipe is "just a simple thing I threw together." Every strand of spaghetti is lovingly crafted by hands that have spent decades perfecting the art of pinching cheeks and force-feeding relatives. WARNING: Our menu prices are subject to change based on how many times our staff needs to stop and tell you about their youth in Sicily, even though historical records show they've never left New Jersey.`
    divSubContainer.appendChild(contentSubC)

    // part 2

    const divSubContainer2 = document.createElement("div")
    divSubContainer2.classList.add("sub-container")

    const titleSubC2 = document.createElement("h2")
    titleSubC2.textContent = "Other relevant information"

    divSubContainer2.appendChild(titleSubC2)

    const contentSubC2 = document.createElement("p")
    contentSubC2.textContent = `Our most notable features are:`
    divSubContainer2.appendChild(contentSubC2)

    const contentSubC2List = document.createElement("ul")

    const listItemContent = [`All pasta making visible through our "Nonna Window," where you can watch our elderly artisans argue about whose village had the hardest life`,
        `Complimentary guilt trips with every meal`,
        `Background music exclusively consisting of Dean Martin (because that's "real Italian music")`,
        `Every dish comes with a side of unsolicited marriage advice`
    ]

    listItemContent.forEach(item => {
        const listItem = document.createElement("li")
        listItem.textContent = item
        contentSubC2List.appendChild(listItem)
    })

    divSubContainer2.appendChild(contentSubC2List)

    containerDiv.appendChild(divSubContainer2)
    
}