import React, { Component } from 'react';

class NewTweets extends Component {
    state = {  }
    render() { 
        const tweets = [
            <div> 
                <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Welcome to MinnMax! This is a place for games, friends, and getting better. Please support us on Patreon so that we can stick together and make some great stuff with the community! <a href="https://t.co/VuOu2mkhym">https://t.co/VuOu2mkhym</a> <a href="https://t.co/hfIVIhqSUt">pic.twitter.com/hfIVIhqSUt</a></p>&mdash; MinnMax (@MinnMaxGames) <a href="https://twitter.com/MinnMaxGames/status/1187430212767756296?ref_src=twsrc%5Etfw">October 24, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>,
            <div>
                <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Died in the first room of Disco Elysium. Off to a good start</p>&mdash; Suriel (@SurielVazquez) <a href="https://twitter.com/SurielVazquez/status/1203359760705146881?ref_src=twsrc%5Etfw">December 7, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
            </div>,
            <div>
                <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Reminder to Minnesotans: We&#39;ll be at <a href="https://twitter.com/BauhausBrewLabs?ref_src=twsrc%5Etfw">@BauhausBrewLabs</a> on Monday at 8pm to meet with you all and talk about games! You don&#39;t need to be a Patreon supporter to swing by, bring a friend or two! <a href="https://t.co/1LTIt5f7JM">https://t.co/1LTIt5f7JM</a></p>&mdash; Ben Hanson (@yozetty) <a href="https://twitter.com/yozetty/status/1203402013939314689?ref_src=twsrc%5Etfw">December 7, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
            </div>
        ]
        return ( 
            <div className='new-tweets'>
                <hr/>
                    {tweets}
                <hr/>
            </div>
         );
    }
}
 
export default NewTweets;