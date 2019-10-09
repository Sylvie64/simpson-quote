import React from 'react';
import "./QuoteCard.css";

function Quotecard () { 
    return (
        <div>
            <figure class="QuoteCard">
                <img
                src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
                alt="Nelson Muntz">
                </img>    
                <figcaption>
                    <blockquote>
                    Shoplifting is a victimless crime, like punching someone in the dark.
                    </blockquote>
                    <cite>Nelson Muntz</cite>
                </figcaption>
            </figure> 
        </div>
    )
}

export default QuoteCard