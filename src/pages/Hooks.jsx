import Clicker from '../components/Clicker';
import PreselectedInput from '../components/PreselectedInput';
import RenderCounter from '../components/RerenderCounter';
import MainLayout from '../layouts/MainLayout';

function Hooks() {
  return (
    <MainLayout>
      <>
        <div>
          <h1>useState hook:</h1>
          <p>
            Its like variable. State remains different in different components
            if we reuse that component in different places.
            <br />
            Also when state changes, component rerenders, so UI in browser will
            be updated always accordingly when state changes.
          </p>
          <Clicker />
          <Clicker />
        </div>
        <div>
          <h1>useEffect hook:</h1>
          <p>useEffect hook runs on initial component render.</p>
          <p>
            useEffect hook runs when some state in component changes and
            useEffect dependency array has that state provided.
          </p>
          <p>
            useEffect hooks runs only once if dependency array is left as empty
            array.
          </p>
          <p>
            Worth to mention that if you return function in useEffect hook you
            can do some cleanup for example remove event listeners to prevent
            stacking them up.
          </p>
          <RenderCounter />
        </div>
        <div>
          <h1>useRef hook:</h1>
          <p>useRef used to access DOM elements.</p>
          <p>
            useRef shouldnt be used to change something on UI or get for example
            input value like in VanillaJS
          </p>
          <p>
            useRef as alternative for state, but when it changes it doesnt make
            component to rerender.
          </p>
          <PreselectedInput />
        </div>
      </>
    </MainLayout>
  );
}

export default Hooks;
