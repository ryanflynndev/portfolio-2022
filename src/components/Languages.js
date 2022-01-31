import { ReactComponent as JavaScriptLogo } from '../svgs/javaScriptLogo.svg';
import { ReactComponent as TypeScriptLogo } from '../svgs/typeScriptLogo.svg';
import { ReactComponent as NodeLogo } from '../svgs/nodeLogo.svg';
import { ReactComponent as ReactLogo } from '../svgs/reactLogo.svg';
import { ReactComponent as RailsLogo } from '../svgs/railsLogo.svg';
import { ReactComponent as GraphQLLogo } from '../svgs/graphqlLogo.svg';
import { ReactComponent as PythonLogo } from '../svgs/pythonLogo.svg';
import { ReactComponent as PostgresqlLogo } from '../svgs/postgresqlLogo.svg';


function Languages (props) {
    return (
        <div>
            <div className="grid items-center grid-cols-4 place-items-center py-16">
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
                    <ReactLogo/>
                </div>
                <div className="flex items-center space-x-1">
                    <RailsLogo/>
                </div>
                <div className="flex items-center space-x-1">
                    <GraphQLLogo/>
                </div>
                <div className="flex items-center space-x-1">
                    <PythonLogo/>
                </div>
                <div className="flex items-center space-x-1">
                    <PostgresqlLogo/>
                </div>
            </div>
        </div>
    );
}

export default Languages;