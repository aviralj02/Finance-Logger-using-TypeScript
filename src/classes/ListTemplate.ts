import { HasFormatter } from "../interfaces/HasFormatter.js"

export class ListTemplate{
    private container: HTMLUListElement

    constructor(c: HTMLUListElement){
        this.container = c
    }

    render(item: HasFormatter, heading: string, pos: 'start' | 'end'){
        const li = document.createElement('li')

        const h4 = document.createElement('h4')
        h4.innerText = heading
        li.append(h4)

        const p = document.createElement('p')
        p.innerText = item.format()    //item will be either Invoice or Payment and both implements HasFormatter interface
        li.append(p)
        
        if (pos === 'start'){
            this.container.prepend(li)
        }
        else{
            this.container.append(li)
        }
    }
}