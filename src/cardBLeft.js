import React,{Component} from 'react'
import './weather.scss';
import './cardBLeft.scss';
class TwitterFeed extends Component{
    constructor(props){
        super(props)
        this.state={
            location:'AU',
            twitter:[{propho:"👩‍🚀",content:"Do not forget your umbrella forever! "},{propho:"👩‍🎨",content:"Amazing weather in Austrilia!"}]
        }
    }

    render(){
        return (
            <div className="card__bleft">
                
                <div className="card__bleft-twitterTitle">
                    <div className="card__bleft-twitterTitle-twitterlogo"></div>
                    <h3>Twitter Feed <span>📍{this.state.location}</span></h3>
                </div>
                {this.state.twitter.map(
                    (item,index)=><div key={index} className="card__bleft-twitterContent">
                        <div className="card__bleft-twitterContent-prophoto">{item.propho}</div>
                        <div className="card__bleft-twitterContent-content">{item.content}</div>
                    </div>
                )}
                <div className="card__bleft-next">N E X T <div className="nexticon"></div></div>
                <div className="card__bleft-line"></div>
            </div>
        )
    }
}
export default TwitterFeed;