import React from 'react';
import CollectionItem from '../collection-item/collection-item.component'

import './collection-preview.styles.scss';


const CollectionPreview = ({title, id, items}) => (
    <div key={id} className='collection-preview'>
        <h1 className='title' >{title.toUpperCase()}</h1>
        <div className='preview'>
            {items.filter((curr,index)=>(index < 4)).map(({id, ...otherItemProps}) => (
                <CollectionItem key={id} {...otherItemProps}/>
            ))}
        </div>
    </div>
)

export default CollectionPreview