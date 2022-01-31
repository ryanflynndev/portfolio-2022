import { ReactComponent as RustLogo } from '../svgs/rustLogo.svg';
import { ReactComponent as WebAssemblyLogo } from '../svgs/webAssemblyLogo.svg';
import ElectronLogo from '../svgs/electronLogo.svg';
import EthereumLogo from '../svgs/ethereumLogo.svg';

function CurrentlyLearning() {
    return (
        <div className="grid items-center grid-cols-4 place-items-center pt-48">
            <div className="flex items-center space-x-1">
                <RustLogo/>
            </div>
            <div className="flex items-center space-x-1">
                <WebAssemblyLogo/>
            </div>
            <div className="flex items-center space-x-1">
                <img src={ElectronLogo}/>
            </div>
            <div className="flex items-center space-x-1">
                <img src={EthereumLogo}/>
            </div>
        </div>
    );
}

export default CurrentlyLearning;