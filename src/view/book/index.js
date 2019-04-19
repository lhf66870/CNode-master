import React, {Component} from "react"
import data from './data'
import PublicCard from '../public/public_card'
class Book extends Component {
    render (){
        return <PublicCard data={data} />
    }
}

export default Book;