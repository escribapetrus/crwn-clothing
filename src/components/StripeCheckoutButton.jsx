import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

function StripeCheckoutButton({price}) {
    const priceConvert = price * 100;
    const publishableKey = process.env.REACT_APP_STIPE_PUBKEY
    const onToken = token => {
        console.log(token);
        alert('payment successful')
    }
    return (
            <StripeCheckout
                label='pay now' 
                name='CRWN Clothing Ltd.' 
                billingAddress='' 
                shippingAddress='' 
                image='https://svgshare.com/i/CUz.svg' 
                description={`your total is $${price}`} 
                amount={priceConvert}
                panelLabel='pay now' 
                token={onToken} 
                stripeKey={publishableKey}
            />
    )
}

export default StripeCheckoutButton
