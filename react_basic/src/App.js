import Jsx from './01Jsx/Jsx';
import Func from './02Func/Func';
// import Book from "./Book";
import RefSampleClass1 from './09Ref/RefSampleClass1';
import RefSampleClass2 from './09Ref/RefSampleClass2';
import RefSampleFunc1 from './09Ref/RefSampleFunc1';
import RefSampleFunc2 from './09Ref/RefSampleFunc2';
import SignUpForm from './10Hook/SignUpForm';
import UseCallback from './10Hook/UseCallback';
import UseReducer from './10Hook/UseReducer';
import SassComponent from './11Style/SassComponent';
import Style from './11Style/Style';
import StyledComponent from './11Style/StyledComponent';
import Header from './12Router/Header';
// import Router from './12Router/Router';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <>
            {/* ver */}
            <Header />
            <Outlet />
        </>
    );
}

export default App;
