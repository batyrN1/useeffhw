import React, { useState } from 'react';
import '../Cards/Card.scss'

// import img1 from '../../assets/dress.png'
// import img2 from '../../assets/kub.png'
// import img3 from '../../assets/leon.png'

const product = [
    {
        id: 1,
        img: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE-1200x800.jpg',
        title: 'Strawberry Midi Dress',
        desc: 'The perfect head turner dress featured by a midi dress silhouette covered in glittery strawberries. The tie up detail and the puffy sleeves make the dress even more fabulous. The dresses length from waist down is 33 inches. Made of 100% polyamide tulle, pvc glitter, environmental protection glue.',
        price: 490.00
    },
    {
        id: 2,
        img: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE-1200x800.jpg',
        title: 'LEON DRESS',
        desc: 'The Leon Dress is soon to be a Palm favourite. Crafted in 100% Cotton, this midi features an elegant square neckline with a statement frill and a 5 tiered free flowing skirt. Destined for a well-loved wardrobe, the Leon is an event show stopper.',
        price: 400.00
    },
    {
        id: 3,
        img: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE-1200x800.jpg',
        title: 'KUB DRESS',
        desc: 'The Kub Dress is a true mini dress, featuring a shirred elasticated bust, waist ties and dramatic blouson sleeves. Made with lightweight cotton poplin, this party piece will steal the show.',
        price: 340.00
    },
]

const Card = () => {

    const [add, setAdd] = useState(0)
    function handleClick() {
        setAdd(prevAdd => prevAdd + 1)
    }
    function handleClickTwo() {
        setAdd(pAdd => pAdd - 1)
        setAdd(add < 1 ? add : add - 1)
    }
    return (

        product.map((i) => {
            return (
                <div className='card'>
                    <div className="block_title">
                        <img src={i.img} alt="" />
                        <p>
                            {i.title}
                        </p>
                        <p className="desc">
                            {i.desc}
                        </p>
                        <p className="price">
                            {i.price} USD
                        </p>
                        <div className="for-btns">
                        <button onClick={handleClick}>
                            +
                        </button>
                        <button onClick={handleClickTwo}>
                            -
                        </button>
                        </div>
                        <div className="">
                        <p>
                            Избранное: {add}
                        </p>
                        </div>
                    </div>
                </div>
            )
        })
    )

}




export default Card;
