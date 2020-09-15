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
                    src="https://instagram.fblr2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/14072784_170196866737037_1649096564_a.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net&_nc_ohc=Ov0UFA5nzVMAX-Gp-OS&oh=6d4ccb6067034c0f13290e1e1063ea60&oe=5F724048"
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
