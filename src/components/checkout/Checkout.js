import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../appContext/App.context';

import Footer from '../footer/Footer';
import CheckoutModal from '../modal/CheckoutModal';
import CheckoutMessage from './CheckoutMessage';

import { formatName } from '../utility/utilityFunctions';
import { formatPrice } from '../utility/utilityFunctions';


const Checkout = () => {

    const { cartItems, itemsPrice, taxPrice, shippingPrice, grandTotalPrice } = useContext(AppContext)

    const [checkoutModalActive, setCheckoutModalActive] = useState(false)


    const [inputs, setInputs] = useState({
        userName: '',
        userEmail: '',
        userPhoneNumber: '',
        userAddress: '',
        userZipCode: '',
        userCity: '',
        userCountry: '',
        paymentMethod: 'e-money',
        eMoneyNumber: '',
        eMoneyPin: '',
    });

    const [errors, setErrors] = useState({
        userName: false,
        userEmailFormat: false,
        userEmailField: false,
        userAdress: false,
        userZipCode: false,
        usereMoneyNumber: false,
        usereMoneyPin: false,
    })

    const messages = {
        email_incorect: 'Wrong format',
        field_required: 'Field required'
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}))
        
      }

      const showModal = () => {
        setCheckoutModalActive(true)
        srcollToTop()
    }

      const srcollToTop = () => {
        window.scrollTo(0, 0);
    }

    const handleSubmit= (e) => {
        e.preventDefault()

        const validation = formValidation();

        

        if(validation.correct) {
            setInputs({
                userName: '',
                userEmail: '',
                userPhoneNumber: '',
                userAddress: '',
                userZipCode: '',
                userCity: '',
                userCountry: '',
                paymentMethod: 'e-money',
                eMoneyNumber: '',
                eMoneyPin: '',
            })

            setErrors({
                userName: false,
                userEmailFormat: false,
                userEmailField: false,
                userAdress: false,
                userZipCode: false,
                usereMoneyNumber: false,
                usereMoneyPin: false,
            })

            srcollToTop();
            showModal();

            
        } else {
            setErrors({
                userName: !validation.userName,
                userEmailFormat: !validation.userEmailFormat,
                userEmailField: !validation.userEmailField,
                userAdress: !validation.userAdress,
                userZipCode: !validation.userZipCode,
                usereMoneyNumber: !validation.usereMoneyNumber,
                usereMoneyPin: !validation.usereMoneyPin,
            })
        }
        
    }

    const formValidation = () => {
        let userName = false;
        let userEmailFormat = true;
        let userEmailField= false;
        let userAdress = false;
        let userZipCode = false;
        let usereMoneyNumber = false;
        let usereMoneyPin = false;
        let correct = false;

        if(inputs.userName.length > 0){
            userName =  true
        }
        if(inputs.userEmail.length > 0){
            userEmailField =  true
        }
        if(inputs.userEmail.length > 0 && inputs.userEmail.indexOf('@') === -1) {
            userEmailFormat =  false
        }

        if(inputs.userAddress.length > 0) {
            userAdress = true
        }
        if(inputs.userZipCode.length > 0) {
            userZipCode = true
        }
        if(inputs.paymentMethod === 'e-money') {
            if(inputs.eMoneyNumber.length > 0) {
                usereMoneyNumber = true
            }
            if(inputs.eMoneyPin.length > 0) {
                usereMoneyPin = true
            }
        } else {
            usereMoneyNumber = true;
            usereMoneyPin = true
        }

        if(userName && userEmailFormat && userEmailField && userAdress && userZipCode && usereMoneyNumber && usereMoneyPin) {
            correct = true
        }  

        return ({
            userName,
            userEmailFormat,
            userEmailField,
            userAdress,
            userZipCode,
            usereMoneyNumber,
            usereMoneyPin,
            correct,
        })
    }

    const handleClick = (e) => {
        const inputs = document.querySelectorAll('.checkout-wrapper input');
        for(let i = 0; i < inputs.length; i++) {
            inputs[i].classList.remove('active')
        }
        e.target.className = 'active'
    }
    return ( 
        <div>
        <div className='checkout-page-container'>
            
            <Link className='go-back-link' to='/'>Go Back</Link>
            <form onSubmit={handleSubmit}>
                <div className='checkout-wrapper'>
                <h2>Checkout</h2>
                    <div className='billing-details'>
                        <h3 className='sub-title'>billing details</h3>
                        <div className='input-wrapper'>
                            <label className={errors.userName ? 'error' : undefined}htmlFor='nameInput'>Name {errors.userName && <span className='error-message'>{messages.field_required}</span>}</label>
                            <input className={errors.userName ? 'error' : undefined}
                                onClick={(e) => {handleClick(e)}}
                                type='text'
                                name='userName'
                                value={inputs.userName || ''}
                                onChange={handleChange}
                                id='nameInput'
                                placeholder='Alexi Ward'
                            />
                        </div>
                        <div className='input-wrapper'>
                            <label className={errors.userEmailFormat ? 'error' : undefined || errors.userEmailField ? 'error' : undefined} htmlFor='emailInput'>Email Address 
                            {errors.userEmailFormat && <span className='error-message'>{messages.email_incorect}</span>}
                            {errors.userEmailField && <span className='error-message'>{messages.field_required}</span>}
                            
                            </label>
                            <input className={errors.userEmailFormat ? 'error' : undefined || errors.userEmailField ? 'error' : undefined}
                                onClick={(e) => {handleClick(e)}}
                                type='text'
                                name='userEmail'
                                value={inputs.userEmail || ''}
                                onChange={handleChange}
                                id='emailInput'
                                placeholder='alexei@email.com'
                            />
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor='phoneInput'>Phone Number</label>
                            <input 
                                onClick={(e) => {handleClick(e)}}
                                type='number'
                                name='userPhoneNumber'
                                value={inputs.userPhoneNumber || ''}
                                onChange={handleChange}
                                id='phoneInput'
                                placeholder='+1202-555-0136'
                            />
                        </div>
                    </div>
                    <div className='shipping-info-wrapper'>
                        <h3 className='sub-title'>Shipping info</h3>
                        <div className='input-wrapper user-adres-input-wrapper'>
                            <label htmlFor='addressInput' className={errors.userAdress ? 'error' : undefined}>Your Addres
                                {errors.userAdress && <span className='error-message'>{messages.field_required}</span>}
                            </label>
                            <input className={errors.userAdress ? 'error' : undefined}
                                onClick={(e) => {handleClick(e)}}
                                type='text'
                                name='userAddress'
                                value={inputs.userAddress || ''}
                                onChange={handleChange}
                                id='addressInput'
                                placeholder='1137 Williams Avenue'
                            />
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor='zipCodeInput' className={errors.userZipCode ? 'error' : undefined}>Zip Code
                                {errors.userZipCode && <span className='error-message'>{messages.field_required}</span>}
                            </label>
                            <input className={errors.userZipCode ? 'error' : undefined}
                                onClick={(e) => {handleClick(e)}}
                                type='text'
                                name='userZipCode'
                                value={inputs.userZipCode || ''}
                                onChange={handleChange}
                                id='zipCodeInput'
                                placeholder='10001'
                            />
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor='cityInput'>City</label>
                            <input 
                                onClick={(e) => {handleClick(e)}}
                                type='text'
                                name='userCity'
                                value={inputs.userCity || ''}
                                onChange={handleChange}
                                id='cityInput'
                                placeholder='New York'
                            />
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor='countryInput'>Country</label>
                            <input 
                                onClick={(e) => {handleClick(e)}}
                                type='text'
                                name='userCountry'
                                value={inputs.userCountry || ''}
                                onChange={handleChange}
                                id='countryInput'
                                placeholder='United States'
                            />
                        </div>
                    </div>
                    <div className='payment-details-wrapper'>
                    <h2 className='sub-title'>Payment details</h2>
                    <div className='input-wrapper'>
                            <h4 className='payment-method-title'>payment method</h4>
                            <div className='payment-method-inputs-wrapper'>
                                <label  className={ inputs.paymentMethod === 'e-money' ? 'payment-method-label active' :'payment-method-label'}
                                htmlFor='eMoneyInput'>
                                    <input 
                                        type='radio'
                                        defaultChecked
                                        onChange={handleChange}
                                        id='eMoneyInput'
                                        value='e-money'
                                        name='paymentMethod'
                                    />
                                e-Money</label>
                                <label className={ inputs.paymentMethod === 'cash on delivery' ? 'payment-method-label active' :'payment-method-label'} htmlFor='cashOnDeliveryInput' >
                                    <input 
                                        type='radio'
                                        onChange={handleChange}
                                        id='cashOnDeliveryInput'
                                        value='cash on delivery'
                                        name='paymentMethod'
                                    />
                                Cash on Delivery</label>
                            </div>
                            {inputs.paymentMethod === 'e-money' && <div className='payment-numbers-wrapper'>
                                <div className='input-wrapper'>
                                    <label htmlFor="e-money-number" className={errors.usereMoneyNumber ? 'error' : undefined}>e-Money Number {errors.usereMoneyNumber && <span className='error-message'>{messages.field_required}</span>}</label>
                                    <input className={errors.usereMoneyNumber ? 'error' : undefined}
                                        onClick={(e) => {handleClick(e)}}
                                        type='number'
                                        placeholder='238521993'
                                        value={inputs.eMoneyNumber}
                                        onChange={handleChange}
                                        id='e-money-number'
                                        name='eMoneyNumber'
                                    />
                                </div>

                                <div className='input-wrapper'>
                                    <label htmlFor="e-money-pin" className={errors.usereMoneyNumber ? 'error' : undefined}>e-Money Pin {errors.usereMoneyNumber && <span className='error-message'>{messages.field_required}</span>}</label>
                                    <input className={errors.usereMoneyNumber ? 'error' : undefined}
                                        onClick={(e) => {handleClick(e)}}
                                        type='number'
                                        placeholder='238521993'
                                        value={inputs.eMoneyPin}
                                        onChange={handleChange}
                                        id='e-money-pin'
                                        name='eMoneyPin'
                                    />
                                </div>
        
                            </div>}
                            {inputs.paymentMethod === 'cash on delivery' && <div className='cash-on-delivery-wrapper'>
                                <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                                </div>}
                        </div>
                    </div>
                </div>
                <div className='summary-wrapper'>
                    <h2>Summary</h2>
                    {cartItems.map(item => <div key={item.id}>
                        <div className='summary-wrapper__item-wrapper'>
                            <div className='summary-wrapper__img-wrapper'> 
                                <img src={process.env.PUBLIC_URL + `/assets/cart/image-${item.slug}.jpg`} alt={item.name} />
                            </div>
                            <div className='summary-wrapper__txt-wrapper'>
                                <h4>{formatName(item.name)}</h4>
                                <p>{formatPrice(item.price)}</p>
                            </div>
                            <div className='summary-wrapper__qty-container'>
                                <span>x{item.qty}</span>
                            </div>
                        </div>
                    </div>)}
                    <div className='pricing-wrapper'>
                            <div className='pricing-wrapper__price-wrapper'>
                                <h3>total</h3>
                                <span>{formatPrice(itemsPrice)}</span>
                            </div>
                            
                            <div className='pricing-wrapper__price-wrapper'>
                                <h3>shipping</h3>
                                <span>{formatPrice(shippingPrice)}</span>
                            </div>

                            <div className='pricing-wrapper__price-wrapper'>
                                <h3>vat(included)</h3>
                                <span>{formatPrice(taxPrice.toFixed(0))}</span>
                            </div>

                            <div className='pricing-wrapper__price-wrapper pricing-wrapper__grand-total-wrapper'>
                                <h3>grand total</h3>
                                <span className='pricing-wrapper__grand-total-price'>{formatPrice(grandTotalPrice)}</span>
                            </div>
                        </div>
                        <button className='submit-btn link-btn-orange' type='submit'>CONTINUE & PAY</button>
                </div>
            </form>
            
        </div>
        <CheckoutModal open={checkoutModalActive}

        >
           <CheckoutMessage/>
        </CheckoutModal>
        
        <Footer/>
        </div>
     );
}
 
export default Checkout;