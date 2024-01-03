console.log('hello World')

//& Interfaces

interface Calendar {
    events: string[];
    addEvents(event:string):void
}

class LMSCalendar implements Calendar{
    
    constructor(public events: string[]){

        
    }
    addEvents(events:string):void{
        this.events.push(events)
    }

}

const de07 = new LMSCalendar(['HTML','JS','React'])


de07.events.push('TS')
console.log(de07)

const de08 = new LMSCalendar(['HTML','JS','VueJS'])
console.log(de08)