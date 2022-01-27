import { ReactComponent as JavaScriptLogo } from '../svgs/javaScriptLogo.svg';
import { ReactComponent as TypeScriptLogo } from '../svgs/typeScriptLogo.svg';
import { ReactComponent as NodeLogo } from '../svgs/nodeLogo.svg';

function Languages (props) {
    return (
        <div>
            <div className="text-center text-2xl text-white">Technologies I Frequently Use</div>
            <div className="grid items-center grid-cols-4 place-items-center">
                <div className="flex items-center space-x-1">
                    <JavaScriptLogo/>
                </div>
                <div className="flex items-center space-x-1">
                    <TypeScriptLogo/>
                </div>
                <div className="flex items-center space-x-1">
                    <NodeLogo/>
                </div>
                <div className="flex items-center space-x-1">
                    Hello
                </div>
            </div>
        </div>
    );
}

export default Languages;