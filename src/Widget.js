import { FiberManualRecord, Info } from '@material-ui/icons'
import React from 'react'
import './Widget.css'

function Widget() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecord />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <Info />
            </div>
            {newsArticle("Linkedin Clone using React.js", "Tech news - 5000 readers")}
            {newsArticle("Amazon Clone using React.js", "Tech news - 5000 readers")}
            {newsArticle("Whatsapp Clone using React.js", "Tech news - 5000 readers")}
            {newsArticle("Netflix Clone using React.js", "Tech news - 5000 readers")}
            {newsArticle("Spotify Clone using React.js", "Tech news - 5000 readers")}
        </div>

    )
}

export default Widget;