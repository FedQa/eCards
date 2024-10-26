import google from '../../assets/googleButton.svg'
import appStore from '../../assets/appStoreButton.svg'
import blurGoogle from '../../assets/blurGoogle.svg'
import blurAppStore from '../../assets/blurAppStore.svg'
import './DownloadButton.css'


function getButtonImage(type, isDefault) {
    const images = {
        google: isDefault ? google : blurGoogle,
        appStore: isDefault ? appStore : blurAppStore,
    }
    return images[type];
}

function DownloadButton({type, isDefault}) {
    return(
        <button className="button">
            <img src={getButtonImage(type, isDefault)} alt={`${type} download button`}/>
        </button>
    )
}


export default DownloadButton;