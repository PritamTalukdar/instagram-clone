import React from 'react';
import './RightSection.css';
import './PhotoAlbum.css';

function RightSectionHeader() {
    return (
        <>
            <div className='headerDiv'>
                {/* Header of the album */}
                <img
                    className="headerImg"
                    alt="test"
                    src="https://instagram.fblr1-3.fna.fbcdn.net/v/t51.2885-15/e35/54446523_1068830753300846_6692444261054313633_n.jpg?_nc_ht=instagram.fblr1-3.fna.fbcdn.net&_nc_cat=102&_nc_ohc=SfdlHPKeLbIAX8MhqMb&oh=ed67447da7345787c8d0a607187620d9&oe=5F5E5759"
                />
                <div className="profileName">
                    <h4>pritamtalukdar205</h4>
                    <p>Pritam Talukdar</p>
                </div>
            </div>
            <div className='sectionDiv'>
                <table>
                    <tr>
                        <td className="suggestion__for__you">
                            Suggestions For You
                        </td>

                        <td className='see__all'>
                            See All
                        </td>
                    </tr>
                </table>
            </div>
            
        </>

    )
}

export default RightSectionHeader
