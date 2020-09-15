import React from 'react';
import './RightSection.css';
import './PhotoAlbum.css';
import {auth} from './firebase';
function RightSectionBody() {
    
    return (
        <div className='sectionDiv'>
            <table>
                <tr>
                    <td className="sectionDiv__photoHeader">
                        <img
                            className="headerImg"
                            alt="test"
                            src="https://instagram.fblr2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/67310557_649773548849427_4130659181743046656_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net&_nc_ohc=v73TIC1_rmsAX83o52d&oh=c2ddc96ff95a90773b5556d81453bdcf&oe=5F6F19D3"
                        />

                        <div className="profileName">
                            <p className='suggestion__name'>Cristiano Ronaldo</p>
                            <p className='suggestion__status'>New to Instagram</p>
                        </div>

                    </td>

                    <td className='follow'>
                        Follow
                    </td>
                </tr>

                
            </table>
            <table>
                <tr>
                    <td className="sectionDiv__photoHeader">
                        <img
                            className="headerImg"
                            alt="test"
                            src="https://instagram.fblr2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/101507454_280472226465527_3280856793642696704_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net&_nc_ohc=4DmnHSkXXogAX9tCohb&oh=ad2762f5f930dfe87d2e78e4df44a557&oe=5F702957"
                        />

                        <div className="profileName">
                            <p className='suggestion__name'>art_est_dead</p>
                            <p className='suggestion__status'>Followed by bound_by_duty + 1 more</p>
                        </div>

                    </td>

                    <td className='follow'>
                        Follow
                    </td>
                </tr>

                
            </table>
        </div>
    )
}

export default RightSectionBody
