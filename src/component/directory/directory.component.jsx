import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

class Directory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: [
                {
                    title: 'HATS',
                    imgUrl: 'https://images.freeimages.com/images/large-previews/58d/skull-hat-1433620.jpg',
                    id: 1,
                    size: 'small',
                    linkUrl: 'hats'
                }, {
                    title: 'JACKETS',
                    imgUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    size: 'small',
                    linkUrl: ''
                }, {
                    title: 'SNEAKERS',
                    imgUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png/',
                    id: 3,
                    size: 'small',
                    linkUrl: ''
                }, {
                    title: 'WOMEN',
                    imgUrl: 'https://i.ibb.co/GCCdy8t/womens.png/',
                    id: 4,
                    size: 'large',
                    linkUrl: ''
                }, {
                    title: 'MEN',
                    imgUrl: 'https://image.shutterstock.com/image-photo/handsome-man-suit-shopping-bags-600w-223179655.jpg',
                    id: 5,
                    size: 'large',
                    linkUrl: ''
                }
            ]
        }
    }
    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ id, ...otherSectionProps }) => <MenuItem key={id} {...otherSectionProps} />)}
            </div>
        );
    }
}
export default Directory;