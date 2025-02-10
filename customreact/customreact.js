function customRender(reactelement, container){
    const domElement = document.createElement(reactelement.type)
    domElement.innerHTML = reactelement.sex
    domElement.setAttribute('href', reactelement.props.href)
    domElement.setAttribute('target', reactelement.props.target)
    container.appendChild(domElement)
}



const reactelement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    sex: 'click me to visit google'
}


const maincontainer = document.querySelector('#root')

customRender(reactelement, maincontainer)