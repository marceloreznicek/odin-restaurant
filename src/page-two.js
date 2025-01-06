export {buildPage2}

const menuItems = [
    {
        name: "Nonna Maria's Rigatoni Rebellion",
        description: "Hand-crafted by our 89-year-old pasta expert who fought in the Great Pasta Wars of '52. Each rigatoni is perfectly shaped by arthritic fingers that refuse to give up their craft.",
        price: 24.95
    },
    {
        name: "The Centenarian's Carbonara",
        description: "Our eldest chef (104) insists on making this at dawn because 'that's when the eggs know their purpose.' We don't argue with someone who's been making carbonara longer than Italy has been a unified country.",
        price: 28.50
    },
    {
        name: "Widow's Revenge Ravioli",
        description: "Stuffed with a secret recipe that Nonna Lucia (92) claims caused her third husband to spontaneously propose. Warning: we are not legally responsible for any marriages that occur after consuming this dish.",
        price: 26.95
    },
    {
        name: "Arthritis-Approved Agnolotti",
        description: "Each tiny pasta pocket is pinched closed by fingers that have spent 80+ years perfecting the art. Our chefs claim the joint pain adds extra flavor - who are we to disagree?",
        price: 27.95
    },
    {
        name: "The Eternal Grandmother's Lasagna",
        description: "Layered by our 95-year-old sauce master who refuses to write down the recipe because 'her memory is still perfect.' Each slice comes with a mandatory 20-minute story about how ingredients were better in the old days.",
        price: 29.95
    },
    {
        name: "Retirement Home Risotto",
        description: "Stirred continuously for 6 hours by our rotating team of octogenarians who use this time to debate whose grandchildren are more ungrateful. The bitterness of their discussions adds an unexplainable umami to the dish.",
        price: 32.95
    },
    {
        name: "Penne alla Pensione",
        description: "Each tube of pasta is carefully inspected by our 88-year-old quality control expert who insists on using her bifocals from 1972. She claims modern glasses 'just don't see pasta the same way.'",
        price: 25.95
    },
    {
        name: "The Social Security Spaghetti",
        description: "Prepared by our most senior chef (97) who refuses to retire because 'these young 80-year-olds don't know real pasta.' Comes with a side of complaints about modern cooking techniques.",
        price: 23.95
    }
 ];

function buildPage2() {
    addNewElements()
}

function addNewElements()    {
    const containerDiv = document.querySelector("#main-content")   
    
    const divSubContainer = document.createElement("div")
    divSubContainer.classList.add("sub-container")
    containerDiv.appendChild(divSubContainer)

    const titleSubC = document.createElement("h2")
    titleSubC.textContent = "Our Menu"
    divSubContainer.appendChild(titleSubC)

    // Add menu div
    const menuContainer = document.createElement("div")
    menuContainer.id = "menu-container"
    divSubContainer.appendChild(menuContainer)



    menuItems.forEach(item => {
        const divItem = document.createElement("div")
        divItem.classList.add("menu-item")

        const divItemName = document.createElement("div")
        divItemName.classList.add("menu-item-name")
        divItemName.textContent = item.name
        
        const divItemDesc = document.createElement("div")
        divItemDesc.classList.add("menu-item-desc")
        divItemDesc.textContent = item.description

        const divItemPrice = document.createElement("div")
        divItemPrice.classList.add("menu-item-price")
        divItemPrice.textContent = "$" + item.price
        
        divItem.appendChild(divItemName)
        divItem.appendChild(divItemDesc)
        divItem.appendChild(divItemPrice)

        menuContainer.appendChild(divItem)

    })


}