
// import icons
import { BsArrowRightCircle, BsArrowDownCircle } from 'react-icons/bs';

export default function ContactInfoSection({user, setUser, showFields, handleInput, section, toggleArrowDown}) {

    const handleAddress = (e) => {
        console.log(e.target)
        if (e.target.name === 'street') {
            let newAddress = {...user.address, street: e.target.value};
            setUser(user => ({
                ...user, 
                address: newAddress
            }))
        }
        else if (e.target.name === 'streetNumber') {
            let newAddress = {...user.address, streetNumber: e.target.value};
            setUser(user => ({
                ...user, 
                address: newAddress
            }))
        }
        else if (e.target.name === 'postalCode') {
            let newAddress = {...user.address, postalCode: e.target.value};
            setUser(user => ({
                ...user, 
                address: newAddress
            }))
        }
        else if (e.target.name === 'city') {
            let newAddress = {...user.address, city: e.target.value};
            setUser(user => ({
                ...user, 
                address: newAddress
            }))
        }
        else if (e.target.name === 'country') {
            let newAddress = {...user.address, country: e.target.value};
            setUser(user => ({
                ...user, 
                address: newAddress
            }))
        }

    }

  return (
    <>
        <form>
            <div className="contact-info section">
                <div className="section-title" onClick={() => showFields('contact-info')} >
                    { toggleArrowDown === 'contact-info' ? <BsArrowDownCircle className="icon" /> : <BsArrowRightCircle className="icon"/>}
                    <h3>Contact Information</h3>
                </div>
                
                <div ref={section} className="fields">

                    <label>Email Address
                        <input 
                            type="email"
                            placeholder="e.g. example@email.com" 
                            value={user.email} 
                            onChange={handleInput} 
                            name="email" 
                            className={user.email ? 'filled' : ''}
                        />
                    </label>
                    <label>Phone Number
                        <input 
                            type="text"
                            placeholder="e.g. +49178654436" 
                            value={user.phone} 
                            onChange={handleInput} 
                            name="phone" 
                            className={user.phone ? 'filled' : ''}
                            />
                    </label>
                    <label>Street
                        <input 
                            type="text"
                            placeholder="e.g. Main Street" 
                            value={user.address.street} 
                            onChange={handleAddress} 
                            name="street" 
                            className={user.address.street ? 'filled' : ''}
                            />
                    </label>
                    <label>Street Number
                        <input 
                            type="text"
                            placeholder="e.g. 22" 
                            value={user.address.streetNumber} 
                            onChange={handleAddress} 
                            name="streetNumber" 
                            className={user.address.streetNumber ? 'filled' : ''}
                            />
                    </label>
                    <label>Postal Code
                        <input 
                            type="text"
                            placeholder="e.g. 12345" 
                            value={user.address.postalCode} 
                            onChange={handleAddress} 
                            name="postalCode" 
                            className={user.address.postalCode ? 'filled' : ''}
                            />
                    </label>
                    <label>City
                        <input 
                            type="text"
                            placeholder="e.g. Berlin" 
                            value={user.address.city} 
                            onChange={handleAddress} 
                            name="city" 
                            className={user.address.city ? 'filled' : ''}
                            />
                    </label>
                    <label>Country
                        <input 
                            type="text"
                            placeholder="e.g. Germany" 
                            value={user.address.country} 
                            onChange={handleAddress} 
                            name="country"
                            className={user.address.country ? 'filled' : ''}
                            />
                    </label>
                </div>
            </div>
        </form>

    </>                

  )
}
