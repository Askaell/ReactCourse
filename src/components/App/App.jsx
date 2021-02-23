import {Messages} from '../Messages';

const App = () => {
    return (
        <div id='test-id'>
            <h2>Hello from React</h2>
            <Messages messages={['first message', 'second message']} />
        </div>
    );
};

export { App };
