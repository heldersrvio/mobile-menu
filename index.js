export default function newMobileMenu(doc,
    triggerItemId,
    menuItemsContainerId,
    menuItemsClass,
    returnItemId,
    customization = false,
    menuItemsTapEffect = false,
    animation = false,
    triggerItemBorder = "1pt solid transparent",
    triggerItemBorderRadius = "100%",
    triggerItemBackground = "rgb(192, 192, 192)",
    triggerItemBoxShadow = "none",
    triggerItemColor = "gray",
    triggerItemWidth = "20px",
    triggerItemHeight = "20px",
    triggerItemFont = "sans-serif",
    triggerItemFontSize = "10px",
    triggerItemFontWeight = "bold",
    triggerItemMargin = "10px",
    triggerItemPadding = "0",
    menuItemsContainerBorderWidth = "0 0 0 0",
    menuItemsContainerBorderColor = "transparent",
    menuItemsContainerBorderStyle = "solid",
    menuItemsContainerBorderRadius = "0px 0px 50% 0px",
    menuItemsContainerBackground = "rgb(192, 192, 192)",
    menuItemsContainerWidth = "100%",
    menuItemsContainerHeight = "90%",
    menuItemsContainerMargin = "0px",
    menuItemsContainerBoxShadow = "0px 50px rgb(220, 220, 220)",
    menuItemsBackground = "transparent",
    menuItemsColor = "gray",
    menuItemsHeight = "60px",
    menuItemsFont = "sans-serif",
    menuItemsFontSize = "15px",
    menuItemsFontWeight = "bold",
    menuItemsPadding = "auto",
    menuItemsTapBackground = "black",
    menuItemsTapColor = "white",
    transition = "height 0.35s ease-in-out",
    returnItemBorder = "1pt solid transparent",
    returnItemBorderRadius = "100%",
    returnItemBackground = "rgb(192, 192, 192)",
    returnItemBoxShadow = "none",
    returnItemColor = "gray",
    returnItemWidth = "20px",
    returnItemHeight = "20px",
    returnItemFont = "sans-serif",
    returnItemFontSize = "10px",
    returnItemFontWeight = "bold",
    returnItemMargin = "10px",
    returnItemPadding = "0",
    ) {
    const triggerItem = doc.querySelector(`#${triggerItemId}`);
    const menuItemsContainer = doc.querySelector(`#${menuItemsContainerId}`);
    const menuItems = doc.querySelectorAll(`.${menuItemsClass}`);
    const returnItem = doc.querySelector(`#${returnItemId}`);

    function getFirstChild(node){
        var firstChild = node.firstChild;
        while (firstChild != null && firstChild.nodeType == 3) {
            firstChild = firstChild.nextSibling;
        }
        return firstChild;
    }

    function switchView(){
        if (menuItemsContainer.style.height !== '0px') {
            menuItemsContainer.style.height = '0px';
        }else {
            menuItemsContainer.style.height = menuItemsContainerHeight;
        }
        triggerItem.hidden = !triggerItem.hidden;
        returnItem.hidden = !returnItem.hidden;
    }

    returnItem.hidden = true;
    triggerItem.addEventListener('click', () => {
        switchView();
    });
    returnItem.addEventListener('click', () => {
        switchView();
    });

    if (customization) {
        getFirstChild(triggerItem).style.cssText = `
            cursor: pointer;
            border-radius: ${triggerItemBorderRadius};
            border: ${triggerItemBorder};
            box-shadow: ${triggerItemBoxShadow};
            color: ${triggerItemColor};
            background: ${triggerItemBackground};
            width: ${triggerItemWidth};
            height: ${triggerItemHeight};
            font-family: ${triggerItemFont};
            font-size: ${triggerItemFontSize};
            font-weight: ${triggerItemFontWeight};
            margin: ${triggerItemMargin};
            padding: ${triggerItemPadding};
        `;
        getFirstChild(returnItem).style.cssText = `
            cursor: pointer;
            border-radius: ${returnItemBorderRadius};
            border: ${returnItemBorder};
            box-shadow: ${returnItemBoxShadow};
            color: ${returnItemColor};
            background: ${returnItemBackground};
            width: ${returnItemWidth};
            height: ${returnItemHeight};
            font-family: ${returnItemFont};
            font-size: ${returnItemFontSize};
            font-weight: ${returnItemFontWeight};
            margin: ${returnItemMargin};
            padding: ${returnItemPadding};
        `;
        menuItemsContainer.style.cssText = `
            display: flex;
            flex-direction: column;
            background: ${menuItemsContainerBackground};
            box-shadow: ${menuItemsContainerBoxShadow};
            border-width: ${menuItemsContainerBorderWidth};
            border-color: ${menuItemsContainerBorderColor};
            border-style: ${menuItemsContainerBorderStyle};
            border-radius: ${menuItemsContainerBorderRadius};
            width: ${menuItemsContainerWidth};
            height: 0px;
            margin: ${menuItemsContainerMargin};
        `;
        if (animation) {
            menuItemsContainer.style.transition = transition;
        }
        menuItems.forEach((item) => {
            item.style.cssText = `
                cursor: pointer;
                border: none;
                background: ${menuItemsBackground};
                color: ${menuItemsColor};
                width: 100%;
                height: ${menuItemsHeight};
                font-family: ${menuItemsFont};
                font-size: ${menuItemsFontSize};
                font-weight: ${menuItemsFontWeight};
                padding: ${menuItemsPadding};
            `;
            if (menuItemsTapEffect) {
                item.addEventListener('click', () => {
                    item.style.background = menuItemsTapBackground;
                    item.style.color = menuItemsTapColor;
                    setTimeout(() => {
                        item.style.background = menuItemsBackground;
                        item.style.color = menuItemsColor;
                    }, 80);
                });
            }
        });
    }
}