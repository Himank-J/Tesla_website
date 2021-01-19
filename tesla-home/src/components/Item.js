import { ExpandMore } from '@material-ui/icons'
import React from 'react'
import Button from './Button.js'
import './Item.css'

const Item = ({title,desc,backgroundImg,leftbtntxt,leftbtnlink,rightbtntxt,rightbtnlink,twobuttons,first}) => {
    return (
        <div className='item' style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
            <div className='item__container'>
                <div className='item__text'>
                    <p>{title}</p>
                    <div className='item__textdescp'>
                        <p>{desc}</p>
                    </div>
                </div>
                <div className='item__lowerthird'>
                    <div className='item__buttons'>
                        <Button imp='primary' text={leftbtntxt} link={leftbtnlink} />

                        {twobuttons && (
                                <Button imp='secondary' text={rightbtntxt} link={rightbtnlink} />
                            )
                        }
                    </div>
                    {first && (
                        <div className='item__expand'>
                            <ExpandMore />
                        </div> 
                    )}
                </div>
            </div>
            
        </div>
    )
}

export default Item


