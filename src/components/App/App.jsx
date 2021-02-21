import {Messages} from '../Messages';
import {PushBtn} from '../PushBtn';

const App = () => {
    return (
        <div id='test-id'>
            <h2>Hello from React</h2>
            <PushBtn />
            <Messages messages={['first message', 'second message']} />
        </div>
    );
};

export { App };
