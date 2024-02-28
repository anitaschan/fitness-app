import { InputField } from "../../components"
import ProfileIcon from '../../assets/user.png'
import './profile.css'
import { Button } from "../../components/button/Button"

export const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-header">
                <p>Profile</p>
                <img className="profile-header-icon" src={ProfileIcon} />
            </div>
            <InputField labelName="d.o.b" />
            <InputField labelName="weight" />
            <InputField labelName="height" />
            <InputField labelName="gender" />
            <div className='button-container'>
                <Button label='SAVE' />
            </div>
        </div>
    )
}