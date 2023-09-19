import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';
import './App.css';
import Text from './text';
import Text2 from './text2';
import Event from './event';
import EventClass from './EventClass';

function App() {
    return (
        <>
            {/*<Text></Text>
        <Text2></Text2>
        <ClassComponent name="lyle" age={20}></ClassComponent>
        <ClassComponent />
        <FunctionComponent myClass={'kdt9'}>코딩</FunctionComponent>
    <FunctionComponent />
        */}
            <EventClass message={'메세지'} />
        </>
    );
}

export default App;
