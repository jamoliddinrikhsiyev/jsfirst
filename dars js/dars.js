function myConverter (boo, foo) {
    if(foo == "str"){
        return boo + ""
    }
	else if(foo == "num"){
		return boo * 1
	}
	else if(foo == "bool"){
		return !!boo
	}
	else if(foo == "emp"){
		return null
	}
	else if(foo == "und"){
		return undefined
	}
	else{
		return undefined
	}

}

let body = document.querySelector('body')
let heading = document.createElement('h1')
let heading1 = document.createElement('h2')
let readMe = document.createElement('p')
readMe.textContent = "e.g: console.log(myConverter(1, true)) birinchi-qiymat: xar qnday qiymat; ikkinchi-qiymat : 'num', 'str', 'bool', 'emp', 'und';"
readMe.style.cssText = `
color: grey;
font-size: 20px;
text-align: center;
`
body.prepend(readMe)
heading.textContent = "Assalomu alaykum"
heading1.textContent = "Hello World"
body.prepend(heading1)
body.prepend(heading)
body.style.cssText = `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: linear-gradient(45deg, magenta, blue);
background-repeat: no-repeat;
background-size: 100vw 100vh;
font-family: "Arial", sans-serif;
font-size: 48px;
`
heading1.style.color = "white"